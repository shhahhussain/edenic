"use client";

import { Button } from "./ui/button";

const PromoBanner = () => {
    return (
        <div className="bg-primary/10 dark:bg-blue-800/20 text-primary-foreground dark:text-blue-200 py-2 sm:py-3">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center gap-x-3 sm:gap-x-4 flex-wrap text-center">
                    <p className="text-sm sm:text-base leading-6 text-primary dark:text-blue-200">
                        <strong className="font-semibold">Special Offer</strong>
                        <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-current" aria-hidden="true">
                            <circle cx={1} cy={1} r={1} />
                        </svg>
                        Get 20% off on your first full stack project
                    </p>
                    <Button
                        variant="default"
                        size="sm"
                        className="flex-none bg-primary dark:bg-blue-600 text-primary-foreground dark:text-white hover:bg-primary/90 dark:hover:bg-blue-700 px-3 py-1.5 sm:px-4 sm:py-2 mt-2 sm:mt-0"
                        asChild
                    >
                        <a href="#contact">
                            Contact us <span aria-hidden="true">&rarr;</span>
                        </a>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default PromoBanner; 