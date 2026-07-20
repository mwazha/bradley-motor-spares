import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header";
import FloatingContact from "../components/FloatingContact";

export const metadata: Metadata = {
  title: "Bradley Motor Spares Pvt Ltd",
  description: "Trusted motor spares, repairs, and expert advice for drivers and garages.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg" }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <FloatingContact />
        <footer className="site-footer">
          <div className="site-footer__left">
            <span>© 2026 Bradley Motor Spares Pvt Ltd. All Rights Reserved</span>
            <span className="site-footer__hours">Mon–Fri: 7:30AM–5PM • Sat: 8AM–1PM • Sun/Public Holidays: Closed</span>
          </div>
          <div className="site-footer__center">Developed &amp; Maintained by Venex_Media +263782561331|787660665</div>
          <div className="site-footer__right">
            <a
              href="https://wa.me/263778843819?text=Hello%20Bradley%20Motor%20Spares"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Bradley Motor Spares on WhatsApp"
              className="site-footer__social site-footer__whatsapp"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M13.5 4.2A8.5 8.5 0 0 0 5.2 12.4a8.4 8.4 0 0 0 1.4 4.5L4.5 20l3.2-1.2a8.5 8.5 0 1 0 5.8-14.6Zm0 15.4a7 7 0 0 1-3.6-1l-.3-.2-1.9.7.7-1.8-.2-.3a7 7 0 0 1 5.3-11.3 7 7 0 0 1 0 14Zm3.8-5.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.4.1-.1.2-.5.7-.7.8-.1.1-.3.2-.5.1-.2-.1-1-.4-1.8-1.1-.7-.6-1.2-1.3-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.2.3-.4.1-.1.2-.2.2-.4 0-.2 0-.3-.1-.4-.1-.1-.5-1.2-.7-1.7-.2-.5-.4-.4-.6-.4h-.4c-.2 0-.4.1-.6.2-.2.2-.8.8-.8 1.9 0 1.1.9 2.3 1 2.4.1.1 1.7 2.5 4.2 3.5.6.2 1.1.3 1.5.4.6.2 1.1.2 1.5.1.5-.1 1.5-.6 1.8-1.2.3-.6.3-1.1.2-1.2-.1-.1-.2-.2-.4-.3Z"
                />
              </svg>
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61583249974082&__cft__[0]=AZYWxKHEFh6otxBON5_W1bYfvNzOgAPCkMRt9E0ucMsMleA9VM8KrqRAIy__KIa_vEGari6M20PQWJ_KnEwZaEy7AxmAuMpKSWOZKAb1JhI70upUrmJ3k7UnzKDKX7KR5qKyaNa3qKnQDfrQHY3Sv2bGYSq6KZd1J5I2eIiHLDm2vcpVyKNrfx-IpvvuPJvfQ7hSr51BqH1EPFzekEzXA7Pn&__tn__=-UC%2CP-R"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit Bradley Motor Spares on Facebook"
              className="site-footer__social site-footer__facebook"
            >
              <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path
                  fill="currentColor"
                  d="M13.5 22v-8.5h2.8l.4-3.2h-3.2V4.7c0-.9.3-1.6 1.6-1.6h1.7V.2c-.3 0-1.3-.2-2.5-.2-2.5 0-4.2 1.5-4.2 4.4v2.5H7.2v3.2h2.8V22h3.5Z"
                />
              </svg>
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
