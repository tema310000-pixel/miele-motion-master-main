import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Waves, Wind, CircleDot, Flame, Thermometer, Coffee, Check, ArrowRight } from "lucide-react";

const services = [
  {
    id: "washing",
    icon: Waves,
    image: "/images/washing.jpg",
    title: "Стиральные машины",
    description: "Полный спектр услуг по ремонту всех моделей стиральных машин MIELE, от компактных до машин большой ёмкости.",
    features: [
      "Замена барабана и подшипников",
      "Ремонт мотора и насоса",
      "Диагностика электронного управления",
      "Обслуживание впускного клапана воды",
      "Замена уплотнителя двери",
      "Ремонт системы слива",
    ],
  },
  {
    id: "dryers",
    icon: Wind,
    image: "/images/dryer.jpg",
    title: "Сушильные машины",
    description: "Экспертное обслуживание сушильных машин для восстановления оптимальной производительности сушки и энергоэффективности.",
    features: [
      "Замена нагревательного элемента",
      "Очистка системы вентиляции",
      "Калибровка датчика влажности",
      "Замена ремня барабана",
      "Ремонт теплового предохранителя",
      "Диагностика платы управления",
    ],
  },
  {
    id: "dishwashers",
    icon: CircleDot,
    image: "/images/dishwasher.avif",
    title: "Посудомоечные машины",
    description: "Комплексный ремонт посудомоечных машин для идеального результата каждый раз.",
    features: [
      "Обслуживание разбрызгивателей",
      "Ремонт насоса и мотора",
      "Ремонт умягчителя воды",
      "Замена дозатора",
      "Обнаружение и устранение протечек",
      "Электронная диагностика",
    ],
  },
  {
    id: "ovens",
    icon: Flame,
    title: "Духовые шкафы",
    description: "Точный ремонт духовых шкафов MIELE, обеспечивающий идеальные результаты приготовления.",
    features: [
      "Замена нагревательного элемента",
      "Калибровка термостата",
      "Ремонт вентилятора",
      "Обслуживание системы самоочистки",
      "Ремонт панели управления",
      "Замена петель двери",
    ],
  },
  {
    id: "refrigerators",
    icon: Thermometer,
    title: "Холодильники",
    description: "Ремонт систем контроля температуры и охлаждения для всех холодильных установок MIELE.",
    features: [
      "Диагностика компрессора",
      "Замена термостата",
      "Ремонт системы разморозки",
      "Замена уплотнителя",
      "Обслуживание льдогенератора",
      "Калибровка температуры",
    ],
  },
  {
    id: "coffee",
    icon: Coffee,
    title: "Кофемашины",
    description: "Профессиональный ремонт кофемашин MIELE с точной настройкой и обслуживанием.",
    features: [
      "Чистка гидросистемы",
      "Декальцинация и профилактика накипи",
      "Ремонт кофемолки",
      "Замена помпы и клапанов",
      "Замена уплотнителей",
      "Диагностика электроники",
    ],
  },
  {
    id: "ironing",
    icon: Wind,
    title: "Гладильные системы",
    description: "Обслуживание гладильных систем MIELE для стабильного пара и безопасности.",
    features: [
      "Очистка парогенератора",
      "Ремонт системы подачи пара",
      "Замена термодатчиков",
      "Профилактика накипи",
      "Ремонт платы управления",
      "Замена шлангов и соединений",
    ],
  },
  {
    id: "cooktops",
    icon: Flame,
    title: "Варочные панели",
    description: "Точная диагностика и ремонт варочных панелей MIELE любых типов.",
    features: [
      "Ремонт сенсорной панели",
      "Замена индукционных модулей",
      "Диагностика силовой электроники",
      "Замена стеклокерамики",
      "Калибровка датчиков",
      "Ремонт силового модуля",
    ],
  },
];

const Services = () => {
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
                Наши услуги
              </span>
              <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground">
                Специализированные услуги
                <br />
                по ремонту MIELE
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                От стиральных машин до холодильников — наши обученные на заводе мастера обслуживают весь ассортимент техники MIELE с точностью и оригинальными запчастями.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="space-y-24">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`grid lg:grid-cols-2 gap-12 items-center ${
                    index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                  }`}
                >
                  <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                    <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mb-6">
                      <service.icon className="h-8 w-8 text-miele-red" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-semibold text-foreground">
                      {service.title}
                    </h2>
                    <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2">
                          <span className="h-5 w-5 rounded-[5px] bg-miele-red/10 flex items-center justify-center flex-shrink-0">
                            <Check className="h-3.5 w-3.5 text-miele-red" />
                          </span>
                          <span className="text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button variant="premium" size="lg" className="mt-8" asChild>
                      <Link to="/contact">
                        Заказать услугу
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>

                  <div
                    className={`aspect-[4/3] bg-secondary rounded-2xl overflow-hidden flex items-center justify-center ${
                      index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                  >
                    {service.image ? (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <service.icon className="h-24 w-24 text-muted-foreground/30" />
                    )}
                  </div>
                </motion.div>
              ))}
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
                Не нашли свою технику?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Мы ремонтируем весь ассортимент MIELE. Свяжитесь с нами для индивидуального расчёта на любую технику MIELE.
              </p>
              <Button variant="hero-outline" size="xl" className="mt-8" asChild>
                <Link to="/contact">Связаться с нами</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
