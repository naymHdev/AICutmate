import clsx from "clsx";


const testimonials = [
  {
    name: "Jane Doe",
    role: "Graphic Designer",
    image: "/path-to-jane-image.jpg",
    review: "AICutmate has saved me countless hours of manual editing! The AI-powered tool is incredibly accurate, and I can now quickly deliver high-quality designs to my clients.",
  },
  {
    name: "John Smith",
    role: "E-commerce Entrepreneur",
    image: "/path-to-john-image.jpg",
    review: "AICutmate is a game-changer for my product listings. I can now remove backgrounds instantly, and the high-resolution results are perfect for my online store!",
  },
  {
    name: "Sarah Lee",
    role: "Marketing Specialist",
    image: "/path-to-sarah-image.jpg",
    review: "As a marketer, I need professional images that pop. AICutmate has made the process so much faster, and the results are always spot-on. Highly recommended!",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-lg text-gray-600">
            Hear from professionals, businesses, and designers who have used AICutmate to enhance their workflow.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={clsx(
                "flex flex-col items-center text-center bg-white shadow-lg p-6 rounded-lg"
              )}
            >
              {/* Profile Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mb-4 object-cover"
              />
              {/* Testimonial Text */}
              <p className="text-lg text-gray-600 mb-4">{`"${testimonial.review}"`}</p>
              {/* Name and Role */}
              <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
