"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardFooter } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const testimonials = [
    {
        quote: "EDENIC transformed our development process. Their DevOps solutions have significantly improved our deployment speed and reliability.",
        author: "Jane Doe",
        title: "CTO, Tech Innovators Inc.",
        avatar: "/placeholder.svg?height=40&width=40",
    },
    {
        quote: "The custom software EDENIC developed for us has been a game-changer. It's intuitive, efficient, and scales with our growing needs.",
        author: "John Smith",
        title: "CEO, Global Solutions Ltd.",
        avatar: "/placeholder.svg?height=40&width=40",
    },
    {
        quote: "EDENIC's cloud migration services were flawless. They ensured a smooth transition with zero downtime. Impressive!",
        author: "Emily Johnson",
        title: "Head of IT, CloudFirst Corp.",
        avatar: "/placeholder.svg?height=40&width=40",
    },
];

const Testimonials = () => {
    return (
        <section className="py-24 bg-secondary/50">
            <div className="container mx-auto px-4">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    What Our Clients Say
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <Card>
                                <CardContent className="pt-6">
                                    <p className="text-lg mb-4">
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </p>
                                </CardContent>
                                <CardFooter className="flex items-center">
                                    <Avatar className="mr-4">
                                        <AvatarImage
                                            src={testimonial.avatar}
                                            alt={testimonial.author}
                                        />
                                        <AvatarFallback>
                                            {testimonial.author[0]}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">
                                            {testimonial.author}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {testimonial.title}
                                        </p>
                                    </div>
                                </CardFooter>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
