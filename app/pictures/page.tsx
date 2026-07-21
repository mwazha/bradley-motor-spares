import Link from "next/link";
import Image from "next/image";
import BackgroundRotator from "../../components/BackgroundRotator";
import { pictureProducts } from "../products/data";

const images = ["/tractor.jpg", "/tiper.jpg", "/bradley.jpg", "/excavator.jpg", "/spares.png", "/attachments%20and%20components.png", "/tips%20and%20adapters.jpg", "/BRADLEY%20BANNER.jpg.jpeg", "/34.png"];

export default function PicturesPage() {
  return (
    <BackgroundRotator images={images} interval={6000}>
      <main className="page-shell products-shell">
        <section className="about-card products-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <h1 style={{ margin: 0 }}>Picture Gallery</h1>
            <Link href="/products" className="secondary-btn">
              Back to Products
            </Link>
          </div>

          <div className="products-grid">
            {pictureProducts.map((product) => (
              <Link
                key={product.slug}
                href={`/products/${product.slug}`}
                className="featured-product-card"
                style={{ textDecoration: "none" }}
              >
                <div className="featured-product-card__image-wrap">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={450}
                    className="featured-product-card__image"
                  />
                </div>
                <div className="featured-product-card__content">
                  <h3>{product.name}</h3>
                  <p>{product.shortDescription}</p>
                  <span className="featured-product-card__link">View Details</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </BackgroundRotator>
  );
}
