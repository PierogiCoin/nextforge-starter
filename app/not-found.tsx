import type { Metadata } from "next";
import NotFoundClient from "./not-found-client";

export const metadata: Metadata = {
    title: "404 – Strona nie znaleziona | NextForge",
    description: "Ta strona nie istnieje lub została przeniesiona.",
    robots: { index: false, follow: false },
};

export default function NotFound() {
    return <NotFoundClient />;
}
