import { http } from "../../../../httpServices";
import React from "react";
import GalleryCarousel from "../../../../features/product-details/component/gallery-carousel";
import ProductInfo from "../../../../features/product-details/component/product-info";
import AddToCartCTA from "@/features/product-details/component/add-to-cart-cta";

export default async function Page({ params }) {
  const { id } = await params;
  const { product } = await http
    .get(`/user/product/${id}`)
    .then(({ data }) => data);

  if (!product?.id) {
    return <span>محصولی یافت نشد</span>;
  }

  const { id: productId, title, price, image, content } = product;
  const imageUrl = `/uploads/${image?.split("/")[3]}`;

  return (
    <div  className="grow container mx-auto px-4 lg:px-8 max-w-[1440px] py-8">
      <div  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 relative">
        {/* Picture */}
        <GalleryCarousel image={imageUrl} />
        {/* Information */}
        <ProductInfo title={title} price={price} />
        {/* Add To Cart */}
        <AddToCartCTA productId={productId} />
      </div>
      {/* Product introduction */}
      {/* <div  className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12"> */}
      {/* Navigation */}
      {/* <div  className="block lg:col-span-3">
          <div  className="sticky top-28 flex flex-col gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
            <a
               className="flex items-center justify-between p-4 rounded-xl bg-red-50 dark:bg-red-900/10 text-primary font-bold shadow-sm transition-all"
              href="#desc"
            >
              <span>معرفی</span>
              <span  className="material-symbols-outlined text-lg">article</span>
            </a>
            <a
               className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-all"
              href="#specs"
            >
              <span>مشخصات فنی</span>
              <span  className="material-symbols-outlined text-lg">settings</span>
            </a>
            <a
               className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-all"
              href="#comments"
            >
              <span>دیدگاه کاربران</span>
              <div  className="flex items-center gap-2">
                <span  className="text-xs bg-neutral-200 dark:bg-neutral-700 px-1.5 py-0.5 rounded text-neutral-600 dark:text-neutral-300">
                  ۱۲۵۰
                </span>
                <span  className="material-symbols-outlined text-lg">comment</span>
              </div>
            </a>
            <a
               className="flex items-center justify-between p-4 rounded-xl hover:bg-neutral-50 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-all"
              href="#qa"
            >
              <span>پرسش و پاسخ</span>
              <span  className="material-symbols-outlined text-lg">help</span>
            </a>
          </div>
        </div> */}
      {/* <div  className="lg:col-span-9 flex flex-col gap-16"> */}
      {/* <section  className="scroll-mt-32" id="desc">
            <div  className="flex items-center gap-3 mb-6">
              <span  className="w-1.5 h-8 bg-primary rounded-full"></span>
              <h2  className="text-xl lg:text-2xl font-black text-neutral-900 ">
                معرفی محصول
              </h2>
            </div>
            <div  className="bg-white dark:bg-neutral-800 p-6 lg:p-10 rounded-3xl shadow-soft border border-neutral-100">
              <div  className="prose prose-neutral dark:prose-invert max-w-none prose-p:leading-8 prose-headings:font-black">
                <p  className="text-justify mb-8 text-neutral-600 ">
                  گوشی موبایل iPhone 13 پرچم‌دار جدید شرکت اپل است که با چند
                  ویژگی جدید و دوربین دوگانه در قاب پشتی روانه بازار شده است.
                  این محصول با طراحی زیبا و آشنای خود، همچنان یکی از محبوب‌ترین
                  گوشی‌های بازار است. اپل در این مدل تمرکز ویژه‌ای روی بهبود
                  باتری و کیفیت دوربین داشته است.
                </p>
                <div  className="my-10 rounded-2xl overflow-hidden relative h-64 lg:h-80 w-full shadow-lg group">
                  <div  className="absolute inset-0 bg-gradient-to-br from-neutral-900 to-neutral-800"></div>
                  <div  className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                    <span  className="text-primary font-black text-5xl lg:text-7xl opacity-20 select-none group-hover:opacity-30 transition-opacity duration-500 scale-150 absolute">
                      A15
                    </span>
                    <h3  className="relative text-2xl lg:text-4xl font-black text-white mb-4 z-10">
                      قدرت بی‌پایان با A15 Bionic
                    </h3>
                    <p  className="relative text-neutral-300 max-w-lg text-sm lg:text-base z-10">
                      سریع‌ترین تراشه به‌کار رفته در گوشی‌های هوشمند. تجربه
                      بازی‌های سنگین و پردازش‌های پیچیده با سرعتی باورنکردنی.
                    </p>
                  </div>
                </div>
                <h3  className="text-xl font-bold mb-4 flex items-center gap-2">
                  <span  className="material-symbols-outlined text-primary">
                    design_services
                  </span>
                  طراحی و ساخت
                </h3>
                <p  className="text-justify text-neutral-600 dark:text-neutral-300">
                  قاب پشتی آیفون جدید هم از شیشه ساخته‌ شده تا هم گوشی مشکل
                  آنتن‌‌دهی نداشته باشد و هم امکان شارژ بی‌‌سیم باتری در این
                  گوشی وجود داشته باشد. قابی فلزی این بدنه شیشه‌ای را در خود جای
                  داده است.
                </p>
              </div>
              <button  className="mt-8 w-full py-3 border-t border-neutral-100 dark:border-neutral-700 text-cyan-600 font-bold flex items-center justify-center gap-2 hover:bg-cyan-50 dark:hover:bg-cyan-900/10 rounded-b-xl transition-all">
                نمایش کامل نقد و بررسی
                <span  className="material-symbols-outlined text-sm">
                  expand_more
                </span>
              </button>
            </div>
          </section>
          <section  className="scroll-mt-32" id="specs">
            <div  className="flex items-center gap-3 mb-6">
              <span  className="w-1.5 h-8 bg-primary rounded-full"></span>
              <h2  className="text-xl lg:text-2xl font-black text-neutral-900 ">
                مشخصات فنی
              </h2>
            </div>
            <div  className="bg-white dark:bg-neutral-800 rounded-3xl shadow-soft border border-neutral-100  overflow-hidden">
              <div  className="grid grid-cols-1 divide-y divide-neutral-100 dark:divide-neutral-700">
                <div  className="grid grid-cols-1 md:grid-cols-12 p-5 hover:bg-neutral-50 dark:hover:bg-neutral-700/30 transition-colors group">
                  <div  className="md:col-span-3 text-neutral-500  font-bold text-sm mb-2 md:mb-0 flex items-center gap-2">
                    <span  className="w-1.5 h-1.5 bg-neutral-300 rounded-full group-hover:bg-primary transition-colors"></span>
                    ابعاد
                  </div>
                  <div  className="md:col-span-9 font-medium text-neutral-800 dark:text-neutral-200">
                    146.7x71.5x7.7 میلی‌متر
                  </div>
                </div>
                <div  className="grid grid-cols-1 md:grid-cols-12 p-5 hover:bg-neutral-50 dark:hover:bg-neutral-700/30 transition-colors group">
                  <div  className="md:col-span-3 text-neutral-500  font-bold text-sm mb-2 md:mb-0 flex items-center gap-2">
                    <span  className="w-1.5 h-1.5 bg-neutral-300 rounded-full group-hover:bg-primary transition-colors"></span>
                    وزن
                  </div>
                  <div  className="md:col-span-9 font-medium text-neutral-800 dark:text-neutral-200">
                    174 گرم
                  </div>
                </div>
                <div  className="grid grid-cols-1 md:grid-cols-12 p-5 hover:bg-neutral-50 dark:hover:bg-neutral-700/30 transition-colors group">
                  <div  className="md:col-span-3 text-neutral-500  font-bold text-sm mb-2 md:mb-0 flex items-center gap-2">
                    <span  className="w-1.5 h-1.5 bg-neutral-300 rounded-full group-hover:bg-primary transition-colors"></span>
                    تراشه
                  </div>
                  <div  className="md:col-span-9 font-medium text-neutral-800 dark:text-neutral-200">
                    Apple A15 Bionic (5 nm) Chipset
                  </div>
                </div>
                <div  className="grid grid-cols-1 md:grid-cols-12 p-5 hover:bg-neutral-50 dark:hover:bg-neutral-700/30 transition-colors group">
                  <div  className="md:col-span-3 text-neutral-500  font-bold text-sm mb-2 md:mb-0 flex items-center gap-2">
                    <span  className="w-1.5 h-1.5 bg-neutral-300 rounded-full group-hover:bg-primary transition-colors"></span>
                    رزولوشن عکس
                  </div>
                  <div  className="md:col-span-9 font-medium text-neutral-800 dark:text-neutral-200">
                    12 مگاپیکسل
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section  className="scroll-mt-32" id="comments">
            <div  className="flex items-center gap-3 mb-6">
              <span  className="w-1.5 h-8 bg-primary rounded-full"></span>
              <h2  className="text-xl lg:text-2xl font-black text-neutral-900 ">
                امتیاز و دیدگاه کاربران
              </h2>
            </div>
            <div  className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div  className="lg:col-span-4">
                <div  className="bg-white dark:bg-neutral-800 p-6 rounded-3xl border border-neutral-100 dark:border-neutral-700 sticky top-28 shadow-soft">
                  <div  className="flex items-center gap-4 mb-6">
                    <div  className="text-neutral-900  text-5xl font-black tracking-tighter">
                      4.4
                    </div>
                    <div  className="flex flex-col gap-1">
                      <div  className="flex text-yellow-500">
                        <span  className="material-symbols-outlined text-xl fill-current">
                          star
                        </span>
                        <span  className="material-symbols-outlined text-xl fill-current">
                          star
                        </span>
                        <span  className="material-symbols-outlined text-xl fill-current">
                          star
                        </span>
                        <span  className="material-symbols-outlined text-xl fill-current">
                          star
                        </span>
                        <span  className="material-symbols-outlined text-neutral-300 text-xl">
                          star
                        </span>
                      </div>
                      <p  className="text-neutral-500 text-xs font-bold">
                        از مجموع ۱۲۵۰ رای
                      </p>
                    </div>
                  </div>
                  <div  className="space-y-3 mb-8">
                    <div  className="flex items-center gap-3 text-xs">
                      <span  className="font-bold text-neutral-500 w-3">5</span>
                      <div  className="flex-1 h-2 bg-neutral-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                        <div  className="w-1/2 h-full bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div  className="flex items-center gap-3 text-xs">
                      <span  className="font-bold text-neutral-500 w-3">4</span>
                      <div  className="flex-1 h-2 bg-neutral-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                        <div  className="w-[30%] h-full bg-green-500 rounded-full"></div>
                      </div>
                    </div>
                    <div  className="flex items-center gap-3 text-xs">
                      <span  className="font-bold text-neutral-500 w-3">3</span>
                      <div  className="flex-1 h-2 bg-neutral-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                        <div  className="w-[10%] h-full bg-yellow-500 rounded-full"></div>
                      </div>
                    </div>
                    <div  className="flex items-center gap-3 text-xs">
                      <span  className="font-bold text-neutral-500 w-3">2</span>
                      <div  className="flex-1 h-2 bg-neutral-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                        <div  className="w-[5%]  bg-orange-500 rounded-full"></div>
                      </div>
                    </div>
                    <div  className="flex items-center gap-3 text-xs">
                      <span  className="font-bold text-neutral-500 w-3">1</span>
                      <div  className="flex-1 h-2 bg-neutral-100 dark:bg-neutral-700 rounded-full overflow-hidden">
                        <div  className="w-[5%] h-full bg-red-500 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <button  className="w-full py-3 border-2 border-primary text-primary font-bold rounded-xl hover:bg-primary hover:text-white transition-all shadow-sm">
                    ثبت دیدگاه جدید
                  </button>
                </div>
              </div>
              <div  className="lg:col-span-8 flex flex-col gap-4">
                <div  className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-3xl border border-transparent dark:border-neutral-700 hover:border-neutral-200 transition-colors">
                  <div  className="flex items-center justify-between mb-4">
                    <div  className="flex items-center gap-3">
                      <div  className="w-10 h-10 rounded-full bg-white dark:bg-neutral-700 shadow-sm flex items-center justify-center text-neutral-500 font-bold">
                        <span  className="material-symbols-outlined">person</span>
                      </div>
                      <div>
                        <span  className="font-bold text-sm block mb-1">
                          علی محمدی
                        </span>
                        <span  className="text-neutral-400 text-[10px]">
                          ۲۸ مهر ۱۴۰۲
                        </span>
                      </div>
                    </div>
                    <div  className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs rounded-full font-bold">
                      خریدار
                    </div>
                  </div>
                  <div  className="mb-4">
                    <div  className="flex text-yellow-400 mb-2">
                      <span  className="material-symbols-outlined text-sm fill-current">
                        star
                      </span>
                      <span  className="material-symbols-outlined text-sm fill-current">
                        star
                      </span>
                      <span  className="material-symbols-outlined text-sm fill-current">
                        star
                      </span>
                      <span  className="material-symbols-outlined text-sm fill-current">
                        star
                      </span>
                      <span  className="material-symbols-outlined text-sm fill-current">
                        star
                      </span>
                    </div>
                    <p  className="text-neutral-700 dark:text-neutral-300 leading-7 text-sm">
                      واقعا گوشی عالی هستش. نسبت به سری ۱۲ باتری خیلی بهتر شده و
                      دوربین هم در نور شب فوق العاده عمل میکنه. پیشنهاد میکنم
                      حتما تهیه کنید.
                    </p>
                  </div>
                  <div  className="flex flex-wrap gap-2">
                    <span  className="flex items-center gap-1 text-[10px] bg-green-50 dark:bg-green-900/10 text-green-600 px-2 py-1 rounded border border-green-100 dark:border-green-900/20">
                      <span  className="material-symbols-outlined text-sm">add</span>
                      باتری قدرتمند
                    </span>
                    <span  className="flex items-center gap-1 text-[10px] bg-green-50 dark:bg-green-900/10 text-green-600 px-2 py-1 rounded border border-green-100 dark:border-green-900/20">
                      <span  className="material-symbols-outlined text-sm">add</span>
                      دوربین با کیفیت
                    </span>
                  </div>
                </div>
                <div  className="bg-neutral-50 dark:bg-neutral-800 p-6 rounded-3xl border border-transparent dark:border-neutral-700 hover:border-neutral-200 transition-colors">
                  <div  className="flex items-center justify-between mb-4">
                    <div  className="flex items-center gap-3">
                      <div  className="w-10 h-10 rounded-full bg-white dark:bg-neutral-700 shadow-sm flex items-center justify-center text-neutral-500 font-bold">
                        <span  className="material-symbols-outlined">person</span>
                      </div>
                      <div>
                        <span  className="font-bold text-sm block mb-1">
                          سارا احمدی
                        </span>
                        <span  className="text-neutral-400 text-[10px]">
                          ۱۵ آبان ۱۴۰۲
                        </span>
                      </div>
                    </div>
                  </div>
                  <div  className="mb-4">
                    <div  className="flex text-yellow-400 mb-2">
                      <span  className="material-symbols-outlined text-sm fill-current">
                        star
                      </span>
                      <span  className="material-symbols-outlined text-sm fill-current">
                        star
                      </span>
                      <span  className="material-symbols-outlined text-sm fill-current">
                        star
                      </span>
                      <span  className="material-symbols-outlined text-neutral-300 text-sm">
                        star
                      </span>
                      <span  className="material-symbols-outlined text-neutral-300 text-sm">
                        star
                      </span>
                    </div>
                    <p  className="text-neutral-700 dark:text-neutral-300 leading-7 text-sm">
                      گوشی خوبیه ولی قیمتش یکم بالاست. توی جعبه شارژر نداره که
                      باید جدا تهیه کنید.
                    </p>
                  </div>
                  <div  className="flex flex-wrap gap-2">
                    <span  className="flex items-center gap-1 text-[10px] bg-red-50 dark:bg-red-900/10 text-red-600 px-2 py-1 rounded border border-red-100 dark:border-red-900/20">
                      <span  className="material-symbols-outlined text-sm">
                        remove
                      </span>
                      نبود شارژر در جعبه
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section> */}
      {/* </div> */}
      {/* </div> */}
    </div>
  );
}
