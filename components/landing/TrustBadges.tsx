import React from "react";
import { ShieldCheck, Zap, RotateCcw, MessageCircle } from "lucide-react";

export const TrustBadges = ({ t }: { t?: any }) => {
  const features = [
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      label: t?.trust?.payment || "Bezpieczna płatność",
      sub: t?.trust?.paymentSub || "Szyfrowane SSL / Stripe"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      label: t?.trust?.access || "Natychmiastowy dostęp",
      sub: t?.trust?.accessSub || "Pobierasz od razu"
    },
    {
      icon: <RotateCcw className="w-6 h-6" />,
      label: t?.trust?.refund || "14 dni na zwrot",
      sub: t?.trust?.refundSub || "Gwarancja satysfakcji"
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      label: t?.trust?.support || "Wsparcie autora",
      sub: t?.trust?.supportSub || "Pomoc przez e-mail"
    }
  ];

  return (
    <section className="py-10 bg-base-200/50 border-y border-base-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {features.map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2">
              <div className="p-3 bg-base-100 rounded-full shadow-sm text-primary">
                {item.icon}
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-sm md:text-base">{item.label}</span>
                <span className="text-xs text-base-content/70">{item.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};