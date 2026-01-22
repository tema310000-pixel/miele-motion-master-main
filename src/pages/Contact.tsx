import { useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Phone, 
  Mail, 
  Clock, 
  MapPin, 
  Shield, 
  CheckCircle,
  Send
} from "lucide-react";
import { toast } from "sonner";

const applianceTypes = [
  "Стиральная машина",
  "Сушильная машина",
  "Посудомоечная машина",
  "Духовой шкаф",
  "Холодильник",
  "Другое",
];

const contactInfo = [
  {
    icon: Phone,
    title: "Телефон",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
    description: "Пн-Сб 8:00-18:00",
  },
  {
    icon: Mail,
    title: "Эл. почта",
    value: "service@mielecare.com",
    description: "Отвечаем в течение 10 минут",
  },
  {
    icon: Clock,
    title: "Время ответа",
    value: "Доступно в день обращения",
    description: "Для срочных ремонтов",
  },
  {
    icon: MapPin,
    title: "Зона обслуживания",
    value: "Метрополитен",
    description: "И окружающие округа",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    appliance: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success("Спасибо! Мы свяжемся с вами в течение 10 минут.");
    setFormData({ name: "", phone: "", appliance: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

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
                Свяжитесь с нами
              </span>
              <h1 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-display font-semibold text-foreground">
                Давайте запустим
                <br />
                вашу технику MIELE
              </h1>
              <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
                Готовы восстановить вашу технику до пиковой производительности? Заполните форму ниже или позвоните нам. Обычно мы отвечаем в течение 10 минут.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-premium">
            <div className="grid lg:grid-cols-2 gap-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl font-display font-semibold text-foreground mb-8">
                  Заказать ремонт
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Полное имя</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Иван Иванов"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Номер телефона</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+7 (999) 123-45-67"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="appliance">Тип техники</Label>
                    <Select
                      value={formData.appliance}
                      onValueChange={(value) => setFormData(prev => ({ ...prev, appliance: value }))}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Выберите вашу технику" />
                      </SelectTrigger>
                      <SelectContent>
                        {applianceTypes.map((type) => (
                          <SelectItem key={type} value={type.toLowerCase()}>
                            {type}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Опишите проблему</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Пожалуйста, опишите, что происходит с вашей техникой..."
                      rows={5}
                      required
                    />
                  </div>

                  <Button 
                    type="submit" 
                    variant="premium" 
                    size="xl" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Отправка..."
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        Отправить запрос
                      </>
                    )}
                  </Button>
                </form>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl font-display font-semibold text-foreground mb-8">
                  Связаться с нами
                </h2>

                <div className="grid sm:grid-cols-2 gap-6 mb-12">
                  {contactInfo.map((item) =>
                    item.href ? (
                      <a
                        key={item.title}
                        href={item.href}
                        className="card-premium p-6 block transition-colors hover:border-miele-red/40 hover:shadow-lg"
                      >
                        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                          <item.icon className="h-6 w-6 text-miele-red" />
                        </div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <span className="mt-1 inline-block text-lg font-medium text-foreground">
                          {item.value}
                        </span>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </a>
                    ) : (
                      <div key={item.title} className="card-premium p-6">
                        <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4">
                          <item.icon className="h-6 w-6 text-miele-red" />
                        </div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-lg font-medium text-foreground mt-1">{item.value}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    )
                  )}
                </div>

                <div className="bg-secondary rounded-xl p-8">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-6">
                    Когда вы связываетесь с нами
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-miele-red flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Ответ в течение 10 минут в рабочее время</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-miele-red flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Бесплатная первичная телефонная консультация</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-miele-red flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Прозрачный расчёт до начала любых работ</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Shield className="h-5 w-5 text-miele-red flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Ваша информация никогда не передаётся третьим лицам</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
