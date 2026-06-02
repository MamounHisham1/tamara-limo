"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./Navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar({ dict, lang }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const switchLanguageUrl = () => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    const nextLang = lang === "ar" ? "en" : "ar";
    if (segments.length >= 2 && (segments[1] === "ar" || segments[1] === "en")) {
      segments[1] = nextLang;
    } else {
      segments.splice(1, 0, nextLang);
    }
    return segments.join("/") || "/";
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}>
      <div className={styles.navContainer}>
        {/* Logo */}
        <Link href={`/${lang}`} className={styles.logo}>
          <Image 
            src="/tamara-logo.png" 
            alt="Tamara Limousine Logo" 
            width={150} 
            height={50} 
            style={{ objectFit: 'contain', maxHeight: '50px', width: 'auto' }}
            priority
          />
        </Link>

        {/* Desktop Links */}
        <ul className={styles.navLinks}>
          <li><a href="#hero" className={styles.navLink}>{dict.home}</a></li>
          <li><a href="#services" className={styles.navLink}>{dict.services}</a></li>
          <li><a href="#about" className={styles.navLink}>{dict.about}</a></li>
          <li><a href="#contact" className={styles.navLink}>{dict.contact}</a></li>
          
          <Link href={switchLanguageUrl()} className={styles.langSwitch}>
            {lang === "ar" ? "English" : "عربي"}
          </Link>

          <li>
            <a href="https://api.whatsapp.com/send/?phone=201274575752" target="_blank" rel="noopener noreferrer" className={styles.navCta}>
              {dict.book_whatsapp}
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Menu"
        >
          <div className={`${styles.hamburger} ${mobileOpen ? styles.hamburgerOpen : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ""}`}>
        <a href="#hero" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>{dict.home}</a>
        <a href="#services" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>{dict.services}</a>
        <a href="#about" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>{dict.about}</a>
        <a href="#contact" className={styles.mobileLink} onClick={() => setMobileOpen(false)}>{dict.contact}</a>
        <Link href={switchLanguageUrl()} className={styles.mobileLink} onClick={() => setMobileOpen(false)}>
          {lang === "ar" ? "English" : "عربي"}
        </Link>
        <a href="https://api.whatsapp.com/send/?phone=201274575752" target="_blank" rel="noopener noreferrer" className={styles.navCta} onClick={() => setMobileOpen(false)}>
          {dict.book_whatsapp}
        </a>
      </div>
    </nav>
  );
}
