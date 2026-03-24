export default function FeaturesSection() {
  const features = [
    "Personalized Workout Plans",
    "Track Your Daily Progress",
    "Expert Trainer Guidance",
    "Nutrition & Diet Support",
  ];

  return (
    <section className="py-24 px-6 md:px-16 bg-black">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-5xl font-bold leading-tight">
            Build Your{" "}
            <span className="text-[#d9ff00]">Perfect Routine</span>
          </h2>

          <p className="mt-6 text-gray-400 max-w-md">
            Designed to help you stay consistent, focused, and achieve real results with a structured fitness journey.
          </p>

          {/* FEATURES LIST */}
          <div className="mt-8 space-y-4">
            {features.map((item, index) => (
              <div key={index} className="flex items-center gap-3">
                
                <div className="w-5 h-5 rounded-full bg-[#d9ff00] flex items-center justify-center text-black text-xs font-bold">
                  ✓
                </div>

                <p className="text-gray-300 text-sm md:text-base">
                  {item}
                </p>

              </div>
            ))}
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="/fitness.jpg"
            alt="fitness"
            className="w-70 md:w-100 object-contain"
          />
        </div>

      </div>
    </section>
  );
}