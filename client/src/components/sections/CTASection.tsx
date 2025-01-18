import clsx from "clsx";

const CTASection = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="container mx-auto px-4 text-center">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Try AICutmate Now!
        </h2>
        <p className="text-lg mb-6">
          Experience the power of AI-driven background removal. Start your free
          trial or upload an image to see the magic in action.
        </p>

        {/* Action Buttons */}
        <div className="flex justify-center gap-6">
          {/* Upload Image Button */}
          <a
            href="#upload"
            className={clsx(
              "bg-white text-blue-600 py-3 px-8 rounded-md text-lg font-semibold shadow-md hover:bg-gray-100 transition"
            )}
          >
            Upload Image
          </a>

          {/* Sign Up Button */}
          <a
            href="#signup"
            className={clsx(
              "bg-transparent border-2 border-white py-3 px-8 rounded-md text-lg font-semibold text-white hover:bg-white hover:text-blue-600 transition"
            )}
          >
            Start Your Free Trial
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
