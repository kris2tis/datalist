function StatusBadge({ status }) {
  let classes = "";
  let dotClass = "";

  switch (status) {
    case "موفق":
      classes = "bg-[#17cf54]/10 text-[#17cf54] border-[#17cf54]/20";
      dotClass = "bg-[#17cf54]";
      break;
    case "ناموفق":
      classes = "bg-red-500/10 text-red-500 border-red-500/20";
      dotClass = "bg-red-500";
      break;
    case "در انتظار":
      classes = "bg-orange-400/10 text-orange-400 border-orange-400/20";
      dotClass = "bg-orange-400";
      break;
    default:
      classes = "bg-[#9db8a6]/10 text-[#9db8a6] border-[#9db8a6]/20";
      dotClass = "bg-[#9db8a6]";
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${classes}`}
    >
      <span className={`w-1.5 h-1.5 rounded-full ${dotClass}`}></span>
      {status}
    </span>
  );
}

function PaymentTableRow({ payment }) {
  const { id, user, date, createdAt: time } = payment;
  const price = payment.product.reduce((a, c) => (a += c.price), 0);
  return (
    <tr className="hover:bg-[#363636] transition-colors group">
      <td className="p-4">
        <span className="text-white text-sm font-mono tracking-wider">
          #{id}
        </span>
      </td>
      <td className="p-4">
        <div className="flex items-center gap-3">
          {user.avatar ? (
            <div
              className="size-8 rounded-full bg-cover bg-center"
              style={{ backgroundImage: `url('${user.avatar}')` }}
            ></div>
          ) : (
            <div className="size-8 rounded-full bg-[#3c5344] flex items-center justify-center text-white text-xs font-bold">
              {user.initials}
            </div>
          )}
          <div className="flex flex-col">
            <span className="text-white text-sm font-medium">{user.name}</span>
            <span className="text-[#9db8a6] text-xs" dir="ltr">
              {user.email}
            </span>
          </div>
        </div>
      </td>
      <td className="p-4">
        <div className="flex flex-col">
          <span className="text-white text-sm">{date}</span>
          <span className="text-[#9db8a6] text-xs" dir="ltr">
            {time}
          </span>
        </div>
      </td>
      <td className="p-4">
        <span className="text-white text-sm font-bold" dir="ltr">
          {price.toLocaleString()} {" "}
          <span className="text-[#9db8a6] text-xs font-normal" dir="rtl">
            تومان
          </span>
        </span>
      </td>
      <td className="p-4">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#9db8a6]">{}</span>
          <span className="text-[#9db8a6] text-sm">{}</span>
        </div>
      </td>
      {/* Status */}
      <td className="p-4">
        <StatusBadge status={"موفق"} />
      </td>
      {/* <td className="p-4 relative w-20">
        <button
          className="text-[#9db8a6] hover:text-white p-1 rounded hover:bg-[#29382e] transition-colors"
          title="جزئیات"
        >

        </button>
      </td> */}
    </tr>
  );
}

export default function PaymentTable({ data }) {
  if (!data?.length) {
    return (
      <div className="flex justify-center pt-3">
        <span>سفارشی در سایت ثبت نشد است</span>
      </div>
    );
  }
  return (
    <div className="rounded-xl border border-[#29382e] overflow-hidden bg-[#1c261f] shadow-xl">
      {/* Table Area */}
      <div className="overflow-x-auto">
        <table className="w-full text-right">
          <thead className="bg-[#29382e] text-[#9db8a6]">
            <tr>
              <th className="p-4 text-xs font-medium">شناسه تراکنش</th>
              <th className="p-4 text-xs font-medium">کاربر</th>
              <th className="p-4 text-xs font-medium">تاریخ و ساعت</th>
              <th className="p-4 text-xs font-medium">مبلغ</th>
              <th className="p-4 text-xs font-medium w-20"></th>
              <th className="p-4 text-xs font-medium">وضعیت</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#29382e]">
            {data.map((payment) => (
              <PaymentTableRow key={payment.id} payment={payment} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
