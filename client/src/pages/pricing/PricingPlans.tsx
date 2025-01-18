
import clsx from "clsx";

const plans = [
  {
    title: "Free Plan",
    price: "$0",
    description: "Perfect for trying out our tool with basic features.",
    features: [
      "Limited to 5 images per month",
      "Low-resolution downloads",
      "Basic background options",
    ],
    buttonText: "Get Started",
    buttonStyle: "bg-gray-500 text-white hover:bg-gray-600",
  },
  {
    title: "Pro Plan",
    price: "$19/month",
    description: "Unlock the full potential of AICutmate with premium features.",
    features: [
      "Unlimited image uploads",
      "High-resolution downloads",
      "Advanced background options",
      "Priority support",
    ],
    buttonText: "Start Free Trial",
    buttonStyle: "bg-blue-500 text-white hover:bg-blue-600",
  },
  {
    title: "Enterprise",
    price: "Custom Pricing",
    description: "Tailored solutions for businesses with specific needs.",
    features: [
      "Custom API integration",
      "Bulk image processing",
      "Dedicated account manager",
      "Enterprise-level support",
    ],
    buttonText: "Contact Sales",
    buttonStyle: "bg-green-500 text-white hover:bg-green-600",
  },
];

const PricingPlans = () => {
  return (
    <section className="py-16 bg-gray-100 text-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Plans</h2>
          <p className="text-lg text-gray-600">
            Choose the plan that works best for you and start removing backgrounds effortlessly.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={clsx(
                "flex flex-col items-center bg-white shadow-lg rounded-lg p-6"
              )}
            >
              {/* Plan Title */}
              <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
              {/* Plan Price */}
              <p className="text-3xl font-bold text-blue-500 mb-2">
                {plan.price}
              </p>
              {/* Plan Description */}
              <p className="text-gray-600 mb-4">{plan.description}</p>
              {/* Features List */}
              <ul className="mb-6 space-y-2 text-gray-600">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="inline-block w-4 h-4 bg-blue-500 rounded-full"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {/* Action Button */}
              <button
                className={clsx(
                  "px-6 py-3 font-semibold rounded-lg shadow transition",
                  plan.buttonStyle
                )}
              >
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPlans;
