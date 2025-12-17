    export default function ActiveFilterChip({ label, onRemove }) {
  return (
    <div className="flex items-center gap-1 pl-2 pr-1 py-1 rounded-md bg-primary/10 text-primary border border-primary/20 text-xs font-medium">
      {label}
      <button
        onClick={onRemove}
        className="hover:bg-primary/20 rounded p-0.5 transition-colors"
        aria-label={`Remove filter: ${label}`}
      >
        <span className="material-symbols-outlined text-[14px]">close</span>
      </button>
    </div>
  );
}
