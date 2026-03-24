import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Exercise() {
  const [search, setSearch] = useState("");

  const exercises = [
    {
      name: "Push Ups",
      category: "Chest",
      image: "/exercises/pushups.jpg",
    },
    {
      name: "Squats",
      category: "Legs",
      image: "/exercises/squats.jpg",
    },
    {
      name: "Plank",
      category: "Core",
      image: "/exercises/planks.jpg",
    },
    {
      name: "Pull Ups",
      category: "Back",
      image: "/exercises/pullups.jpg",
    },
    {
      name: "Lunges",
      category: "Legs",
      image: "/exercises/lunges.jpg",
    },
    {
      name: "Shoulder Press",
      category: "Shoulders",
      image: "/exercises/shoulderpress.jpg",
    },
  ];

  const filtered = exercises.filter((ex) =>
    ex.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />

      {/* HERO */}
      <section className="py-20 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-bold">
          Explore{" "}
          <span className="text-[#d9ff00]">Exercises</span>
        </h1>

        <p className="mt-4 text-gray-400">
          Find workouts that match your goals and level.
        </p>

        {/* SEARCH */}
        <div className="mt-8 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Search exercise..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-5 py-3 rounded-full bg-white/5 border border-white/10 text-white focus:outline-none focus:border-[#d9ff00]"
          />
        </div>
      </section>

      {/* GRID */}
      <section className="pb-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {filtered.map((ex, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden border border-white/10 h-[260px]"
            >

              {/* IMAGE */}
              <img
                src={ex.image}
                alt={ex.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-black/70 group-hover:bg-black/60 transition"></div>

              {/* CONTENT */}
              <div className="relative z-10 p-6 h-full flex flex-col justify-end">

                <p className="text-xs text-[#d9ff00] mb-1">
                  {ex.category}
                </p>

                <h3 className="text-lg font-semibold">
                  {ex.name}
                </h3>

              </div>

            </div>
          ))}

        </div>

        {/* EMPTY STATE */}
        {filtered.length === 0 && (
          <p className="text-center text-gray-500 mt-10">
            No exercises found.
          </p>
        )}
      </section>

      {/* CTA */}
      <section className="pb-24 text-center px-6">
        <h2 className="text-3xl md:text-5xl font-bold">
          Start Your{" "}
          <span className="text-[#d9ff00]">Workout</span>
        </h2>

        <p className="mt-4 text-gray-400">
          Stay consistent and achieve real results.
        </p>

        <button className="mt-8 px-6 py-3 bg-[#d9ff00] text-black rounded-full font-semibold hover:scale-105 transition">
          Get Started
        </button>
      </section>

      <Footer />

    </div>
  );
}