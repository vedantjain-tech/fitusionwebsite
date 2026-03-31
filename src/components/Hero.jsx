import Button from "./Button";
import StatsCard from "./StatsCard";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
 {/* ================= MOBILE LAYOUT ================= */}
  <div className="md:hidden flex flex-col items-center text-center px-6 pt-16">

  {/* TEXT */}
  <h1 className="font-bold leading-[1.1] tracking-tight text-[28px]">
    <span className="text-[#d9ff00]">Sculpt</span>{" "}
    <span className="text-gray-500">Your</span>{" "}
    <span className="text-[#d9ff00]">Body,</span>
    <br />
    <span className="text-[#d9ff00]">Elevate</span>{" "}
    <span className="text-gray-500">Your</span>{" "}
    <span className="text-[#d9ff00]">Spirit</span>
  </h1>

  {/* IMAGE (FORCED POSITION FIX) */}
  <img
    src="/hero.png"
    alt="fitness"
    className="w-55 mt-6 -translate-y-4"
  />

  {/* CTA */}
  <div className="mt-6">
    <Button>Let's Start →</Button>
  </div>

  {/* USERS */}
  <div className="mt-4 flex items-center gap-3">
    <div className="flex -space-x-3">
      <img src="https://randomuser.me/api/portraits/men/1.jpg" className="w-8 h-8 rounded-full border-2 border-black" />
      <img src="https://randomuser.me/api/portraits/women/2.jpg" className="w-8 h-8 rounded-full border-2 border-black" />
      <img src="https://randomuser.me/api/portraits/men/3.jpg" className="w-8 h-8 rounded-full border-2 border-black" />
    </div>
    <p className="text-xs text-gray-400">
      <span className="text-white font-semibold">12k+</span> Happy Spirits
    </p>
  </div>

</div>

      {/* ================= DESKTOP LAYOUT ================= */}
      <div className="hidden md:block">

        {/* BACK TEXT */}
        <div className="absolute top-[90px] left-[120px] z-0 select-none">
          <h1 className="font-bold leading-[1.02] tracking-tight text-[85px] lg:text-[115px] text-white/10">
            Sculpt Your Body,
            <br />
            Elevate Your Spirit
          </h1>
        </div>

        {/* FRONT TEXT */}
        <div className="absolute top-[90px] left-[100px] z-30 pointer-events-none">
          <h1 className="font-bold leading-[1.02] tracking-tight text-[85px] lg:text-[115px]">

            <span className="text-[#d9ff00]">Sculpt</span>{" "}
            <span className="text-gray-500">Your</span>{" "}
            <span className="text-[#d9ff00]">Body,</span>

            <br />

            <span className="text-[#d9ff00]">Elevate</span>{" "}
            <span className="text-gray-500">Your</span>{" "}
            <span className="text-[#d9ff00]">Spirit</span>

          </h1>
        </div>

        {/* IMAGE */}
        <div className="absolute inset-0 flex justify-center items-end z-20 pointer-events-none">
          <img
            src="/hero.png"
            alt="fitness"
            className="w-[600px] lg:w-[800px] object-contain translate-y-[60px]"
          />
        </div>

        {/* GLOW */}
        <div className="absolute top-[50%] left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#d9ff00] opacity-10 blur-[120px] rounded-full"></div>

        {/* FLOATING CARDS */}
        <div>
          <div className="absolute left-[18%] top-[40%] rotate-[-12deg]">
            <StatsCard label="Hours" value="1.5" icon="⏱️" />
          </div>

          <div className="absolute right-[18%] top-[40%] rotate-[12deg]">
            <StatsCard label="Poses" value="20" icon="🏃" />
          </div>

          <div className="absolute left-[22%] bottom-[28%] rotate-[-10deg]">
            <StatsCard label="Kcal" value="550" icon="🔥" />
          </div>

          <div className="absolute right-[22%] bottom-[28%] rotate-[10deg]">
            <StatsCard label="Sets" value="5" icon="🏋️" />
          </div>
        </div>

        {/* CTA */}
        <div className="absolute bottom-24 right-16 z-30">
          <Button>Let's Start →</Button>
        </div>

        {/* USERS */}
        <div className="absolute bottom-16 left-16 flex items-center gap-3">
          <div className="flex -space-x-3">
            <img src="https://randomuser.me/api/portraits/men/1.jpg" className="w-10 h-10 rounded-full border-2 border-black" />
            <img src="https://randomuser.me/api/portraits/women/2.jpg" className="w-10 h-10 rounded-full border-2 border-black" />
            <img src="https://randomuser.me/api/portraits/men/3.jpg" className="w-10 h-10 rounded-full border-2 border-black" />
          </div>
          <p className="text-sm text-gray-400">
            <span className="text-white font-semibold text-lg">12k+</span> Happy Spirits
          </p>
        </div>

        {/* SIDE TEXT */}
        <div className="hidden lg:block absolute left-6 top-1/2 -translate-y-1/2 -rotate-90 text-gray-500 tracking-[0.4em] text-xs">
          PREV
        </div>

        <div className="hidden lg:block absolute right-6 top-1/2 -translate-y-1/2 rotate-90 text-gray-500 tracking-[0.4em] text-xs">
          NEXT
        </div>

      </div>
    </section>
  );
}
