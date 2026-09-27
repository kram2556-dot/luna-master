(() => {
  const galleryUrls = [
    ['./assets/bridal-portrait.webp','Bridal glow / عروس'],
    ['./assets/glam-face.webp','Soft glam / بشرة مضيئة'],
    ['./assets/makeup-application.webp','Defined eyes / عيون محددة'],
    ['./assets/bridal-side.webp','Editorial / تصوير'],
    ['./assets/editorial-eyes.webp','Statement look / لوك جريء'],
    ['./assets/lash-detail.webp','The details / التفاصيل']
  ];
  const instaUrls = [galleryUrls[0][0], galleryUrls[1][0], galleryUrls[2][0], galleryUrls[3][0], galleryUrls[4][0], galleryUrls[5][0]];
  const gallery = document.querySelector('#gallery');
  gallery.innerHTML = galleryUrls.map(([src, label]) => `<figure data-aos="fade-up"><img src="${src}" loading="lazy" alt="${label}" /><figcaption>${label} ↗</figcaption></figure>`).join('');
  document.querySelector('#instagram').innerHTML = instaUrls.map((src, i) => `<a href="https://instagram.com/lunabeauty" target="_blank" rel="noreferrer" data-aos="fade-up"><img src="${src}" loading="lazy" alt="Behind the glow ${i + 1}" /></a>`).join('');

  const comparison = document.querySelector('.comparison');
  const range = comparison.querySelector('input');
  const after = comparison.querySelector('.comparison-after');
  const handle = comparison.querySelector('.comparison-handle');
  const updateComparison = (value) => { after.style.width = `${value}%`; handle.style.left = `${value}%`; };
  range.addEventListener('input', (event) => updateComparison(event.target.value));
  updateComparison(range.value);

  const menu = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  menu.addEventListener('click', () => { const open = nav.classList.toggle('open'); menu.setAttribute('aria-expanded', String(open)); });
  nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { nav.classList.remove('open'); menu.setAttribute('aria-expanded', 'false'); }));

  const bookingForm = document.querySelector('#booking-form');
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(bookingForm);
    const message = ['مرحباً Luna Beauty Studio، أرغب في حجز موعد.', `الاسم: ${data.get('name')}`, `واتساب: ${data.get('phone')}`, `الخدمة: ${data.get('service')}`, `المناسبة والتاريخ: ${data.get('date')}`].join('\n');
    bookingForm.querySelector('.form-status').textContent = 'جاري فتح واتساب برسالة الحجز...';
    window.open(`https://wa.me/201000000000?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  });
  document.querySelector('#year').textContent = new Date().getFullYear();
  if (window.AOS) AOS.init({ once: true, duration: 700, offset: 70 });
})();
