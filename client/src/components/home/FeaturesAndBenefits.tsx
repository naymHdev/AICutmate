import clsx from "clsx";
import { CheckCircle, Zap, Image, Shield } from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="w-10 h-10 text-blue-500" />,
    title: "AI Precision",
    description:
      "Enjoy clean, accurate cuts with our advanced AI-powered tools.",
  },
  {
    icon: <Zap className="w-10 h-10 text-green-500" />,
    title: "Fast Processing",
    description:
      "Get your images processed in seconds, no matter the file size.",
  },
  {
    icon: <Image className="w-10 h-10 text-purple-500" />,
    title: "Multiple Background Options",
    description:
      "Choose solid colors, transparent backgrounds, or upload custom images.",
  },
  {
    icon: <Shield className="w-10 h-10 text-red-500" />,
    title: "Secure and Private",
    description: "Your uploads and results are always secure with us.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose AICutmate?
          </h2>
          <p className="text-lg text-gray-600">
            Discover what makes our background removal tool stand out.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={clsx(
                "flex flex-col items-center text-center bg-white shadow-lg p-6 rounded-lg"
              )}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
