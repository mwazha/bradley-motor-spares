"use client";

import Link from "next/link";
import { useState } from "react";
import BackgroundRotator from "../../components/BackgroundRotator";

const initialForm = {
  fullName: "",
  phone: "",
  email: "",
  make: "",
  model: "",
  year: "",
  partName: "",
  partNumber: "",
  quantity: "",
  notes: "",
};

export default function RequestPage() {
  const images = ["/tractor.jpg", "/tiper.jpg", "/bradley.jpg", "/excavator.jpg", "/spares.png", "/attachments%20and%20components.png", "/tips%20and%20adapters.jpg", "/BRADLEY%20BANNER.jpg.jpeg", "/34.png", "/33.jpg"];
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const requiredFields = [
      [formData.fullName, "Full Name"],
      [formData.phone, "Phone Number"],
      [formData.email, "Email Address"],
      [formData.make, "Vehicle Make"],
      [formData.model, "Vehicle Model"],
      [formData.year, "Year of Manufacture"],
      [formData.partName, "Part Name"],
      [formData.quantity, "Quantity Required"],
    ] as const;

    const missing = requiredFields.filter(([value]) => !value?.toString().trim());
    if (missing.length > 0) {
      const labels = missing.map(([, label]) => label).join(", ");
      setError(`Please fill in the following fields: ${labels}.`);
      return;
    }

    const details = [
      `Full Name: ${formData.fullName}`,
      `Phone Number: ${formData.phone}`,
      `Email Address: ${formData.email}`,
      `Vehicle Make: ${formData.make}`,
      `Vehicle Model: ${formData.model}`,
      `Year of Manufacture: ${formData.year}`,
      `Part Name: ${formData.partName}`,
      `Part Number: ${formData.partNumber || "Not provided"}`,
      `Quantity Required: ${formData.quantity}`,
      `Additional Notes: ${formData.notes || "None"}`,
    ].join("\n");

    const salesSubject = `Spare Parts Request - ${formData.partName}`;
    const salesLink = `mailto:bradleyspares@gmail.com?subject=${encodeURIComponent(salesSubject)}&body=${encodeURIComponent(details)}`;

    const confirmationSubject = "We received your spare parts request";
    const confirmationBody = `Hello ${formData.fullName},\n\nThank you for contacting Bradley Motor Spares. We have received your spare parts request and our team will review it shortly.\n\nRequested part: ${formData.partName}\n\nWe will contact you with availability, pricing, and delivery details.\n\nKind regards,\nBradley Motor Spares`;
    const confirmationLink = `mailto:${formData.email}?subject=${encodeURIComponent(confirmationSubject)}&body=${encodeURIComponent(confirmationBody)}`;

    window.open(salesLink, "_blank", "noopener,noreferrer");
    window.open(confirmationLink, "_blank", "noopener,noreferrer");
    setSubmitted(true);
  };

  const handleCancel = () => {
    setFormData(initialForm);
    setError("");
    setSubmitted(false);
  };

  return (
    <BackgroundRotator images={images} interval={6000}>
      <main className="page-shell request-shell">
        <section className="request-card">
          <div className="request-intro">
            <p className="eyebrow">Request Part(s)</p>
            <h1>Can&apos;t find the spare part you&apos;re looking for?</h1>
            <p>
              At Bradley Motor Spares Pvt Ltd, we&apos;re here to help. Complete the form with your
              vehicle and part details and our team will assist you in finding the right part.
            </p>
          </div>

          <ul className="request-highlights">
            <li>📧 Your request will be sent directly to bradleyspares@gmail.com for review.</li>
            <li>📞 Our team will contact you as soon as possible with availability, pricing, and delivery options.</li>
          </ul>

          {submitted ? (
            <div className="request-success">
              <h2>Request Submitted Successfully!</h2>
              <p>
                Thank you for contacting Bradley Motor Spares Pvt Ltd. Your spare parts request has been
                received and sent to our sales team. A confirmation email has also been prepared
                for your inbox.
              </p>
              <Link href="/" className="primary-btn request-success__link">
                Back to Home
              </Link>
            </div>
          ) : (
            <form className="request-form" onSubmit={handleSubmit}>
              {error ? <div className="request-error">{error}</div> : null}
              <div className="request-grid">
                <label className="request-field">
                  <span>Full Name</span>
                  <input name="fullName" value={formData.fullName} onChange={handleChange} required />
                </label>
                <label className="request-field">
                  <span>Phone Number</span>
                  <input name="phone" value={formData.phone} onChange={handleChange} required />
                </label>
                <label className="request-field">
                  <span>Email Address</span>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label className="request-field">
                  <span>Vehicle Make</span>
                  <input name="make" value={formData.make} onChange={handleChange} required />
                </label>
                <label className="request-field">
                  <span>Vehicle Model</span>
                  <input name="model" value={formData.model} onChange={handleChange} required />
                </label>
                <label className="request-field">
                  <span>Year of Manufacture</span>
                  <input name="year" value={formData.year} onChange={handleChange} required />
                </label>
                <label className="request-field">
                  <span>Part Name</span>
                  <input name="partName" value={formData.partName} onChange={handleChange} required />
                </label>
                <label className="request-field">
                  <span>Part Number (Optional)</span>
                  <input name="partNumber" value={formData.partNumber} onChange={handleChange} />
                </label>
                <label className="request-field">
                  <span>Quantity Required</span>
                  <input name="quantity" value={formData.quantity} onChange={handleChange} required />
                </label>
                <label className="request-field request-field--full">
                  <span>Upload Part Image (Optional)</span>
                  <input type="file" accept="image/*" />
                </label>
                <label className="request-field request-field--full">
                  <span>Additional Notes</span>
                  <textarea name="notes" rows={4} value={formData.notes} onChange={handleChange} />
                </label>
              </div>

              <div className="request-actions">
                <button type="submit" className="primary-btn">
                  Submit Request
                </button>
                <button type="button" className="secondary-btn" onClick={handleCancel}>
                  Cancel
                </button>
              </div>
            </form>
          )}
        </section>
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
        </button>

        <div className="floating-contact__actions" aria-label="Quick contact actions">
          <a
            href="https://wa.me/263778843819?text=Hello%20Bradley%20Motor%20Spares"
            target="_blank"
            rel="noreferrer"
            className="floating-contact__action floating-contact__action--whatsapp"
            onClick={() => setOpen(false)}
            aria-label="Open WhatsApp"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                fill="currentColor"
                d="M16.8 14.4c-.2-.1-1.2-.6-1.4-.7-.2-.1-.3-.2-.5.1-.1.2-.6.7-.7.8-.1.1-.3.2-.6.1-.3-.1-1.2-.4-2.2-1.4-.8-.7-1.3-1.6-1.5-1.9-.1-.3 0-.4.1-.5.1-.1.2-.3.3-.4.1-.1.2-.3.3-.5.1-.2.1-.3.2-.6.1-.2 0-.4-.1-.5-.1-.2-.5-1.2-.7-1.6-.2-.4-.4-.4-.5-.4h-.4c-.2 0-.4.1-.5.2-.2.2-.8.8-.8 1.9s.8 2.2 1 2.3c.1.1 1.7 2.5 4.1 3.5.6.2 1.1.3 1.5.4.6.2 1.2.2 1.6.1.5-.1 1.5-.6 1.8-1.2.3-.6.3-1.1.2-1.2-.1-.1-.2-.2-.4-.3Z"
              />
            </svg>
          </a>

          <a
            href="mailto:bradleyspares@gmail.com"
            className="floating-contact__action floating-contact__action--email"
            onClick={() => setOpen(false)}
            aria-label="Send email"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path
                fill="currentColor"
                d="M20 6H4a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Zm0 2-8 5-8-5h16Zm-16 8V8.9l8 5 8-5V16H4Z"
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
                d="M20.39 15.56c-.42-.21-1.06-.53-1.47-.73-.38-.18-.73-.27-1.03.01-.27.25-.42.5-.75.77-.16.14-.35.14-.51-.03-.6-.58-1.17-1.16-1.69-1.84-.32-.43-.32-.8-.06-1.08.25-.27.53-.56.78-.85.25-.28.27-.52.02-.83-.2-.24-.4-.48-.64-.7-.18-.17-.34-.34-.54-.5-.46-.35-.84-.28-1.21-.04-.25.16-.48.33-.69.53-.35.34-.64.68-.9 1.05-.18.25-.17.47-.02.72.5.82 1.08 1.61 1.5 2.49.31.64.53 1.28.72 1.95.2.67.1 1.22-.28 1.75-.43.59-.99 1.08-1.72 1.33-.33.11-.67.15-1.01.11-.42-.05-.75-.16-1.1-.3-.4-.16-.77-.34-1.11-.55-.57-.35-1.03-.82-1.33-1.43-.22-.45-.34-.92-.25-1.43.06-.33.17-.65.32-.95.2-.41.47-.74.75-1.08.14-.17.22-.36.2-.57-.02-.26-.15-.42-.34-.56-.39-.29-.8-.58-1.15-.92-.2-.2-.31-.43-.31-.72 0-.28.14-.54.32-.77.25-.32.57-.6.9-.85.77-.57 1.55-1.16 2.3-1.73.34-.25.7-.48 1.08-.68.28-.14.56-.16.83-.03.28.14.48.38.61.66.25.53.48 1.08.74 1.61.25.51.47 1.04.72 1.56.16.33.28.67.29 1.02-.01.2-.16.34-.32.46-.58.47-1.18.87-1.82 1.18-.28.14-.57.28-.86.41-.18.08-.34.17-.5.25-.15.08-.23.17-.23.34 0 .18.1.34.23.49.15.17.3.32.45.46.42.4.82.85 1.2 1.31.16.19.31.39.43.58.13.17.27.34.36.52.21.41.38.63.69.46.25-.14.47-.3.73-.46.33-.2.57-.1.83.03.36.17.7.36 1.04.57.58.36 1.25.56 1.8.67.61.12 1.15.1 1.63-.18.31-.18.56-.47.87-.71.16-.13.31-.23.47-.35.13-.09.26-.17.38-.28.12-.11.15-.25.08-.41-.05-.11-.17-.19-.3-.25-.36-.15-.77-.28-1.1-.46Z"
              />
            </svg>
          </a>
        </div>
      </div>
    </BackgroundRotator>
  );
}
