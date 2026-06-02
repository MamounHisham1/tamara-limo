import Image from "next/image";
import styles from "./Services.module.css";

const services = [
  {
    title: "ليموزين مطار القاهرة الدولي",
    desc: "خدمة استقبال وتوصيل من وإلى مطار القاهرة الدولي بسيارات حديثة موديل 2024",
    image: "/cairo-airport.png",
    tag: "مطار القاهرة",
    discount: "خصم 30%",
  },
  {
    title: "ليموزين مطار برج العرب",
    desc: "خدمة استقبال وتوصيل مطار برج العرب الإسكندرية بسيارات حديثة وسائقين محترفين",
    image: "/alexandria.png",
    tag: "الإسكندرية",
    discount: "خصم 30%",
  },
  {
    title: "ليموزين الغردقة والجونة",
    desc: "خدمة استقبال وتوصيل الغردقة والجونة بأحدث السيارات وبأقل تكلفة",
    image: "/hurghada.png",
    tag: "الغردقة",
    discount: "خصم 30%",
  },
  {
    title: "ليموزين شرم الشيخ",
    desc: "خدمة استقبال وتوصيل شرم الشيخ ورأس شيطان بسيارات حديثة موديل 2024",
    image: "/sharm-elsheikh.png",
    tag: "شرم الشيخ",
    discount: "خصم 30%",
  },
  {
    title: "توصيل القاهرة - الإسكندرية",
    desc: "خدمة التوصيل بين القاهرة والإسكندرية والعكس بأقل تكلفة وأحدث السيارات",
    image: "/car-interior.png",
    tag: "بين المحافظات",
  },
  {
    title: "ليموزين خدمة الفنادق",
    desc: "خدمة ليموزين من وإلى جميع فنادق مصر — التجمع، أكتوبر، الشيخ زايد، العين السخنة",
    image: "/hero.png",
    tag: "فنادق مصر",
  },
];

export default function Services() {
  return (
    <section id="services" className={styles.services}>
      <div className={styles.servicesBg}></div>
      <div className={styles.container}>
        {/* Header */}
        <div className={styles.header}>
          <div className="section-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            خدماتنا
          </div>
          <h2 className="section-title">
            أقوى الخدمات و<span>أفضل العروض</span>
          </h2>
          <p className="section-subtitle" style={{ margin: "0 auto" }}>
            نقدم أفضل ما لدينا في جميع محافظات مصر — سيارات حديثة موديل 2024
            مع سائقين محترفين
          </p>
        </div>

        {/* Grid */}
        <div className={styles.grid}>
          {services.map((service, index) => (
            <a
              key={index}
              href="https://api.whatsapp.com/send/?phone=201274575752"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={styles.cardImage}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: "cover" }}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className={styles.cardImageOverlay}></div>
                {service.discount && (
                  <span className={styles.cardDiscount}>{service.discount}</span>
                )}
              </div>
              <div className={styles.cardBody}>
                <h3 className={styles.cardTitle}>{service.title}</h3>
                <p className={styles.cardDesc}>{service.desc}</p>
                <div className={styles.cardMeta}>
                  <span className={styles.cardTag}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    {service.tag}
                  </span>
                  <span className={styles.cardArrow}>←</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
