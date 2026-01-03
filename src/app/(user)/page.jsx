import HeroSection from "../../features/home/components/hero-section";
import { CategoryList } from "../../features/home/components/category-list";
import { ProductAmagzingOffer } from "../../features/home/components/amgzing-offer";

export const metadata = {
  title: "زنبیل",
  description:
    "یک فروشگاه آنلاین ساده و سریع برای خرید راحت انواع کالا، با تمرکز روی تجربه کاربری خوب، قیمت منصفانه و ارسال مطمئن.",
};

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
