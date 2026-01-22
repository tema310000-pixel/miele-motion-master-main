import { motion } from "framer-motion";
import { MapPin, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const areas = [
  "Центр города",
  "Северная часть",
  "Южная часть",
  "Западный район",
  "Восточный район",
  "Пригородные зоны",
  "Метрополитен",
  "Округа",
];

export function ServiceAreas() {
  return (
    <section className="section-padding bg-background">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square bg-secondary rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-miele-red mx-auto mb-4" />
                <p className="text-lg font-medium text-foreground">Карта зоны обслуживания</p>
                <p className="text-sm text-muted-foreground mt-2">Обслуживаем всю метрополию</p>
              </div>
            </div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-32 h-32 border border-miele-red/20 rounded-full animate-pulse" />
              <div className="absolute w-48 h-48 border border-miele-red/15 rounded-full" />
              <div className="absolute w-64 h-64 border border-miele-red/10 rounded-full" />
              <div className="absolute w-80 h-80 border border-miele-red/5 rounded-full" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-miele-red uppercase tracking-wider">
              Зоны обслуживания
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground">
              Мы приезжаем к вам
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Наши мобильные сервисные бригады охватывают всю метрополию. Где бы вы ни находились, премиальный ремонт MIELE — всего один звонок.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-4">
              {areas.map((area, index) => (
                <motion.div
                  key={area}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="h-4 w-4 text-miele-red flex-shrink-0" />
                  <span className="text-foreground min-w-0">{area}</span>
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button variant="premium" size="lg" asChild>
                <Link to="/contact">Проверить вашу зону</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Запросить расчёт</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
