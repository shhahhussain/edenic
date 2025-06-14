import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const FooterBackground = () => {
  const [paths, setPaths] = useState<string[]>([]);
  const numElements = 50; // Number of dots/lines to generate

  useEffect(() => {
    const generatedPaths: string[] = [];

    // Generate random lines
    for (let i = 0; i < numElements / 2; i++) {
      const x1 = Math.random() * 100;
      const y1 = Math.random() * 100;
      const x2 = Math.random() * 100;
      const y2 = Math.random() * 100;
      generatedPaths.push(`M ${x1} ${y1} L ${x2} ${y2}`);
    }

    // Generate random circles (dots)
    for (let i = 0; i < numElements / 2; i++) {
      const cx = Math.random() * 100;
      const cy = Math.random() * 100;
      const r = Math.random() * 0.2 + 0.1; // Small radius
      generatedPaths.push(`M ${cx},${cy} m -${r},0 a ${r},${r} 0 1,0 ${r * 2},0 a ${r},${r} 0 1,0 -${r * 2},0`); // Circle path
    }
    setPaths(generatedPaths);
  }, []);

  if (paths.length === 0) {
    return null; // Don't render until paths are generated on client
  }

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <svg
        className="w-full h-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 100 100"
      >
        {paths.map((path, index) => (
          <motion.path
            key={index}
            d={path}
            stroke="currentColor"
            strokeWidth="0.05"
            fill="none"
            className="text-blue-600/10 dark:text-blue-400/10"
            initial={{ opacity: 0, pathLength: 0 }}
            animate={{ opacity: 1, pathLength: 1 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.05,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
};

export default FooterBackground; 