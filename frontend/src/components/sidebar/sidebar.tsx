import styles from "./sidebar.module.css";
export const Sidebar = () => {
  return (
    <aside className={`${styles.sidebarContainer} bg-white rounded-xl shadow`}>
      <div className="p-6 flex items-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
        <div>
          <h2 className="text-lg font-semibold">Sreedev vp</h2>
          <span className="text-sm text-gray-500">Admin</span>
        </div>
      </div>

      <div className="px-6 py-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>

      <nav className="px-6 py-4 space-y-2">
        <a
          href="#"
          className="flex items-center p-2 bg-blue-500 text-white rounded-lg"
        >
          <span className="w-5 h-5 bg-gray-300 mr-4"></span>
          Dashboard
        </a>
        <a
          href="#"
          className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
        >
          <span className="w-5 h-5 bg-gray-300 mr-4"></span>
          Hackathon
        </a>
        <a
          href="#"
          className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
        >
          <span className="w-5 h-5 bg-gray-300 mr-4"></span>
          Themes and Skills
        </a>
        <a
          href="#"
          className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
        >
          <span className="w-5 h-5 bg-gray-300 mr-4"></span>
          Users
        </a>
        <a
          href="#"
          className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
        >
          <span className="w-5 h-5 bg-gray-300 mr-4"></span>
          Projects
        </a>
      </nav>

      <div className="px-6 py-4">
        <h3 className="text-gray-600">Alerts</h3>
        <a
          href="#"
          className="flex items-center p-2 text-gray-600 hover:bg-gray-100 rounded-lg mt-2"
        >
          <span className="w-5 h-5 bg-gray-300 mr-4"></span>
          Activity Logs
        </a>
      </div>

      <div className="px-6 py-4 mt-auto">
        <a
          href="#"
          className="flex items-center p-2 text-red-600 hover:bg-red-100 rounded-lg"
        >
          <span className="w-5 h-5 bg-gray-300 mr-4"></span>
          Log out
        </a>
      </div>
    </aside>
  );
}
