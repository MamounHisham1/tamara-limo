import styles from "./About.module.css";
import Image from "next/image";

export default function About({ dict }) {
  const getIcon = (index) => {
    switch(index) {
      case 0: return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>;
      case 1: return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
      case 2: return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>;
      case 3: return <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>;
      default: return null;
    }
  };

  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutGlow} />
      
      <div className={styles.container}>
        {/* Image Section */}
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <Image
              src="/luxury-limo-interior.png"
              alt="Tamara Limousine Luxury Interior"
              fill
            />
            <div className={styles.imageOverlay} />
          </div>
          
          <div className={styles.experienceBadge}>
            <div className={styles.expNumber}>{dict.exp_number}</div>
            <div className={styles.expLabel}>{dict.exp_label}</div>
          </div>
        </div>

        {/* Content Section */}
        <div className={styles.content}>
          <div className="heroBadge" style={{ display: "inline-flex", alignItems: "center", gap: "0.75rem", padding: "0.6rem 1.5rem", background: "rgba(201, 152, 10, 0.1)", border: "1px solid rgba(201, 152, 10, 0.3)", borderRadius: "9999px", marginBottom: "1.5rem" }}>
            <span className="badgeText" style={{ fontSize: "0.85rem", color: "#e8b810", fontWeight: "600" }}>
              {dict.badge}
            </span>
          </div>

          <h2 className="heroTitle" style={{ fontFamily: "'Cairo', sans-serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "900", color: "#ffffff", lineHeight: "1.3", marginBottom: "1rem" }}>
            {dict.title_1}
            <span style={{ display: "block", background: "linear-gradient(135deg, #c9980a 0%, #f5cf48 50%, #e8b810 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              {dict.title_2}
            </span>
          </h2>

          <p className="heroDesc" style={{ fontSize: "1.1rem", color: "#a8a4a0", lineHeight: "1.8", marginBottom: "2rem" }}>
            {dict.subtitle}
          </p>

          <div className={styles.features}>
            {dict.features.map((feature, idx) => (
              <div key={idx} className={styles.feature}>
                <div className={styles.featureIcon}>
                  {getIcon(idx)}
                </div>
                <div className={styles.featureText}>
                  <h4>{feature.title}</h4>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="https://api.whatsapp.com/send/?phone=201274575752"
            target="_blank"
            rel="noopener noreferrer"
            className="navCta"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.8rem 2rem", background: "linear-gradient(135deg, #c9980a 0%, #f5cf48 50%, #e8b810 100%)", color: "#0a0a0f", fontWeight: "700", fontSize: "1rem", borderRadius: "9999px", textDecoration: "none", transition: "transform 300ms ease" }}
          >
            {dict.cta}
          </a>
        </div>
      </div>
    </section>
  );
}
