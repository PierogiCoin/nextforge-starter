"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Key,
  Download,
  FileText,
  User,
  LogOut,
  ChevronRight,
  Activity,
} from "lucide-react";
import { useRouter } from "next/navigation";

const nav = [
  { href: "/dashboard", label: "Przegląd", icon: LayoutDashboard },
  { href: "/dashboard/licenses", label: "Moje licencje", icon: Key },
  { href: "/dashboard/downloads", label: "Pobrania", icon: Download },
  { href: "/dashboard/billing", label: "Faktury", icon: FileText },
  { href: "/dashboard/kpi", label: "KPI dzienne", icon: Activity },
  { href: "/dashboard/account", label: "Konto", icon: User },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  return (
    <main className="min-h-screen bg-[#030307] flex text-white font-medium overflow-hidden">
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808006_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />

      <aside className="w-64 md:w-72 border-r border-white/5 bg-black/40 backdrop-blur-xl flex flex-col relative z-20 shrink-0">
        <div className="p-6 border-b border-white/5">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center font-black text-white text-sm border border-white/20 group-hover:rotate-6 transition-transform">
              NF
            </div>
            <span className="text-lg font-black tracking-tighter">NextForge</span>
          </Link>
          <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-2 ml-1">
            Panel użytkownika
          </p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {nav.map((item) => {
            const isActive = pathname === item.href;
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center justify-between gap-3 px-4 py-3 rounded-xl transition-all text-sm font-bold ${
                  isActive
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-600/20"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="w-5 h-5 shrink-0" />
                  {item.label}
                </div>
                {isActive && <ChevronRight className="w-4 h-4 shrink-0" />}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/5">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all text-sm font-bold"
          >
            <LogOut className="w-5 h-5" />
            Wyloguj się
          </button>
        </div>
      </aside>

      <section className="flex-1 flex flex-col relative z-10 min-w-0">
        <div className="flex-1 p-6 md:p-10 overflow-y-auto">
          {children}
        </div>
      </section>
    </main>
  );
}
