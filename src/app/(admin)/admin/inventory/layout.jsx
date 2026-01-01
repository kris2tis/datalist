import AdminPageHeader from "../../../../shared/components/layout/admin/admin-page-header";
import { Suspense } from "react";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col gap-y-5">
      <AdminPageHeader
        title={"هشدار های فروشگاه"}
        desctiption={"در این صفحه اعلانات موجودی محصولات قابل مشاهده است"}
      />
      <Suspense fallback={<span>درحال گرفتن اطلاعات</span>}>
        {children}
      </Suspense>
    </div>
  );
}
