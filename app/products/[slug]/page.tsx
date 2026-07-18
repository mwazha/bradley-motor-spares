import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products } from "../data";

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailsPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="page-shell about-shell">
      <section className="about-card contact-card" style={{ maxWidth: 960 }}>
        <div className="product-details">
          <div className="product-details__image-wrap">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, 480px"
              className="brand-image brand-image--fit"
              priority
            />
          </div>
          <div className="product-details__content">
            <p className="eyebrow">{product.category}</p>
            <h1>{product.name}</h1>
            <p className="hero-copy">{product.description}</p>
            <div className="product-details__meta">
              <div>
                <h2>Suitable for</h2>
                <ul>
                  {product.vehicles.map((vehicle) => (
                    <li key={vehicle}>{vehicle}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2>Availability</h2>
                <p>{product.availability}</p>
              </div>
            </div>
            <div className="hero-actions">
              <Link href="/request" className="primary-btn">
                Request Part(s)
              </Link>
              <Link href="/products" className="secondary-btn">
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
