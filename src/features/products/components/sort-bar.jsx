"use client";

import { useQueryParams } from "../../../shared/stores/queryParamsStore";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const sortsList = [
  { id: 1, title: "قدیمی", englishTitle: "asc" },
  { id: 2, title: "جدید", englishTitle: "desc" },
];
export const SortBar = () => {
  const { setQueryParams } = useQueryParams();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { push } = useRouter();

  const setQueryToUrl = (params) => {
    if (params) {
      push(pathname + "?" + params.toString());
    }
  };

  return (
    <div  className="flex items-center gap-4 mb-6 overflow-x-auto pb-2 scrollbar-hide">
      <div  className="bg-white px-4 py-2 rounded-xl border border-neutral-200 shadow-sm flex items-center gap-2 whitespace-nowrap">
        <span  className="material-symbols-outlined text-text-light text-lg">
          sort
        </span>
        <span  className="text-sm font-bold text-text-main">مرتب‌سازی:</span>
      </div>
      <div  className="flex items-center gap-x-2 bg-white p-1 rounded-xl border border-neutral-200 shadow-sm w-full md:w-auto overflow-x-auto">
        {sortsList.map((s, index) => {
          const isActive = s.englishTitle === searchParams.get("sort") || false;
          return (
            <button
              onClick={() => {
                const params = setQueryParams(
                  searchParams,
                  "sort",
                  s.englishTitle
                );
                setQueryToUrl(params);
              }}
              key={index}
               className={`px-4 py-1.5 text-sm font-bold ${isActive && "text-white bg-primary"}  rounded-lg shadow-sm transition-all whitespace-nowrap`}
            >
              {s.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};
