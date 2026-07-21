import BackgroundRotator from "../../components/BackgroundRotator";

export default function AboutPage() {
  const images = ["/tractor.jpg", "/tiper.jpg", "/bradley.jpg", "/excavator.jpg", "/spares.png", "/attachments%20and%20components.png", "/tips%20and%20adapters.jpg", "/BRADLEY%20BANNER.jpg.jpeg", "/34.png"];

  return (
    <BackgroundRotator images={images} interval={6000}>
      <main className="page-shell about-shell">
        <section className="about-card">
          <h1>About Us</h1>

          <section className="about-section">
            <h2>Who We Are?</h2>
            <p>
              Bradley Motor Spares Pvt Ltd is a trusted supplier of high-quality automotive spare parts; such as heavy duty equipments,
              hydraulic and pneumatic components and lubricants. Established in <strong>2018</strong>,
              we have built a strong reputation for providing reliable products and exceptional
              customer service to clients across various industries.
            </p>
            <p>
              We proudly serve a wide range of sectors, including <strong>transport and fleet
              management, truck hire, logistics, light and heavy industries, agriculture, mining,
              government departments, institutions, NGOs, and general business procurement</strong>.
              Our commitment is to provide durable, high-quality products that meet the needs of
              both individual and corporate customers.
            </p>
            <p>
              Located in <strong>Mutare</strong>, Zimbabwe&apos;s gateway city, near the Zimpapers
              branch, Bradley Motor Spares Pvt Ltd is strategically positioned to distribute products
              efficiently throughout <strong>Zimbabwe and Southern Africa</strong>. Over the years,
              we have continuously expanded our product range to ensure our customers have access to
              the spare parts and equipment they need.
            </p>
          </section>

          <hr className="section-divider" />

          <section className="about-section">
            <h2>Our Mission</h2>
            <p>
              At Bradley Motor Spares Pvt Ltd, we are committed to providing our customers with exceptional
              service and high-quality products. We place our customers&apos; needs at the center of
              everything we do, maintaining professionalism, integrity, and a positive attitude in
              every interaction. We continuously embrace new technologies and innovative ideas to
              deliver the best products and services at all times.
            </p>
          </section>

          <hr className="section-divider" />

          <section className="about-section">
            <h2>Our Vision</h2>
            <p>
              To become the preferred supplier in the automotive, electrical, mechanical,
              industrial, and hardware trading sectors by delivering quality products, creating
              value for our customers, and providing cost-effective solutions. We are committed to
              operating as a socially responsible and environmentally conscious organization while
              maintaining the highest standards of excellence.
            </p>
          </section>

          <hr className="section-divider" />

          <section className="about-section">
            <h2>Our Core Values</h2>
            <p>
              At Bradley Motor Spares Pvt Ltd, our success is built on a strong foundation of excellence,
              teamwork, integrity, and customer satisfaction. These values guide every decision we
              make and every service we provide.
            </p>

            <h3>Customer Excellence</h3>
            <p>
              We are dedicated to delivering superior products, services, and solutions that
              consistently exceed our customers&apos; expectations. Customer satisfaction remains our
              highest priority.
            </p>

            <h3>Teamwork</h3>
            <p>
              We believe in collaboration, knowledge sharing, and mutual respect. By working
              together, we achieve our goals, strengthen our business, and continuously improve our
              services.
            </p>

            <h3>Positive Attitude</h3>
            <p>
              We foster a culture of optimism, dedication, and continuous growth. By celebrating
              achievements and encouraging one another, we create an environment where both our
              employees and customers thrive.
            </p>

            <h3>Integrity</h3>
            <p>
              We conduct all our business with honesty, transparency, and accountability. Building
              trust with our customers, suppliers, and partners is fundamental to everything we do.
            </p>
          </section>

        </section>
      </main>
    </BackgroundRotator>
  );
}
