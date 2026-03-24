export default function ServiceCard({ title, desc, icon, image }) {
  return (
    <div className="group relative rounded-2xl overflow-hidden border border-white/10 h-[260px]">

      {/* BACKGROUND IMAGE */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover scale-100 group-hover:scale-110 transition duration-500"
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition"></div>

      {/* GLOW BORDER */}
      <div className="absolute inset-0 rounded-2xl border border-white/10 group-hover:border-[#d9ff00] transition"></div>

      {/* CONTENT */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-end">

        {/* ICON */}
        <div className="text-2xl mb-2 text-[#d9ff00] drop-shadow-[0_0_10px_#d9ff00]">
          {icon}
        </div>

        {/* TITLE */}
        <h3 className="text-lg font-semibold">
          {title}
        </h3>

        {/* DESC */}
        <p className="text-gray-300 text-sm">
          {desc}
        </p>

      </div>
    </div>
  );
}