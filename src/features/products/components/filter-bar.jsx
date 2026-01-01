"use client";

import Img from "../../../shared/components/ui/img";
import { ArrowIcon } from "../../../shared/assets/icons/icons";
import DropDown from "../../../shared/components/ui/drop-down";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useCategories } from "../../../shared/hooks/useQuery";
import { useQueryParams } from "../../../shared/stores/queryParamsStore";

const DeleteFilter = ({ label, onClick }) => {
  return (
    <button onClick={onClick} className="cursor-pointer">
      <span className="text-sm font-medium whitespace-nowrap text-primary">
        {label}
      </span>
    </button>
  );
};

const FilterBar = () => {
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const pathname = usePathname();
  const { categories } = useCategories();
  const { setQueryParams, clearQueryParams } = useQueryParams();

  const setQueryToUrl = (params) => {
    if (params) {
      push(pathname + "?" + params.toString());
    }
  };

  const [key] = searchParams.entries();
  const isThereQuery = key ? true : false;

  return (
    <aside  className="w-full lg:w-80 shrink-0 space-y-6 lg:sticky lg:top-24 z-10  lg:block">
      <div  className="bg-white rounded-2xl border border-neutral-200 shadow-card overflow-hidden">
        <div  className="p-5 border-b border-neutral-100 flex items-center justify-between bg-neutral-50/50">
          <h3  className="font-bold text-lg flex items-center gap-2">
            <Img
              src={"/icons/filter.svg"}
              alt={"filter icon"}
              className={"h-5 aspect-square"}
            />
            فیلترها
          </h3>
          {isThereQuery && (
            <DeleteFilter
              label={"حذف فیلترها"}
              onClick={() => {
                const params = clearQueryParams(searchParams);
                setQueryToUrl(params);
              }}
            />
          )}
        </div>
        <div  className="divide-y divide-neutral-100">
          <DropDown title={"دسته بندی"}>
            {!categories?.length ? (
              <span>دسته بندی وجود ندارد</span>
            ) : (
              <ul  className="space-y-2 text-sm">
                {categories.map((c) => {
                  return (
                    <li
                      onClick={() => {
                        const params = setQueryParams(
                          searchParams,
                          "category",
                          c.title
                        );
                        setQueryToUrl(params);
                      }}
                      key={c.id}
                      className="flex items-center justify-between cursor-pointer"
                    >
                      <span>{c.title}</span>
                      <div className="rotate-180">
                        <ArrowIcon className="w" />
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </DropDown>

          {/* Brands Filter */}
          {/* <div  className="p-5">
            <div  className="flex items-center justify-between mb-4">
              <h4  className="font-bold text-sm">برند سازنده</h4>
            </div>
            <div  className="relative mb-3">
              <input
                 className="w-full text-xs bg-neutral-100 border-none rounded-lg py-2 pr-8 pl-3 focus:ring-1 focus:ring-primary placeholder-text-light/70"
                placeholder="جستجوی برند..."
                type="text"
              />
              <span  className="material-symbols-outlined absolute right-2 top-2 text-base text-text-light">
                search
              </span>
            </div>
            <div  className="space-y-2.5 max-h-40 overflow-y-auto custom-scrollbar">
              <label  className="flex items-center gap-3 cursor-pointer group hover:bg-neutral-50 p-1.5 rounded-lg transition-colors">
                <div  className="relative flex items-center">
                  <input
                     className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-neutral-300 transition-all checked:border-primary checked:bg-primary"
                    type="checkbox"
                  />
                  <span  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                    <svg
                       className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div  className="flex justify-between w-full text-sm">
                  <span  className="font-medium text-text-main group-hover:text-primary transition-colors">
                    سامسونگ
                  </span>
                  <span  className="text-text-light text-xs font-sans">Samsung</span>
                </div>
              </label>
              <label  className="flex items-center gap-3 cursor-pointer group hover:bg-neutral-50 p-1.5 rounded-lg transition-colors">
                <div  className="relative flex items-center">
                  <input
                     className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-neutral-300 transition-all checked:border-primary checked:bg-primary"
                    type="checkbox"
                  />
                  <span  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                    <svg
                       className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div  className="flex justify-between w-full text-sm">
                  <span  className="font-medium text-text-main group-hover:text-primary transition-colors">
                    اپل
                  </span>
                  <span  className="text-text-light text-xs font-sans">Apple</span>
                </div>
              </label>
              <label  className="flex items-center gap-3 cursor-pointer group hover:bg-neutral-50 p-1.5 rounded-lg transition-colors">
                <div  className="relative flex items-center">
                  <input
                     className="peer h-5 w-5 cursor-pointer appearance-none rounded-md border border-neutral-300 transition-all checked:border-primary checked:bg-primary"
                    type="checkbox"
                  />
                  <span  className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100">
                    <svg
                       className="h-3.5 w-3.5"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="3"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </span>
                </div>
                <div  className="flex justify-between w-full text-sm">
                  <span  className="font-medium text-text-main group-hover:text-primary transition-colors">
                    شیائومی
                  </span>
                  <span  className="text-text-light text-xs font-sans">Xiaomi</span>
                </div>
              </label>
            </div>
          </div> */}
          {/* <div  className="p-5 space-y-4">
            <div  className="flex items-center justify-between">
              <span  className="text-sm font-medium text-text-main">
                فقط کالاهای موجود
              </span>
              <label  className="relative inline-flex items-center cursor-pointer">
                <input  className="sr-only peer" type="checkbox" value="" />
                <div  className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:-translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary shadow-inner"></div>
              </label>
            </div>
            <div  className="flex items-center justify-between">
              <span  className="text-sm font-medium text-text-main">ارسال فوری</span>
              <label  className="relative inline-flex items-center cursor-pointer">
                <input  className="sr-only peer" type="checkbox" value="" />
                <div  className="w-11 h-6 bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:-translate-x-full rtl:peer-checked:after:translate-x-[-100%] peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:right-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary shadow-inner"></div>
              </label>
            </div>
          </div> */}
        </div>
      </div>
    </aside>
  );
};

export default FilterBar;

;
 