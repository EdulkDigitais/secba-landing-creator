import { Star, ThumbsUp } from "lucide-react";

const reviews = [
  {
    initials: "CE",
    name: "Carlos Eduardo M.",
    time: "2 semanas atrás",
    text: "Material excelente! Muito completo e atualizado. Estudei por 3 meses e fui aprovado. O conteúdo é direto ao ponto, sem enrolação. Recomendo demais!",
    useful: 24,
    color: "bg-blue-600",
  },
  {
    initials: "FO",
    name: "Fernanda Oliveira",
    time: "1 mês atrás",
    text: "Melhor apostila que já comprei! As videoaulas complementam perfeitamente o material escrito. Didática impecável e preço justo. Valeu cada centavo investido!",
    useful: 18,
    color: "bg-red-500",
  },
  {
    initials: "RS",
    name: "Rafael Santos",
    time: "3 semanas atrás",
    text: "Depois de reprovar 2 vezes com outros materiais, decidi investir nessa apostila e finalmente passei! O diferencial são as questões comentadas e o conteúdo atualizado conforme o edital.",
    useful: 31,
    color: "bg-green-600",
  },
  {
    initials: "AS",
    name: "Amanda Souza",
    time: "1 semana atrás",
    text: "Surpreendente a qualidade do material pelo preço cobrado. Muito bem estruturado, fácil de entender e com ótimos exercícios práticos. Estou confiante para a prova!",
    useful: 12,
    color: "bg-purple-600",
  },
  {
    initials: "TP",
    name: "Thiago Pereira",
    time: "2 meses atrás",
    text: "Comprei para mim e para minha esposa, ambos fomos aprovados! Material completo, atualizado e com uma didática excelente. Nota 10!",
    useful: 42,
    color: "bg-amber-600",
  },
];

const ratingBars = [
  { stars: 5, percent: 88 },
  { stars: 4, percent: 8 },
  { stars: 3, percent: 3 },
  { stars: 2, percent: 1 },
  { stars: 1, percent: 0 },
];

const GoogleReviewsSection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-10">
        Veja nossas avaliações no Google:
      </h2>

      {/* Google Rating Summary */}
      <div className="bg-card border border-border rounded-2xl p-6 md:p-8 mb-8">
        <div className="flex flex-col md:flex-row items-center gap-8">
          {/* Left: Google logo + score */}
          <div className="flex flex-col items-center gap-2">
            <svg viewBox="0 0 24 24" className="w-10 h-10" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <span className="text-sm font-medium text-muted-foreground">Google</span>
            <span className="text-5xl font-bold text-foreground">4.9</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">2.847 avaliações</span>
          </div>

          {/* Right: Rating bars */}
          <div className="flex-1 w-full space-y-2">
            {ratingBars.map((bar) => (
              <div key={bar.stars} className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground w-4 text-right">{bar.stars}</span>
                <div className="flex-1 h-3 bg-secondary rounded-full overflow-hidden">
                  <div
                    className="h-full bg-yellow-400 rounded-full transition-all"
                    style={{ width: `${bar.percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Individual Reviews */}
      <div className="space-y-4">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-start gap-4">
              <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center text-white font-semibold text-xs shrink-0`}>
                {r.initials}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <p className="font-semibold text-sm text-foreground">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.time}</p>
                </div>
                <div className="flex gap-0.5 mb-2">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-foreground/80 leading-relaxed mb-3">{r.text}</p>
                <button className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors">
                  <ThumbsUp className="w-3.5 h-3.5" />
                  Útil ({r.useful})
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GoogleReviewsSection;
