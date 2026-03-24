export default function SectionTitle({ title, highlight, subtitle }) {
  return (
    <div className="text-center max-w-4xl mx-auto">
      <div className="inline-block">
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-none tracking-[-0.02em] bg-linear-to-r from-gold via-neon to-gold bg-clip-text text-transparent drop-shadow-2xl">
          {title}{" "}
          <span>{highlight}</span>
        </h2>
        <div className="w-24 h-1 bg-linear-to-r from-gold to-neon mx-auto mt-4 rounded-full shadow-md"></div>
      </div>
      <p className="text-xl md:text-2xl text-gray-300 mt-8 max-w-2xl mx-auto leading-relaxed opacity-90">
        {subtitle}
      </p>
    </div>
  );
}
