export default function AdminHeader() {
    return (
        <header className="flex items-center justify-between whitespace-nowrap border-b border-[#29382e] px-8 py-5 bg-[#111813]/50 backdrop-blur-sm z-10">
            <div className="flex items-center gap-8 w-full max-w-2xl">
                <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em] hidden lg:block">داشبورد</h2>
                {/* Search Bar */}
                {/* <label className="flex flex-col w-full max-w-md h-11 relative">
                    <div className="flex w-full flex-1 items-center rounded-xl bg-[#1c2a22] border border-[#29382e] focus-within:border-primary/50 transition-colors overflow-hidden">
                        <div className="text-[#9db8a6] flex items-center justify-center pr-4">
                            <span className="material-symbols-outlined">search</span>
                        </div>
                        <input className="w-full bg-transparent border-none text-white placeholder:text-[#5f7466] h-full px-4 text-sm font-normal focus:ring-0" 
                               placeholder="جستجو در سفارش‌ها، محصولات..." />
                    </div>
                </label> */}
            </div>
            <div className="flex items-center gap-4">
                {/* Notification Button */}
                {/* <button className="flex items-center justify-center size-11 rounded-xl bg-[#1c2a22] border border-[#29382e] text-[#9db8a6] hover:text-white hover:border-primary/30 transition-all relative">
                    <span className="material-symbols-outlined">notifications</span>
                    <span className="absolute top-3 right-3 size-2 bg-primary rounded-full border-2 border-[#1c2a22]"></span>
                </button> */}
                {/* New Product CTA */}
            
            </div>
        </header>
    );
}