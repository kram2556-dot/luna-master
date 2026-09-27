(() => {
  const remoteImages = {
    'bridal-portrait.webp': 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1400&q=88',
    'glam-face.webp': 'https://images.unsplash.com/photo-1630084775816-7abb7383ded5?auto=format&fit=crop&w=1200&q=88',
    'makeup-application.webp': 'https://images.unsplash.com/photo-1709477542149-f4e0e21d590b?auto=format&fit=crop&w=1200&q=88',
    'bridal-side.webp': 'https://images.unsplash.com/photo-1636023730877-233b9237d4ec?auto=format&fit=crop&w=1200&q=88',
    'editorial-eyes.webp': 'https://images.unsplash.com/photo-1610047614301-13c63f00c032?auto=format&fit=crop&w=1200&q=88',
    'lash-detail.webp': 'https://images.unsplash.com/photo-1610173827043-9db50e0d8ef9?auto=format&fit=crop&w=1200&q=88'
  };
  const galleryUrls = [
    [remoteImages['bridal-portrait.webp'], 'Bridal glow / عروس'],
    [remoteImages['glam-face.webp'], 'Soft glam / بشرة مضيئة'],
    [remoteImages['makeup-application.webp'], 'Defined eyes / عيون محددة'],
    [remoteImages['bridal-side.webp'], 'Editorial / تصوير'],
    [remoteImages['editorial-eyes.webp'], 'Statement look / لوك جريء'],
    [remoteImages['lash-detail.webp'], 'The details / التفاصيل']
  ];
  const instaUrls = galleryUrls.map(([src]) => src);
  const brandName = CONFIG.businessName;
  const whatsappUrl = `https://wa.me/${CONFIG.whatsapp}`;

  document.documentElement.style.setProperty('--rose', CONFIG.primaryColor);
  document.documentElement.style.setProperty('--rose-dark', CONFIG.primaryColor);
  document.title = `${brandName} | Makeup Artist`;
  document.querySelectorAll('.brand span:last-child').forEach((node) => { node.textContent = brandName; });
  document.querySelectorAll('a[href*="wa.me"]').forEach((link) => { link.href = link.href.replace(/https:\/\/wa\.me\/[^?]+/, whatsappUrl); });
  document.querySelectorAll('img[src]').forEach((img) => {
    const filename = img.src.split('/').pop().split('?')[0];
    if (remoteImages[filename]) img.src = remoteImages[filename];
  });

  const gallery = document.querySelector('#gallery');
  gallery.innerHTML = galleryUrls.map(([src, label], i) => `<figure data-aos="fade-up" data-aos-delay="${i * 40}"><img src="${src}" loading="lazy" alt="${label}" /><figcaption>${label} ↗</figcaption></figure>`).join('');
  document.querySelector('#instagram').innerHTML = instaUrls.map((src, i) => `<a href="https://instagram.com/lunabeauty" target="_blank" rel="noreferrer" data-aos="fade-up" data-aos-delay="${i * 35}"><img src="${src}" loading="lazy" alt="Behind the glow ${i + 1}" /></a>`).join('');
  document.querySelectorAll('img:not([data-aos])').forEach((img) => img.setAttribute('data-aos', 'fade-up'));

  const comparison = document.querySelector('.comparison');
  const range = comparison.querySelector('input');
  const after = comparison.querySelector('.comparison-after');
  const handle = comparison.querySelector('.comparison-handle');
  const updateComparison = (value) => { after.style.width = `${value}%`; handle.style.left = `${value}%`; };
  range.addEventListener('input', (event) => updateComparison(event.target.value));
  updateComparison(range.value);

  const menu = document.querySelector('#hamburger');
  const nav = document.querySelector('#mobile-menu');
  const closeMenu = document.querySelector('#close-menu');
  const setMenu = (open) => { nav.classList.toggle('open', open); menu.setAttribute('aria-expanded', String(open)); document.body.style.overflow = open ? 'hidden' : ''; };
  menu.addEventListener('click', () => setMenu(true));
  closeMenu.addEventListener('click', () => setMenu(false));
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));

  const bookingForm = document.querySelector('#booking-form');
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(bookingForm);
    const message = ['مرحباً ' + brandName + '، أرغب في حجز موعد.', `الاسم: ${data.get('name')}`, `واتساب: ${data.get('phone')}`, `الخدمة: ${data.get('service')}`, `المناسبة والتاريخ: ${data.get('date')}`].join('\n');
    bookingForm.querySelector('.form-status').textContent = 'جاري فتح واتساب برسالة الحجز...';
    window.open(`${whatsappUrl}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  });
  document.querySelector('#year').textContent = new Date().getFullYear();
  if (window.AOS) AOS.init({ once: true, duration: 700, offset: 70 });
})();
