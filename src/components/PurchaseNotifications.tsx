import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";

const names = [
  "Maria S.", "João P.", "Ana C.", "Pedro M.", "Carla R.", 
  "Lucas F.", "Fernanda A.", "Bruno L.", "Juliana O.", "Ricardo T.",
  "Patrícia B.", "Marcos V.", "Camila D.", "André N.", "Beatriz G.",
  "Roberto H.", "Larissa K.", "Felipe W.", "Amanda Q.", "Diego Z.",
  "Gabriela E.", "Thiago I.", "Natália U.", "Vinícius Y.", "Raquel X.",
];

const cities = [
  "Salvador", "Feira de Santana", "Vitória da Conquista", "Camaçari", 
  "Itabuna", "Juazeiro", "Lauro de Freitas", "Ilhéus", "Jequié", 
  "Teixeira de Freitas", "Barreiras", "Alagoinhas", "Porto Seguro",
  "Simões Filho", "Paulo Afonso", "Eunápolis", "Santo Antônio de Jesus",
];

const products = [
  "Combo Completo",
  "Apostila Completa",
];

const getRandomItem = <T,>(arr: T[]): T => arr[Math.floor(Math.random() * arr.length)];
const getRandomMinutes = (): number => Math.floor(Math.random() * 15) + 1;

const PurchaseNotifications = () => {
  const [notification, setNotification] = useState<{
    name: string;
    city: string;
    product: string;
    minutes: number;
  } | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const showNotification = () => {
      setNotification({
        name: getRandomItem(names),
        city: getRandomItem(cities),
        product: getRandomItem(products),
        minutes: getRandomMinutes(),
      });
      setIsVisible(true);

      setTimeout(() => {
        setIsVisible(false);
      }, 4000);
    };

    // Show first notification after 5 seconds
    const initialTimeout = setTimeout(showNotification, 5000);

    // Then show every 8-15 seconds
    const interval = setInterval(() => {
      showNotification();
    }, Math.random() * 7000 + 8000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  if (!notification) return null;

  return (
    <div
      className={`fixed bottom-4 left-4 z-50 max-w-sm bg-card border border-border rounded-xl p-4 shadow-2xl transition-all duration-500 ${
        isVisible 
          ? "translate-x-0 opacity-100" 
          : "-translate-x-full opacity-0"
      }`}
    >
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
          <CheckCircle className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-foreground">
            {notification.name} de {notification.city}
          </p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Comprou <span className="text-primary font-medium">{notification.product}</span>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            há {notification.minutes} {notification.minutes === 1 ? "minuto" : "minutos"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PurchaseNotifications;
