import { Star } from "lucide-react";

const testimonials = [
  {
    text: "Material excelente! Passei na primeira tentativa. O conteúdo é muito bem organizado e direto ao ponto. Super recomendo!",
    name: "Mariana Souza",
    role: "Aprovada - Professora de Português",
  },
  {
    text: "Estudei apenas com essa apostila e fui aprovada. A didática é incrível e o preço é muito acessível. Valeu muito a pena!",
    name: "Amanda Costa",
    role: "Aprovada - Técnico Administrativo",
  },
  {
    text: "Depois de 2 tentativas com outros materiais, finalmente passei usando essa apostila. O diferencial está na qualidade do conteúdo.",
    name: "Rafael Oliveira",
    role: "Aprovado - Professor de Matemática",
  },
  {
    text: "Melhor investimento que fiz. O material é completo, atualizado e fácil de entender. Hoje sou professor na rede estadual da Bahia!",
    name: "Lucas Santos",
    role: "Aprovado - Professor de História",
  },
];

const TestimonialsSection = () => (
  <section className="section-padding bg-card/50">
    <div className="max-w-6xl mx-auto">
      <p className="text-primary font-semibold text-center mb-2">4.9/5 - Milhares de aprovados</p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
        O que nossos alunos dizem
      </h2>
      <p className="text-muted-foreground text-center mb-12">
        Histórias reais de quem conquistou a aprovação com nosso material
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground/90 italic mb-4">"{t.text}"</p>
            <div>
              <p className="font-semibold">{t.name}</p>
              <p className="text-sm text-primary">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
