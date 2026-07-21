import Image from "next/image";
import BackgroundRotator from "../../components/BackgroundRotator";

const brandCategories = [
  {
    title: "OEM Brands",
    brands: [
      { name: "John Deere", image: "/1.jpg" },
      { name: "VOLVO", image: "/16.png" },
      { name: "LIUGONG", image: "/17.jpg" },
      { name: "XCMG", image: "/14.png" },
      { name: "LIEBHER", image: "/5.jpg" },
      { name: "CAT", image: "/4.jpg" },
      { name: "DAF", image: "/3.jpg" },
      { name: "JCB", image: "/2.jpg" },
      { name: "VICTOR REINZ", image: "/11.jpg" },
      { name: "HITACHI", image: "/22.png" },
      { name: "SDLG", image: "/23.png" },
      { name: "SANY", image: "/24.png" },
    ],
  },
  {
    title: "Filters Brands",
    brands: [
      { name: "FLEETGUARD", image: "/13.jpg" },
      { name: "DONALDSON", image: "/10.jpg" },
      { name: "BALDWIN FILTERS", image: "/8.jpg" },
      { name: "GUD FILTERS", image: "/7.jpg" },
    ],
  },
  {
    title: "Lubricant Brands",
    brands: [
      { name: "CALTEX", image: "/12.png" },
      { name: "ENGEN", image: "/9.jpg" },
      { name: "SHELL", image: "/6.jpg" },
      { name: "CASTROL", image: "/18.jpg" },
      { name: "FORMA DX", image: "/19.png" },
      { name: "FREIGHTLINER", image: "/20.png" },
      { name: "FUCHS", image: "/21.png" },
      { name: "TOTAL", image: "/15.png" },
    ],
  },
];

export default function BrandsPage() {
  const images = ["/tractor.jpg", "/tiper.jpg", "/bradley.jpg", "/excavator.jpg", "/spares.png", "/attachments%20and%20components.png", "/tips%20and%20adapters.jpg", "/BRADLEY%20BANNER.jpg.jpeg", "/34.png"];
  const fitImagePaths = [
    "/1.jpg",
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
    "/10.jpg",
    "/11.jpg",
    "/12.png",
    "/13.jpg",
    "/14.png",
    "/15.png",
    "/16.png",
    "/17.jpg",
    "/18.jpg",
    "/19.png",
    "/20.png",
    "/21.png",
    "/22.png",
    "/23.png",
    "/24.png",
  ];

  return (
    <BackgroundRotator images={images} interval={6000}>
      <main className="page-shell brands-shell">
        <section className="about-card brands-card">
          <h1 className="brands-title">
            <span className="brands-title__word brands-title__word--blue">Our</span>{" "}
            <span className="brands-title__word brands-title__word--yellow">Brands</span>
          </h1>
          <p className="brands-intro">
            We supply trusted brands and quality components across automotive, industrial, and
            mechanical applications.
          </p>

          <div className="brands-categories">
            {brandCategories.map((category) => (
              <section className="brands-category" key={category.title}>
                <h2 className="brands-category__title">{category.title}</h2>
                <div className="brands-grid">
                  {category.brands.map((brand) => {
                    const isFitImage = fitImagePaths.includes(brand.image);

                    return (
                      <article className="brand-card" key={`${category.title}-${brand.name}`}>
                        <div className="brand-image-wrap" title={brand.name}>
                          <Image
                            src={brand.image}
                            alt={brand.name}
                            width={300}
                            height={200}
                            className={`brand-image ${isFitImage ? "brand-image--fit" : ""}`}
                            unoptimized
                          />
                          <span className="brand-hover-label">{brand.name}</span>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
    </BackgroundRotator>
  );
}
