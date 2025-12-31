import QuantityStepper from "./quantity-stepper";
import Img from "@/shared/components/ui/img";

export const CartItemCard = ({ data }) => {
  const { image, title, content, price } = data.product;
  // const imageName = image.split("/")[3];
  return (
    <div className="bg-white  rounded-3xl p-4 lg:p-6 border border-neutral-100 shadow-soft flex flex-col sm:flex-row gap-4 sm:gap-6 relative group transition-all hover:border-neutral-200 ">
      <div className="w-full sm:w-32 h-32 shrink-0 bg-neutral-200 rounded-2xl p-2 flex items-center justify-center">
        <span className="text-xs">با عرض پوزش محصول عکس ندارد</span>
        {false && (
          <Img
            alt="iPhone 13"
            className="w-full h-full object-contain mix-blend-multiply "
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD4c1z0ZVbEAR0T0tYcY1gLouC4NwyFIoLif3tvhXcBI4JLR_yJUHDAGBR4ARvCpElZ9Agci3OnV1fxwOy8g_yl-EDNpkq8Ug6RTyqeILZe1iqq_lY1CaWqQmhRXt5vsd9el2TW5PoFgBDxXgBpOYLSquzuTcCF7R2skQDAYliQFe4cfT7jlz2i1KfM-5CSaOVU--OJIiW65NBwB0EhRJ66kEnNBGlr4HlRtisyvEtJ5YI1C9udLBgb4yM70SYgKxsWL52We5zUz0NE"
          />
        )}
      </div>
      <div className="flex-1 flex flex-col justify-between gap-4">
        <div>
          <h3 className="font-bold text-neutral-900  text-base sm:text-lg mb-2 leading-snug">
            {title}
          </h3>
          {/* Property */}
          {/* <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 ">
            <div className="flex items-center gap-1.5 bg-neutral-100  px-2 py-1 rounded-lg">
              <span className="w-3 h-3 rounded-full bg-black border border-neutral-200"></span>
              <span>مشکی</span>
            </div>
            <div className="flex items-center gap-1.5 bg-neutral-100 px-2 py-1 rounded-lg">
              <span className="material-symbols-outlined text-sm">
                sd_storage
              </span>
              <span>۱۲۸ گیگابایت</span>
            </div>
            <div className="flex items-center gap-1.5 bg-neutral-100  px-2 py-1 rounded-lg text-neutral-600 ">
              <span className="material-symbols-outlined text-sm text-primary">
                verified_user
              </span>
              <span>گارانتی ۱۸ ماهه</span>
            </div>
          </div> */}
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-2">
          <QuantityStepper data={data} />
          <div className="flex items-center gap-1 text-primary w-full sm:w-auto justify-end">
            <span className="text-xl font-black tracking-tight">
              {price.toLocaleString()}
            </span>
            <span className="text-xs font-bold text-neutral-500">تومان</span>
          </div>
        </div>
      </div>
    </div>
  );
};
