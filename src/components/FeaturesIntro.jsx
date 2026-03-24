import SectionTitle from "./SectionTitle";
import FeaturesItem from "./FeaturesItem";
// import fitnessImg from "/fitness.jpg";

export default function FeaturesIntro() {
  const features = [
    "Personalized Workouts",
    "Progress Analytics",
    "24/7 Coach Access",
    "Nutrition Plans",
    "Community Challenges",
    "Recovery Tracking",
  ];

  return (
    <section className="py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <SectionTitle
          title="Unlock"
          highlight="Elite Performance"
          subtitle="Proprietary methodology used by champions. Engineered for peak human potential."
        />

        {/* Content Card */}
        <div className="mt-14 bg-white/5 border border-white/10 rounded-3xl p-6 md:p-10 backdrop-blur-xl grid md:grid-cols-2 gap-10 items-center">
          
          {/* LEFT FEATURES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((item, index) => (
              <FeaturesItem key={index} text={item} />
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <img
              src="/f.png"
              alt="fitnss"
              className="w-70 md:w-87.5 object-contain"
            />
          </div>

        </div>
      </div>
    </section>
  );
}