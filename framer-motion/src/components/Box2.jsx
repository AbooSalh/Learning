import { motion } from "framer-motion";

export default function Box2() {
  return (
    <div className="pb-80">
      <motion.div
        className="w-80 h-80 bg-[#95ffdc]"
        whileHover={{
          scale: 1.1,
          transition: {
            duration: 0.2,
          },
        }}
        whileTap={{
          scale: 0.9,
          transition: {
            duration: 0.2,
          },
        }}
        drag
        dragConstraints={{
          top: 0,
          left: 0,
          right: 200,
          bottom: 0,
        }}
      >
        <input type="file" accept="image/*" capture="camera" />
      </motion.div>
    </div>
  );
}
