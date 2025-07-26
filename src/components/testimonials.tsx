"use client";

const testimonials = [
  {
    name: "Apporto",
    title: "CTO",
    quote: "Edenic delivered our project on time and built a beautiful React interface that our users love.",
  },
  {
    name: "Sentinel AI",
    title: "CEO",
    quote: "They built a full-stack SaaS dashboard for our fintech startup and guided us through every step of the process.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 sm:py-24 bg-background dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-foreground dark:text-gray-100 mb-12 sm:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200 dark:from-blue-500 dark:to-blue-300">
          Client Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card dark:bg-gray-800/50 rounded-xl shadow-md p-6 sm:p-8 border border-border dark:border-gray-700 transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-blue-500 dark:bg-blue-600 rounded-full flex items-center justify-center text-white text-xl sm:text-2xl font-bold transform rotate-12">
                99
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-foreground dark:text-gray-100 mb-1">
                {testimonial.name}
              </h3>
              <p className="text-muted-foreground dark:text-gray-400 mb-4 text-sm sm:text-base">{testimonial.title}</p>
              <p className="text-muted-foreground dark:text-gray-300 text-sm sm:text-base leading-relaxed">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
