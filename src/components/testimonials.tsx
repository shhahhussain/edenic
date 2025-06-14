"use client";

const testimonials = [
  {
    name: "Apporto",
    title: "CTO",
    quote: "Worked with Edenic as contractors for over a year now. Their expertise, dedication to quality, and commitment to well-researched solutions have been outstanding. They are honest and professional in their approach. We only had one minor billing issue due to travel delays, but they quickly corrected it and ensured it never happened again. Overall, a reliable and skilled team.",
  },
  {
    name: "Sentinel AI",
    title: "CEO",
    quote: "Working with the Edenic team has been a great experience. This is our second project with them, and they continue to impress us with their deep knowledge. From infrastructure setup to CI/CD pipelines, they have helped us scale our cloud infrastructure effectively. They don't just execute tasks—they also advise on best practices and optimal solutions, ensuring long-term success.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          Client Testimonials
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-white rounded-xl shadow-md p-8 border border-blue-200"
            >
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white text-2xl font-bold transform rotate-12">
                99
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 mb-4">{testimonial.title}</p>
              <p className="text-gray-700">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
