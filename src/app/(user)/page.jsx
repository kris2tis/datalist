import CommentList from "../../features/feedback/components/comment-list";

export default function page() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col group/design-root">
      <section className="@container">
        <div className="flex flex-col gap-6 px-4 py-8 @[480px]:gap-8 @[864px]:flex-row @[864px]:items-center">
          <div
            className="w-full bg-slate-100 dark:bg-slate-800 bg-center bg-no-repeat aspect-4/3 bg-cover rounded-2xl overflow-hidden shadow-sm @[864px]:w-1/2 order-first @[864px]:order-last"
            data-alt="Abstract 3D illustration of floating data blocks and graphs in blue and teal colors"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuD8g0ldDMEb1RIicXYoMGBu8dzI68g4IhuE5mlF3eBXM5FJFGVjzaf1_ixewHKdJt9vwofaw253PAD2EqwU7t_-6HqyIQLAICqDfSa-MlZQ3rrnXarcDH19e6m05yGQEArLZOujibvXjHvGSzwBGrT76U2FF-sCNio1glCornHQg2Sf4qcGJBnPHLINz1iHiT_m_Q1pDkxIfrQ6_mCAHBAcXGbcjufAqCSf5uoh4hnyicFlnvMKBlDf2vn7iJuplppYbDa--XcntCU")`,
            }}
          >
            <div className="w-full h-full  bg-linear-to-t from-background-light/50 to-transparent dark:from-background-dark/50"></div>
          </div>
          <div className="flex flex-col gap-6 @[864px]:w-1/2 @[864px]:pl-8">
            <div className="flex flex-col gap-3 text-right">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary border border-primary/20">
                <span>امنیت بالا</span>
              </div>
              <h1 className="text-slate-900 dark:text-white text-4xl font-black leading-[1.3] tracking-[-0.033em] @[480px]:text-5xl">
                تبدیل داده‌ها به{" "}
                <span className="text-primary">رشد کسب‌وکار</span>
              </h1>
              <h2 className="text-slate-500 dark:text-slate-400 text-base font-normal leading-relaxed">
                دیتالیست داده‌های خام کسب‌وکار شما را جمع‌آوری، پردازش و تحلیل
                می‌کند تا راه‌حل‌های عملی برای بهبود ارائه دهد.
              </h2>
            </div>
            <div className="flex flex-col gap-3">
              <button className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-5 bg-primary hover:bg-primary/90 transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/25 active:scale-[0.98] ">
                <span className="truncate">کشف راه‌حل‌ها</span>
              </button>
              <p className="text-center text-xs text-slate-400 dark:text-slate-500">
                بدون نیاز به کارت اعتباری برای دوره آزمایشی ۱۴ روزه.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-8">
        <div className="px-4 pb-3 pt-5 flex justify-between items-end">
          <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em]">
            ارزش‌های اصلی ما
          </h2>
          <button className="text-primary text-sm font-semibold cursor-pointer hover:underline">
            مشاهده همه
          </button>
        </div>
      </section>
      <section className="w-full">
        <div className="flex overflow-x-auto no-scrollbar lg:grid lg:grid-cols-3 pb-6 px-4 gap-4 snap-x snap-mandatory">
          <div className="snap-center shrink-0 flex flex-col gap-4 rounded-xl w-[260px] lg:w-full bg-white dark:bg-gray-800 p-4 border border-slate-100 dark:border-gray-700 shadow-sm text-right hover:shadow-md transition-shadow">
            <div>
              <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight mb-1">
                تحلیل هوشمند
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-normal">
                تحلیل لحظه‌ای معیارهای کلیدی عملکرد شما.
              </p>
            </div>
          </div>
          <div className="snap-center shrink-0 flex flex-col gap-4 rounded-xl w-[260px] lg:w-full bg-white dark:bg-gray-800 p-4 border border-slate-100 dark:border-gray-700 shadow-sm text-right hover:shadow-md transition-shadow">
            <div>
              <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight mb-1">
                پردازش امن
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-normal">
                رمزنگاری و امنیت در سطح بانکی برای داده‌های شما.
              </p>
            </div>
          </div>
          <div className="snap-center shrink-0 flex flex-col gap-4 rounded-xl w-[260px] lg:w-full bg-white dark:bg-gray-800 p-4 border border-slate-100 dark:border-gray-700 shadow-sm text-right hover:shadow-md transition-shadow">
            <div>
              <p className="text-slate-900 dark:text-white text-lg font-bold leading-tight mb-1">
                استراتژی‌های رشد
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-normal">
                بینش‌های عملی متناسب برای بهبود سریع.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-4 bg-white dark:bg-gray-900 py-8">
        <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-6 text-right border-b border-gray-100 dark:border-gray-800 mx-4 mb-6">
          چگونه کار می‌کند
        </h2>
        <div className="px-4 pb-4 text-right">
          <div className="relative flex flex-col gap-0">
            <div className="absolute right-[27px] top-6 bottom-6 w-0.5 bg-slate-200 dark:bg-slate-800 -z-10"></div>
            <div className="flex gap-4 pb-10 flex-row-reverse group">
              <div className="flex-none">
                <div className="w-14 h-14 rounded-full bg-primary border-2 border-primary group-hover:scale-110 transition-transform flex items-center justify-center z-10 shadow-sm"></div>
              </div>
              <div className="pt-2 grow">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                  ۱. جمع‌آوری داده‌ها
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  منابع داده خود را به صورت ایمن متصل کنید. ما از بیش از ۵۰
                  ادغام پشتیبانی می‌کنیم.
                </p>
              </div>
            </div>
            <div className="flex gap-4 pb-10 flex-row-reverse group">
              <div className="flex-none">
                <div className="w-14 h-14 rounded-full bg-primary border-2 border-primary group-hover:scale-110 transition-transform flex items-center justify-center z-10 shadow-sm"></div>
              </div>
              <div className="pt-2 grow">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                  ۲. پردازش و تحلیل
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  موتور هوش مصنوعی ما داده‌های خام را پاکسازی کرده و الگوهای
                  کلیدی را شناسایی می‌کند.
                </p>
              </div>
            </div>
            <div className="flex gap-4 flex-row-reverse group">
              <div className="flex-none">
                <div className="w-14 h-14 rounded-full  border-2 bg-primary border-primary group-hover:scale-110 transition-transform flex items-center justify-center z-10 shadow-sm"></div>
              </div>
              <div className="pt-2 grow">
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-primary transition-colors">
                  ۳. بهبود کسب‌وکار
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  یک نقشه راه متناسب برای بهینه‌سازی عملیات و درآمد دریافت کنید.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CommentList />
      <section className="p-4 py-10">
        <div className="bg-primary rounded-2xl p-8 text-center text-white flex flex-col gap-6 relative overflow-hidden shadow-xl shadow-primary/20">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <h2 className="text-2xl font-bold relative z-10">
            آماده بهینه‌سازی هستید؟
          </h2>
          <p className="text-white/80 relative z-10">
            به هزاران کسب‌وکاری که امروز تصمیمات مبتنی بر داده می‌گیرند
            بپیوندید.
          </p>
          <button className="relative z-10 bg-white text-primary font-bold h-12 rounded-xl px-6 w-full shadow-lg hover:bg-slate-50 transition-colors active:scale-[0.98]">
            شروع دوره آزمایشی رایگان
          </button>
        </div>
      </section>
    </div>
  );
}
