"use client";

// import PriceRange from "../../../shared/components/ui/price-range";
import { useDropdown } from "../../../shared/stores/dropdown-store";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState } from "react";

const categoryList = [
  { id: 1, title: "تیشرت" },
  { id: 2, title: "پیراهن" },
  { id: 3, title: "شلوار" },
];

const sortsList = [
  { id: 1, title: "قدیمی", englishTitle: "asc" },
  { id: 2, title: "جدید", englishTitle: "desc" },
];
const ArrowDownIcon = ({ className }) => {
  return (
    <div className={`relative h-5 aspect-square ${className}`}>
      <Image src={"/icons/plus.svg"} fill alt="short arrow down icon" />
    </div>
  );
};

const DeleteFilter = ({ label, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-[#111318] dark:text-gray-200 shadow-sm relative flex shrink-0 items-center justify-center gap-x-2 rounded-full px-4 py-2 active:scale-95 transition-all `}
    >
      <span className="text-sm font-medium whitespace-nowrap">{label}</span>
    </button>
  );
};
export const FilterButton = ({ label, children }) => {
  const [isActive, setIsActive] = useState(false);
  const { setData, toggle } = useDropdown();
  const activeClasses = isActive
    ? "bg-primary/10 border border-primary/20 text-primary"
    : "bg-surface-light dark:bg-surface-dark border border-gray-200 dark:border-gray-700 text-[#111318] dark:text-gray-200 shadow-sm";
  const iconColor = isActive ? "text-primary" : "text-gray-500";

  return (
    <button
      className={`relative flex shrink-0 items-center justify-center gap-x-2 rounded-full px-4 py-2 active:scale-95 transition-all ${activeClasses}`}
    >
      <span
        onClick={() => {
          setIsActive((prev) => !prev);
          setData(children);
          toggle();
        }}
        className="text-sm font-medium whitespace-nowrap"
      >
        {label}
      </span>
      <span
        className={`material-symbols-outlined ${iconColor}`}
        style={{ fontSize: "18px" }}
      >
        {isActive ? (
          <ArrowDownIcon className={"rotate-45"} />
        ) : (
          <ArrowDownIcon />
        )}
      </span>
    </button>
  );
};

const FilterBar = () => {
  const searchParams = useSearchParams();
  const { push } = useRouter();
  const pathname = usePathname();

  const setQueryParams = (name, value) => {
    const params = new URLSearchParams(searchParams);

    const splitQueryName = name.split("/");
    const IsItTwoParam = splitQueryName.length > 1;

    if (!IsItTwoParam) {
      params.set(name, value);
      setQueryToUrl(params);
    } else {
      const [min, max] = value;
      params.set("gte", min);
      params.set("lte", max);

      setQueryToUrl(params);
    }
  };

  const clearQueryParmas = () => {
    const params = new URLSearchParams(searchParams);

    for (const [key, value] of searchParams) {
      params.delete(key);
    }
    setQueryToUrl(params);
  };

  const setQueryToUrl = (params) => {
    if (params) {
      push(pathname + "?" + params.toString());
    }
  };

  const [key] = searchParams.entries();
  const isThereQuery = key ? true : false;

  return (
    <div className="pb-2 pt-2 transition-colors duration-300">
      <div className="flex gap-3 px-4 overflow-x-auto no-scrollbar py-2">
        {isThereQuery && (
          <DeleteFilter
            onClick={clearQueryParmas}
            label={"پاک کردن فیلتر ها"}
          ></DeleteFilter>
        )}

        <FilterButton label={"دسته بندی براساس"}>
          <div className="w-full  border-b border-b-gray-500 py-1">
            <span className="text-[14px] text-gray-300 font-bold w-full">
              دسته بندی
            </span>
          </div>
          <div className="flex flex-col gap-y-2 py-3">
            {categoryList.map((c, index) => (
              <span
                onClick={() => setQueryParams("category", c.title)}
                className="text-[14px]"
                key={index}
              >
                {c.title}
              </span>
            ))}
          </div>
        </FilterButton>
        <FilterButton label={"مرتب سازی براساس تاریخ"}>
          <div className="w-full  border-b border-b-gray-500 py-1">
            <span className="text-[14px] text-gray-300 font-bold w-full">
              زمان
            </span>
          </div>
          <div className="flex flex-col gap-y-2 py-3">
            {sortsList.map((c, index) => (
              <span
                onClick={() => setQueryParams("sort", c.englishTitle)}
                className="text-[14px]"
                key={index}
              >
                {c.title}
              </span>
            ))}
          </div>
        </FilterButton>
        {/* <FilterButton label={"مرتب سازی براساس قیمت"}>
          <PriceRange
            onChange={(val) => {
              const [min, max] = val;
              setQueryParams("gte/lte", [min, max]);
            }}
          />
        </FilterButton> */}
      </div>
    </div>
  );
};

export default FilterBar;
