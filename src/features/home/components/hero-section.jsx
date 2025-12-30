import Img from "../../../shared/components/ui/img";

const HeroSection = () => {
  return (
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
      <div class="lg:col-span-8 relative group shadow-lg rounded-2xl lg:rounded-3xl overflow-hidden">
        <div
          class="w-full h-[360px] sm:h-[420px] lg:h-[480px] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCH_wJnIOk_SO-u09FptjZgHC5llIv1XUeDHL43EFsZ_T-jB4J7pu7Lim41y-LaHmchWQBMMj2Nxu9xXNMgmvnD8mz617hHdG8KCG6__oQIwrMRxamVCG-3c8sIuenYuyZA-_gX_OLuUIXcPN7Cx9doVkUNaltbW0iW-dCFCdxt62r_PBy_54pOLLJRzj2109VgqMF6b9bUuHrx4MkGmwiyBigfuwwCq7b8xa1eLgPs1nR9p_JK5Sin5PDLLYVIqdWuMNJ6UZvgNIrr")',
          }}
        >
          <div class="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-l from-black/80 lg:from-black/70 via-black/30 to-transparent flex flex-col justify-end lg:justify-center p-6 lg:p-12 items-start text-right">
            <span class="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full mb-3 lg:mb-4 shadow-glow">
              جشنواره ویژه
            </span>
            <h2 class="text-white text-3xl lg:text-5xl font-black mb-2 lg:mb-4 leading-tight">
              تخفیف‌های
              <br />
              تابستانه آغاز شد
            </h2>
            <p class="text-gray-200 text-sm lg:text-lg mb-6 lg:mb-8 font-medium">
              بهترین برندها با قیمت‌های باورنکردنی
            </p>
            <button class="bg-white text-primary px-6 lg:px-8 py-2.5 lg:py-3 rounded-xl font-bold hover:bg-gray-100 transition shadow-lg flex items-center gap-2 text-sm lg:text-base">
              خرید کنید
              <Img
                src={"/icons/arrow.svg"}
                alt={"cart icon"}
                className={"h-3 aspect-video"}
              />
            </button>
          </div>
        </div>
        <div class="absolute bottom-6 right-6 lg:right-12 flex gap-2">
          <div class="w-6 lg:w-8 h-1.5 lg:h-2 bg-primary rounded-full"></div>
          <div class="w-1.5 lg:w-2 h-1.5 lg:h-2 bg-white/50 rounded-full hover:bg-white transition-colors cursor-pointer"></div>
          <div class="w-1.5 lg:w-2 h-1.5 lg:h-2 bg-white/50 rounded-full hover:bg-white transition-colors cursor-pointer"></div>
        </div>
      </div>
      <div class="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 lg:gap-6 lg:h-[480px]">
        <div class="flex-1 h-[180px] sm:h-[220px] lg:h-auto rounded-2xl lg:rounded-3xl overflow-hidden relative group cursor-pointer shadow-md">
          <div
            class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCPmfx1UVaJ0pClsVYEcdG-UWv1-fyvj9a_HzmCEu2rdiJhA6iPwpBAkLzVve5h0o6EzZpvtiDqQaQPhIQGSVuNg7YyNgrqrQmNOSvc004K3yoWGGK7PxoC44PUuglxEdJ4Jb904t_ZNJYBGK2FL5h-qc3CebDF3Jf0Lo5YImKoV7cygrm-4TWMQeCLDrO47wx-0IQg-OJGocxAoLLcZfcRQ_yX18WJR8eoT6QDDAkg9c7gPJXCmkNo2VhW3Ili25BmTtbn31oNC01_")',
            }}
          ></div>
          <div class="absolute inset-0 bg-black/40 hover:bg-black/30 transition-colors p-5 lg:p-6 flex flex-col justify-end">
            <h3 class="text-white text-lg lg:text-xl font-bold mb-1">
              دنیای دیجیتال
            </h3>
            <p class="text-gray-300 text-[10px] lg:text-xs">
              لپ‌تاپ، تبلت و لوازم جانبی
            </p>
          </div>
        </div>
        <div class="flex-1 h-[180px] sm:h-[220px] lg:h-auto rounded-2xl lg:rounded-3xl overflow-hidden relative group cursor-pointer shadow-md">
          <div
            class="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuD_7MSgSXmaNmC1KBgwAhKurP7iJeDuvg0Ak4f56Y2Nk2Hy-VKTucgNEVP758sYSgohFgr0S8KOKZnvyEcYwdTta0K2hxSpM-9m944nMY4fBB0I_CR5bDPwjaPCTCNWD4jBGr2wH5M7QTeyX17uccxq5Irg0ZSWi5NgC96gvTdF3X8rCR83XP3Hvv2xi8do5_ity69DyTKuPHP68W1ELbwr8TFk79OJ3t5Gpc6g0dUMaRAPo6cig8JZ3ptwZ0AhpJ34oVrOLpL-BgBb")',
            }}
          ></div>
          <div class="absolute inset-0 bg-black/40 hover:bg-black/30 transition-colors p-5 lg:p-6 flex flex-col justify-end">
            <h3 class="text-white text-lg lg:text-xl font-bold mb-1">
              زیبایی و سلامت
            </h3>
            <p class="text-gray-300 text-[10px] lg:text-xs">
              جدیدترین محصولات آرایشی
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
