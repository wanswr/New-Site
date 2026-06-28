import Navbar from "@/components/ui/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main className="overflow-x-hidden">{children}</main>
      <footer className="bg-premium-graphite text-premium-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <h2 className="text-2xl font-serif mb-4">PotolokBel</h2>
            <p className="text-premium-grey max-w-xs text-sm">
              Создаем совершенные потолочные решения для современных интерьеров с 2014 года.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h3 className="text-xs uppercase tracking-widest text-premium-brass mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm text-premium-grey">
                <li><a href="#about" className="hover:text-premium-white transition-colors">О нас</a></li>
                <li><a href="#types" className="hover:text-premium-white transition-colors">Виды потолков</a></li>
                <li><a href="#portfolio" className="hover:text-premium-white transition-colors">Портфолио</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs uppercase tracking-widest text-premium-brass mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-premium-grey">
                <li>+7 (495) 000-00-00</li>
                <li>г. Москва, ул. Арбат, 1</li>
                <li>info@potolokbel.ru</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-white/10 mt-12 pt-8 text-xs text-premium-grey flex justify-between">
          <p>© 2024 PotolokBel. Все права защищены.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-premium-white transition-colors">WhatsApp</a>
            <a href="#" className="hover:text-premium-white transition-colors">Telegram</a>
          </div>
        </div>
      </footer>
    </SmoothScroll>
  );
}
