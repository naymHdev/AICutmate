import React, { useState } from "react";
import clsx from "clsx";

const DemoSection = () => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  // Handle image upload
  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Simulate background removal processing
  const processImage = () => {
    if (!image) return;
    // Simulate processing time
    setTimeout(() => {
      setPreview("/path-to-sample-output.jpg"); // Replace with API-generated output
    }, 2000); // Simulated delay
  };

  return (
    <section className="py-16 bg-gray-50 text-gray-800">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Try AICutmate Now
          </h2>
          <p className="text-lg text-gray-600">
            Upload your image and preview the background removal in real-time.
          </p>
        </div>

        {/* Interactive Demo Section */}
        <div className="max-w-3xl mx-auto bg-white shadow-lg p-6 rounded-lg">
          <div className="flex flex-col items-center">
            {/* Image Upload */}
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="mb-6"
            />
            {/* Preview */}
            <div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg mb-6 overflow-hidden">
              {preview ? (
                <img
                  src={preview}
                  alt="Preview"
                  className="max-h-full max-w-full object-contain"
                />
              ) : (
                <p className="text-gray-500">No image uploaded yet</p>
              )}
            </div>
            {/* Process and Download Buttons */}
            <div className="flex space-x-4">
              <button
                onClick={processImage}
                className={clsx(
                  "px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow hover:bg-blue-600 transition"
                )}
                disabled={!image}
              >
                Process Image
              </button>
              {preview && (
                <a
                  href={preview}
                  download="sample-output.jpg"
                  className={clsx(
                    "px-6 py-3 bg-green-500 text-white font-semibold rounded-lg shadow hover:bg-green-600 transition"
                  )}
                >
                  Download Sample
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
