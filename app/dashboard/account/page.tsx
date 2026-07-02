"use client";

import { motion } from "framer-motion";
import { User, Mail, Lock, Save } from "lucide-react";
import { useState } from "react";

export default function AccountPage() {
  const [name, setName] = useState("Arkadiusz"); // TODO: from auth
  const [email, setEmail] = useState("user@example.com"); // TODO: from auth
  const [saved, setSaved] = useState(false);

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: API PATCH /api/user
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-10"
      >
        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2">
          Konto
        </h1>
        <p className="text-gray-500 text-sm">
          Dane profilu i bezpieczeństwo. Zmiana hasła przez link z emaila (reset password).
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSaveProfile}
        className="space-y-8"
      >
        <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
          <h3 className="text-sm font-black text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
            <User className="w-4 h-4" />
            Profil
          </h3>
          <div className="space-y-6">
            <div>
              <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">
                Imię / Nazwa
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500/50"
                placeholder="Jan Kowalski"
              />
            </div>
            <div>
              <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white/[0.03] border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white text-sm focus:outline-none focus:border-indigo-500/50"
                  placeholder="jan@example.com"
                />
              </div>
              <p className="text-gray-500 text-xs mt-1.5">
                Ten adres jest używany do logowania i powiadomień.
              </p>
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 text-white text-sm font-bold hover:bg-indigo-500 transition-colors"
          >
            <Save className="w-4 h-4" />
            {saved ? "Zapisano ✓" : "Zapisz zmiany"}
          </button>
        </div>

        <div className="p-8 rounded-3xl border border-white/10 bg-white/[0.02]">
          <h3 className="text-sm font-black text-gray-500 uppercase tracking-widest mb-6 flex items-center gap-2">
            <Lock className="w-4 h-4" />
            Hasło
          </h3>
          <p className="text-gray-500 text-sm mb-6">
            Aby zmienić hasło, użyj opcji „Zapomniałem hasła” na stronie logowania. Wyślemy link do resetu na Twój email.
          </p>
          <a
            href="/login"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-sm font-bold transition-colors border border-white/10"
          >
            Przejdź do logowania
          </a>
        </div>
      </motion.form>
    </div>
  );
}
