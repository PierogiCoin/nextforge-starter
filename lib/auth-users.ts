import crypto from "crypto";
import { promises as fs } from "fs";
import path from "path";

type StoredUser = {
    name: string;
    email: string;
    passwordHash: string;
    createdAt: string;
};

const USERS_FILE_PATH = path.resolve(process.cwd(), "data", "auth-users.json");

function normalizeEmail(email: string): string {
    return email.trim().toLowerCase();
}

async function readUsers(): Promise<StoredUser[]> {
    try {
        const raw = await fs.readFile(USERS_FILE_PATH, "utf8");
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? (parsed as StoredUser[]) : [];
    } catch (error) {
        const nodeError = error as NodeJS.ErrnoException;
        if (nodeError.code === "ENOENT") {
            return [];
        }
        throw error;
    }
}

async function writeUsers(users: StoredUser[]): Promise<void> {
    const dir = path.dirname(USERS_FILE_PATH);
    await fs.mkdir(dir, { recursive: true });
    await fs.writeFile(USERS_FILE_PATH, JSON.stringify(users, null, 2), "utf8");
}

function hashPassword(password: string): string {
    const salt = crypto.randomBytes(16).toString("hex");
    const hash = crypto.scryptSync(password, salt, 64).toString("hex");
    return `scrypt:${salt}:${hash}`;
}

function verifyPassword(password: string, passwordHash: string): boolean {
    const [algorithm, salt, hash] = passwordHash.split(":");
    if (algorithm !== "scrypt" || !salt || !hash) {
        return false;
    }
    const calculated = crypto.scryptSync(password, salt, 64).toString("hex");
    const expected = Buffer.from(hash, "hex");
    const actual = Buffer.from(calculated, "hex");
    return expected.length === actual.length && crypto.timingSafeEqual(expected, actual);
}

export function isValidEmail(email: string): boolean {
    const normalized = normalizeEmail(email);
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized) && normalized.length <= 254;
}

export async function findUserByEmail(email: string): Promise<StoredUser | null> {
    const users = await readUsers();
    const normalized = normalizeEmail(email);
    return users.find((user) => normalizeEmail(user.email) === normalized) || null;
}

export async function createUser(input: { name: string; email: string; password: string }): Promise<StoredUser> {
    const users = await readUsers();
    const email = normalizeEmail(input.email);

    if (users.some((user) => normalizeEmail(user.email) === email)) {
        throw new Error("USER_ALREADY_EXISTS");
    }

    const user: StoredUser = {
        name: input.name.trim(),
        email,
        passwordHash: hashPassword(input.password),
        createdAt: new Date().toISOString(),
    };
    users.push(user);
    await writeUsers(users);
    return user;
}

export async function validateCredentials(email: string, password: string): Promise<StoredUser | null> {
    const user = await findUserByEmail(email);
    if (!user) return null;
    return verifyPassword(password, user.passwordHash) ? user : null;
}
