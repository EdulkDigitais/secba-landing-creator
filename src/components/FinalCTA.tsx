import { Rocket } from "lucide-react";

const FinalCTA = () => {
  const scrollToPlans = () => {
    document.getElementById("planos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Não deixe sua aprovação para depois
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          A preparação começa HOJE. Milhares de candidatos já estão estudando. Garanta sua vantagem competitiva agora!
        </p>
        <button onClick={scrollToPlans} className="btn-cta inline-flex items-center gap-2 animate-pulse-glow">
          <Rocket className="w-5 h-5" />
          GARANTIR MINHA APOSTILA
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;
