
// Konsol mesajı
console.log("Uruntext.com'a Hoş geldiniz!");

// İletişim formu gönderim uyarısı
document.querySelector('.contact-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mesajınız başarıyla gönderildi! En kısa sürede sizinle iletişime geçeceğiz.');
    this.reset();
});

// Küçük açılış animasyonları için fade-in class'ı ekleme
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".section, .hero").forEach(section => {
        section.classList.add("fade-in");
    });
});
