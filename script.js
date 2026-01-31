// ========================================
// SAYFA Y√úKLENƒ∞NCE BA≈ûLATMA
// ========================================
document.addEventListener('DOMContentLoaded', function () {
    initMobileMenu();
    initSmoothScroll();
    initEmailJS();
    initContactForm();
    initQuickQuoteForm();
    initFAQAccordion();
    initScrollAnimations();
});

// ========================================
// MOBƒ∞L MEN√ú (HAMBURger MENU)
// ========================================
function initMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Men√º linklerine tƒ±klanƒ±nca men√ºy√º kapat
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
}

// ========================================
// YUMU≈ûAK KAYDIRMA (SMOOTH SCROLL)
// ========================================
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navbarHeight = document.querySelector('.navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// ========================================
// EMAƒ∞LJS BA≈ûLATMA (Form Mail Servisi)
// ========================================
function initEmailJS() {
    // EmailJS kullanƒ±cƒ± ID'nizi buraya girin (√ºcretsiz hesap a√ßtƒ±ktan sonra)
    // ≈ûimdilik pasif, ileride aktif hale getireceƒüiz
    // emailjs.init("YOUR_USER_ID");
}

// ========================================
// ƒ∞LETƒ∞≈ûƒ∞M FORMU
// ========================================
function initContactForm() {
    const form = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Form verilerini al
            const formData = {
                name: document.getElementById('name').value,
                phone: document.getElementById('phone').value,
                email: document.getElementById('email').value,
                service: document.getElementById('service').value,
                message: document.getElementById('message').value
            };

            // Basit doƒürulama
            if (!formData.name || !formData.phone || !formData.email || !formData.message) {
                showFormMessage('L√ºtfen t√ºm alanlarƒ± doldurun.', 'error');
                return;
            }

            // Telefon validasyonu
            const phoneRegex = /^[0-9]{10,11}$/;
            const cleanPhone = formData.phone.replace(/\s/g, '').replace(/\(/g, '').replace(/\)/g, '');
            if (!phoneRegex.test(cleanPhone)) {
                showFormMessage('Ge√ßerli bir telefon numarasƒ± girin.', 'error');
                return;
            }

            // Email validasyonu
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                showFormMessage('Ge√ßerli bir e-posta adresi girin.', 'error');
                return;
            }

            // Form g√∂nderme sim√ºlasyonu (EmailJS entegrasyonu sonra eklenecek)
            simulateFormSubmission(formData);
        });
    }
}

// ========================================
// FAQ ACCORDION
// ========================================
function initFAQAccordion() {
    console.log('FAQ Accordion initializing...');

    const faqItems = document.querySelectorAll('.faq-item');
    console.log('Found FAQ items:', faqItems.length);

    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question');

        if (question) {
            console.log('Setting up FAQ item', index);

            question.addEventListener('click', function () {
                console.log('FAQ clicked:', index);

                // T√ºm a√ßƒ±k FAQ'larƒ± kapat
                const allItems = document.querySelectorAll('.faq-item');
                allItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });

                // Bu FAQ'yƒ± toggle et
                item.classList.toggle('active');
                console.log('FAQ item active:', item.classList.contains('active'));
            });
        }
    });

    console.log('FAQ Accordion initialized!');
}

// ========================================
// FORM G√ñNDERƒ∞Mƒ∞ Sƒ∞M√úLASYONU
// ========================================
function simulateFormSubmission(formData) {
    const formMessage = document.getElementById('formMessage');
    const submitBtn = document.querySelector('.btn-submit');

    // Butonu devre dƒ±≈üƒ± bƒ±rak
    submitBtn.disabled = true;
    submitBtn.textContent = 'G√∂nderiliyor...';

    // 2 saniye bekle (ger√ßek durumda EmailJS'e g√∂nderecek)
    setTimeout(() => {
        // Ba≈üarƒ±lƒ± mesajƒ± g√∂ster
        showFormMessage('‚úì Mesajƒ±nƒ±z ba≈üarƒ±yla g√∂nderildi! En kƒ±sa s√ºrede size d√∂n√º≈ü yapacaƒüƒ±z.', 'success');

        // Formu sƒ±fƒ±rla
        document.getElementById('contactForm').reset();

        // Butonu tekrar aktif et
        submitBtn.disabled = false;
        submitBtn.textContent = 'G√∂nder';

        // Console'a form verisini yazdƒ±r (test i√ßin)
        console.log('Form G√∂nderildi:', formData);

        // 5 saniye sonra mesajƒ± gizle
        setTimeout(() => {
            formMessage.style.display = 'none';
        }, 5000);
    }, 2000);
}

