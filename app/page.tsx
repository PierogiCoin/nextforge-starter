import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 selection:bg-indigo-600">
      <div className="max-w-2xl text-center">
        <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
          NextForge Starter 🚀
        </span>
        <h1 className="text-4xl md:text-6xl font-black tracking-tight mt-6 mb-4">
          Twój projekt SaaS startuje tutaj.
        </h1>
        <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed">
          Zainstalowałeś darmową wersję NextForge Starter. Obejmuje ona konfigurację Next.js 15, Tailwind 4, system rejestracji/logowania i prosty dashboard.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/login"
            className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold transition-all"
          >
            Zaloguj się do Dashboardu
          </Link>
          <Link
            href="/register"
            className="px-6 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-bold transition-all border border-white/10"
          >
            Utwórz konto
          </Link>
        </div>
      </div>
    </main>
  );
}
