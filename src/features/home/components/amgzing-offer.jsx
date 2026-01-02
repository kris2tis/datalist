import Img from "@/shared/components/ui/img";
import Link from "next/link";
import BestSelingProducts from "./best-seling-product-list";
import prisma from "../../../../lib/prisma";

export const ProductAmagzingOffer = async () => {
  async function getProductList() {
    "use server";

    return await prisma.product.findMany();
  }

  const product = await getProductList();

  const thereIsProduct = product?.length;
  return (
    <div className="space-y-12">
      {/* بخش قرمز شگفت‌انگیز */}
      <section className="relative bg-linear-to-br from-[#d61f36] to-[#8E0016] rounded-3xl p-6 lg:p-10 overflow-hidden isolate">
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
            {thereIsProduct ? (
              product.map((p) => <AmagzingofferCard key={p.id} {...p} />)
            ) : (
              <span>محصولی وجود ندارد عجیبه نه ؟</span>
            )}
          </div>
        </div>
      </section>

      <BestSelingProducts data={product} />
    </div>
  );
};

const AmagzingofferCard = ({ id, title, price }) => {
  return (
    <div className="min-w-[200px] md:min-w-60 bg-white rounded-2xl p-4 flex flex-col gap-3 shadow-xl hover:-translate-y-1 transition-all cursor-pointer group">
      <Link href={`/products/${id}`}>
        <div className="relative aspect-square bg-gray-50 rounded-xl overflow-hidden mb-2 p-4">
          {false && (
            <Img
              alt="Product"
              className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
              src={`http://googleusercontent.com/profile/picture/}`}
            />
          )}
          {false && (
            <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-md">
              {"discount"}
            </div>
          )}
        </div>
      </Link>
      <div className="flex-1 text-right">
        <h4 className="text-sm font-bold text-gray-800 line-clamp-2 leading-relaxed mb-2">
          {title}
        </h4>
        {/* Discount price */}
        {/* <span className="text-gray-400 text-xs line-through block">
                      ۴,۲۰۰,۰۰۰
                    </span> */}
        <div className="text-red-600 font-black text-lg">
          {price.toLocaleString()}
          <span className="text-xs font-normal text-gray-500">تومان</span>
        </div>
      </div>
    </div>
  );
};
