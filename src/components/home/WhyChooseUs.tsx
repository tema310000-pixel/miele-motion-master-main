import { motion } from "framer-motion";
import { Shield, Clock, Wrench, Award, CheckCircle2, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Сертифицированные мастера",
    description: "Эксперты, обученные на заводе, с глубокими знаниями MIELE и постоянной сертификацией.",
  },
  {
    icon: Wrench,
    title: "Оригинальные запчасти",
    description: "Используем только оригинальные запасные части MIELE для долговечного ремонта.",
  },
  {
    icon: Clock,
    title: "Ремонт в день обращения",
    description: "Быстрое реагирование с возможностью записи на тот же день.",
  },
  {
    icon: Award,
    title: "Гарантия",
    description: "Все ремонты сопровождаются нашей комплексной гарантией на обслуживание.",
  },
  {
    icon: CheckCircle2,
    title: "Прозрачные цены",
    description: "Чёткие, заранее оговорённые цены без скрытых платежей и сюрпризов.",
  },
  {
    icon: Users,
    title: "5000+ довольных клиентов",
    description: "Нам доверяют тысячи домовладельцев по всему региону.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-secondary">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-medium text-miele-red uppercase tracking-wider">
              Почему выбирают нас
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-foreground">
              Немецкая точность,
              <br />
              местная экспертиза
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Техника MIELE представляет вершину немецкой инженерии. Она заслуживает мастеров, которые понимают её сложные системы изнутри и снаружи. Именно это мы и предлагаем.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4 sm:flex sm:items-center sm:gap-8">
              <div>
                <div className="text-4xl font-display font-bold text-foreground">15+</div>
                <div className="text-sm text-muted-foreground">Лет опыта</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border" />
              <div>
                <div className="text-4xl font-display font-bold text-foreground">98%</div>
                <div className="text-sm text-muted-foreground">Удовлетворённость</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border" />
              <div>
                <div className="text-4xl font-display font-bold text-foreground">24ч</div>
                <div className="text-sm text-muted-foreground">Средний ответ</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-background flex items-center justify-center shadow-sm">
                  <feature.icon className="h-5 w-5 text-miele-red" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