// ========================================
// FORM MESAJI G√ñSTER
// ========================================
function showFormMessage(message, type) {
    const formMessage = document.getElementById('formMessage');
    formMessage.textContent = message;
    formMessage.className = 'form-message ' + type;
    formMessage.style.display = 'block';

    // 5 saniye sonra mesajƒ± gizle
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// ========================================
// GELƒ∞≈ûMƒ∞≈û SCROLL ANIMASYONLARI
// ========================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -80px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger efekti i√ßin delay ekle
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100);

                // Sayƒ± sayƒ±cƒ± animasyonu ba≈ülat
                if (entry.target.classList.contains('stat-number')) {
                    animateCounter(entry.target);
                }

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Animasyon yapƒ±lacak elemanlar
    const fadeElements = document.querySelectorAll('.service-card, .project-card, .certificate-item, .faq-item, .partner-card, .product-card');
    const sectionHeaders = document.querySelectorAll('.section-header');

    // Fade-in animasyonu ekle
    fadeElements.forEach((el, index) => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // Section header animasyonlarƒ±
    sectionHeaders.forEach(header => {
        header.classList.add('scale-in');
        observer.observe(header);
    });

    // Sayƒ± sayƒ±cƒ± i√ßin observer
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
}

// ========================================
// SAYI SAYICI ANIMASYONU
// ========================================
function animateCounter(element) {
    if (element.classList.contains('counted')) return;

    const target = parseInt(element.getAttribute('data-target') || element.textContent.replace(/\D/g, ''));
    const duration = 2000;
    const step = target / (duration / 16);
    let current = 0;

    element.classList.add('counted');

    const updateCounter = () => {
        current += step;
        if (current < target) {
            element.textContent = Math.floor(current) + '+';
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
        }
    };

    updateCounter();
}


// ========================================
// NAVBAR SCROLL EFEKTƒ∞
// ========================================
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.padding = '8px 0';
        navbar.style.background = 'rgba(15, 23, 42, 0.98)';
    } else {
        navbar.style.padding = '16px 0';
        navbar.style.background = 'rgba(15, 23, 42, 0.95)';
    }

    lastScroll = currentScroll;
});

// ========================================
// EMAƒ∞LJS ENTEGRASYONU (Ger√ßek Kullanƒ±m)
// ========================================
// Bu fonksiyonu EmailJS hesabƒ± a√ßƒ±p ayarladƒ±ktan sonra kullanacaƒüƒ±z
/*
function sendEmailWithEmailJS(formData) {
    emailjs.send("service_id", "template_id", {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        service_type: formData.service,
        message: formData.message
    })
    .then(function(response) {
        showFormMessage('‚úì Mesajƒ±nƒ±z ba≈üarƒ±yla g√∂nderildi!', 'success');
        document.getElementById('contactForm').reset();
    }, function(error) {
        showFormMessage('‚úó Bir hata olu≈ütu. L√ºtfen tekrar deneyin.', 'error');
        console.error('EmailJS Error:', error);
    });
}
*/

