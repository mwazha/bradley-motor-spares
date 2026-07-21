import Link from "next/link";
import BackgroundRotator from "../../components/BackgroundRotator";

const categories = [
    {
    title: "OEM Parts",
    items: [ "Engine Components", "Service Kits", "Suspension" ]
    },
  {
    title: "Filters",
    items: [
        "Fuel filters",
      "Hydraulic filters",
      "Oil filters",
      "Oil Air Separator filters",
      "Transmission filters",
      "Air filters",
      "Air Dryers",
    ],
  },
  
  {
    title: "Engine Components",
    items: [
      "Hydraulic Cylinders",
      "Hydraulic Seals",
      "Hydraulic Cylinder Seal kits",
      "Transmission Components",
    ],
  },
  {
    title: "Tips",
    items: ["Adaptors", "Ripper Tips", "Grader Blades"],
  },
  {
    title: "Lubricants",
    items: [
      "Engine Oil",
      "Hydraulic 68",
      "Hydraulic 46",
      "Multipurpose Grease",
      "Compressor oil",
    ],
  },
  {
    title: "Machinery Parts",
    items: ["John Deere", "Caterpillar", "Komatsu", "SDLG", "SANY"],
  },
];

export default function ProductsPage() {
  const images = ["/tractor.jpg", "/tiper.jpg", "/bradley.jpg", "/excavator.jpg", "/spares.png", "/attachments%20and%20components.png", "/tips%20and%20adapters.jpg", "/BRADLEY%20BANNER.jpg.jpeg", "/34.png", "/33.jpg"];

  return (
    <BackgroundRotator images={images} interval={6000}>
      <main className="page-shell products-shell">
        <section className="about-card products-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <h1 style={{ margin: 0 }}>Products</h1>
            <Link href="/pictures" className="secondary-btn">
              View Picture Gallery
            </Link>
          </div>
          <div className="products-grid">
            {categories.map((category) => (
              <section key={category.title} className="product-category">
                <h2>{category.title}</h2>
                {category.items.length > 0 ? (
                  <ul>
                    {category.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="product-empty">More products coming soon.</p>
                )}
              </section>
            ))}
          </div>
        </section>
      </main>
    </BackgroundRotator>
  );
}
