import { useState } from 'react';

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const menu = [
    { name: "إسبريسو", price: "35 جنيه", img: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=400" },
    { name: "لاتيه", price: "45 جنيه", img: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400" },
    { name: "كولد برو", price: "50 جنيه", img: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=400" },
    { name: "تشيز كيك", price: "60 جنيه", img: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=400" },
  ];

  return (
    <div className="bg-amber-50 text-gray-900" dir="rtl">
      {/* Navbar */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-black text-amber-700">Stanley Café</h1>
          <div className="hidden md:flex gap-8 text-lg">
            <a href="#home" className="hover:text-amber-600">الرئيسية</a>
            <a href="#menu" className="hover:text-amber-600">المنيو</a>
            <a href="#about" className="hover:text-amber-600">عنّا</a>
            <a href="#contact" className="hover:text-amber-600">احجز</a>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div className="md:hidden bg-amber-100 px-4 py-2">
            <a href="#home" className="block py-2">الرئيسية</a>
            <a href="#menu" className="block py-2">المنيو</a>
            <a href="#about" className="block py-2">عنّا</a>
            <a href="#contact" className="block py-2">احجز</a>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="relative h- flex items-center justify-center text-center text-white">
        <img src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1600"
             alt="cafe"
             className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 px-4">
          <h2 className="text-5xl md:text-7xl font-black mb-4">قهوتك على البحر</h2>
          <p className="text-xl md:text-2xl mb-8">ستانلي، إسكندرية | مفتوحين من 8 الصبح لـ 12 بالليل</p>
          <a href="#menu" className="bg-amber-600 hover:bg-amber-700 px-8 py-4 rounded-lg text-xl font-bold transition">
            شوف المنيو
          </a>
        </div>
      </section>

      {/* Menu */}
      <section id="menu" className="py-20 px-4 max-w-6xl mx-auto">
        <h3 className="text-4xl font-black text-center mb-12 text-amber-800">المنيو بتاعنا</h3>
        <div className="grid md:grid-cols-4 gap-6">
          {menu.map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition">
              <img src={item.img} alt={item.name} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-bold">{item.name}</h4>
                <p className="text-amber-700 font-bold text-lg mt-2">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 px-4 bg-amber-100">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-4xl font-black mb-6 text-amber-800">ليه Stanley Café؟</h3>
          <p className="text-xl leading-relaxed">
            عشان إحنا مش مجرد كافيه. إحنا قعدة الصبح بتاعتك، ومكان المذاكرة بالليل،
            والخروجة الحلوة في الويك إند. بنحمص القهوة بنفسنا كل يوم وبنعمل الحلويات فريش.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-4 bg-amber-800 text-white text-center">
        <h3 className="text-4xl font-black mb-6">احجز ترابيزتك دلوقتي</h3>
        <p className="text-xl mb-8">شارع 45، ستانلي، إسكندرية</p>
        <a href="tel:034831234" className="bg-white text-amber-800 hover:bg-gray-100 px-8 py-4 rounded-lg text-xl font-bold transition inline-block">
          اتصل: 03-4831234
        </a>
        <div className="mt-8 text-amber-200">
          <p>يوميًا من 8 صباحًا - 12 منتصف الليل</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-amber-200 py-6 text-center">
        <p>© 2026 Stanley Café | Made by Mostafa</p>
      </footer>
    </div>
  );
}

export default App;