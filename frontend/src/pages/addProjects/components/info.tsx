import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const projectSchema = z.object({
  description: z.string().min(1, "Description is required"),
  link: z.string().url("Enter a valid URL"),
  theme: z.string().min(1, "Theme is required"),
  skills: z
    .array(z.string())
    .min(1, "At least one skill is required")
    .max(3, "Maximum of 3 skills allowed"),
  category: z.string().min(1, "Category is required"),
  subCategory: z.string().min(1, "Subcategory is required"),
  isOpenSource: z.boolean().optional(),
});
const Info = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(projectSchema),
  });

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex space-x-4">
      <div className="w-1/2">
        <label className="block mb-2">Description *</label>
        <textarea
          {...register("description")}
          placeholder="Enter Project details"
          className="w-full h-full border rounded p-2"
        />
        {errors.description && (
          <p className="text-red-500 text-sm">
            {String(errors.description.message)}
          </p>
        )}
      </div>

      <div className="w-1/2">
        <div className="mt-4">
          <label className="block mb-2">Link to the project *</label>
          <input
            {...register("link")}
            placeholder="Enter the URL for the project"
            className="w-full border rounded p-2"
          />
          {errors.link && (
            <p className="text-red-500 text-sm">
              {String(errors.link.message)}
            </p>
          )}
        </div>
        <div className="mt-4">
          <label className="block mb-2">Theme of the project *</label>
          <input
            {...register("theme")}
            placeholder="Enter the theme of the project"
            className="w-full border rounded p-2"
          />
          {errors.theme && (
            <p className="text-red-500 text-sm">
              {String(errors.theme.message)}
            </p>
          )}
        </div>
        <div className="mt-4">
          <label className="block mb-2">Skills (Up to 3) *</label>
          <input
            {...register("skills")}
            placeholder="Enter skills separated by commas"
            className="w-full border rounded p-2"
          />
          {errors.skills && (
            <p className="text-red-500 text-sm">
              {String(errors.skills.message)}
            </p>
          )}
        </div>
        <label className="block mb-2">Category *</label>
        <select {...register("category")} className="w-full border rounded p-2">
          <option value="">Select Category</option>
          <option value="Web Development">Web Development</option>
          <option value="Mobile Development">Mobile Development</option>
        </select>
        {errors.category && (
          <p className="text-red-500 text-sm">
            {String(errors.category.message)}
          </p>
        )}

        <div className="mt-4">
          <label className="block mb-2">Subcategory *</label>
          <select
            {...register("subCategory")}
            className="w-full border rounded p-2"
          >
            <option value="">Select Subcategory</option>
            <option value="Frontend">Frontend</option>
            <option value="Backend">Backend</option>
          </select>
          {errors.subCategory && (
            <p className="text-red-500 text-sm">
              {String(errors.subCategory.message)}
            </p>
          )}
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
};

export default Info;
