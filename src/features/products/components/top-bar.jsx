const TopBar = ({ title, icon }) => {
  return (
    <header className="sticky top-0 z-50 bg-surface-light dark:bg-surface-dark shadow-sm transition-colors duration-300">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Menu Icon (Right side in RTL) */}
        <button className="flex items-center justify-center p-2 rounded-full hover:bg-background-light dark:hover:bg-background-dark text-[#111318] dark:text-white transition-colors">
          <span className="material-symbols-outlined">menu</span>
        </button>
        {/* Title */}
        <div className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-primary flex items-center justify-center text-white">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: "20px" }}
            >
              {icon}
            </span>
          </div>
          <h1 className="text-lg font-bold tracking-tight text-[#111318] dark:text-white">
            {title}
          </h1>
        </div>
        {/* Search Icon (Left side in RTL) */}
        <button className="flex items-center justify-center p-2 rounded-full hover:bg-background-light dark:hover:bg-background-dark text-[#111318] dark:text-white transition-colors">
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
    </header>
  );
};

export default TopBar;
