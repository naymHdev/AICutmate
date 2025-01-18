import { Users } from "lucide-react";

const AboutAICutmate = () => {
  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About AICutmate
          </h2>
          <p className="text-lg text-gray-600">
            Learn more about the mission and vision behind AICutmate.
          </p>
        </div>

        {/* Section Content */}
        <div className="flex flex-col items-center md:flex-row md:space-x-12 space-y-8 md:space-y-0">
          {/* Mission Statement */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
            <p className="text-lg text-gray-600">
              At AICutmate, our mission is to revolutionize the way people edit
              and enhance their photos. With cutting-edge AI technology, we make
              background removal faster, easier, and more precise than ever.
              Whether you're a business, a designer, or an individual, AICutmate
              helps you achieve professional-quality results in just a few
              clicks.
            </p>
          </div>

          {/* Team Story */}
          <div className="md:w-1/2 text-center md:text-left">
            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
            <p className="text-lg text-gray-600 mb-6">
              AICutmate was created by a passionate team of tech enthusiasts,
              designers, and innovators who believe in the power of AI to make
              creative tasks more accessible. Our team’s goal is to empower
              users with a tool that saves time, reduces effort, and delivers
              exceptional quality.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-4">
              <Users className="w-8 h-8 text-blue-500" />
              <p className="text-lg text-gray-600">
                Led by a group of AI experts and creative minds, we’re dedicated
                to providing a seamless, intuitive experience for all our users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAICutmate;
