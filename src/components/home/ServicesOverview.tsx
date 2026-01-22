import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Waves, Wind, CircleDot, Flame, Thermometer, Coffee, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";

const services = [
  {
    id: "washing",
    icon: Waves,
    title: "Стиральные машины",
    description: "Экспертная диагностика и ремонт всех моделей стиральных машин MIELE.",
  },
  {
    id: "drying",
    icon: Wind,
    title: "Сушильные машины",
    description: "Профессиональное обслуживание сушильных машин для восстановления оптимальной производительности.",
  },
  {
    id: "dishwashers",
    icon: CircleDot,
    title: "Посудомоечные машины",
    description: "Полный ремонт посудомоечных машин, включая насосы, моторы и электронику.",
  },
  {
    id: "ovens",
    icon: Flame,
    title: "Духовые шкафы",
    description: "Точный ремонт духовых шкафов MIELE, обеспечивающий идеальные результаты приготовления.",
  },
  {
    id: "refrigerators",
    icon: Thermometer,
    title: "Холодильники",
    description: "Ремонт систем контроля температуры и охлаждения для всех моделей.",
  },
  {
    id: "coffee",
    icon: Coffee,
    title: "Кофемашины",
    description: "Профессиональный ремонт кофемашин MIELE с точной настройкой и чисткой.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function ServicesOverview() {
  const { toast } = useToast();

  const handleSubmit = (serviceTitle: string) => (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const phone = String(formData.get("phone") || "").trim();

    if (!phone) return;

    toast({
      title: "Заявка отправлена",
      description: `Мы свяжемся с вами по номеру ${phone} по услуге «${serviceTitle}».`,
    });

    event.currentTarget.reset();
  };

  return (
    <section className="section-padding bg-background relative z-10 -mt-16 pt-16">
      <div className="pointer-events-none absolute -top-16 left-0 right-0 h-32 bg-white/3 backdrop-blur-2xl backdrop-saturate-150 border-y border-white/10 [mask-image:linear-gradient(to_bottom,transparent,black,black,transparent)]" />
      <div className="container-premium relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-miele-red uppercase tracking-wider">
            Наша экспертиза
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground">
            Специализированный ремонт MIELE
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            От стиральных машин до холодильников — мы обслуживаем весь ассортимент техники MIELE с точностью и заботой.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={itemVariants}
              className="card-premium p-8 group"
            >
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value={service.id} className="border-b-0">
                  <AccordionTrigger className="p-0 text-left hover:no-underline w-full">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 aspect-square rounded-md bg-secondary flex items-center justify-center group-hover:bg-miele-red group-hover:text-accent-foreground transition-colors duration-300">
                        <service.icon className="h-6 w-6" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-4">
                    <form onSubmit={handleSubmit(service.title)} className="mt-2 space-y-3">
                      <Input
                        name="phone"
                        type="tel"
                        inputMode="tel"
                        autoComplete="tel"
                        placeholder="Ваш номер телефона"
                        required
                      />
                      <Button type="submit" className="w-full">
                        Отправить контакт
                      </Button>
                      <Button variant="outline" className="w-full" asChild>
                        <a href="tel:+1234567890">Позвонить</a>
                      </Button>
                    </form>
                    <p className="mt-3 text-xs text-muted-foreground">
                      Мы свяжемся с вами в течение 10 минут в рабочее время.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </motion.div>
          ))}

          <motion.div
            variants={itemVariants}
            className="card-premium p-6 bg-primary text-primary-foreground flex flex-col gap-4 lg:col-span-3 md:col-span-2"
          >
            <div>
              <h3 className="text-lg font-display font-semibold">
                Нужно что-то другое?
              </h3>
              <p className="mt-2 text-sm text-primary-foreground/75 leading-relaxed">
                Мы ремонтируем весь ассортимент техники MIELE. Свяжитесь с нами для индивидуального предложения.
              </p>
            </div>
            <Button
              variant="hero-outline"
              size="sm"
              className="self-start bg-miele-red text-white border-transparent hover:bg-miele-red/90 hover:text-white"
              asChild
            >
              <Link to="/contact">
                Связаться с нами
                <ArrowRight className="h-3.5 w-3.5 ml-2" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
