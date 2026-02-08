import preview1 from "@/assets/material-preview-1.png";
import preview2 from "@/assets/material-preview-2.png";
import preview3 from "@/assets/material-preview-3.png";
import preview4 from "@/assets/material-preview-4.png";

const previews = [
  { src: preview1, alt: "Leitura e Interpretação de Textos" },
  { src: preview2, alt: "Pronomes - Língua Portuguesa" },
  { src: preview3, alt: "Conjunções e Dicas" },
  { src: preview4, alt: "Cronograma de Estudos" },
];

const MaterialPreview = () => (
  <section className="section-padding bg-card/50">
    <div className="max-w-6xl mx-auto">
      <div className="inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-4 mx-auto block text-center">
        MATERIAL COMPLETO PÓS EDITAL
      </div>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
        Veja algumas páginas do material que você vai receber:
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {previews.map((p, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10"
          >
            <img src={p.src} alt={p.alt} className="w-full h-auto" loading="lazy" />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default MaterialPreview;
