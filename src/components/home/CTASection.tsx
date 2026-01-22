import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground">
            Готовы восстановить вашу
            <br />
            <span className="text-miele-red">технику MIELE?</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Свяжитесь с нами сегодня для бесплатной диагностики и прозрачного расчёта.
            Доступен ремонт в день обращения для срочных случаев.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="premium" size="xl" asChild>
              <Link to="/contact">
                Заказать ремонт
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="xl"
              className="bg-miele-red text-white border-transparent hover:bg-miele-red/90 hover:text-white"
              asChild
            >
              <a href="tel:+1234567890">
                <Phone className="h-5 w-5 mr-2" />
                Позвонить сейчас
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
