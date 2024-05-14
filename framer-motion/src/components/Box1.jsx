import { motion } from "framer-motion";

export default function Box1() {
  return (
    <div className="pb-80">
      <motion.div
        className="w-80 h-80 bg-[aquamarine]"
        initial={{ x: 0, opacity: 0.1 }}
        animate={{ x: 500, opacity: 1 }}
        transition={{
          duration: 2,
        }}
      ></motion.div>
    </div>
  );
}
