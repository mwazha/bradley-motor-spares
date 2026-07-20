"use client";

import Link from "next/link";
import { useState } from "react";
import BackgroundRotator from "../components/BackgroundRotator";
import { featuredProducts } from "./products/data";

export default function HomePage() {
  const images = ["/tractor.jpg", "/tiper.jpg", "/bradley.jpg", "/excavator.jpg"];
  const [open, setOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [draft, setDraft] = useState("");
  const [messages, setMessages] = useState<string[]>([
    "Welcome to Bradley Motor Spares Pvt Ltd! How can I help you today?",
  ]);

  const handleSend = () => {
    const trimmed = draft.trim();
    if (!trimmed) return;

    setMessages((current) => [...current, trimmed]);
    setDraft("");
  };

  return (
    <>
      <main className="page-shell">
        <div style={{ width: "100%", display: "flex", flexDirection: "column", gap: 24 }}>
          <section className="hero-card hero-banner hero-with-background" id="hero">
            <BackgroundRotator images={images} interval={6000}>
              <div className="hero-banner__content">
                <p className="eyebrow">Bradley Motor Spares Pvt Ltd</p>
                <h1>TRUCK & MACHINERY SPARES</h1>
                <p className="hero-copy">
                  All service kits & Genuine spare parts!
                </p>
                <div className="hero-actions">
                  <a
                    href="mailto:bradleyspares@gmail.com?subject=Request%20a%20Quote"
                    className="primary-btn"
                  >
                    Request a Quote
                  </a>
                  <a href="/contacts" className="secondary-btn">
                    Contact Sales
                  </a>
                </div>
              </div>
            </BackgroundRotator>
          </section>

          <section className="featured-products-section">
            <div className="featured-products-header">
              <div>
                <p className="eyebrow">Popular Picks</p>
                <h2>Featured Products</h2>
              </div>
            </div>
            <div className="featured-products-grid">
              {featuredProducts.map((product) => (
                <article key={product.slug} className="featured-product-card">
                  <div className="featured-product-card__image-wrap">
                    <img src={product.image} alt={product.name} className="featured-product-card__image" />
                  </div>
                  <div className="featured-product-card__content">
                    <h3>{product.name}</h3>
                    <p>{product.shortDescription}</p>
                    <Link href={`/products/${product.slug}`} className="featured-product-card__link">
                      View Details
                    </Link>
                  </div>
                </article>
              ))}
            </div>
            <div className="featured-products-footer">
              <Link href="/products" className="secondary-btn">
                View All Products
              </Link>
            </div>
          </section>
        </div>
      </main>

      <div className={`floating-contact ${open ? "is-open" : ""}`}>
        <button
          type="button"
          className="floating-contact__main"
          onClick={() => setOpen((value) => !value)}
          aria-label="Open contact options"
          aria-expanded={open}
        >
          <span className="floating-contact__main-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false">
              <path
                fill="currentColor"
                d="M6 4h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H9l-4 3V6a2 2 0 0 1 2-2Z"
              />
            </svg>
          </span>
          <span className="floating-contact__unread-badge" aria-label="1 unread message">
            1
          </span>
        </button>

        <div className="floating-contact__actions" aria-label="Quick contact actions">
          <a
            href="https://wa.me/263778843819?text=Hello%20Bradley%20Motor%20Spares"
            target="_blank"
            rel="noopener noreferrer"
            className="floating-contact__action floating-contact__action--whatsapp"
            onClick={() => setOpen(false)}
            aria-label="Open WhatsApp chat"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                fill="currentColor"
                d="M12.04 2.5A9.54 9.54 0 0 0 4.7 16.8L3.5 20.5l3.8-1.15A9.54 9.54 0 1 0 12.04 2.5Zm0 17.42a7.88 7.88 0 0 1-4.03-1.11l-.28-.17-2.26.68.68-2.2-.18-.28a7.88 7.88 0 1 1 6.07 3.08Zm4.42-5.9c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.63.78-.77.94-.14.16-.29.18-.54.06-.24-.12-1.01-.37-1.92-1.18-.71-.63-1.18-1.4-1.32-1.64-.14-.24-.01-.37.1-.49.11-.1.24-.29.36-.43.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.19-.47-.39-.41-.54-.42h-.46c-.16 0-.42.06-.64.3-.22.24-.86.84-.86 2.05 0 1.2.88 2.38 1 2.54.12.16 1.72 2.63 4.17 3.68.58.25 1.03.4 1.38.51.58.18 1.1.15 1.52.09.46-.07 1.43-.58 1.63-1.15.2-.57.2-1.06.14-1.16-.06-.1-.22-.16-.46-.28Z"
              />
            </svg>
          </a>

          <a
            href="tel:+263778843819"
            className="floating-contact__action floating-contact__action--call"
            onClick={() => setOpen(false)}
            aria-label="Call us"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                fill="currentColor"
                d="M6.6 10.8a15.2 15.2 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24c1.1.36 2.3.55 3.5.55a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.7 21 3 13.3 3 4a1 1 0 0 1 1-1h2.8a1 1 0 0 1 1 1c0 1.2.19 2.4.55 3.5a1 1 0 0 1-.24 1l-2.2 2.2Z"
              />
            </svg>
          </a>
        </div>
      </div>

      <div className={`whatsapp-chat ${chatOpen ? "is-open" : ""}`} role="dialog" aria-modal="true" aria-label="WhatsApp chat window">
        <div className="whatsapp-chat__header">
          <div className="whatsapp-chat__profile">
            <div className="whatsapp-chat__avatar">B</div>
            <div>
              <div className="whatsapp-chat__name">Bradley Motor Spares Pvt Ltd</div>
              <div className="whatsapp-chat__status">Online</div>
            </div>
          </div>
          <button
            type="button"
            className="whatsapp-chat__close"
            onClick={() => setChatOpen(false)}
            aria-label="Close chat"
          >
            ×
          </button>
        </div>

        <div className="whatsapp-chat__body">
          {messages.map((message, index) => (
            <div
              key={`${message}-${index}`}
              className={`whatsapp-chat__bubble ${index === 0 ? "whatsapp-chat__bubble--incoming" : "whatsapp-chat__bubble--outgoing"}`}
            >
              {message}
            </div>
          ))}
        </div>

        <div className="whatsapp-chat__composer">
          <input
            type="text"
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                event.preventDefault();
                handleSend();
              }
            }}
            placeholder="Type a message"
          />
          <button type="button" onClick={handleSend}>
            Send
          </button>
        </div>
      </div>
    </>
  );
}
