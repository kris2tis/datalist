export default function ProductDescription({ content }) {
  return (
    <div className="px-4 pb-6">
      <div className="rounded-xl bg-surface-light dark:bg-surface-dark p-5 shadow-sm">
        <h3 className="text-lg font-bold mb-3">توضیحات</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">{content}</p>
      </div>
    </div>
  );
}
