import {
  BookOpen,
  GraduationCap,
  RefreshCw,
  Smartphone,
  Download,
  Infinity,
  Printer,
  ShieldCheck,
  Video,
  Layers,
} from "lucide-react";

const features = [
  { icon: BookOpen, title: "Conteúdo Completo", desc: "Todo material necessário organizado por áreas do edital" },
  { icon: Layers, title: "Todas as Áreas", desc: "Aborda todas as áreas cobradas no concurso" },
  { icon: GraduationCap, title: "Professores Especialistas", desc: "Elaborado por experts em concursos da IBFC" },
  { icon: RefreshCw, title: "Sempre Atualizado", desc: "Atualizado conforme o edital SEC BA 2026" },
  { icon: Smartphone, title: "Acesso Mobile", desc: "Estude no celular, tablet ou computador" },
  { icon: Download, title: "Download Imediato", desc: "Receba no seu e-mail em poucos minutos" },
  { icon: Infinity, title: "Acesso Ilimitado", desc: "Estude quantas vezes quiser, para sempre" },
  { icon: Video, title: "Videoaulas Exclusivas", desc: "Aulas em vídeo para reforçar o aprendizado" },
  { icon: Printer, title: "Pode Imprimir", desc: "Opção de estudar no papel se preferir" },
  { icon: ShieldCheck, title: "Garantia de 7 Dias", desc: "100% satisfação ou seu dinheiro de volta" },
];

const FeaturesSection = () => (
  <section className="section-padding">
    <div className="max-w-6xl mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
        Por que escolher nossa apostila?
      </h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        Material desenvolvido especificamente para o concurso SEC BA, com foco total na sua aprovação
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((f, i) => (
          <div
            key={i}
            className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 group"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
              <f.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-display font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-sm text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesSection;
