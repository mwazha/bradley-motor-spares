"use client";

import { useState } from "react";

export default function FloatingContact() {
  const [open, setOpen] = useState(false);

  return (
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
      </button>

      <div className="floating-contact__actions" aria-label="Quick contact actions">
        <a
          href="https://wa.me/263778843819?text=Hello%20Bradley%20Motor%20Spares"
          target="_blank"
          rel="noopener noreferrer"
          className="floating-contact__action floating-contact__action--whatsapp"
          onClick={() => setOpen(false)}
          aria-label="Open WhatsApp"
        >
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <path
              fill="currentColor"
              d="M13.5 4.2A8.5 8.5 0 0 0 5.2 12.4a8.4 8.4 0 0 0 1.4 4.5L4.5 20l3.2-1.2a8.5 8.5 0 1 0 5.8-14.6Zm0 15.4a7 7 0 0 1-3.6-1l-.3-.2-1.9.7.7-1.8-.2-.3a7 7 0 0 1 5.3-11.3 7 7 0 0 1 0 14Zm3.8-5.2c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.1-.4.1-.1.2-.5.7-.7.8-.1.1-.3.2-.5.1-.2-.1-1-.4-1.8-1.1-.7-.6-1.2-1.3-1.3-1.6-.1-.2 0-.4.1-.5.1-.1.2-.2.3-.4.1-.1.2-.2.2-.4 0-.2 0-.3-.1-.4-.1-.1-.5-1.2-.7-1.7-.2-.5-.4-.4-.6-.4h-.4c-.2 0-.4.1-.6.2-.2.2-.8.8-.8 1.9 0 1.1.9 2.3 1 2.4.1.1 1.7 2.5 4.2 3.5.6.2 1.1.3 1.5.4.6.2 1.1.2 1.5.1.5-.1 1.5-.6 1.8-1.2.3-.6.3-1.1.2-1.2-.1-.1-.2-.2-.4-.3Z"
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
              d="M20.4 15.6a15.2 15.2 0 0 1-4.4 4.7c-.6.4-1.3.7-2 .7-.8 0-1.5-.3-2.1-.8L9.7 19c-.7-.4-1.4-1-2-1.6l-1.6-1.6c-.6-.6-.9-1.3-.8-2.1.1-.9.4-1.8.8-2.6.4-.8.5-1.6.3-2.4-.2-.7-.7-1.3-1.4-1.8L4.3 6.3c-.2-.2-.3-.4-.3-.6 0-.2.1-.4.3-.6l1.3-1.3 1.2-1.2c.2-.2.4-.3.7-.3.3 0 .6.1.8.3l2.7 2.7c.4.4.7.9.8 1.4.2.7.1 1.4-.2 2.1l-1.2 2.5c-.2.4-.2.8 0 1.2.2.3.5.6.9.8l2.4 1.5c.4.2.9.3 1.3.2.4-.1.8-.3 1.2-.6l1.6-1.1c.4-.3.8-.4 1.2-.2.4.2.8.5 1.2.9l1.2 1.2c.2.2.3.4.3.7 0 .2-.1.4-.3.6l-1.2 1.2Z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
