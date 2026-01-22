import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="pt-32 pb-20 bg-secondary">
          <div className="container-premium">
            <div className="max-w-3xl">
              <span className="text-sm font-medium text-miele-red uppercase tracking-wider">
                Условия использования
              </span>
              <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground">
                Условия использования MIELECare
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Действует для сайта mielecare.ru. Используя сайт, вы соглашаетесь с
                этими условиями.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="max-w-3xl space-y-10 text-muted-foreground">
              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  1. Общие положения
                </h2>
                <p className="mt-3 leading-relaxed">
                  Информация на сайте носит справочный характер и может обновляться
                  без предварительного уведомления.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  2. Услуги и ответственность
                </h2>
                <p className="mt-3 leading-relaxed">
                  Мы стремимся предоставлять актуальную и точную информацию, однако
                  не гарантируем отсутствия ошибок. Окончательные условия услуг
                  согласуются при обращении.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  3. Интеллектуальная собственность
                </h2>
                <p className="mt-3 leading-relaxed">
                  Все материалы сайта принадлежат MIELECare или используются на
                  законных основаниях. Копирование материалов без согласия запрещено.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  4. Ссылки на сторонние ресурсы
                </h2>
                <p className="mt-3 leading-relaxed">
                  Сайт может содержать ссылки на внешние ресурсы. Мы не отвечаем за
                  их содержание и политику.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  5. Изменения условий
                </h2>
                <p className="mt-3 leading-relaxed">
                  Мы можем обновлять условия использования. Актуальная версия
                  публикуется на сайте mielecare.ru.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-display font-semibold text-foreground">
                  6. Контакты
                </h2>
                <p className="mt-3 leading-relaxed">
                  По вопросам использования сайта обращайтесь через форму на
                  mielecare.ru.
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

export default Terms;
