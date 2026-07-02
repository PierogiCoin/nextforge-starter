"use client";

import Link from "next/link";
import React from "react";
import { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    variant?: "primary" | "secondary" | "glow";
    className?: string;
    href?: string;
    glow?: boolean;
}

export const Button = ({
    children,
    variant = "primary",
    className = "",
    href,
    onClick,
    glow = false,
    ...props
}: ButtonProps) => {
    const base = "relative inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-black uppercase tracking-widest text-[11px] transition-all duration-500 active:scale-95 group overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed";
    const styles = {
        primary: "bg-white text-black hover:bg-gray-100",
        secondary: "bg-white/5 border border-white/10 text-white hover:bg-white/10",
        glow: "bg-indigo-600 text-white hover:bg-indigo-500 shadow-[0_10px_40px_rgba(79,70,229,0.4)]"
    };

    const content = (
        <>
            {glow && <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />}
            {children}
        </>
    );

    // If href is provided and it's not disabled, render as Link
    if (href && !props.disabled) {
        return (
            <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
                {content}
            </Link>
        );
    }

    // Otherwise render as button (for onClick, type="submit", disabled etc.)
    return (
        <button onClick={onClick} className={`${base} ${styles[variant]} ${className}`} {...props}>
            {content}
        </button>
    );
};
