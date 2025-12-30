"use client";

import { useQuery } from "@tanstack/react-query";
import { http } from "../../httpServices";

export  function useCategories() {
  const { data:categories, isLoading } = useQuery({
    queryKey:["categories"],
    queryFn: () => http.get("/user/category").then(({ data }) => data.data),
  });

  return { categories, isLoading };
}
