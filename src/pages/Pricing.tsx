import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ClipboardList, 
  Search, 
  Wrench, 
  CheckCircle2, 
  ArrowRight,
  Clock,
  Shield,
  BadgeCheck
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardList,
    title: "Запрос",
    description: "Свяжитесь с нами по телефону, электронной почте или через онлайн-форму. Опишите проблему с техникой, и мы назначим удобное время.",
  },
  {
    number: "02",
    icon: Search,
    title: "Диагностика",
    description: "Наш сертифицированный мастер приезжает и проводит тщательную диагностику с использованием специализированных инструментов MIELE.",
  },
  {
    number: "03",
    icon: Wrench,
    title: "Ремонт",
    description: "С вашего одобрения мы выполняем ремонт, используя оригинальные запчасти MIELE. Большинство ремонтов выполняются в день обращения.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Тестирование",
    description: "Мы проводим комплексные тесты, чтобы убедиться, что ваша техника работает в соответствии с заводскими спецификациями перед отъездом.",
  },
];

const pricingInfo = [
  {
    title: "Выезд мастера",
    price: "1200 ₽",
    description: "Включает выезд и первичную диагностику",
  },
];

const guarantees = [
  {
    icon: Clock,
    title: "Ремонт в день обращения",
    description: "Доступен для срочных ремонтов",
  },
  {
    icon: Shield,
    title: "90-дневная гарантия",
    description: "На все запчасти и работу",
  },
  {
    icon: BadgeCheck,
    title: "Не починили — не платите",
    description: "Если мы не можем починить, вы не платите",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-secondary">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="text-sm font-medium text-miele-red uppercase tracking-wider">
                Цены и процесс
              </span>
              <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground">
                Прозрачные цены,
                <br />
                проверенный процесс
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Никаких скрытых платежей, никаких сюрпризов. Мы верим в полную прозрачность, чтобы вы могли принимать обоснованные решения о ремонте вашей техники MIELE.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-premium">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-sm font-medium text-miele-red uppercase tracking-wider">
                Наш процесс
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold text-foreground">
                Четыре простых шага
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  {index < steps.length - 1 && index % 2 === 0 && (
                    <div className="hidden md:block lg:hidden absolute top-[30px] left-1/2 w-[calc(100%+2rem)] h-[2px] bg-foreground/25" />
                  )}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-[30px] left-1/2 w-[calc(100%+2rem)] h-[2px] bg-foreground/25" />
                  )}
                  
                  <div className="relative bg-background">
                    <div className="text-6xl font-display font-bold text-miele-red mb-4">
                      {step.number}
                    </div>
                    <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-4">
                      <step.icon className="h-7 w-7 text-miele-red" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-secondary">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-sm font-medium text-miele-red uppercase tracking-wider">
                  Цены
                </span>
                <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold text-foreground">
                  Чёткие, честные тарифы
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  Мы предоставляем подробные расчёты до начала любых работ. Вы всегда будете точно знать, за что платите, без неожиданных платежей.
                </p>

                <div className="mt-8 space-y-6">
                  {pricingInfo.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-24">
                        <div className="text-2xl font-display font-bold text-foreground">
                          {item.price}
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-8 text-sm text-muted-foreground">
                  * Итоговая цена зависит от конкретного необходимого ремонта. Все расчёты предоставляются в письменном виде до начала работ.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-background rounded-2xl p-8 lg:p-12"
              >
                <h3 className="text-2xl font-display font-semibold text-foreground mb-8">
                  Наши гарантии
                </h3>
                <div className="space-y-6">
                  {guarantees.map((guarantee) => (
                    <div key={guarantee.title} className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-secondary flex items-center justify-center">
                        <guarantee.icon className="h-6 w-6 text-miele-red" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{guarantee.title}</h4>
                        <p className="text-sm text-muted-foreground">{guarantee.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <Button variant="premium" size="xl" className="w-full mt-8" asChild>
                  <Link to="/contact">
                    Получить бесплатный расчёт
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-primary text-primary-foreground">
          <div className="container-premium text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-display font-semibold">
                Готовы начать?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Свяжитесь с нами сегодня для бесплатного диагностического расчёта. Без обязательств, без давления.
              </p>
              <Button variant="hero-outline" size="xl" className="mt-8" asChild>
                <Link to="/contact">Записаться на ремонт</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
