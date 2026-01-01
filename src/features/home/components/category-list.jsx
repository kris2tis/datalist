import Img from "@/shared/components/ui/img";
import Link from "next/link";

const categories = [
  { name: "موبایل", imgSrc: "/icons/mobile.svg", bg: "bg-blue-50" , href:"/products?category=mobile"},
  { name: "کالای دیجیتال", imgSrc: "/icons/laptop.svg", bg: "bg-blue-50", href:"/products?category=laptop" },
  { name: "مد و پوشاک", imgSrc: "/icons/shirt.svg", bg: "bg-purple-50" , href:"/products?category=shirt"},
  { name: "خانه", imgSrc: "/icons/home.svg", bg: "bg-green-50" , href:"/products?category=home"},
  { name: "سوپرمارکت", imgSrc: "/icons/market.svg", bg: "bg-orange-50" , href:"/products?category=market"},
  { name: "زیبایی", imgSrc: "/icons/beauty.svg", bg: "bg-pink-50", href:"/products?category=beauty" },
  { name: "اسباب بازی", imgSrc: "/icons/toys.svg", bg: "bg-yellow-50" , href:"/products?category=toys"},
];

export const CategoryList = () => (
  <div className="py-8">
    <div className="flex items-center justify-between mb-6">
      <h3 className="text-xl font-bold text-gray-800 flex items-center gap-2">
        <span className="w-2 h-6 bg-blue-600 rounded-full"></span>
        دسته‌بندی‌های محبوب
      </h3>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
      {categories.map((cat, index) => (
        <Link
          key={index}
          className="flex flex-col items-center p-4 bg-white rounded-2xl border border-gray-100 hover:border-blue-400 hover:shadow-lg transition-all group gap-3 text-center"
          href={cat.href}
        >
          <div
            className={`w-16 h-16 flex items-center justify-center rounded-2xl ${cat.bg} p-2 group-hover:opacity-80 transition-colors`}
          >
            <Img
              alt={cat.name}
              className="h-5 aspect-square"
              src={`${cat.imgSrc}`}
            />
          </div>
          <span className="text-sm font-bold text-gray-700 group-hover:text-blue-600">
            {cat.name}
          </span>
        </Link>
      ))}
    </div>
  </div>
);
