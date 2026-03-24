import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import ParticlesBg from "../components/ParticlesBg";


export default function About() {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    
    <div className="bg-black text-white overflow-hidden">

      {/* 🔥 Scroll Progress */}
      <motion.div style={{ scaleX }} className="progress-bar" />

      <Navbar />

      {/* HERO */}
     <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">

  {/* Video */}
  <video
    autoPlay
    loop
    muted
    className="absolute w-full h-full object-cover opacity-50"
  >
    <source src="/hero.mp4" type="video/mp4" />
  </video>

  {/* Overlay */}
  <div className="absolute inset-0 bg-black/70"></div>

  {/* Content */}
  <div className="relative z-10">
    <h1 className="text-6xl font-extrabold tracking-tight leading-tight">
  <span className="block">Train Hard</span>
  <span className="block text-lime-400">Stay Strong</span>
</h1>
  </div>
</section>
<section className="relative py-28 text-center">
  <ParticlesBg />
        {/* Glow */}
        <div className="absolute inset-0 bg-lime-400/10 blur-3xl"></div>

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative text-5xl md:text-7xl font-extrabold tracking-tight"
        >
          Sculpt Your <span className="text-lime-400">Story</span>
        </motion.h1>

        <p className="mt-6 text-white/70 max-w-xl mx-auto relative">
          Push beyond limits. Build strength. Become unstoppable.
        </p>
      </section>

      {/* PARALLAX IMAGE */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-16">
        
        <motion.img
          src="/gym.jpg"
          alt="gym"
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="rounded-2xl w-full h-[400px] object-cover grayscale hover:grayscale-0 transition duration-700"
        />
      </section>

      {/* 3D CARDS */}
      <section className="py-20 bg-white/5 text-center">
        <h2 className="text-4xl font-bold mb-14">
          Why Choose <span className="text-lime-400">Us</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6 perspective">

          {["Certified Trainers", "Modern Equipment", "Personal Plans"].map(
            (item, i) => (
              <motion.div
                key={i}
                whileHover={{ rotateY: 10, rotateX: 10, scale: 1.05 }}
                className="p-8 border border-white/10 rounded-2xl 
                bg-black/40 backdrop-blur-xl
                hover:border-lime-400/40 
                hover:shadow-[0_0_30px_rgba(163,230,53,0.3)] 
                transition"
              >
                <h3 className="text-xl font-semibold">{item}</h3>
              </motion.div>
            )
          )}
        </div>
      </section>

      {/* TRAINERS */}
      <section className="py-20 max-w-7xl mx-auto px-6 md:px-16 text-center">
        <h2 className="text-4xl font-bold mb-14">
          Meet Our <span className="text-lime-400">Trainers</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {[1, 2, 3].map((t, i) => (
            <motion.div
              key={t}
              whileHover={{ scale: 1.08 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl 
              hover:shadow-[0_0_25px_rgba(163,230,53,0.3)] transition"
            >
              <img
                src="/user1.png"
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h3 className="font-semibold text-lg">Trainer Name</h3>
              <p className="text-white/60 text-sm">Strength Coach</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 text-center relative">

        <div className="absolute inset-0 bg-lime-400/10 blur-3xl"></div>

        <h2 className="relative text-4xl md:text-6xl font-bold">
          Become <span className="text-lime-400">Unstoppable</span>
        </h2>

        <p className="text-white/70 mt-4 relative">
          Your transformation starts today.
        </p>

       <motion.div
  variants={""}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
>
  <h2 className="text-4xl font-bold">
    Our <span className="text-lime-400">Journey</span>
  </h2>
</motion.div>
<motion.button
  whileHover={{ scale: 1.1 }}
  whileTap={{ scale: 0.9 }}
  className="relative mt-8 px-10 py-4 bg-lime-400 text-black rounded-full font-semibold 
  hover:shadow-[0_0_30px_#a3e635] transition"
>
  Get Started
</motion.button>
      </section>

      <Footer />
    </div>
  );
}