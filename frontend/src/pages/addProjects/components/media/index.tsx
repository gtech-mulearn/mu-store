import { useState } from "react";
import image_placeholder from "/projects/image_placeholder.svg";

const UploadCard = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  const [fileName, setFileName] = useState<string | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName(null);
    }
  };
  return (
    <div className="mx-auto">
      <h2 className="text-3xl font-semibold mb-4">{title}</h2>

      <div className="flex items-center space-x-6 p-4">
        {/* Image Placeholder */}
        <div className="flex-grow flex h-full items-center justify-center rounded-lg">
          <img src={image_placeholder} alt="" />
        </div>
        <div className="flex flex-col ">
          <p className="text-sm text-gray-600 mb-2">{description}</p>
          <div className="flex items-center space-x-4">
            <label className="bg-gray-100 px-4 py-2 text-primary border border-primary rounded cursor-pointer hover:bg-gray-200 transition">
              Choose File
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            <span className="text-gray-500 max-w-32 truncate">
              {fileName ? fileName : "No File Chosen"}
            </span>
          </div>

          <input
            type="text"
            placeholder="Paste an URL"
            className="mt-3 w-full border border-primary rounded-lg px-4 py-2 transition"
          />
          <div className="flex justify-end">
            <button className="mt-4 py-2 w-20 bg-primary text-white rounded transition ">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
const Media = () => {
  const ThumbnailProp = {
    title: "Thumbnail",
    description: "Upload a 250x250 image (JPG, PNG, GIF), max 2 MB",
  };
  const GallaryProp = {
    title: "Gallary",
    description: "Upload multiple images (JPG, PNG, GIF), max 2 MB",
  };
  return (
    <div className="flex flex-col gap-12 justify-center">
      <div className=" p-10">
        <h2 className="text-3xl font-semibold mb-2">Video / Loom</h2>
        <p className="text-sm text-gray-600 mb-4">
          Upload an optional video from YouTube or Loom to show people how to
          use your project or what inspired you to make this project
        </p>
        <input
          type="text"
          placeholder="Enter / Paste URL"
          className="w-full border border-gray-300 rounded-lg px-4 py-2 text-gray-700 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary transition"
        />
      </div>
      <div className="flex">
        <UploadCard
          title={ThumbnailProp.title}
          description={ThumbnailProp.description}
        />
        <UploadCard
          title={GallaryProp.title}
          description={GallaryProp.description}
        />
      </div>
    </div>
  );
};

export default Media;
