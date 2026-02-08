import { Check, Rocket } from "lucide-react";

const PricingSection = () => {
  return (
    <section id="planos" className="section-padding">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Escolha seu Plano de Estudos
        </h2>
        <p className="text-muted-foreground text-center mb-12">
          Apostilas completas e atualizadas para sua aprovação no concurso SEC BA
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Plan 1 */}
          <div className="bg-card border border-border rounded-2xl p-8 flex flex-col">
            <h3 className="font-display text-xl font-bold">Apostila Completa</h3>
            <p className="text-sm text-muted-foreground mb-6">Nível Médio/Superior</p>
            <div className="mb-6">
              <span className="text-sm text-muted-foreground line-through">R$ 69,90</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold font-display text-foreground">R$19</span>
              </div>
              <span className="text-sm text-muted-foreground">pagamento único</span>
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Apostila completa conforme edital",
                "Material atualizado 2026",
                "Acesso digital imediato",
                "Pode imprimir",
                "Garantia de 7 dias",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full btn-outline-hero text-base py-3">
              COMPRAR AGORA
            </button>
          </div>

          {/* Plan 2 - Featured */}
          <div className="relative bg-card border-2 border-primary rounded-2xl p-8 flex flex-col glow-primary">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
              Mais Vendido
            </div>
            <h3 className="font-display text-xl font-bold">Combo Completo</h3>
            <p className="text-sm text-muted-foreground mb-6">Apostila + Questões + Resumos</p>
            <div className="mb-2">
              <span className="text-sm text-muted-foreground line-through">R$ 119,90</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold font-display text-foreground">R$27</span>
              </div>
              <span className="text-sm text-muted-foreground">pagamento único</span>
            </div>
            <div className="bg-accent/10 text-accent text-sm font-semibold px-3 py-1 rounded-md inline-block mb-6 w-fit">
              ECONOMIZE R$ 95,00
            </div>
            <ul className="space-y-3 mb-8 flex-1">
              {[
                "Apostila completa conforme edital",
                "400 questões focadas IBFC",
                "Material de resumos comentados",
                "Material atualizado 2026",
                "Acesso digital imediato",
                "Pode imprimir",
                "Garantia de 7 dias",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full btn-cta flex items-center justify-center gap-2">
              <Rocket className="w-5 h-5" />
              COMPRAR AGORA
            </button>
          </div>
        </div>

        <div className="text-center mt-10 bg-glass rounded-xl p-6 max-w-md mx-auto">
          <ShieldIcon />
          <p className="font-semibold">Garantia de 7 dias</p>
          <p className="text-sm text-muted-foreground">100% do seu dinheiro de volta se não ficar satisfeito</p>
        </div>
      </div>
    </section>
  );
};

const ShieldIcon = () => (
  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  </div>
);

export default PricingSection;
