import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Award, Shield, Users, Wrench, Target, Heart } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Точность",
    description: "Техника MIELE создана с немецкой точностью. Наш ремонт соответствует этому стандарту.",
  },
  {
    icon: Shield,
    title: "Надёжность",
    description: "Каждый ремонт подкреплён нашей комплексной гарантией и гарантией удовлетворённости.",
  },
  {
    icon: Heart,
    title: "Забота",
    description: "Мы относимся к каждой технике так, как будто это наша собственная, с тщательным вниманием к деталям.",
  },
];

const milestones = [
  { year: "2008", title: "Основание", description: "Начали как специализированный сервис по ремонту MIELE" },
  { year: "2012", title: "Сертифицированный партнёр", description: "Стали авторизованным сервисным провайдером MIELE" },
  { year: "2016", title: "Региональное расширение", description: "Расширили зону обслуживания на окружающие районы" },
  { year: "2020", title: "5000 ремонтов", description: "Отпраздновали наш 5000-й успешный ремонт" },
  { year: "2024", title: "Лидер отрасли", description: "Признаны ведущим специалистом по MIELE" },
];

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-secondary">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="text-sm font-medium text-miele-red uppercase tracking-wider">
                  О нас
                </span>
                <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground">
                  Мастера
                  <br />
                  ремонта MIELE
                </h1>
                <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                  Более 15 лет мы посвятили себя одному: стать безусловными экспертами в ремонте техники MIELE. Наши мастера не просто чинят технику — они понимают инженерную философию, стоящую за каждым продуктом MIELE.
                </p>
                <div className="mt-8 flex items-center gap-8">
                  <div>
                    <div className="text-4xl font-display font-bold text-foreground">15+</div>
                    <div className="text-sm text-muted-foreground">Лет опыта</div>
                  </div>
                  <div className="w-px h-12 bg-border" />
                  <div>
                    <div className="text-4xl font-display font-bold text-foreground">5000+</div>
                    <div className="text-sm text-muted-foreground">Выполнено ремонтов</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="aspect-square bg-background rounded-2xl flex items-center justify-center"
              >
                <Wrench className="h-32 w-32 text-muted-foreground/20" />
              </motion.div>
            </div>
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
                Наши ценности
              </span>
              <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold text-foreground">
                Что нас движет
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-miele-red" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground">
                    {value.title}
                  </h3>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
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
                  Наша история
                </span>
                <h2 className="mt-3 text-3xl md:text-4xl font-display font-semibold text-foreground">
                  Построено на экспертизе
                </h2>
                <p className="mt-6 text-muted-foreground leading-relaxed">
                  То, что началось как страсть к немецкой инженерии, выросло в самый надёжный сервис по ремонту MIELE в регионе. Наш основатель, бывший заводской техник MIELE, принёс десятилетия внутренних знаний для создания сервиса, который действительно понимает эту исключительную технику.
                </p>
                <p className="mt-4 text-muted-foreground leading-relaxed">
                  Сегодня наша команда сертифицированных мастеров продолжает эту традицию совершенства. Мы много инвестируем в постоянное обучение и поддерживаем прямые отношения с поставщиками MIELE, чтобы всегда иметь доступ к оригинальным запчастям и новейшим диагностическим техникам.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex gap-4">
                    <div className="flex-shrink-0 w-16 text-right">
                      <span className="text-sm font-medium text-miele-red">{milestone.year}</span>
                    </div>
                    <div className="flex-shrink-0 w-px bg-border relative">
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-miele-red" />
                    </div>
                    <div className="pb-6">
                      <h3 className="font-semibold text-foreground">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                    </div>
                  </div>
                ))}
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
              <Users className="h-12 w-12 mx-auto mb-6 text-miele-red" />
              <h2 className="text-3xl md:text-4xl font-display font-semibold">
                Готовы встретиться с нашей командой?
              </h2>
              <p className="mt-4 text-lg text-primary-foreground/80">
                Запишитесь на ремонт и почувствуйте разницу, которую создаёт настоящая экспертиза.
              </p>
              <Button variant="hero-outline" size="xl" className="mt-8" asChild>
                <Link to="/contact">Заказать ремонт</Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
