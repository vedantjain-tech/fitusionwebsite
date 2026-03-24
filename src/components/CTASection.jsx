import Button from "./Button";

export default function CTASection() {
  return (
    <section className="py-24 px-6 md:px-16 bg-black text-center">
      <div className="max-w-3xl mx-auto">

        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Start Your{" "}
          <span className="text-[#d9ff00]">Fitness Journey</span>
        </h2>

        {/* SUBTITLE */}
        <p className="mt-6 text-gray-400 text-sm md:text-base">
          Build consistency, track progress, and achieve real results with a structured plan.
        </p>

        {/* BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button>Get Started</Button>
          <Button variant="secondary">View Plans</Button>
        </div>

        {/* SMALL TEXT */}
        <p className="text-gray-500 mt-6 text-xs">
          No credit card required
        </p>

      </div>
    </section>
  );
}