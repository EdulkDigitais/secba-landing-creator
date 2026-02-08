import { useState, useEffect } from "react";
import heroImage from "@/assets/hero-education.jpg";
import { Rocket } from "lucide-react";

const HeroSection = () => {
  const [countdown, setCountdown] = useState({ hours: 2, minutes: 30, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const pad = (n: number) => n.toString().padStart(2, "0");

  const scrollToPlans = () => {
    document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0" style={{ background: "var(--hero-gradient)" }} />
      <div className="absolute inset-0 bg-background/60" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 py-20">
        <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-6 py-2 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          <span className="text-primary font-semibold tracking-wide uppercase text-sm">
            Banca IBFC Confirmada
          </span>
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
        </div>

        <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          Conquiste sua vaga na{" "}
          <span className="text-gradient-primary">SEC BA</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Material completo e atualizado para o concurso da{" "}
          <strong className="text-foreground">Secretaria da Educação da Bahia</strong>.
          Salários de até <span className="text-accent font-bold">R$ 7.530,75</span>
        </p>

        <div className="flex flex-wrap justify-center gap-8 mb-10 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">2.777</div>
            <div className="text-sm text-muted-foreground">Vagas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-foreground">4.9/5</div>
            <div className="text-sm text-muted-foreground">Avaliação</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-accent">2026</div>
            <div className="text-sm text-muted-foreground">Atualizado</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <button onClick={scrollToPlans} className="btn-cta flex items-center justify-center gap-2 animate-pulse-glow">
            <Rocket className="w-5 h-5" />
            QUERO MINHA APOSTILA
          </button>
          <button onClick={scrollToPlans} className="btn-outline-hero">
            Ver Planos
          </button>
        </div>

        {/* Countdown */}
        <div className="bg-glass rounded-2xl p-6 max-w-md mx-auto animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="text-xs uppercase tracking-widest text-accent font-semibold mb-3">
            Oferta Limitada
          </div>
          <div className="flex justify-center gap-4">
            {[
              { value: pad(countdown.hours), label: "Horas" },
              { value: pad(countdown.minutes), label: "Minutos" },
              { value: pad(countdown.seconds), label: "Segundos" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold font-display text-foreground">{item.value}</div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </div>
                {i < 2 && <span className="text-2xl text-muted-foreground font-bold">:</span>}
              </div>
            ))}
          </div>
          <p className="text-xs text-muted-foreground mt-3">Preço promocional expira em breve!</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
