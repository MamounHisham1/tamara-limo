import styles from "./Contact.module.css";

export default function Contact({ dict }) {
  const getIcon = (index) => {
    switch(index) {
      case 0: return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
      case 1: return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>;
      case 2: return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
      default: return null;
    }
  };

  return (
    <section id="contact" className={styles.contact}>
      <div className={styles.container}>
        <div className={styles.header}>
          <div className="heroBadge" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 1.5rem", background: "rgba(201, 152, 10, 0.1)", border: "1px solid rgba(201, 152, 10, 0.3)", borderRadius: "9999px", marginBottom: "1rem" }}>
            <span className="badgeText" style={{ fontSize: "0.85rem", color: "#e8b810", fontWeight: "600" }}>{dict.badge}</span>
          </div>
          <h2 className="heroTitle" style={{ fontSize: "2.5rem", marginBottom: "1rem", color: "#fff" }}>
            {dict.title_1} <span style={{ display: "block", background: "linear-gradient(135deg, #c9980a 0%, #f5cf48 50%, #e8b810 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{dict.title_2}</span>
          </h2>
          <p className="heroDesc" style={{ color: "#a8a4a0", maxWidth: "600px", margin: "0 auto" }}>
            {dict.subtitle}
          </p>
        </div>

        <div className={styles.grid}>
          {dict.cards.map((card, idx) => {
            const href = idx === 0 ? "tel:01274575752" : (idx === 1 ? "https://api.whatsapp.com/send/?phone=201274575752" : "https://maps.google.com/?q=4J2P+PG+Second+New+Cairo");
            return (
              <a key={idx} href={href} target={idx !== 0 ? "_blank" : undefined} rel={idx !== 0 ? "noopener noreferrer" : undefined} className={styles.card}>
                <div className={styles.iconWrapper}>
                  {getIcon(idx)}
                </div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardInfo} dir="ltr">{card.info}</p>
                <p className={styles.cardSub}>{card.sub}</p>
              </a>
            );
          })}
        </div>

        {/* Promo CTA */}
        <div className={styles.promoBanner}>
          <div className={styles.promoContent}>
            <h3>{dict.promo_title}</h3>
            <p>{dict.promo_desc}</p>
          </div>
          <div className={styles.promoCtas}>
            <a
              href="https://api.whatsapp.com/send/?phone=201274575752"
              target="_blank"
              rel="noopener noreferrer"
              className="navCta"
              style={{ display: "inline-flex", padding: "0.8rem 2rem", background: "linear-gradient(135deg, #c9980a 0%, #f5cf48 50%, #e8b810 100%)", color: "#0a0a0f", fontWeight: "700", borderRadius: "9999px", textDecoration: "none" }}
            >
              {dict.cta_whatsapp}
            </a>
            <a
              href="tel:01274575752"
              className="navCta"
              style={{ display: "inline-flex", padding: "0.8rem 2rem", background: "rgba(255,255,255,0.1)", color: "#ffffff", fontWeight: "700", borderRadius: "9999px", textDecoration: "none", border: "1px solid rgba(255,255,255,0.2)" }}
            >
              {dict.cta_call}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
