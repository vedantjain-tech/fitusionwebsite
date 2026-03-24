export default function FeatureCard({ icon, title, description }) {
  return (
    <div className="group bg-white/5 border border-white/10 rounded-2xl p-6 transition duration-300 hover:border-[#d9ff00] hover:shadow-[0_0_20px_rgba(217,255,0,0.2)]">
      
      {/* ICON */}
      <div className="text-2xl mb-4 text-[#d9ff00]">
        {icon}
      </div>

      {/* TITLE */}
      <h3 className="text-lg font-semibold mb-2">
        {title}
      </h3>

      {/* DESC */}
      <p className="text-sm text-gray-400">
        {description}
      </p>

    </div>
  );
}