import Image from "next/image";

export default function TrustIndicators() {
  return (
    <div
      class="flex justify-center items-center gap-6 mt-8 mb-6 opacity-60 grayscale 
            hover:grayscale-0 transition-all duration-500"
    >
      <div class="flex flex-col items-center gap-1.5">
        <div class="p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm">
          <div className="relative h-5 aspect-square">
            <Image src={"/icons/support.svg"} alt="logn arrow icon" fill />
          </div>
        </div>
        <span class="text-[10px] font-medium text-gray-500">پرداخت امن</span>
      </div>

      <div class="flex flex-col items-center gap-1.5">
        <div class="p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm">
          <div className="relative h-5 aspect-square">
            <Image src={"/icons/lock.svg"} alt="logn arrow icon" fill />
          </div>
        </div>
        <span class="text-[10px] font-medium text-gray-500">تضیمن کیفیت</span>
      </div>

      <div class="flex flex-col items-center gap-1.5">
        <div class="p-2 bg-white dark:bg-gray-800 rounded-full shadow-sm">
         <div className="relative h-5 aspect-square">
            <Image src={"/icons/sheild.svg"} alt="logn arrow icon" fill />
          </div>
        </div>
        <span class="text-[10px] font-medium text-gray-500">پشتیبانی</span>
      </div>
    </div>
  );
}
