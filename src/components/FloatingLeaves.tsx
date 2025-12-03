import { motion } from "framer-motion";

const leaves = Array.from({ length: 15 }, (_, i) => ({
  id: i,
  size: Math.random() * 20 + 10,
  left: Math.random() * 100,
  delay: Math.random() * 10,
  duration: Math.random() * 10 + 15,
  rotation: Math.random() * 360,
}));

export function FloatingLeaves() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute text-primary/20"
          initial={{ 
            top: -50, 
            left: `${leaf.left}%`,
            rotate: leaf.rotation,
          }}
          animate={{
            top: "110%",
            left: `${leaf.left + (Math.random() - 0.5) * 20}%`,
            rotate: leaf.rotation + 720,
          }}
          transition={{
            duration: leaf.duration,
            repeat: Infinity,
            delay: leaf.delay,
            ease: "linear",
          }}
          style={{ fontSize: leaf.size }}
        >
          🍃
        </motion.div>
      ))}
    </div>
  );
}
