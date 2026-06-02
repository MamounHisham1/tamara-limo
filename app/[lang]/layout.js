import { Cairo, Inter } from "next/font/google";
import "../globals.css";

const cairo = Cairo({ subsets: ["arabic", "latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Tamara Limousine | ليموزين تمارا",
  description: "خدمة ليموزين فاخرة في مصر - Premium Limousine Service in Egypt",
};

export async function generateStaticParams() {
  return [{ lang: "ar" }, { lang: "en" }];
}

export default async function RootLayout({ children, params }) {
  const resolvedParams = await params;
  const lang = resolvedParams?.lang || "ar";
  const dir = lang === "ar" ? "rtl" : "ltr";
  const fontClass = lang === "ar" ? cairo.className : inter.className;

  return (
    <html lang={lang} dir={dir}>
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
