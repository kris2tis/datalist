const paymentsData = [
  {
    id: "TRX-98234",
    user: {
      name: "علی محمدی",
      email: "ali.mohammadi@example.com",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCZsQ51wkM1d5PzwNzIXXZ5-EkxgDtIMu4-CJqy_VVatvXDRTBJ51Ya2K1slmEZeStFCa3gccDXHxTORcX5EcsdgxtRttUX0Bxmt5p5ocMma15AGzhw2-98lV7lKB-Js2OzkZL33MH_yrioY8PlFQIm6Cp31w_vlsOXY-aaY7KUwni-5L5zYwrICoXbHeSZhYvtKg1E7c--itjn699Fac9j2omxbpfOzvJOl0uehK9ZoACaJTibMBWUyQ3WYFH40DMUbaOxXG1YjeuN",
    },
    date: "۱۴۰۲/۰۸/۱۲",
    time: "۱۰:۳۰",
    amount: "۲,۵۰۰,۰۰۰",
    gateway: "زرین‌پال",
    gatewayIcon: "account_balance",
    status: "موفق",
  },
  {
    id: "TRX-98235",
    user: {
      name: "سارا احمدی",
      email: "sara.ahmadi@mail.com",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuD0xO--cOxluPElIOd1s17JAFF6GDPcJG_VepnA-N63ryeARt8blfl5oUweQIlQqqTVNj3EsnF4q3PPYoz9hrbF5LIpgfkDDzT9wqIoxRObmeX7oy6N2cCzb5wwC6HKXBCYSYpreRHyC1bw-Jh_vICxe99x4z4DIeE1j2Rwji1x0fJ_XUJfuYzWp_0q8jcxrrkZvE2NDP85OQpNnjwztVizJqqlswn2GzEA8IGjMTS2L9A3rT0Ema_g6FIxbDmo3Z6uWeXtV5CnYT5Y",
    },
    date: "۱۴۰۲/۰۸/۱۲",
    time: "۱۱:۱۵",
    amount: "۱۴۵,۰۰۰",
    gateway: "بانک ملت",
    gatewayIcon: "credit_card",
    status: "ناموفق",
  },
  {
    id: "TRX-98236",
    user: {
      name: "رضا کاظمی",
      email: "reza.kzm@test.com",
      avatar:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDezyH0mk_ILlqjd0LMFkRDrdsJEZm7dRzjrJcdrQzSCQEXG9LB8vqP6Typ_3tF4jU8UGD5R0Hzvk8ymptMIO51e22waGQWg9bgpxoBOXpoWKScJr1WPO3nQEr--ejaCs1G9mLnga9jr-2LZN23xRL7_2cyRxO1vmzvZHL0-CfTlzDX_jbPE-wFeIGQGrDxG3xCOh4RvFlkFHBrb6hoJTEvW1RuV2gU1aA1nnelEN25wNgSVj3KiCjw2l7l_8ajopyU7_7QcqqYha28",
    },
    date: "۱۴۰۲/۰۸/۱۱",
    time: "۱۶:۴۵",
    amount: "۸,۹۰۰,۰۰۰",
    gateway: "زرین‌پال",
    gatewayIcon: "account_balance",
    status: "در انتظار",
  },
  {
    id: "TRX-98237",
    user: {
      name: "محمد حسینی",
      email: "m.hosseini@yahoo.com",
      avatar: null,
      initials: "م.ح",
    },
    date: "۱۴۰۲/۰۸/۱۰",
    time: "۰۹:۲۰",
    amount: "۱,۲۰۰,۰۰۰",
    gateway: "سامان کیش",
    gatewayIcon: "credit_card",
    status: "موفق",
  },
  // ... add more data
];

// components/Payments/StatusBadge.jsx

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
  const { price: amount } = payment.product[0];

  return (
    <tr className="hover:bg-[#222e25] transition-colors group">
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
          {amount}{" "}
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

// components/Payments/PaymentTable.jsx

export default function PaymentTable({ data }) {
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
