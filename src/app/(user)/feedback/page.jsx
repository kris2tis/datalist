import ReviewCard from "../../../features/feedback/components/review-cart";
import CommentForm from "../../../features/feedback/components/comment-form";
import { http } from "../../../httpServices";

export const metadata = {
  title: "نظرات و انتقادات",
};

export const dynamic = "force-dynamic";
export default async function Page() {
  const feedback = await http.get("/user/feedback").then(({ data }) => data);
  const { data } = feedback || [];
  return (
    <main className="min-h-screen bg-background-dark text-white p-4 md:p-8">
      <div className="mx-auto flex flex-col gap-8">
        {/* Header */}
        <header className="flex flex-col md:flex-row-reverse justify-between items-center border-b border-surface-border pb-6 gap-4">
          <div className="flex flex-row-reverse gap-6 bg-surface-dark p-4 rounded-xl border border-surface-border items-center">
            {/* <div className="text-center px-6 border-r border-surface-border">
              <div className="text-3xl font-bold">4.8</div>
              <div className="text-xs text-text-secondary">میانگین امتیاز</div>
            </div> */}
            <div className="text-center">
              <div className="text-3xl font-bold">{data?.length || 0}</div>
              <div className="text-xs text-text-secondary">کل نظرات</div>
            </div>
          </div>
          <div className="text-right">
            <h2 className="text-3xl font-black">صدای شما</h2>
            <p className="text-text-secondary mt-2">
              تجربیات خود را با ما و دیگران به اشتراک بگذارید.
            </p>
          </div>
          {/* Stats */}
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-4 order-last lg:order-first space-y-6">
            <CommentForm />
            <div className="bg-surface-dark/50 p-5 rounded-2xl border border-surface-border/50 text-right">
              <h4 className="text-sm font-bold mb-3 flex items-center justify-end gap-2">
                نکات ثبت نظر
                {/* Icon */}
                {/* <span className="material-symbols-outlined text-sm">info</span> */}
              </h4>
              <ul className="text-xs text-text-secondary space-y-2 list-none pr-0">
                <li>• لطفاً نظرات را به زبان فارسی بنویسید.</li>
                <li>• از بکار بردن کلمات رکیک خودداری کنید.</li>
              </ul>
            </div>
          </aside>

          {/* Reviews List */}
          <section className="lg:col-span-8 flex flex-col gap-6">
            {/* Filtering */}
            {/* <div className="flex flex-row-reverse justify-between items-center bg-surface-dark p-2 rounded-xl border border-surface-border">
              <div className="flex flex-row-reverse gap-2">
                <button className="px-4 py-2 bg-surface-border/30 rounded-lg text-sm font-bold">
                  جدیدترین‌ها
                </button>
                <button className="px-4 py-2 text-text-secondary text-sm hover:text-white">
                  مفیدترین‌ها
                </button>
              </div>
            </div> */}
            {data?.length ? (
              data.map((review, index) => (
                <ReviewCard key={index} {...review} />
              ))
            ) : (
              <span>نظری وجود ندارد</span>
            )}

            <button className="w-full py-4 rounded-xl border border-dashed border-surface-border text-text-secondary hover:text-white hover:border-primary/50 transition-all text-sm font-medium">
              نمایش نظرات بیشتر
            </button>
          </section>
        </div>
      </div>
    </main>
  );
}
