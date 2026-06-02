import styles from "./Services.module.css";
import Image from "next/image";

export default function Services({ dict }) {
  const images = [
    "/cairo-airport.png",
    "/alexandria.png",
    "/hurghada.png",
    "/sharm-elsheikh.png",
    "/hero.png",
    "/car-interior.png"
  ];

  return (
    <section id="services" className={styles.services}>
      <div className={styles.servicesBg} />
      
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.heroBadge} style={{ marginBottom: "1rem" }}>
            <span className={styles.badgeText}>{dict.badge}</span>
          </div>
          <h2 className={styles.heroTitle} style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
            {dict.title_1} <span>{dict.title_2}</span>
          </h2>
          <p className={styles.heroDesc}>
            {dict.subtitle}
          </p>
        </div>

        <div className={styles.grid}>
          {dict.items.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardImage}>
                {service.discount && (
                  <div className={styles.cardDiscount}>{service.discount}</div>
                )}
                <Image
                  src={images[index % images.length]}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
                <div className={styles.cardImageOverlay} />
              </div>
              
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
                
                <div className={styles.cardMeta}>
                  <span className={styles.cardTag}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                    </svg>
                    {service.tag}
                  </span>
                  
                  <div className={styles.cardArrow}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
