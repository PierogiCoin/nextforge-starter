"use client";

import { useState } from "react";
import { Navbar } from "@/components/landing/Navbar";

export const BlogNavbarWrapper = ({ t }: { t: any }) => {
    const [lang, setLang] = useState("pl");
    // We overwrite 't' here if we wanted true dynamic translation switching on client,
    // but the blog content is static. For Navbar UI, it works.
    return <Navbar t={t} lang={lang} setLang={setLang} />;
};
