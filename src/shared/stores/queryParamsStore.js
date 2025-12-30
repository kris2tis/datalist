"use client";
import { create } from "zustand";

export const useQueryParams = create((set) => ({
  setQueryParams: (searchParams, name, value) => {
    const params = new URLSearchParams(searchParams);

    const splitQueryName = name.split("/");
    const IsItTwoParam = splitQueryName.length > 1;

    if (!IsItTwoParam) {
      params.set(name, value);
    } else {
      const [min, max] = value;
      params.set("gte", min);
      params.set("lte", max);
    }
    return params;
  },
  clearQueryParams: (searchParams) => {
    const params = new URLSearchParams(searchParams);

    for (const [key, value] of searchParams) {
      params.delete(key);
    }
    return params;
  },
 
}));
