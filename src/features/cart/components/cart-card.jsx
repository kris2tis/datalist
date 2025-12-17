import Image from "next/image";
import QuantityStepper from "./quantity-stepper";
import DeleteCartItem from "./delete-cart-item";

export const CartItemCard = ({ data }) => {
  const { image, title, content, price } = data.product;
  // const imageName = image.split("/")[3];
  return (
    <div class="group relative flex gap-3 bg-white dark:bg-[#151c2b] p-3 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary/30 dark:hover:border-primary/30 shadow-sm transition-all">
      <div class="relative shrink-0 overflow-hidden rounded-xl w-[88px] h-[88px] bg-gray-100 dark:bg-gray-800">
        <div
          class="relative w-full h-full bg-center bg-cover transition-transform duration-500 group-hover:scale-110 p-3"
          data-alt="Abstract blue and purple data visualization chart on a screen"
        >
          <span className="text-white text-[10px]">اقا شرمنده عکس نداره</span>
          {/* <Image src={`/uploads/${imageName}`} alt="logn arrow icon" fill /> */}
        </div>
      </div>

      <div class="flex flex-1 flex-col justify-between py-0.5">
        <div>
          <div class="flex justify-between items-start gap-2">
            <h3 class="text-sm font-bold text-[#111318] dark:text-white leading-tight line-clamp-2">
              {title}
            </h3>
            <DeleteCartItem data={data} />
          </div>
          <p class="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-1">
            {content}
          </p>
        </div>

        <div class="flex items-end justify-between mt-2">
          <div class="flex flex-col">
            <p class="text-sm font-bold text-[#111318] dark:text-white">
              {price}{" "}
              <span class="text-[10px] font-normal text-gray-500">تومان</span>
            </p>
          </div>

          <QuantityStepper currentValue={data.quantity} data={data} />
        </div>
      </div>
    </div>
  );
};
