import { useEffect, useRef } from "react";
import preview1 from "@/assets/material-preview-1.png";
import preview2 from "@/assets/material-preview-2.png";
import preview3 from "@/assets/material-preview-3.png";
import preview4 from "@/assets/material-preview-4.png";
import preview5 from "@/assets/material-preview-5.png";

const previews = [
  { src: preview1, alt: "Pronomes - Língua Portuguesa" },
  { src: preview2, alt: "Cronograma de Estudos" },
  { src: preview3, alt: "Leitura e Interpretação de Textos" },
  { src: preview4, alt: "Conjunções e Dicas" },
  { src: preview5, alt: "Pronomes Pessoais" },
];

// Duplicate the images for seamless infinite scroll
const duplicatedPreviews = [...previews, ...previews, ...previews];

const MaterialPreview = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed;
      
      // Reset position when we've scrolled through one set of images
      const singleSetWidth = scrollContainer.scrollWidth / 3;
      if (scrollPosition >= singleSetWidth) {
        scrollPosition = 0;
      }
      
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(animate);
    };

    // Start animation after a short delay
    const timeout = setTimeout(() => {
      animationId = requestAnimationFrame(animate);
    }, 1000);

    // Pause on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section className="section-padding bg-card/50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="inline-block bg-primary/10 text-primary font-semibold text-sm px-4 py-1.5 rounded-full mb-4 mx-auto block text-center">
          MATERIAL COMPLETO PÓS EDITAL
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          Veja algumas páginas do material que você vai receber:
        </h2>
      </div>
      
      {/* Auto-scrolling carousel */}
      <div 
        ref={scrollRef}
        className="flex gap-6 mt-12 overflow-x-hidden cursor-grab"
        style={{ scrollBehavior: "auto" }}
      >
        {duplicatedPreviews.map((p, i) => (
          <div
            key={i}
            className="flex-shrink-0 w-64 md:w-72 lg:w-80 rounded-xl overflow-hidden border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-primary/10"
          >
            <img 
              src={p.src} 
              alt={p.alt} 
              className="w-full h-auto" 
              loading="lazy" 
              draggable={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default MaterialPreview;
