// script.js - lightweight interactions, language toggle, reveal, counters, parallax, loader

/* -----------------------------
   Translations
------------------------------*/
const translations = {
  ar: {
    brand: "حمادة ستورز",
    "nav.home": "الرئيسية",
    "nav.categories": "الأقسام",
    "nav.products": "المنتجات",
    "nav.why": "لماذا نحن",
    "nav.testimonials": "آراء العملاء",
    "nav.contact": "تواصل معنا",
    "hero.title": "أناقتك تبدأ من هنا",
    "hero.subtitle": "اكتشف تشكيلتنا المختارة من الملابس والأحذية بجودة فاخرة وتصاميم عالمية.",
    "hero.shop": "تسوق الآن",
    "hero.explore": "اكتشف المنتجات",
    "categories.title": "الأقسام",
    "categories.subtitle": "تسوق من مجموعاتنا المميزة",
    "cat.men": "ملابس رجالي",
    "cat.women": "ملابس حريمي",
    "cat.shoes": "أحذية",
    "cat.new": "أحدث الموديلات",
    "featured.title": "المنتجات المميزة",
    "featured.subtitle": "مختاراتنا بعناية لتناسب ذوقك",
    "p1.name": "جاكيت جلد كلاسيكي",
    "p1.desc": "خامة فاخرة وتصميم عصري.",
    "p2.name": "فستان سهرة أنيق",
    "p2.desc": "تفاصيل دقيقة وقصّة مميزة.",
    "p3.name": "حذاء جلد فخم",
    "p3.desc": "راحة وجودة عالية.",
    buy: "اطلب الآن",
    "why.title": "لماذا حمادة ستورز؟",
    "why.quality": "خامات عالية الجودة",
    "why.quality_desc": "نتعاون مع أفضل الموردين لضمان أعلى معايير الخامة.",
    "why.trends": "أحدث صيحات الموضة",
    "why.trends_desc": "تشكيلاتنا متجددة كل موسم لتكون دائماً في الطليعة.",
    "why.price": "أسعار تنافسية",
    "why.price_desc": "أفضل قيمة مقابل سعر دون المساس بالجودة.",
    "why.support": "خدمة عملاء ممتازة",
    "why.support_desc": "فريقنا جاهز للرد ومساعدتك في كل خطوة.",
    "why.fast": "سرعة تجهيز الطلبات",
    "why.fast_desc": "خدمة شحن سريعة وموثوقة داخل وخارج القاهرة.",
    "testimonials.title": "آراء العملاء",
    test1: "خدمة رائعة وجودة الملابس ممتازة. أنصح الجميع بالتسوق من هنا.",
    test2: "وصل الطلب سريعًا والجودة فاقت التوقعات. تجربة ممتازة.",
    "stat.customers": "عدد العملاء",
    "stat.products": "عدد المنتجات",
    "stat.orders": "عدد الطلبات",
    "stat.years": "سنوات الخبرة",
    "contact.title": "تواصل معنا",
    "contact.store": "اسم المتجر",
    "contact.phone": "رقم الهاتف",
    "contact.address": "العنوان",
    "contact.call": "اتصال الآن",
    "contact.whatsapp": "واتساب",
    "contact.map": "الموقع على الخريطة",
    "footer.about": "متجر متخصص في الملابس والأحذية بجودة وتصميم عالمي.",
    "footer.links": "روابط سريعة",
    "footer.contact": "تواصل"
  },
  en: {
    brand: "Hamada Stores",
    "nav.home": "Home",
    "nav.categories": "Categories",
    "nav.products": "Products",
    "nav.why": "Why Us",
    "nav.testimonials": "Testimonials",
    "nav.contact": "Contact",
    "hero.title": "Your Style Begins Here",
    "hero.subtitle": "Discover our curated collection of clothing & footwear — premium quality, global designs.",
    "hero.shop": "Shop Now",
    "hero.explore": "Explore Products",
    "categories.title": "Categories",
    "categories.subtitle": "Shop from our curated collections",
    "cat.men": "Men's Wear",
    "cat.women": "Women's Wear",
    "cat.shoes": "Shoes",
    "cat.new": "New Arrivals",
    "featured.title": "Featured Products",
    "featured.subtitle": "Carefully selected to match your taste",
    "p1.name": "Classic Leather Jacket",
    "p1.desc": "Premium material with a modern cut.",
    "p2.name": "Elegant Evening Dress",
    "p2.desc": "Fine details with a flattering fit.",
    "p3.name": "Luxury Leather Shoes",
    "p3.desc": "Comfort meets high quality.",
    buy: "Order Now",
    "why.title": "Why Hamada Stores?",
    "why.quality": "High Quality Materials",
    "why.quality_desc": "We partner with top suppliers to ensure premium fabrics.",
    "why.trends": "Latest Fashion Trends",
    "why.trends_desc": "Collections updated each season to keep you on trend.",
    "why.price": "Competitive Prices",
    "why.price_desc": "Best value without compromising quality.",
    "why.support": "Excellent Support",
    "why.support_desc": "Our team is ready to assist you at every step.",
    "why.fast": "Fast Order Processing",
    "why.fast_desc": "Reliable delivery service inside and outside Cairo.",
    "testimonials.title": "Customer Reviews",
    test1: "Great service and excellent product quality. Highly recommended.",
    test2: "Order arrived quickly and quality exceeded expectations. Wonderful experience.",
    "stat.customers": "Customers",
    "stat.products": "Products",
    "stat.orders": "Orders",
    "stat.years": "Years Experience",
    "contact.title": "Get in Touch",
    "contact.store": "Store Name",
    "contact.phone": "Phone Number",
    "contact.address": "Address",
    "contact.call": "Call Now",
    "contact.whatsapp": "WhatsApp",
    "contact.map": "Open Map",
    "footer.about": "A boutique store for clothing and footwear with premium design and quality.",
    "footer.links": "Quick Links",
    "footer.contact": "Contact"
  }
};

