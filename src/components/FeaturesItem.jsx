export default function FeaturesItem({ text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-neon text-black text-xs font-bold">
        ✓
      </div>
      <p className="text-gray-300 text-sm">{text}</p>
    </div>
  );
}