export default function BrandStrip() {
  const items = [
    "WEIGHT TRAINING",
    "FAT LOSS",
    "MUSCLE GAIN",
    "HIIT",
    "STRENGTH",
    "NO PAIN NO GAIN",
    "TRAIN HARD",
  ];

  return (
    <section className="py-16 border-t border-white/5 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-16">

        <div className="relative overflow-hidden">

          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-black to-transparent z-10"></div>

          {/* Marquee */}
          <div className="flex w-max items-center animate-marquee hover:[animation-play-state:paused]">

            {[...items, ...items].map((text, index) => (
              <div
                key={index}
                className="mx-14 md:mx-20 flex items-center"
              >
                <span
                  className="flex items-center gap-4 
                  text-2xl md:text-3xl font-extrabold tracking-wider 
                  text-white/70 hover:text-white 
                  transition duration-300 
                  whitespace-nowrap
                  hover:scale-105"
                >
                  🔥 {text} 💪
                </span>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}