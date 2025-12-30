import ProductList from "../../../features/admin/components/product-list";
import { http } from "../../../httpServices";
import { headers } from "next/headers";
import FilterBar from "../../../features/products/components/filter-bar";
import { auth } from "../../../../lib/auth";
import { SortBar } from "../../../features/products/components/sort-bar";

export const dynamic = "force-dynamic";
export default async function Page({ searchParams }) {
  const params = await searchParams;

  // Formatting search parameters
  const searchFormated = `${
    params?.category ? `?category=${params.category}&` : ""
  }${params?.sort ? `?sort=${params.sort}&` : ""}${
    params?.gte ? `?gte=${params.gte}&` : ""
  }${params?.lte ? `lte=${params.lte}` : ""}`;

  const { productList } = await http
    .get(`/user/product${searchFormated}`)
    .then(({ data }) => data);

  const session = await auth.api.getSession({ headers: await headers() });

  return (
    <div className="mx-auto px-4 lg:px-8 py-8 grow">
      <div class="flex flex-col lg:flex-row gap-8 items-start">
        <FilterBar />
        <div class="flex-1 w-full">
          <SortBar />
          <ProductList data={productList} user={session?.user || {}} />
        </div>
      </div>
    </div>
  );
}


{
  /* <div class="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
    <div>
      <nav class="flex text-sm text-text-light mb-2">
        <ol class="flex items-center gap-2 flex-wrap">
          <li>
            <a class="hover:text-primary transition-colors" href="#">
              خانه
            </a>
          </li>
          <li>
            <span class="material-symbols-outlined text-xs text-neutral-400">
              chevron_left
            </span>
          </li>
          <li>
            <a class="hover:text-primary transition-colors" href="#">
              کالای دیجیتال
            </a>
          </li>
          <li>
            <span class="material-symbols-outlined text-xs text-neutral-400">
              chevron_left
            </span>
          </li>
          <li class="text-text-main font-bold bg-neutral-100 px-2 py-0.5 rounded-md">
            گوشی موبایل
          </li>
        </ol>
      </nav>
      <h2 class="text-2xl md:text-3xl font-black text-text-main">
        گوشی موبایل
      </h2>
    </div>
    <div class="hidden md:flex items-center gap-2 text-sm text-text-light bg-white px-4 py-2 rounded-lg border border-neutral-200 shadow-sm">
      <span class="material-symbols-outlined text-primary">inventory_2</span>
      <span>۱۲۴ کالا موجود است</span>
    </div>
  </div>
  <div class="lg:hidden mb-6 sticky top-20 z-40 py-2 -mx-4 px-4 bg-background-light/95 backdrop-blur-sm">
    <div class="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
      <button class="flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-200 rounded-xl whitespace-nowrap text-sm font-bold text-text-main shadow-sm active:scale-95 transition-transform">
        <span class="material-symbols-outlined text-primary">tune</span>
        فیلترها
      </button>
      <button class="flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-200 rounded-xl whitespace-nowrap text-sm text-text-main shadow-sm active:scale-95 transition-transform">
        برند
        <span class="material-symbols-outlined text-sm text-text-light">
          expand_more
        </span>
      </button>
      <button class="flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-200 rounded-xl whitespace-nowrap text-sm text-text-main shadow-sm active:scale-95 transition-transform">
        قیمت
        <span class="material-symbols-outlined text-sm text-text-light">
          expand_more
        </span>
      </button>
      <button class="flex items-center gap-2 px-4 py-2.5 bg-white border border-neutral-200 rounded-xl whitespace-nowrap text-sm text-text-main shadow-sm active:scale-95 transition-transform">
        فقط کالاهای موجود
        <div class="w-8 h-4 bg-neutral-200 rounded-full relative">
          <div class="absolute left-0.5 top-0.5 w-3 h-3 bg-white rounded-full"></div>
        </div>
      </button>
    </div>
  </div> */
}
