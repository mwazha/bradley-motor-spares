export type Product = {
  slug: string;
  name: string;
  category: string;
  image: string;
  shortDescription: string;
  description: string;
  vehicles: string[];
  availability: string;
};

export const products: Product[] = [
  {
    slug: "hydraulic-filter",
    name: "Hydraulic Filter",
    category: "Filters",
    image: "/1.jpg",
    shortDescription: "Reliable filtration for hydraulic systems and heavy machinery uptime.",
    description:
      "Designed for demanding construction and agricultural environments, this hydraulic filter helps protect pumps, valves, and cylinders from contamination while maintaining steady operating pressure.",
    vehicles: ["Caterpillar 320D", "Komatsu WA380", "John Deere 6M"],
    availability: "In Stock",
  },
  {
    slug: "service-kit",
    name: "Service Kit",
    category: "Service Kits",
    image: "/2.jpg",
    shortDescription: "Complete maintenance kit for routine service and long-term durability.",
    description:
      "A full-service maintenance package tailored for trucks and machinery that require regular inspection, lubrication, and replacement of wear items to stay reliable on site.",
    vehicles: ["Volvo FM", "Isuzu FVR", "Hino 500"],
    availability: "Contact Us for Availability",
  },
  {
    slug: "engine-oil",
    name: "Engine Oil",
    category: "Lubricants",
    image: "/3.jpg",
    shortDescription: "Premium engine lubricant for high-temperature performance and protection.",
    description:
      "This premium engine oil offers strong temperature stability and excellent wear protection for diesel engines operating in tough workloads and long duty cycles.",
    vehicles: ["Scania P-series", "Mercedes-Benz Actros", "DAF XF"],
    availability: "In Stock",
  },
  {
    slug: "air-dryer",
    name: "Air Dryer",
    category: "Air Systems",
    image: "/4.jpg",
    shortDescription: "Essential air system component for moisture control and brake efficiency.",
    description:
      "Built to keep compressed air systems dry and dependable, this air dryer supports brake performance and helps prevent corrosion in critical air lines and valves.",
    vehicles: ["MAN TGS", "Kenworth T680", "Toyota Dyna"],
    availability: "In Stock",
  },
];

export const featuredProducts = products.slice(0, 4);
