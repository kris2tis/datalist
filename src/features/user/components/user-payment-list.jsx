import Img from "@/shared/components/ui/img";

export default function UserPaymentList({ payments }) {
  if (!payments?.length) {
    return <span className="mx-auto">سفارشی نداشته اید</span>;
  }
  return (
    <section className="space-y-4" id="payments">
      <h3 className="text-xl font-bold flex items-center gap-2 mb-4">
        <Img
          src={"/icons/latest.svg"}
          alt={"latest icon"}
          className={"h-6 aspect-square"}
        />
        آخرین سفارش‌ها
      </h3>
      {payments.map((p) => (
        <UserPaymentCard key={p.id} {...p} />
      ))}
    </section>
  );
}

const UserPaymentCard = ({ id, createdAt: date, totalPrice }) => {
  return (
    <div className="cursor-pointer   bg-surface-light  rounded-xl shadow-sm border border-border-light p-5 flex flex-wrap items-center justify-between gap-4 group hover:border-primary/30 transition-all">
      <div className="flex items-center gap-4">
        <div>
          <h4 className="font-bold text-text-main ">سفارش #{id}</h4>
          <p className="text-xs text-text-muted mt-1">{date}</p>
        </div>
      </div>
      <div className="flex items-center gap-6 mr-auto pl-2">
        <div className="text-left">
          <p className="text-xs text-text-muted">مبلغ کل</p>
          <p className="font-bold text-primary">
            {totalPrice.toLocaleString()} تومان
          </p>
        </div>
      </div>
    </div>
  );
};
