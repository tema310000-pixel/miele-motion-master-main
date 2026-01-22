import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const navigation = {
  services: [
    { name: "Стиральные машины", href: "/services#washing" },
    { name: "Сушильные машины", href: "/services#dryers" },
    { name: "Посудомоечные машины", href: "/services#dishwashers" },
    { name: "Духовые шкафы", href: "/services#ovens" },
    { name: "Холодильники", href: "/services#refrigerators" },
  ],
  company: [
    { name: "О нас", href: "/about" },
    { name: "Цены", href: "/pricing" },
    { name: "Контакты", href: "/contact" },
  ],
};

export function Footer() {
  const isBrowser = typeof window !== "undefined";
  const isLocalhost =
    isBrowser &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1");
  const defaultPort = isBrowser ? window.location.port || "8080" : "8080";

  const [ipAddress, setIpAddress] = useState(() =>
    isBrowser ? localStorage.getItem("lan-ip") || "" : ""
  );
  const [port, setPort] = useState(defaultPort);

  useEffect(() => {
    if (!isBrowser) return;
    localStorage.setItem("lan-ip", ipAddress);
  }, [ipAddress, isBrowser]);

  const shareUrl = useMemo(() => {
    if (!ipAddress) return "";
    return `http://${ipAddress}:${port}`;
  }, [ipAddress, port]);

  const qrSrc = useMemo(() => {
    if (!shareUrl) return "";
    return `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(
      shareUrl
    )}`;
  }, [shareUrl]);

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-premium section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          <div className="lg:col-span-1">
            <Link to="/" className="text-2xl font-display font-semibold tracking-tight">
              MIELE<span className="text-miele-red">Care</span>
            </Link>
            <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">
              Профессиональный ремонт техники MIELE. Сертифицированные мастера, оригинальные запчасти, премиальное обслуживание.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Услуги</h3>
            <ul className="space-y-3">
              {navigation.services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Компания</h3>
            <ul className="space-y-3">
              {navigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Контакты</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="h-4 w-4 mt-0.5 text-miele-red" />
                <div>
                  <p className="text-sm font-medium">+1 (234) 567-890</p>
                  <p className="text-xs text-primary-foreground/60">Пн-Сб 8:00-18:00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="h-4 w-4 mt-0.5 text-miele-red" />
                <span className="text-sm">service@mielecare.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-4 w-4 mt-0.5 text-miele-red" />
                <span className="text-sm text-primary-foreground/70">Обслуживаем все крупные городские районы</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-4 w-4 mt-0.5 text-miele-red" />
                <span className="text-sm text-primary-foreground/70">Доступен ремонт в день обращения</span>
              </li>
            </ul>
          </div>
        </div>

        {isLocalhost ? (
          <div className="mt-12 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 p-4 md:p-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="max-w-xl">
                <p className="text-sm font-semibold uppercase tracking-wider text-primary-foreground/80">
                  Проверка на телефоне
                </p>
                <p className="mt-2 text-sm text-primary-foreground/70">
                  Введите IP вашего компьютера, чтобы открыть сайт на телефоне
                  через Wi‑Fi.
                </p>
                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <input
                    value={ipAddress}
                    onChange={(event) => setIpAddress(event.target.value)}
                    placeholder="IP компьютера (например 192.168.0.15)"
                    className="w-full sm:w-72 rounded-md bg-transparent px-3 py-2 text-base md:text-sm text-primary-foreground placeholder:text-primary-foreground/40 border border-primary-foreground/20 focus:outline-none focus:ring-1 focus:ring-primary-foreground/30"
                  />
                  <input
                    value={port}
                    onChange={(event) => setPort(event.target.value)}
                    placeholder="Порт"
                    className="w-24 rounded-md bg-transparent px-3 py-2 text-base md:text-sm text-primary-foreground placeholder:text-primary-foreground/40 border border-primary-foreground/20 focus:outline-none focus:ring-1 focus:ring-primary-foreground/30"
                  />
                </div>
                {shareUrl ? (
                  <p className="mt-3 text-sm text-primary-foreground/70">
                    Ссылка:{" "}
                    <span className="text-primary-foreground break-all">{shareUrl}</span>
                  </p>
                ) : null}
              </div>
              {qrSrc ? (
                <div className="shrink-0 rounded-md bg-primary-foreground p-2">
                  <img
                    src={qrSrc}
                    alt="QR код для открытия сайта на телефоне"
                    className="h-32 w-32"
                    loading="lazy"
                  />
                </div>
              ) : null}
            </div>
          </div>
        ) : null}

        <div className="mt-16 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} MIELECare. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    Политика конфиденциальности
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Политика конфиденциальности MIELECare</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 text-sm text-muted-foreground">
                    <p>
                      Действует для сайта mielecare.ru. Мы уважаем вашу
                      конфиденциальность и обрабатываем данные только для связи и
                      оказания услуг.
                    </p>
                    <div>
                      <p className="font-medium text-foreground">
                        1. Какие данные мы собираем
                      </p>
                      <p className="mt-2">
                        Мы можем собирать данные, которые вы добровольно указываете
                        при обращении: имя, номер телефона и информацию о заявке.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        2. Как мы используем данные
                      </p>
                      <p className="mt-2">
                        Данные используются только для обработки обращения, обратной
                        связи и предоставления услуг. Мы не продаем и не передаем
                        данные третьим лицам, кроме случаев, предусмотренных законом.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        3. Хранение и защита данных
                      </p>
                      <p className="mt-2">
                        Мы применяем разумные организационные и технические меры для
                        защиты данных. Данные хранятся столько, сколько нужно для
                        выполнения целей обработки.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">4. Файлы cookie</p>
                      <p className="mt-2">
                        Сайт может использовать технические cookie для корректной
                        работы и улучшения качества сервиса. Вы можете изменить
                        настройки cookie в браузере.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">5. Ваши права</p>
                      <p className="mt-2">
                        Вы можете запросить уточнение, обновление или удаление своих
                        данных. Для этого свяжитесь с нами через форму на сайте.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">6. Контакты</p>
                      <p className="mt-2">
                        По вопросам конфиденциальности обращайтесь через сайт
                        mielecare.ru.
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="text-sm text-primary-foreground/60 hover:text-primary-foreground transition-colors"
                  >
                    Условия использования
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Условия использования MIELECare</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-6 text-sm text-muted-foreground">
                    <p>
                      Действует для сайта mielecare.ru. Используя сайт, вы
                      соглашаетесь с этими условиями.
                    </p>
                    <div>
                      <p className="font-medium text-foreground">1. Общие положения</p>
                      <p className="mt-2">
                        Информация на сайте носит справочный характер и может
                        обновляться без предварительного уведомления.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        2. Услуги и ответственность
                      </p>
                      <p className="mt-2">
                        Мы стремимся предоставлять актуальную и точную информацию,
                        однако не гарантируем отсутствия ошибок. Окончательные условия
                        услуг согласуются при обращении.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        3. Интеллектуальная собственность
                      </p>
                      <p className="mt-2">
                        Все материалы сайта принадлежат MIELECare или используются на
                        законных основаниях. Копирование материалов без согласия
                        запрещено.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        4. Ссылки на сторонние ресурсы
                      </p>
                      <p className="mt-2">
                        Сайт может содержать ссылки на внешние ресурсы. Мы не отвечаем
                        за их содержание и политику.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">5. Изменения условий</p>
                      <p className="mt-2">
                        Мы можем обновлять условия использования. Актуальная версия
                        публикуется на сайте mielecare.ru.
                      </p>
                    </div>
                    <div>
                      <p className="font-medium text-foreground">6. Контакты</p>
                      <p className="mt-2">
                        По вопросам использования сайта обращайтесь через форму на
                        mielecare.ru.
                      </p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
