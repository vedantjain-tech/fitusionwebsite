import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
const services = [
  {
    icon: "🏋️",
    title: "Strength Training",
    desc: "Build muscle and increase strength.",
    image: "/services/strenght.jpg",
  },
  {
    icon: "🔥",
    title: "Fat Loss",
    desc: "Burn fat efficiently.",
    image: "/services/fatloss.jpg",
  },
  {
    icon: "🧘",
    title: "Yoga",
    desc: "Improve flexibility.",
    image: "/services/yoga.jpg",
  },
  {
    icon: "🥗",
    title: "Nutrition",
    desc: "Personalized meal plans.",
    image: "/services/food.jpg",
  },
  {
    icon: "🎯",
    title: "Coaching",
    desc: "Expert guidance.",
    image: "/services/coaching.jpg",
  },
  {
    icon: "📊",
    title: "Tracking",
    desc: "Monitor your progress.",
    image: "/services/tracking.jpg",
  },
];

  return (
    <div className="bg-black text-white">

      <Navbar />

 <section className="py-24 px-6 md:px-16">
  <div className="max-w-7xl mx-auto text-center">

    {/* TITLE */}
    <h1 className="text-4xl md:text-6xl font-bold">
      Our <span className="text-[#d9ff00]">Services</span>
    </h1>

    {/* NEW SUBTEXT */}
    <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
      Everything you need to build strength, stay consistent, and achieve real results.
    </p>

    {/* NEW DIVIDER */}
    <div className="mt-10 flex justify-center">
      <div className="w-20 h-[2px] bg-[#d9ff00]/60 rounded-full"></div>
    </div>

  </div>

  {/* GRID */}
  <div className="mt-16 max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    {services.map((item, i) => (
      <ServiceCard
        key={i}
        icon={item.icon}
        title={item.title}
        desc={item.desc}
        image={item.image}
      />
    ))}
  </div>
</section>


      {/* CTA */}
      <section className="py-24 text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold">
          Ready to{" "}
          <span className="text-[#d9ff00]">Transform?</span>
        </h2>

        <p className="mt-4 text-gray-400">
          Start your journey with structure and consistency.
        </p>

        <div className="mt-8">
          <Button>Get Started</Button>
        </div>
      </section>

      <Footer />

    </div>
  );
}