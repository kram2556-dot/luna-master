(() => {
  if(window.AOS) AOS.init({once:true, duration:800});
  const galleryUrls=[
    ['https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=800','Soft glam / بشرة مضيئة','soft'],
    ['https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800','Bridal glow / عروس','bridal'],
    ['https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800','Natural skin / طبيعي','bridal'],
    ['https://images.unsplash.com/photo-1484186139897-d5fc6b908812?q=80&w=800','Editorial eyes / تصوير','editorial'],
    ['https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800','Statement look / جريء','editorial'],
    ['https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=800','The details / التفاصيل','soft']
  ];  const instaUrls=['https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1200','https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=800','https://images.unsplash.com/photo-1484186139897-d5fc6b908812?q=80&w=800','https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=800','https://images.unsplash.com/photo-1515688594390-b649af70d282?q=80&w=800','https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=800'];
  const gallery=document.querySelector('#gallery');
  const renderGallery=(filter='all')=>{gallery.innerHTML=galleryUrls.map(([src,label,type])=>type===filter||filter==='all'?`<figure data-type="${type}"><img src="${src}" loading="lazy" alt="${label}" /><figcaption>${label} ↗</figcaption></figure>`:'').join('');gallery.querySelectorAll('figure').forEach(fig=>fig.addEventListener('click',()=>{const img=fig.querySelector('img');const w=window.open('','_blank');w.document.write(`<title>${img.alt}</title><style>body{margin:0;background:#FFFBF7;display:grid;place-items:center;min-height:100vh}img{max-width:96vw;max-height:96vh;object-fit:contain}</style><img src="${img.src}" alt="${img.alt}">`)}))};renderGallery();
  document.querySelectorAll('.filters button').forEach(btn=>btn.addEventListener('click',()=>{document.querySelector('.filters .active').classList.remove('active');btn.classList.add('active');renderGallery(btn.dataset.filter)}));
  document.querySelector('#instagram').innerHTML=instaUrls.map((src,i)=>`<a href="https://instagram.com" target="_blank" rel="noreferrer"><img src="${src}" loading="lazy" alt="Instagram look ${i+1}" /></a>`).join('');
  const root=document.documentElement,langBtn=document.querySelector('#lang');let lang=localStorage.getItem('luna-lang')||'ar';
  const setLang=(next)=>{lang=next;localStorage.setItem('luna-lang',lang);root.lang=lang;root.dir=lang==='ar'?'rtl':'ltr';document.querySelectorAll('[data-ar]').forEach(el=>el.textContent=el.dataset[lang]);document.querySelectorAll('[data-html-ar]').forEach(el=>el.innerHTML=el.dataset[`html${lang==='ar'?'Ar':'En'}`]);langBtn.textContent=lang==='ar'?'EN':'عربي';};
  langBtn.addEventListener('click',()=>setLang(lang==='ar'?'en':'ar'));setLang(lang);
  const header=document.querySelector('.site-header');addEventListener('scroll',()=>header.classList.toggle('scrolled',scrollY>30),{passive:true});
  const menu=document.querySelector('.menu-toggle'),nav=document.querySelector('nav');menu.addEventListener('click',()=>nav.classList.toggle('open'));nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(e=>observer.observe(e));
  const range=document.querySelector('.ba-card input'),after=document.querySelector('.after-img');range.addEventListener('input',e=>after.style.width=`${e.target.value}%`);
  const bookingForm=document.querySelector('#booking-form');
  const bookingStatus=bookingForm?.querySelector('.form-status');
  bookingForm?.addEventListener('submit',event=>{
    event.preventDefault();
    const data=new FormData(bookingForm);
    const reference=data.get('reference');
    const message=[
      'مرحباً Luna Beauty Studio، أرغب في حجز موعد.',
      `الاسم: ${data.get('name')}`,
      `واتساب: ${data.get('phone')}`,
      `الخدمة: ${data.get('service')}`,
      `المناسبة والتاريخ: ${data.get('date')}`,
      `المكان: ${data.get('location')||'لم يحدد بعد'}`,
      `الرسالة: ${data.get('message')||'لا توجد رسالة إضافية'}`,
      reference?.name ? `صورة مرجعية مرفقة: ${reference.name} (يرجى إرسالها في المحادثة)` : 'لا توجد صورة مرجعية'
    ].join('\n');
    bookingStatus.textContent=reference?.name ? `تم اختيار الصورة: ${reference.name} — أرسليها بعد فتح واتساب.` : 'جاري فتح واتساب برسالة الحجز...';
    window.open(`https://wa.me/201000000000?text=${encodeURIComponent(message)}`,'_blank','noopener,noreferrer');
  });
  document.querySelector('#year').textContent=new Date().getFullYear();
})();