// ========================================
// CONSOLE'DA HO≈ûGELDƒ∞N MESAJI
// ========================================
console.log('%cüè¢ Web Sitesi Hazƒ±r!', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cGeli≈ütirici: Antigravity AI', 'color: #10b981; font-size: 14px;');
/ /   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  
 / /   H I Z L I   T E K L ƒ ∞ F   F O R M U  
 / /   = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = = =  
 f u n c t i o n   i n i t Q u i c k Q u o t e F o r m ( )   {  
         c o n s t   f o r m   =   d o c u m e n t . g e t E l e m e n t B y I d ( ' q u i c k Q u o t e F o r m ' ) ;  
  
         i f   ( f o r m )   {  
                 f o r m . a d d E v e n t L i s t e n e r ( ' s u b m i t ' ,   f u n c t i o n   ( e )   {  
                         e . p r e v e n t D e f a u l t ( ) ;  
  
                         c o n s t   f o r m D a t a   =   {  
                                 n a m e :   f o r m . q u e r y S e l e c t o r ( ' [ n a m e = " n a m e " ] ' ) . v a l u e ,  
                                 p h o n e :   f o r m . q u e r y S e l e c t o r ( ' [ n a m e = " p h o n e " ] ' ) . v a l u e ,  
                                 s e r v i c e :   f o r m . q u e r y S e l e c t o r ( ' [ n a m e = " s e r v i c e " ] ' ) . v a l u e ,  
                                 b u i l d i n g :   f o r m . q u e r y S e l e c t o r ( ' [ n a m e = " b u i l d i n g " ] ' ) . v a l u e  
                         } ;  
  
                         / /   B a s i t   d o ƒ xr u l a m a  
                         i f   ( ! f o r m D a t a . n a m e   | |   ! f o r m D a t a . p h o n e   | |   ! f o r m D a t a . s e r v i c e   | |   ! f o r m D a t a . b u i l d i n g )   {  
                                 s h o w Q u i c k F o r m M e s s a g e ( ' L √ º t f e n   t √ º m   a l a n l a r ƒ ±   d o l d u r u n . ' ,   ' e r r o r ' ) ;  
                                 r e t u r n ;  
                         }  
  
                         / /   T e l e f o n   v a l i d a s y o n u  
                         c o n s t   p h o n e R e g e x   =   / ^ [ 0 - 9 ] { 1 0 , 1 1 } $ / ;  
                         c o n s t   c l e a n P h o n e   =   f o r m D a t a . p h o n e . r e p l a c e ( / \ s / g ,   ' ' ) . r e p l a c e ( / \ ( / g ,   ' ' ) . r e p l a c e ( / \ ) / g ,   ' ' ) ;  
                         i f   ( ! p h o n e R e g e x . t e s t ( c l e a n P h o n e ) )   {  
                                 s h o w Q u i c k F o r m M e s s a g e ( ' G e √ ß e r l i   b i r   t e l e f o n   n u m a r a s ƒ ±   g i r i n . ' ,   ' e r r o r ' ) ;  
                                 r e t u r n ;  
                         }  
  
                         / /   W h a t s A p p   m e s a j ƒ ±   o l u ≈ xt u r  
                         c o n s t   w h a t s a p p M e s s a g e   =   ` M e r h a b a ,   a s a n s √ ∂ r   t e k l i f i   a l m a k   i s t i y o r u m . \ n \ n A d ƒ ± m :   $ { f o r m D a t a . n a m e } \ n T e l e f o n :   $ { f o r m D a t a . p h o n e } \ n H i z m e t :   $ { f o r m D a t a . s e r v i c e } \ n B i n a   T i p i :   $ { f o r m D a t a . b u i l d i n g } ` ;  
                         c o n s t   w h a t s a p p U R L   =   ` h t t p s : / / w a . m e / 9 0 5 3 8 6 1 8 2 0 9 7 ? t e x t = $ { e n c o d e U R I C o m p o n e n t ( w h a t s a p p M e s s a g e ) } ` ;  
  
                         / /   B i l g i l e n d i r m e   m o d a l   g √ ∂ s t e r  
                         s h o w Q u i c k F o r m M o d a l ( f o r m D a t a ,   w h a t s a p p U R L ) ;  
                 } ) ;  
         }  
 }  
  
 / /   H ƒ ± z l ƒ ±   t e k l i f   f o r m u   i √ ß i n   m o d a l   g √ ∂ s t e r i c i  
 f u n c t i o n   s h o w Q u i c k F o r m M o d a l ( f o r m D a t a ,   w h a t s a p p U R L )   {  
         / /   M o d a l   H T M L   o l u ≈ xt u r  
         c o n s t   m o d a l H T M L   =   `  
                 < d i v   c l a s s = " q u i c k - q u o t e - m o d a l "   i d = " q u i c k Q u o t e M o d a l " >  
                         < d i v   c l a s s = " m o d a l - c o n t e n t " >  
                                 < d i v   c l a s s = " m o d a l - i c o n " > ‚ S < / d i v >  
                                 < h 3 > T a l e b i n i z   A l ƒ ± n d ƒ ± ! < / h 3 >  
                                 < p > S a y ƒ ± n   < s t r o n g > $ { f o r m D a t a . n a m e } < / s t r o n g > ,   t a l e b i n i z   b i z e   u l a ≈ xt ƒ ± . < / p >  
                                 < p   c l a s s = " m o d a l - i n f o " > S i z e   W h a t s A p p   v e y a   t e l e f o n   a r a c ƒ ± l ƒ ± ƒ xƒ ± y l a   < s t r o n g > e n   k ƒ ± s a   s √ º r e d e < / s t r o n g >   d e t a y l ƒ ±   t e k l i f   s u n u l a c a k t ƒ ± r . < / p >  
                                 < d i v   c l a s s = " m o d a l - a c t i o n s " >  
                                         < a   h r e f = " $ { w h a t s a p p U R L } "   t a r g e t = " _ b l a n k "   c l a s s = " m o d a l - b t n   m o d a l - b t n - p r i m a r y " >  
                                                 W h a t s A p p ' t a n   D e v a m   E t  
                                         < / a >  
                                         < b u t t o n   o n c l i c k = " c l o s e Q u i c k M o d a l ( ) "   c l a s s = " m o d a l - b t n   m o d a l - b t n - s e c o n d a r y " >  
                                                 T a m a m  
                                         < / b u t t o n >  
                                 < / d i v >  
                         < / d i v >  
                         < d i v   c l a s s = " m o d a l - o v e r l a y "   o n c l i c k = " c l o s e Q u i c k M o d a l ( ) " > < / d i v >  
                 < / d i v >  
         ` ;  
  
         d o c u m e n t . b o d y . i n s e r t A d j a c e n t H T M L ( ' b e f o r e e n d ' ,   m o d a l H T M L ) ;  
  
         / /   A n i m a s y o n l u   g √ ∂ s t e r  
         s e t T i m e o u t ( ( )   = >   {  
                 d o c u m e n t . g e t E l e m e n t B y I d ( ' q u i c k Q u o t e M o d a l ' ) . c l a s s L i s t . a d d ( ' s h o w ' ) ;  
         } ,   1 0 ) ;  
 }  
  
 / /   M o d a l   k a p a t m a   f o n k s i y o n u   ( g l o b a l   o l m a l ƒ ± )  
 f u n c t i o n   c l o s e Q u i c k M o d a l ( )   {  
         c o n s t   m o d a l   =   d o c u m e n t . g e t E l e m e n t B y I d ( ' q u i c k Q u o t e M o d a l ' ) ;  
         i f   ( m o d a l )   {  
                 m o d a l . c l a s s L i s t . r e m o v e ( ' s h o w ' ) ;  
                 s e t T i m e o u t ( ( )   = >   {  
                         m o d a l . r e m o v e ( ) ;  
                 } ,   3 0 0 ) ;  
         }  
 }  
  
 / /   H ƒ ± z l ƒ ±   f o r m   m e s a j   g √ ∂ s t e r i c i  
 f u n c t i o n   s h o w Q u i c k F o r m M e s s a g e ( m e s s a g e ,   t y p e )   {  
         c o n s t   m e s s a g e D i v   =   d o c u m e n t . c r e a t e E l e m e n t ( ' d i v ' ) ;  
         m e s s a g e D i v . c l a s s N a m e   =   ` f o r m - m e s s a g e   $ { t y p e } ` ;  
         m e s s a g e D i v . t e x t C o n t e n t   =   m e s s a g e ;  
  
         c o n s t   f o r m   =   d o c u m e n t . g e t E l e m e n t B y I d ( ' q u i c k Q u o t e F o r m ' ) ;  
         f o r m . i n s e r t B e f o r e ( m e s s a g e D i v ,   f o r m . f i r s t C h i l d ) ;  
  
         s e t T i m e o u t ( ( )   = >   {  
                 m e s s a g e D i v . r e m o v e ( ) ;  
         } ,   4 0 0 0 ) ;  
 }  
  
 f u n c t i o n   a n i m a t e C o u n t e r ( e l e m e n t )   {  
         i f   ( e l e m e n t . c l a s s L i s t . c o n t a i n s ( ' c o u n t e d ' ) )   r e t u r n ;  
         c o n s t   t a r g e t T e x t   =   e l e m e n t . g e t A t t r i b u t e ( ' d a t a - t a r g e t ' ) ;  
         i f   ( ! t a r g e t T e x t )   r e t u r n ;  
         c o n s t   t a r g e t   =   p a r s e I n t ( t a r g e t T e x t ) ;  
         c o n s t   d u r a t i o n   =   2 0 0 0 ;  
         c o n s t   s t e p   =   t a r g e t   /   ( d u r a t i o n   /   1 6 ) ;  
         l e t   c u r r e n t   =   0 ;  
         e l e m e n t . c l a s s L i s t . a d d ( ' c o u n t e d ' ) ;  
         c o n s t   u p d a t e C o u n t e r   =   ( )   = >   {  
                 c u r r e n t   + =   s t e p ;  
                 i f   ( c u r r e n t   <   t a r g e t )   {  
                         e l e m e n t . t e x t C o n t e n t   =   M a t h . f l o o r ( c u r r e n t )   +   ' + ' ;  
                         r e q u e s t A n i m a t i o n F r a m e ( u p d a t e C o u n t e r ) ;  
                 }   e l s e   {  
                         e l e m e n t . t e x t C o n t e n t   =   t a r g e t   +   ' + ' ;  
                 }  
         } ;  
         u p d a t e C o u n t e r ( ) ;  
 }  
 