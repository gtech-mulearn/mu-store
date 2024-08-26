import React from "react";
import { useForm, Controller } from "react-hook-form";

interface InfoProps {
  onSubmit: (data: InfoData) => void;
}

interface InfoData {
  description: string;
  link: string;
  isOpenSource: boolean;
  theme: string;
  skills: string[];
  category: string;
  subCategory: string;
}

const Info: React.FC<InfoProps> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<InfoData>({
    defaultValues: {
      description: "",
      link: "",
      isOpenSource: false,
      theme: "",
      skills: [],
      category: "",
      subCategory: "",
    },
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-2xl mx-auto p-6 space-y-6"
    >
      <div>
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-700"
        >
          Description *
        </label>
        <Controller
          name="description"
          control={control}
          rules={{ required: "Description is required" }}
          render={({ field }) => (
            <textarea
              {...field}
              id="description"
              placeholder="Enter Project details"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 border p-2"
              rows={4}
            />
          )}
        />
        {errors.description && (
          <span className="text-red-500 text-xs">
            {errors.description.message}
          </span>
        )}
      </div>

      <div>
        <label
          htmlFor="link"
          className="block text-sm font-medium text-gray-700"
        >
          Link to the project *
        </label>
        <Controller
          name="link"
          control={control}
          rules={{ required: "Project link is required" }}
          render={({ field }) => (
            <input
              {...field}
              type="url"
              id="link"
              placeholder="Enter the URL for the project"
              className="border p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          )}
        />
        {errors.link && (
          <span className="text-red-500 text-xs">{errors.link.message}</span>
        )}
      </div>

      <div className="flex items-center">
        <Controller
          name="isOpenSource"
          control={control}
          render={({ field }) => (
            <input
              type="checkbox"
              {...field}
              checked={field.value}
              value={field.value ? "true" : "false"}
              className="border p-2 rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50"
            />
          )}
        />
        <label
          htmlFor="isOpenSource"
          className="ml-2 block text-sm text-gray-900"
        >
          Is the project open source?
        </label>
      </div>

      <div>
        <label
          htmlFor="theme"
          className="block text-sm font-medium text-gray-700"
        >
          Theme of the project *
        </label>
        <Controller
          name="theme"
          control={control}
          rules={{ required: "Theme is required" }}
          render={({ field }) => (
            <input
              {...field}
              type="text"
              id="theme"
              placeholder="Enter the theme of the project"
              className="border p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          )}
        />
        {errors.theme && (
          <span className="text-red-500 text-xs">{errors.theme.message}</span>
        )}
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700">
          Skills (Up to 3) *
        </label>
        {/* Implement skill selection logic here */}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category
          </label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <select
                {...field}
                id="category"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">Select a category</option>
                {/* Add category options here */}
              </select>
            )}
          />
        </div>

        <div>
          <label
            htmlFor="subCategory"
            className="block text-sm font-medium text-gray-700"
          >
            Sub Category
          </label>
          <Controller
            name="subCategory"
            control={control}
            render={({ field }) => (
              <select
                {...field}
                id="subCategory"
                className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              >
                <option value="">Select a sub category</option>
                {/* Add sub category options here */}
              </select>
            )}
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Submit
      </button>
    </form>
  );
};

export default Info;
