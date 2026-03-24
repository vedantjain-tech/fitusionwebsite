export default function Button({ children, variant = "primary" }) {
  const base =
    "px-6 py-3 rounded-full font-semibold text-sm md:text-base transition-all duration-300";

  if (variant === "primary") {
    return (
      <button
        className={`${base} bg-[#d9ff00] text-black hover:scale-105 hover:shadow-[0_0_20px_#d9ff00]`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      className={`${base} border border-[#d9ff00] text-[#d9ff00] hover:bg-[#d9ff00] hover:text-black`}
    >
      {children}
    </button>
  );
}