import styles from "./Contact.module.css";

const contactCards = [
  {
    icon: "📞",
    title: "اتصل بنا",
    info: "01274575752",
    href: "tel:01274575752",
    sub: "المكتب الرئيسي",
  },
  {
    icon: "📱",
    title: "واتساب",
    info: "01274575752",
    href: "https://api.whatsapp.com/send/?phone=201274575752",
    sub: "رد فوري على مدار الساعة",
  },
  {
    icon: "📍",
    title: "العنوان",
    info: "سيزونز بارك مول",
    href: "https://maps.google.com/?q=4J2P+PG+Second+New+Cairo",
    sub: "القاهرة الجديدة، القاهرة",
  },
];

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.contactBg}></div>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className="section-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
            </svg>
            تواصل معنا
          </div>
          <h2 className="section-title">
            نحن دائماً <span>في خدمتك</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            لا تتردد بالاتصال بنا على الأرقام التالية أو زيارتنا في أقرب فرع.
            نتمنى لكم رحلة سعيدة!
          </p>
        </div>

        {/* Contact Cards */}
        <div className={styles.grid}>
          {contactCards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardIcon}>{card.icon}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <a
                href={card.href}
                target={card.href.startsWith("http") ? "_blank" : undefined}
                rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className={styles.cardInfo}
              >
                {card.info}
              </a>
              <p className={styles.cardSub}>{card.sub}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className={styles.ctaSection}>
          <h3 className={styles.ctaTitle}>
            خصم 30% على جميع الرحلات
          </h3>
          <p className={styles.ctaDesc}>
            احجز الآن واستمتع بخصم حصري على جميع خدمات الليموزين في مصر
          </p>
          <div className={styles.ctaButtons}>
            <a
              href="https://api.whatsapp.com/send/?phone=201274575752"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              احجز عبر واتساب
            </a>
            <a href="tel:01274575752" className="btn-secondary">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
              </svg>
              اتصل الآن
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
