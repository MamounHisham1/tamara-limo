import styles from "./Hero.module.css";
import Image from "next/image";

export default function Hero({ dict }) {
  return (
    <section id="hero" className={styles.hero}>
      {/* Background */}
      <div className={styles.heroBg}>
        <Image
          src="/hero.png"
          alt="Tamara Limousine"
          fill
          priority
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
      </div>

      <div className={styles.heroGlow} />

      {/* Content */}
      <div className={styles.heroContent}>
        <div className={styles.heroBadge}>
          <span className={styles.badgeDot}></span>
          <span className={styles.badgeText}>{dict.badge}</span>
        </div>

        <h1 className={styles.heroTitle}>
          {dict.title_1}
          <span>{dict.title_2}</span>
        </h1>

        <p className={styles.heroDesc}>{dict.desc}</p>

        <div className={styles.heroCtas}>
          <a
            href="https://api.whatsapp.com/send/?phone=201274575752"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.navCta}
            style={{ padding: "0.8rem 2rem", fontSize: "1rem" }}
          >
            {dict.cta_whatsapp}
          </a>
          <a
            href="tel:01274575752"
            className={styles.navCta}
            style={{
              padding: "0.8rem 2rem",
              fontSize: "1rem",
              background: "transparent",
              color: "#ffffff",
              border: "1px solid rgba(255, 255, 255, 0.2)",
            }}
          >
            {dict.cta_call}
          </a>
        </div>

        {/* Stats */}
        <div className={styles.heroStats}>
          <div className={styles.stat}>
            <div className={styles.statNumber}>{dict.stats.exp_years}</div>
            <div className={styles.statLabel}>{dict.stats.exp_label}</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>{dict.stats.availability}</div>
            <div className={styles.statLabel}>{dict.stats.avail_label}</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>{dict.stats.clients}</div>
            <div className={styles.statLabel}>{dict.stats.client_label}</div>
          </div>
          <div className={styles.stat}>
            <div className={styles.statNumber}>{dict.stats.gov}</div>
            <div className={styles.statLabel}>{dict.stats.gov_label}</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollMouse}>
          <div className={styles.scrollDot}></div>
        </div>
      </div>
    </section>
  );
}
