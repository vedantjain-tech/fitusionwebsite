import SectionTitle from "./SectionTitle";
import FeaturesCard from "./FeaturesCard";

export default function FeaturesGrid() {
  const data = [
    {
      icon: "🏋️",
      title: "Strength Training",
      description: "Build muscle and increase strength with guided workouts.",
    },
    {
      icon: "🔥",
      title: "Fat Burning",
      description: "High intensity routines to help you burn calories fast.",
    },
    {
      icon: "🧘",
      title: "Mind & Yoga",
      description: "Improve flexibility and mental peace with yoga sessions.",
    },
    {
      icon: "🥗",
      title: "Nutrition Plan",
      description: "Personalized meal plans to boost your fitness journey.",
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-black">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <SectionTitle
          title="What Makes Us"
          highlight="Different"
          subtitle="Designed to give you a structured, effective, and results-driven fitness experience."
        />

        {/* CARDS */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {data.map((item, index) => (
            <FeaturesCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}