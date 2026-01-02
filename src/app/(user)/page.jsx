import HeroSection from "../../features/home/components/hero-section";
import { CategoryList } from "../../features/home/components/category-list";
import { ProductAmagzingOffer } from "../../features/home/components/amgzing-offer";
export const revalidate = 60; 
export default function page() {
  return (
    <div className="mx-auto px-4 lg:px-6 py-8 space-y-12" dir="rtl">
      <HeroSection />
      <CategoryList />
      <ProductAmagzingOffer />
    </div>
  );
}
