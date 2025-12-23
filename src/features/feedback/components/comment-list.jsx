import { http } from "../../../httpServices";

export default async function CommentList() {
  const feedback = await http.get("/user/feedback").then(({ data }) => data);
  const data  = feedback?.date || [];
  return (
    <section className="bg-slate-50 dark:bg-slate-800/30 py-12 px-4 border-y border-gray-100 dark:border-gray-700/50">
      <div className="text-center mb-8">
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
          نظرات مشتریان ما
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          ببینید دیگران درباره دیتالیست چه می‌گویند
        </p>
      </div>
      <div className="flex flex-col gap-4">
        {data.map((c) => (
          <CommentCard key={c?.id} {...c} />
        ))}
      </div>
    </section>
  );
}

const CommentCard = ({ user: { name }, content }) => {
  return (
    <div className="bg-white dark:bg-gray-800 p-5 rounded-xl shadow-sm border border-slate-100 dark:border-gray-700">
      <div className="flex items-center gap-3 mb-3 ">
        <div className="w-10 h-10 bg-slate-200 dark:bg-slate-600 rounded-full flex items-center justify-center overflow-hidden">
          <span className="material-symbols-outlined text-slate-400">ع</span>
        </div>
        <div className="text-right">
          <div className="font-bold text-sm text-slate-900 dark:text-white">
            {name}
          </div>
          {/* <div className="text-xs text-slate-500">مدیر عامل، استارتاپ نوا</div> */}
        </div>
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-300 text-right leading-relaxed">
        {content}
      </p>
    </div>
  );
};
