import "./globals.css";

export const metadata = {
  title: "تمارا ليموزين | خدمات ليموزين فاخرة في جميع محافظات مصر",
  description:
    "تمارا لخدمات ليموزين المطار - أفضل خدمة ليموزين على مستوى محافظات مصر. سيارات حديثة، سائقين محترفين، خدمة 24 ساعة. استقبال وتوصيل من وإلى جميع المطارات والمحافظات.",
  keywords:
    "ليموزين مصر, ليموزين المطار, ليموزين القاهرة, ليموزين الاسكندرية, ليموزين شرم الشيخ, ليموزين الغردقة, تمارا ليموزين, خدمة ليموزين",
  openGraph: {
    title: "تمارا ليموزين | خدمات ليموزين فاخرة",
    description:
      "أفضل خدمة ليموزين على مستوى محافظات مصر - سيارات حديثة وخدمة 24 ساعة",
    url: "https://tamara-limo.com",
    siteName: "تمارا ليموزين",
    locale: "ar_EG",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
