import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { useState } from "react";
import styles from "./info.module.css";
import Select from "react-select";

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
  const [editorState, setEditorState] = useState();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedSubCategory, setSelectedSubCategory] = useState(null);
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

  const onEditorStateChange = (state: any) => {
    setEditorState(state);
  };

  const toolbarOptions = {
    options: ["inline", "blockType", "list", "textAlign", "link", "history"],
    inline: { options: ["bold", "italic", "underline"] },
    list: { options: ["unordered", "ordered"] },
    textAlign: { options: ["left", "center", "right"] },
    link: { options: ["link"] },
  };

  const categoryOptions = [
    { value: "Web Development", label: "Web Development" },
    { value: "Mobile Development", label: "Mobile Development" },
  ];

  const subCategoryOptions = [
    { value: "Frontend", label: "Frontend" },
    { value: "Backend", label: "Backend" },
  ];

  const handleCategoryChange = (selectedOption: any) => {
    setSelectedCategory(selectedOption);
  };

  const handleSubCategoryChange = (selectedOption: any) => {
    setSelectedSubCategory(selectedOption);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.bgShadow}>
      <div className="flex max-md:flex-col space-x-4">
        <div className="md:w-1/2">
          <label className={`${styles.labelContent} block mb-2`}>
            Description *
          </label>
          <div className="border-2 h-[95%] rounded-md p-2">
            <Editor
              editorState={editorState}
              toolbarClassName="toolbar-bottom"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
              onEditorStateChange={onEditorStateChange}
              toolbar={toolbarOptions}
            />
          </div>
          {errors.description && (
            <p className="text-red-500 text-sm">
              {String(errors.description.message)}
            </p>
          )}
        </div>

        <div className="md:w-1/2">
          <div className={styles.labelContent}>
            <input
              {...register("link")}
              placeholder="Enter the URL for the project"
              className={styles.floatingInput}
            />
            <label className={styles.floatingLabel}>
              Link to the project *
            </label>
            {errors.link && (
              <p className="text-red-500 text-sm">
                {String(errors.link.message)}
              </p>
            )}
          </div>

          <div className={styles.labelContent}>
            <input
              {...register("theme")}
              placeholder="Enter the Repo Link"
              className={styles.floatingInput}
            />
            <label className={styles.floatingLabel}>Repo Link*</label>
            {errors.theme && (
              <p className="text-red-500 text-sm">
                {String(errors.theme.message)}
              </p>
            )}
            <div className="flex justify-start items-center gap-3 pl-3">
              <input type="radio" name="radio" />
              <span>Is the project open source?</span>
            </div>
          </div>

          <div className={styles.labelContent}>
            <input
              {...register("skills")}
              placeholder="Enter skills separated by commas"
              className={styles.floatingInput}
            />
            <label className={styles.floatingLabel}>Skills (Up to 3)*</label>
            {errors.skills && (
              <p className="text-red-500 text-sm">
                {String(errors.skills.message)}
              </p>
            )}
          </div>

          <div className={styles.labelContent}>
            <Select
              value={selectedCategory}
              onChange={handleCategoryChange}
              options={categoryOptions}
              className={styles.reactSelect}
              placeholder="Select Category"
            />
            <label className={styles.floatingLabel}>Category*</label>
            {errors.category && (
              <p className="text-red-500 text-sm">
                {String(errors.category.message)}
              </p>
            )}
          </div>

          <div className={styles.labelContent}>
            <Select
              value={selectedSubCategory}
              onChange={handleSubCategoryChange}
              options={subCategoryOptions}
              className={styles.reactSelect}
              placeholder="Select Subcategory"
            />
            <label className={styles.floatingLabel}>Subcategory*</label>
            {errors.subCategory && (
              <p className="text-red-500 text-sm">
                {String(errors.subCategory.message)}
              </p>
            )}
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-primary text-white p-2 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Info;
