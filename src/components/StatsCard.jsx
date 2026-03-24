import { useRef } from "react";

export default function StatsCard({ icon, label, value }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 10;
    const rotateY = (x - centerX) / 10;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale(1.05)
    `;
  };

  const reset = () => {
    const card = cardRef.current;
    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      scale(1)
    `;
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className="group relative w-32 p-[1px] rounded-2xl bg-gradient-to-br from-[#d9ff00]/40 via-white/10 to-transparent transition duration-300 will-change-transform"
    >
      {/* INNER */}
      <div className="relative bg-black/60 backdrop-blur-xl rounded-2xl p-4 text-center border border-white/10">

        {/* GLOW FOLLOW */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition"></div>

        {/* ICON */}
        <div className="text-2xl mb-2 text-[#d9ff00] drop-shadow-[0_0_12px_#d9ff00]">
          {icon}
        </div>

        {/* LABEL */}
        <p className="text-xs text-gray-400 uppercase tracking-wide">
          {label}
        </p>

        {/* VALUE */}
        <h3 className="font-bold text-white text-lg">
          {value}
        </h3>
      </div>
    </div>
  );
}