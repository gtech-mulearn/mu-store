import checkList from "/projects/checkList.svg";
export const Checklist = () => {
  return (
    <div className="flex items-start px-4">
      <div className="mt-24">
        <h2 className="text-3xl font-bold mb-4">Required</h2>
        <p className="text-sm text-gray-600 mb-6">
          Check that you’ve completed all of the required information
        </p>

        <ul className="space-y-4 font-semibold">
          {[
            "Product Name",
            "Product Tagline",
            "Description",
            "Thumbnail",
            "Product Theme",
            "Category",
          ].map((item) => (
            <li key={item} className="flex items-center space-x-3">
              <input type="radio" name="requiredItem" className="form-radio" />
              <label className="text-gray-700">{item}</label>
            </li>
          ))}
        </ul>

        <p className="text-sm font-semibold text-gray-600 mt-12">
          Please complete all the necessary steps to submit the project.
        </p>

        <button className="mt-4 py-2 w-20 bg-primary text-white rounded transition ">
          Save
        </button>
      </div>
      <img src={checkList} alt="" className="" />
    </div>
  );
};
