import { Button } from "@/components/ui/button";
import image from "../assets/images/remove-background-hd.jpg";
const Result = () => {
  return (
    <>
      <div className=" bg-white rounded-lg px-8 py-6 drop-shadow-sm">
        {/* -------- Image Container --------   */}
        <div className=" flex flex-col sm:grid grid-cols-2 gap-8">
          {/* --------  Left side image --------  */}
          <div>
            <p className="font-semibold text-gray-600 mb-2">Original Image</p>
            <img className=" rounded-md border" src={image} alt="" />
          </div>

          {/* --------  Right side image --------  */}
          <div className="">
            <p className="font-semibold text-gray-600 mb-2">
              Background Removed Image
            </p>
            <img className=" rounded-md border" src={image} alt="" />
          </div>
        </div>
        <div className=" mt-6 flex items-center justify-center gap-3">
          <Button className="bg-blue-600 text-white hover:text-black">
            Upload+
          </Button>
          <Button className="bg-red-600 text-white hover:text-black">
            Download
          </Button>
        </div>
      </div>
    </>
  );
};

export default Result;