/* -----------------------------
   DOM Helpers & Language Toggle
------------------------------*/
const elements = document.querySelectorAll("[data-i18n]");
function applyLanguage(lang) {
  // set html lang & dir
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  // add class for font family control
  if (lang === "en") document.body.classList.add("lang-en"); else document.body.classList.remove("lang-en");

  // populate texts
  elements.forEach(el => {
    const key = el.getAttribute("data-i18n");
    const txt = translations[lang][key] ?? translations["ar"][key] ?? el.textContent;
    // if element expects HTML, you may choose innerHTML. we use textContent for safety.
    el.textContent = txt;
  });

  // update language button text style (simple)
  document.getElementById("langToggle").textContent = lang === "ar" ? "AR | EN" : "AR | EN";

  // save preference
  localStorage.setItem("site_lang", lang);
}

/* Initialize language based on saved pref or default (Arabic) */
const savedLang = localStorage.getItem("site_lang") || "ar";
applyLanguage(savedLang);

/* Toggle when clicking the button */
document.getElementById("langToggle").addEventListener("click", () => {
  const current = document.documentElement.lang || "ar";
  const next = current === "ar" ? "en" : "ar";
  applyLanguage(next);
});

/* Mobile menu toggle */
const menuToggle = document.getElementById("menuToggle");
const mobileMenu = document.getElementById("mobileMenu");
menuToggle.addEventListener("click", () => {
  mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
});

/* -----------------------------
   Loader hide on window load
------------------------------*/
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  loader.style.opacity = "0";
  setTimeout(()=>loader.style.display = "none", 600);
});

/* -----------------------------
   Scroll reveal (IntersectionObserver)
------------------------------*/
const revealObserver = new IntersectionObserver((entries)=> {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, {threshold: 0.12});

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* -----------------------------
   Counters (animate when visible)
------------------------------*/
const counterObserver = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      const el = entry.target;
      const target = +el.getAttribute('data-target') || 0;
      const duration = 1400;
      const start = 0;
      const startTime = performance.now();
      function animate(now){
        const progress = Math.min((now - startTime) / duration, 1);
        el.textContent = Math.floor(progress * (target - start) + start).toLocaleString();
        if(progress < 1) requestAnimationFrame(animate);
      }
      requestAnimationFrame(animate);
      counterObserver.unobserve(el);
    }
  });
}, {threshold:0.6});

document.querySelectorAll('.stat').forEach(el => counterObserver.observe(el));

/* -----------------------------
   Parallax for hero background
------------------------------*/
const parallax = document.querySelectorAll('.parallax');
window.addEventListener('scroll', ()=> {
  const sc = window.scrollY;
  parallax.forEach(p => {
    p.style.transform = `translateY(${sc * 0.15}px)`;
  });

  // navbar background change
  const navbar = document.getElementById('navbar');
  if(sc > 30) {
    navbar.classList.remove('transparent');
    navbar.style.background = 'linear-gradient(180deg, rgba(255,255,255,0.7), rgba(255,255,255,0.5))';
  } else {
    navbar.classList.add('transparent');
    navbar.style.background = '';
  }

  // to-top button
  const toTop = document.getElementById('toTop');
  if(sc > 400) toTop.style.display = 'block'; else toTop.style.display = 'none';
});

/* -----------------------------
   Smooth scroll for internal links
------------------------------*/
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(href.length > 1){
      e.preventDefault();
      const target = document.querySelector(href);
      if(target) target.scrollIntoView({behavior:'smooth',block:'start'});
      // close mobile menu if open
      if(mobileMenu.style.display === 'flex') mobileMenu.style.display = 'none';
    }
  });
});

/* -----------------------------
   Back to top
------------------------------*/
document.getElementById('toTop').addEventListener('click', ()=> window.scrollTo({top:0,behavior:'smooth'}));

/* -----------------------------
   Initial setup: year
------------------------------*/
document.getElementById('year').textContent = new Date().getFullYear();

/* -----------------------------
   Accessibility small enhancements
------------------------------*/
// make language toggle keyboard accessible (Enter/Space)
document.getElementById('langToggle').addEventListener('keydown', (e)=>{
  if(e.key === 'Enter' || e.key === ' ') e.target.click();
});

/* End of script */
