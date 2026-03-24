import SectionTitle from "./SectionTitle";

const testimonials = [
  {
    quote: "FiTusion transformed my fitness journey. The plans are simple and effective.",
    author: "Sarah Johnson",
    role: "Fitness Enthusiast",
  },
  {
    quote: "Tracking progress has never been easier. I saw results in just weeks.",
    author: "Mike Chen",
    role: "Athlete",
  },
  {
    quote: "The balance between strength and flexibility is perfect.",
    author: "Emily Davis",
    role: "Yoga Instructor",
  },
  {
    quote: "Clear guidance and real results. Exactly what I needed.",
    author: "David Rodriguez",
    role: "Professional",
  },
];

export default function TestimonialsGrid() {
  return (
    <section className="py-24 px-6 md:px-16 bg-black">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <SectionTitle
          title="What People"
          highlight="Say"
          subtitle="Real feedback from users who transformed their fitness journey."
        />

        {/* GRID */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">

          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 transition duration-300 hover:border-[#d9ff00] hover:shadow-[0_0_20px_rgba(217,255,0,0.15)]"
            >
              {/* QUOTE */}
              <p className="text-gray-300 mb-6 text-sm md:text-base leading-relaxed">
                “{testimonial.quote}”
              </p>

              {/* USER */}
              <div className="flex items-center gap-3">
                
                {/* AVATAR */}
                <div className="w-10 h-10 rounded-full bg-[#d9ff00]/20 flex items-center justify-center text-[#d9ff00] font-bold">
                  {testimonial.author[0]}
                </div>

                {/* INFO */}
                <div>
                  <h4 className="font-semibold text-white text-sm">
                    {testimonial.author}
                  </h4>
                  <p className="text-xs text-gray-400">
                    {testimonial.role}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}