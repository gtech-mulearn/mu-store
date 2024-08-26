import style from "./index.module.css";
export const AddProjects = () => {
  return (
    <div className={`p-8 min-h-screen w-full`}>
      <div
        className={`${styles.bgShadow} flex flex-col p-8 h-full w-full rounded-3xl`}
      >
        <div>
          <div className="bgw-3/4">
            <h2 className="text-5xl font-semibold mb-6">
              Tell us more about <br /> this
              <span className="text-blue-600 underline">project</span>
            </h2>
            <div className={styles.labelContent}>
              <input
                type="text"
                placeholder="Project Title"
                maxLength={20}
                // value={title} // Updated
                // onChange={(e) => setTitle(e.target.value)} // Updated
                className={styles.floatingInput}
              />
              <label className={styles.floatingLabel}>Project Title</label>
              {/* <div
                className={`${styles.floatingCounter} text-right text-xs text-gray-500 mt-1 `}
              >
                {title.length}/20
              </div> */}
              <div
                className={`${styles.floatingCounter} text-right text-xs text-gray-500 mt-1 `}
              >
                {"32"}/20 {/* Dynamic Counter */}
              </div>
            </div>

            <div className={styles.labelContent}>
              <input
                type="text"
                placeholder="Tagline"
                maxLength={60}
                // value={tagline} // Updated
                // onChange={(e) => setTagline(e.target.value)} // Updated
                className={styles.floatingInput}
              />
              <label className={styles.floatingLabel}>Tagline</label>
              {/* <p className="text-right text-gray-400 text-sm">
                {tagline.length}/60
              </p> */}
              <p
                className={`${styles.floatingCounter} text-right text-xs text-gray-500 mt-1 `}
              >
                {"54"}/60 {/* Dynamic Counter */}
              </p>
            </div>
          </div>
          <Preview />
        </div>
        <div className="flex items-center justify-center p-4">
          <div className="flex bg-white shadow-md rounded-full p-1 space-x-2">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`flex items-center px-4 py-2 rounded-full text-sm font-medium ${
                  activeTab === tab.name
                    ? "bg-blue-900 text-white"
                    : "bg-white text-gray-700 border border-gray-300"
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </div>
        </div>
        <div>
          <Info />
        </div>
      </div>
    </div>
  );
};
