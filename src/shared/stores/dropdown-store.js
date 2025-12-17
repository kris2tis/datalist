import { create } from "zustand";

export const useDropdown = create((set) => ({
  isActive: false,
  data: <span className="text-white">سلام</span>,
  toggle: () => set((state) => ({ isActive: !state.isActive })),
  setData: (data) => set(() => ({ data: data })),
}));
