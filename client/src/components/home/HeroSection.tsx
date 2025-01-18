import clsx from "clsx";
import demo from "../../assets/images/remove-background-hd.jpg";

const HeroSection = () => {
  return (
    <section
      className={clsx(
        "relative bg-gradient-to-r from-purple-600 to-blue-500 text-white py-20"
      )}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Content Section */}
        <div className="max-w-lg text-center md:text-left">
          <h1
            className={clsx(
              "text-4xl md:text-6xl font-bold leading-tight mb-6"
            )}
          >
            Remove Backgrounds Instantly
          </h1>
          <p className="text-lg text-gray-100 mb-6">
            Upload your images and get clean, professional results in seconds.
            Perfect for e-commerce, design, and marketing.
          </p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#try-now"
              className={clsx(
                "px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg shadow hover:bg-gray-200 transition"
              )}
            >
              Try It Free
            </a>
            <a
              href="#how-it-works"
              className={clsx(
                "px-6 py-3 bg-transparent border border-white text-white font-semibold rounded-lg shadow hover:bg-white hover:text-purple-600 transition"
              )}
            >
              How It Works
            </a>
          </div>
        </div>

        {/* Image/Illustration Section */}
        <div className="mt-12 md:mt-0">
          <img
            src={demo}
            alt="Background Removal Tool Preview"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Decorative Background */}
      <div
        className={clsx(
          "absolute bottom-0 left-0 right-0 h-32 bg-white transform -skew-y-6 origin-bottom"
        )}
      />
    </section>
  );
};

export default HeroSection;
