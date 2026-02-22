import { Star } from "lucide-react";

const reviews = [
  {
    name: "Carla Mendes",
    initials: "CM",
    time: "2 semanas atrás",
    text: "Material muito completo e organizado! Consegui minha aprovação estudando apenas com essa apostila. O conteúdo é atualizado e a didática é excelente. Recomendo demais!",
    color: "bg-blue-600",
  },
  {
    name: "Felipe Araújo",
    initials: "FA",
    time: "1 mês atrás",
    text: "Melhor material que já comprei para concurso. As questões comentadas fizeram toda a diferença na minha preparação. Aprovado de primeira!",
    color: "bg-red-500",
  },
  {
    name: "Juliana Lima",
    initials: "JL",
    time: "3 semanas atrás",
    text: "Excelente custo-benefício! O combo com videoaulas e mapas mentais é sensacional. Estudei por 3 meses e passei. Super indico!",
    color: "bg-green-600",
  },
  {
    name: "Marcos Vinícius",
    initials: "MV",
    time: "1 semana atrás",
    text: "Apostila muito bem elaborada, com linguagem clara e objetiva. Os simulados me ajudaram muito a ter confiança na hora da prova. Nota 10!",
    color: "bg-amber-600",
  },
  {
    name: "Patrícia Rocha",
    initials: "PR",
    time: "2 meses atrás",
    text: "Já tinha tentado outros materiais sem sucesso. Com essa apostila, finalmente consegui entender os conteúdos e fui aprovada. Gratidão eterna!",
    color: "bg-purple-600",
  },
];

const GoogleReviewsSection = () => (
  <section className="section-padding bg-background">
    <div className="max-w-5xl mx-auto">
      {/* Google Header */}
      <div className="flex flex-col items-center mb-10">
        <div className="flex items-center gap-2 mb-3">
          <svg viewBox="0 0 24 24" className="w-8 h-8" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span className="text-xl font-bold text-foreground">Avaliações do Google</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-4xl font-bold text-foreground">4.9</span>
          <div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-muted-foreground">Baseado em 1.247 avaliações</p>
          </div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-xl p-5 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-full ${r.color} flex items-center justify-center text-white font-semibold text-sm shrink-0`}>
                {r.initials}
              </div>
              <div>
                <p className="font-semibold text-sm text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.time}</p>
              </div>
            </div>
            <div className="flex gap-0.5 mb-2">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <p className="text-sm text-foreground/80 leading-relaxed">{r.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GoogleReviewsSection;
