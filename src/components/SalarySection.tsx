import { Award, Heart, Building2, BookOpen, Baby, Clock, Shield, DollarSign } from "lucide-react";

const benefits = [
  { icon: DollarSign, text: "Remuneração Inicial" },
  { icon: Heart, text: "Plano de Saúde" },
  { icon: Award, text: "Estabilidade" },
  { icon: BookOpen, text: "Auxílio Capacitação" },
  { icon: Baby, text: "Auxílio Creche" },
  { icon: Building2, text: "Previdência" },
  { icon: Clock, text: "Férias Estendidas" },
  { icon: Shield, text: "Regime Estatutário" },
];

const SalarySection = () => (
  <section className="section-padding">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
        Salários e Benefícios
      </h2>
      <p className="text-muted-foreground text-center mb-12">
        Concurso com excelentes condições de trabalho e remuneração
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Salary Card */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <h3 className="font-display text-xl font-bold mb-1">Nível Médio</h3>
          <p className="text-sm text-muted-foreground mb-6">Técnico Administrativo</p>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-3 border-b border-border">
              <span className="text-muted-foreground">Salário base inicial</span>
              <span className="font-bold text-lg">R$ 3.017,34</span>
            </div>
            <div className="flex justify-between items-center py-3 border-b border-border">
              <span className="text-muted-foreground">Nível Superior</span>
              <span className="font-bold text-lg text-primary">R$ 7.530,75</span>
            </div>
            <div className="flex justify-between items-center py-3">
              <span className="text-muted-foreground">Total de vagas</span>
              <span className="font-bold text-lg text-accent">2.777</span>
            </div>
          </div>
        </div>

        {/* Benefits Card */}
        <div className="bg-card border border-border rounded-2xl p-8">
          <h3 className="font-display text-xl font-bold mb-1">Benefícios</h3>
          <p className="text-sm text-muted-foreground mb-6">Vantagens do cargo</p>
          <div className="grid grid-cols-2 gap-3">
            {benefits.map((b, i) => (
              <div key={i} className="flex items-center gap-3 py-2">
                <b.icon className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-10 bg-glass rounded-2xl p-8">
        <p className="text-muted-foreground mb-2">Remuneração pode chegar a</p>
        <p className="text-5xl font-bold font-display text-accent">R$ 7.530,75</p>
        <p className="text-muted-foreground mt-2">para cargos de nível superior</p>
      </div>
    </div>
  </section>
);

export default SalarySection;
