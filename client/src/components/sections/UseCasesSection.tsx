import clsx from "clsx";
import { ShoppingCart, Brush, Camera, UserPlus } from "lucide-react";

const useCases = [
  {
    title: "E-commerce: Product Photography",
    icon: <ShoppingCart className="w-10 h-10 text-blue-500" />,
    description:
      "E-commerce businesses can streamline product photography by removing distracting backgrounds for clean, professional product images.",
    image: "/path-to-ecommerce-image.jpg",
  },
  {
    title: "Graphic Designers: Creative Projects",
    icon: <Brush className="w-10 h-10 text-green-500" />,
    description:
      "Graphic designers can easily remove backgrounds to create stunning visuals, banners, and promotional designs with ease.",
    image: "/path-to-graphic-designers-image.jpg",
  },
  {
    title: "Social Media: Quick Edits for Content Creation",
    icon: <Camera className="w-10 h-10 text-yellow-500" />,
    description:
      "Content creators on social media can quickly edit photos, removing backgrounds to create eye-catching posts, ads, and stories.",
    image: "/path-to-social-media-image.jpg",
  },
  {
    title: "Individuals: Personal Photo Customization",
    icon: <UserPlus className="w-10 h-10 text-purple-500" />,
    description:
      "Individuals can use AICutmate to personalize photos for social media profiles, greetings cards, or simply to have fun with their images.",
    image: "/path-to-individuals-image.jpg",
  },
];

const UseCasesSection = () => {
  return (
    <section className="py-16 bg-white text-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Use Cases</h2>
          <p className="text-lg text-gray-600">
            Discover how AICutmate can benefit various users, from businesses to
            individuals.
          </p>
        </div>

        {/* Use Cases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className={clsx(
                "flex flex-col items-center bg-gray-50 shadow-lg rounded-lg p-6"
              )}
            >
              {/* Icon */}
              <div className="mb-4">{useCase.icon}</div>
              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
              {/* Description */}
              <p className="text-center text-gray-600 mb-4">
                {useCase.description}
              </p>
              {/* Image */}
              <img
                src={useCase.image}
                alt={useCase.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
