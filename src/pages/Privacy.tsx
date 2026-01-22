import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Privacy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-secondary">
          <div className="container-premium">
            <div className="max-w-3xl">
              <span className="text-sm font-medium text-miele-red uppercase tracking-wider">
                Политика конфиденциальности
              </span>
              <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground">
                Политика конфиденциальности MIELECare
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Действует для сайта mielecare.ru. Мы уважаем вашу конфиденциальность и
                обрабатываем данные только для связи и оказания услуг.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="max-w-3xl space-y-10 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  1. Какие данные мы собираем
                </h2>
                <p className="mt-3 leading-relaxed">
                  Мы можем собирать данные, которые вы добровольно указываете при
                  обращении: имя, номер телефона и информацию о заявке.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  2. Как мы используем данные
                </h2>
                <p className="mt-3 leading-relaxed">
                  Данные используются только для обработки обращения, обратной связи
                  и предоставления услуг. Мы не продаем и не передаем данные третьим
                  лицам, кроме случаев, предусмотренных законом.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  3. Хранение и защита данных
                </h2>
                <p className="mt-3 leading-relaxed">
                  Мы применяем разумные организационные и технические меры для защиты
                  данных. Данные хранятся столько, сколько нужно для выполнения целей
                  обработки.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  4. Файлы cookie
                </h2>
                <p className="mt-3 leading-relaxed">
                  Сайт может использовать технические cookie для корректной работы и
                  улучшения качества сервиса. Вы можете изменить настройки cookie в
                  браузере.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  5. Ваши права
                </h2>
                <p className="mt-3 leading-relaxed">
                  Вы можете запросить уточнение, обновление или удаление своих данных.
                  Для этого свяжитесь с нами через форму на сайте.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  6. Контакты
                </h2>
                <p className="mt-3 leading-relaxed">
                  По вопросам конфиденциальности обращайтесь через сайт mielecare.ru.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Privacy;
