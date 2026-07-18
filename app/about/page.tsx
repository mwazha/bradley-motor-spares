import BackgroundRotator from "../../components/BackgroundRotator";

export default function AboutPage() {
  const images = ["/tractor.jpg", "/tiper.jpg", "/bradley.jpg", "/excavator.jpg"];

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

          <hr className="section-divider" />

          <section className="about-section">
            <h2>Our Leadership</h2>
            <p>
              Bradley Motor Spares Pvt Ltd is led by <strong>Mr. Tendai Musongwe</strong> and
              <strong> Mrs. Sharon Marihoho</strong>, the company&apos;s Managing Directors. Since
              the company&apos;s establishment in 2018, they have played a pivotal role in the growth
              and success of the business through visionary leadership, strategic planning, and an
              unwavering commitment to excellence.
            </p>
            <p>
              Their dedication to quality management, integrity, and customer satisfaction has helped
              establish Bradley Motor Spares Pvt Ltd as a trusted supplier of automotive spare parts and
              industrial components. Under their leadership, the company continues to expand its
              product range, strengthen customer relationships, and provide reliable solutions to
              clients across Zimbabwe and Southern Africa.
            </p>
            <p>
              Together, they are committed to upholding the company&apos;s core values of
              professionalism, honesty, reliability, and continuous improvement while ensuring
              every customer receives quality products, exceptional service, and value they can
              trust.
            </p>
          </section>
        </section>
      </main>
    </BackgroundRotator>
  );
}
