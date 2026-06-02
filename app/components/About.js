import Image from "next/image";
import styles from "./About.module.css";

const features = [
  {
    icon: "🕐",
    title: "خدمة ٢٤ ساعة",
    desc: "نعمل على مدار الساعة طوال أيام الأسبوع لخدمتكم في أي وقت",
  },
  {
    icon: "🚘",
    title: "سيارات حديثة",
    desc: "أحدث السيارات موديل 2024 مجهزة بالكامل لراحتكم",
  },
  {
    icon: "📍",
    title: "تغطية شاملة",
    desc: "خدمة ليموزين في جميع محافظات مصر ومن وإلى جميع المطارات",
  },
  {
    icon: "💎",
    title: "أسعار تنافسية",
    desc: "أفضل الأسعار مع خصومات تصل إلى 30% على جميع الرحلات",
  },
];

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutGlow}></div>
      <div className={styles.container}>
        {/* Image Side */}
        <div className={styles.imageSection}>
          <div className={styles.imageWrapper}>
            <Image
              src="/car-interior.png"
              alt="داخلية سيارات ليموزين تمارا الفاخرة"
              width={600}
              height={500}
              style={{ objectFit: "cover", width: "100%", height: "500px" }}
            />
            <div className={styles.imageOverlay}></div>
          </div>
          <div className={styles.experienceBadge}>
            <div className={styles.expNumber}>+20</div>
            <div className={styles.expLabel}>سنة خبرة</div>
          </div>
        </div>

        {/* Content Side */}
        <div className={styles.content}>
          <div className="section-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 16v-4M12 8h.01" />
            </svg>
            من نحن
          </div>
          <h2 className="section-title">
            شركة <span>ليموزين تمارا</span>
          </h2>
          <div className="gold-divider"></div>
          <p className="section-subtitle">
            نحن شركة رائدة في خدمة الليموزين في جميع محافظات مصر منذ عام 2005.
            نعمل دائماً على تطوير جميع خدماتنا ونتطلع لتقديم أفضل الخدمات
            لجميع العملاء. نرحب بالتعاون مع شركات السياحة والفنادق ومؤسسات
            الدولة.
          </p>

          <div className={styles.features}>
            {features.map((feature, index) => (
              <div key={index} className={styles.feature}>
                <div className={styles.featureIcon}>{feature.icon}</div>
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
            className="btn-primary"
          >
            تواصل معنا الآن
          </a>
        </div>
      </div>
    </section>
  );
}
