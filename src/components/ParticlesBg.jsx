import Particles from "react-tsparticles";

export default function ParticlesBg() {
  return (
    <Particles
      options={{
        background: { color: "transparent" },
        particles: {
          number: { value: 40 },
          color: { value: "#a3e635" },
          size: { value: 2 },
          move: { enable: true, speed: 1 },
          opacity: { value: 0.3 },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
}