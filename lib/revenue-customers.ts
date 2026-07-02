import { promises as fs } from "fs";
import path from "path";

const CUSTOMERS_FILE = path.resolve(process.cwd(), "data", "paid-customers.json");

async function readCustomers(): Promise<string[]> {
    try {
        const raw = await fs.readFile(CUSTOMERS_FILE, "utf8");
        const parsed = JSON.parse(raw);
        return Array.isArray(parsed) ? parsed.filter((item): item is string => typeof item === "string") : [];
    } catch (error) {
        const nodeError = error as NodeJS.ErrnoException;
        if (nodeError.code === "ENOENT") return [];
        throw error;
    }
}

async function writeCustomers(emails: string[]): Promise<void> {
    await fs.mkdir(path.dirname(CUSTOMERS_FILE), { recursive: true });
    await fs.writeFile(CUSTOMERS_FILE, JSON.stringify(Array.from(new Set(emails)).sort(), null, 2), "utf8");
}

function normalizeEmail(email: string): string {
    return email.trim().toLowerCase();
}

export async function isPaidCustomer(email: string): Promise<boolean> {
    const customers = await readCustomers();
    const normalized = normalizeEmail(email);
    return customers.includes(normalized);
}

export async function addPaidCustomer(email: string): Promise<void> {
    const normalized = normalizeEmail(email);
    const customers = await readCustomers();
    if (customers.includes(normalized)) return;
    customers.push(normalized);
    await writeCustomers(customers);
}
