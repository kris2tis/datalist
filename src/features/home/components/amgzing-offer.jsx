import Img from "../../../shared/components/ui/img";

export const ProductAmagzingOffer = () => {
  return (
    <div className="space-y-12">
      {/* بخش قرمز شگفت‌انگیز */}
      <section className="relative bg-gradient-to-br from-[#d61f36] to-[#8E0016] rounded-3xl p-6 lg:p-10 overflow-hidden isolate">
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        ></div>

        <div className="relative flex flex-col gap-6">
          <div className="flex flex-col md:flex-row items-center justify-between text-white gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
                <Img
                  src={"/icons/fire.svg"}
                  alt={"fire icon"}
                  className={"h-5 aspect-square"}
                />
              </div>
              <div>
                <h2 className="text-2xl font-black">پیشنهادات شگفت‌انگیز</h2>
                <p className="text-white/80 text-sm">
                  فرصت خرید با بیشترین تخفیف‌ها
                </p>
              </div>
            </div>
            <a
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg text-sm font-bold transition-colors border border-white/20"
              href="#"
            >
              مشاهده همه
              <Img
                src={"/icons/light-arrow.svg"}
                alt={"fire icon"}
                className={"h-5 aspect-square"}
              />
            </a>
          </div>

          <div className="flex overflow-x-auto gap-4 py-4 no-scrollbar scroll-smooth">
            {/* کارت محصول شگفت انگیز - نمونه */}
            {[10, 11, 12, 13].map((imgId) => (
              <div
                key={imgId}
                className="min-w-[200px] md:min-w-[240px] bg-white rounded-2xl p-4 flex flex-col gap-3 shadow-xl hover:-translate-y-1 transition-all cursor-pointer group"
              >
                <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden mb-2 p-4">
                  <img
                    alt="Product"
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    src={`http://googleusercontent.com/profile/picture/${imgId}`}
                  />
                  <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-md">
                    35%
                  </div>
                </div>
                <div className="flex-1 text-right">
                  <h4 className="text-sm font-bold text-gray-800 line-clamp-2 leading-relaxed mb-2">
                    نام محصول تخفیف خورده
                  </h4>
                  <span className="text-gray-400 text-xs line-through block">
                    ۴,۲۰۰,۰۰۰
                  </span>
                  <div className="text-red-600 font-black text-lg">
                    ۲,۷۵۰,۰۰۰{" "}
                    <span className="text-xs font-normal text-gray-500">
                      تومان
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* بخش محصولات منتخب */}
      <div className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-black text-gray-900">منتخب محصولات</h3>
          <a
            className="text-gray-500 hover:text-blue-600 text-sm font-bold flex items-center gap-1 transition-all"
            href="#"
          >
            مشاهده لیست کامل
            <span className="material-symbols-outlined text-sm">
              arrow_back
            </span>
          </a>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {[18, 19, 20, 21].map((imgId) => (
            <div key={imgId} className="group relative">
              <div className="relative w-full aspect-square bg-gray-50 rounded-2xl mb-4 overflow-hidden p-6 border border-gray-100 group-hover:border-blue-200 transition-colors">
                <img
                  alt="Product"
                  className="w-full h-full object-contain mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                  src={`http://googleusercontent.com/profile/picture/${imgId}`}
                />
                <div className="absolute inset-x-0 bottom-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-gray-900 text-white px-4 py-2 rounded-xl shadow-lg hover:bg-black text-sm font-bold flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">
                      add_shopping_cart
                    </span>
                    افزودن به سبد
                  </button>
                </div>
              </div>
              <div className="space-y-1 text-right">
                <div className="flex items-center gap-1 text-yellow-500 mb-1">
                  <span className="material-symbols-outlined text-[16px] fill-current">
                    star
                  </span>
                  <span className="text-xs font-bold text-gray-600">4.5</span>
                </div>
                <h4 className="text-sm font-bold text-gray-800 leading-tight line-clamp-2 h-10 group-hover:text-blue-600 transition-colors">
                  عنوان محصول منتخب فروشگاه
                </h4>
                <div className="pt-2">
                  <div className="text-gray-900 font-black text-lg">
                    ۳,۵۰۰,۰۰۰{" "}
                    <span className="text-xs font-normal text-gray-500">
                      تومان
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
