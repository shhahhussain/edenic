"use client";

import { Button } from "./ui/button";

const PromoBanner = () => {
    return (
        <div className="bg-primary/5">
            <div className="mx-auto max-w-7xl px-6 py-3 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center gap-x-4">
                    <p className="text-sm leading-6 text-primary">
                        <strong className="font-semibold">Special Offer</strong>
                        <svg viewBox="0 0 2 2" className="mx-2 inline h-0.5 w-0.5 fill-primary" aria-hidden="true">
                            <circle cx={1} cy={1} r={1} />
                        </svg>
                        Get 20% off on your first cloud migration project
                    </p>
                    <Button
                        variant="default"
                        size="sm"
                        className="flex-none"
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