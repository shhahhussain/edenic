import { motion, useSpring, useTransform, animate, AnimationPlaybackControls } from "framer-motion";
import { useEffect, useState, useRef } from "react";

interface CircularGaugeProps {
    value: number;
    size?: number;
    strokeWidth?: number;
    icon: React.ReactNode;
}

const CircularGauge = ({ value, size = 120, strokeWidth = 8, icon }: CircularGaugeProps) => {
    const [isInView, setIsInView] = useState(false);
    const [displayValue, setDisplayValue] = useState(0);
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const progress = useSpring(0, { stiffness: 50, damping: 20 });
    const controls = useRef<AnimationPlaybackControls | null>(null);

    useEffect(() => {
        if (isInView) {
            progress.set(1);
            controls.current = animate(0, value, {
                duration: 2,
                onUpdate: (latest) => {
                    setDisplayValue(Math.round(latest));
                },
                ease: "easeOut"
            });
        }
    }, [isInView, progress, value]);

    return (
        <motion.div
            className="relative"
            style={{ width: size, height: size }}
            onViewportEnter={() => setIsInView(true)}
            viewport={{ once: true }}
        >
            <svg width={size} height={size} className="transform -rotate-90">
                <circle
                    className="text-gray-200 dark:text-gray-700"
                    strokeWidth={strokeWidth}
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
                <motion.circle
                    className="text-blue-600 dark:text-blue-400"
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={useTransform(progress, [0, 1], [circumference, 0])}
                    strokeLinecap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div className="text-blue-600 dark:text-blue-400 mb-2">
                    {icon}
                </div>
                <div className="text-2xl font-bold text-blue-600 dark:text-white">
                    {displayValue}
                </div>
            </div>
        </motion.div>
    );
};

export default CircularGauge; 