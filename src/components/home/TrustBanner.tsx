import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Исключительный сервис! Мастер диагностировал и починил мою стиральную машину MIELE менее чем за час.",
    author: "Сара М.",
    location: "Центр города",
    rating: 5,
  },
  {
    quote: "Наконец-то нашёл сервис, который действительно понимает технику MIELE. Очень рекомендую!",
    author: "Михаил К.",
    location: "Северная часть",
    rating: 5,
  },
  {
    quote: "Профессионально, пунктуально, и ремонт держится идеально уже больше года.",
    author: "Елена Л.",
    location: "Западный район",
    rating: 5,
  },
];

export function TrustBanner() {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-premium">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-miele-red uppercase tracking-wider">
            Доверие клиентов
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-display font-semibold">
            Что говорят наши клиенты
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-primary-foreground/5 backdrop-blur-sm rounded-xl p-8 border border-primary-foreground/10"
            >
              <Quote className="h-8 w-8 text-miele-red mb-4" />
              <p className="text-primary-foreground/90 leading-relaxed mb-6">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-primary-foreground/60">{testimonial.location}</p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-miele-red text-miele-red" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 pt-16 border-t border-primary-foreground/10"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-primary-foreground/60">
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary-foreground">5000+</div>
              <div className="text-sm">Выполнено ремонтов</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-primary-foreground/20" />
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary-foreground">4.9/5</div>
              <div className="text-sm">Средняя оценка</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-primary-foreground/20" />
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary-foreground">15+</div>
              <div className="text-sm">Лет обслуживания</div>
            </div>
            <div className="hidden md:block w-px h-12 bg-primary-foreground/20" />
            <div className="text-center">
              <div className="text-3xl font-display font-bold text-primary-foreground">100%</div>
              <div className="text-sm">Гарантия удовлетворённости</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
