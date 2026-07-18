import BackgroundRotator from "../../components/BackgroundRotator";

export default function LocationsPage() {
  const images = ["/tractor.jpg", "/tiper.jpg", "/bradley.jpg", "/excavator.jpg"];
  const coordinates = "18°58'27.5\"S 32°40'09.5\"E";
  const destination = encodeURIComponent(coordinates);
  const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destination}`;

  return (
    <BackgroundRotator images={images} interval={6000}>
      <main className="page-shell locations-shell">
        <section className="about-card locations-card">
          <div className="locations-grid">
            <div className="locations-content">
              <h1>Our Locations</h1>
              <p className="locations-address">50 Second St</p>
              <p className="locations-address">Shop No. 1</p>
              <p className="locations-address">Mutare, Zimbabwe</p>
              <p className="locations-address">{coordinates}</p>
              <a href={mapsUrl} target="_blank" rel="noreferrer" className="locations-link">
                Get directions in Google Maps
              </a>
            </div>

            <div className="locations-map">
              <iframe
                title="Google Maps directions to Bradley Motor Spares Pvt Ltd"
                src={`https://www.google.com/maps?q=${destination}&z=14&output=embed`}
                loading="lazy"
                allowFullScreen
              />
            </div>
          </div>
        </section>
      </main>
    </BackgroundRotator>
  );
}
