import { motion } from "framer-motion";

interface ServiceConnectorsProps {
    iconPositions: { x: number; y: number }[];
    totalItems: number;
}

const ServiceConnectors = ({ iconPositions, totalItems }: ServiceConnectorsProps) => {
    console.log("ServiceConnectors received iconPositions:", iconPositions);
    const paths = [];

    // Generate horizontal lines
    for (let i = 0; i < totalItems; i++) {
        if (i % 3 < 2 && i + 1 < totalItems) { // Assuming 3 columns, connect current to next in row
            const p1 = iconPositions[i];
            const p2 = iconPositions[i + 1];
            if (p1 && p2) {
                paths.push(`M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`);
            }
        }
    }

    // Generate vertical lines
    for (let i = 0; i < totalItems; i++) {
        if (i + 3 < totalItems) { // Assuming 3 columns, connect current to item below
            const p1 = iconPositions[i];
            const p2 = iconPositions[i + 3];
            if (p1 && p2) {
                paths.push(`M ${p1.x} ${p1.y} L ${p2.x} ${p2.y}`);
            }
        }
    }

    // Determine the overall bounding box for the viewBox
    // This ensures the SVG scales correctly with the dynamic positions
    const minX = Math.min(...iconPositions.map(p => p.x));
    const minY = Math.min(...iconPositions.map(p => p.y));
    const maxX = Math.max(...iconPositions.map(p => p.x));
    const maxY = Math.max(...iconPositions.map(p => p.y));

    // Add some padding to the viewBox
    const padding = 20; 
    const viewBoxX = minX - padding;
    const viewBoxY = minY - padding;
    const viewBoxWidth = (maxX - minX) + 2 * padding;
    const viewBoxHeight = (maxY - minY) + 2 * padding;

    if (iconPositions.length === 0) return null; // Don't render if no positions

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full"
                preserveAspectRatio="xMidYMid meet"
                viewBox={`${viewBoxX} ${viewBoxY} ${viewBoxWidth} ${viewBoxHeight}`}
            >
                {paths.map((path, index) => (
                    <motion.path
                        key={index}
                        d={path}
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        className="text-blue-600/20 dark:text-blue-400/20"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 1,
                            delay: index * 0.1,
                            ease: "easeInOut"
                        }}
                    />
                ))}
            </svg>
        </div>
    );
};

export default ServiceConnectors; 