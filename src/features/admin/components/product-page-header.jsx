import Link from "next/link";

export default function ProductPageHeader() {
  return (
    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl md:text-4xl font-black tracking-tight text-white flex items-center gap-3">
          <span>مدیریت محصولات</span>
        </h1>
        <p className="text-text-muted text-base">محصولات خود را مدیریت کنید</p>
      </div>
      <Link href={"/admin/create-product"}>
        <button className="flex items-center justify-center gap-2 rounded-lg bg-primary hover:bg-primary/90 text-background-dark font-bold h-11 px-6 transition-all shadow-[0_0_15px_rgba(23,207,84,0.3)] shrink-0">
          <span>افزودن محصول</span>
        </button>
      </Link>
    </div>
  );
}
