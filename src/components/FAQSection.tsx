import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Como recebo o material?",
    a: "Após a confirmação do pagamento, você recebe o acesso por e-mail em poucos minutos. O material fica disponível para download imediato em formato PDF.",
  },
  {
    q: "Posso imprimir as apostilas?",
    a: "Sim! Você pode imprimir todo o material quantas vezes quiser para estudar no papel.",
  },
  {
    q: "As apostilas são atualizadas para o edital 2026?",
    a: "Sim, todo o conteúdo foi atualizado de acordo com o último edital publicado pela SEC BA em janeiro de 2026, com banca IBFC.",
  },
  {
    q: "Qual é a garantia oferecida?",
    a: "Oferecemos garantia incondicional de 7 dias. Se por qualquer motivo você não ficar satisfeito, devolvemos 100% do seu dinheiro.",
  },
  {
    q: "O material é adequado para iniciantes?",
    a: "Sim! O material foi desenvolvido para atender tanto iniciantes quanto candidatos experientes. O conteúdo é didático e progressivo.",
  },
  {
    q: "Quando será a prova do concurso SEC BA?",
    a: "A data da prova está prevista para 29/03/2026, conforme o edital publicado. As inscrições vão até 23/02/2026.",
  },
];

const FAQSection = () => (
  <section className="section-padding bg-card/50">
    <div className="max-w-3xl mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
        Perguntas Frequentes
      </h2>
      <p className="text-muted-foreground text-center mb-12">
        Tire suas dúvidas sobre nossas apostilas
      </p>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((faq, i) => (
          <AccordionItem
            key={i}
            value={`faq-${i}`}
            className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
          >
            <AccordionTrigger className="font-display font-semibold text-left hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSection;
