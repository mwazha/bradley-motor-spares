"use client";

import BackgroundRotator from "../../components/BackgroundRotator";

export default function ContactsPage() {
  const images = ["/tractor.jpg", "/tiper.jpg", "/bradley.jpg", "/excavator.jpg"];

  return (
    <BackgroundRotator images={images} interval={6000}>
      <main className="page-shell about-shell">
        <section className="about-card contact-card">
          <h1>Contact Us</h1>

          <section className="about-section contact-section">
            <h2>📍 Address</h2>
            <p>50 Second Street, Shop Number 1</p>
            <p>Mutare, Zimbabwe</p>
          </section>

          <hr className="section-divider" />

          <section className="about-section contact-section">
            <h2>📞 Phone Numbers</h2>
            <p>
              <a href="tel:+2638644265858">+263 86 44265858</a>
            </p>
            <p>
              <a href="tel:+263778843819">+263 778 843 819</a>
            </p>
            <p>
              <a href="tel:+263775348135">+263 775 348 135</a>
            </p>
            <p>
              <a href="tel:+263713747768">+263 713 747 768</a>
            </p>
          </section>

          <hr className="section-divider" />

          <section className="about-section contact-section">
            <h2>🕒 Business Hours</h2>
            <p><strong>Monday – Friday:</strong> 7:30 AM – 5:00 PM</p>
            <p><strong>Saturday:</strong> 8:00 AM – 1:00 PM</p>
            <p><strong>Sunday &amp; Public Holidays:</strong> Closed</p>
          </section>

          <hr className="section-divider" />

          <section className="about-section contact-section">
            <h2>✉️ Email</h2>
            <p>
              <a href="mailto:bradleyspares@gmail.com">bradleyspares@gmail.com</a>
            </p>
          </section>

          <hr className="section-divider" />

          <section className="about-section contact-section">
            <h2>📘 Facebook</h2>
            <p>
              <a href="https://www.facebook.com/profile.php?id=61583249974082&__cft__[0]=AZYWxKHEFh6otxBON5_W1bYfvNzOgAPCkMRt9E0ucMsMleA9VM8KrqRAIy__KIa_vEGari6M20PQWJ_KnEwZaEy7AxmAuMpKSWOZKAb1JhI70upUrmJ3k7UnzKDKX7KR5qKyaNa3qKnQDfrQHY3Sv2bGYSq6KZd1J5I2eIiHLDm2vcpVyKNrfx-IpvvuPJvfQ7hSr51BqH1EPFzekEzXA7Pn&__tn__=-UC%2CP-R" target="_blank" rel="noopener noreferrer">
                Bradley Motor Spares Pvt Ltd
              </a>
            </p>
          </section>
        </section>
      </main>
    </BackgroundRotator>
  );
}
