import Link from "next/link";
import Img from "../../ui/img";

export const Footer = () => {
  return (
    <footer class="bg-white border-t border-gray-200 mt-12">
      <div class="container mx-auto px-4 lg:px-6 pt-16 pb-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <Img
            src={"/brand/logo.svg"}
            alt={"fire icon"}
            className={"h-40 aspect-square"}
          />
          <div>
            <h4 class="font-bold text-gray-900 mb-6">دسترسی سریع</h4>
            <ul class="space-y-3 text-sm text-gray-500">
              <li>
                <Link class="hover:text-primary transition-colors" href="#">
                  درباره ما
                </Link>
              </li>
              <li>
                <Link class="hover:text-primary transition-colors" href="#">
                  تماس با ما
                </Link>
              </li>
              <li>
                <Link class="hover:text-primary transition-colors" href="#">
                  فرصت‌های شغلی
                </Link>
              </li>
              <li>
                <Link class="hover:text-primary transition-colors" href="#">
                  حریم خصوصی
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 class="font-bold text-gray-900 mb-6">خدمات مشتریان</h4>
            <ul class="space-y-3 text-sm text-gray-500">
              <li>
                <Link class="hover:text-primary transition-colors" href="#">
                  پرسش‌های متداول
                </Link>
              </li>
              <li>
                <Link class="hover:text-primary transition-colors" href="#">
                  رویه بازگرداندن کالا
                </Link>
              </li>
              <li>
                <Link class="hover:text-primary transition-colors" href="#">
                  شرایط استفاده
                </Link>
              </li>
              <li>
                <Link class="hover:text-primary transition-colors" href="#">
                  گزارش باگ
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div class="border-t border-gray-100 pt-8 text-center">
          <p class="text-xs text-gray-400">
            تمامی حقوق مادی و معنوی این وب‌سایت محفوظ می‌باشد. ۱۴۰۳
          </p>
        </div>
      </div>
    </footer>
  );
};
