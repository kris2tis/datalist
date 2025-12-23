import prisma from "../../../../../lib/prisma";

export async function GET() {
  const LastMonth = new Date();
  LastMonth.setMonth(LastMonth.getMonth() - 1);

  const LastDay = new Date();
  LastDay.setDate(LastDay.getDate() - 1);

  const allPayment = await prisma.payment.findMany({
    include: { product: true },
    orderBy: { createdAt: "desc" },
  });

  const paymentLasttMonth = await prisma.payment.findMany({
    where: { createdAt: { gte: LastMonth } },
    orderBy: { createdAt: "desc" },
    include: { product: true },
  });

  const paymentLastDay = await prisma.payment.findMany({
    where: { createdAt: { gte: LastDay } },
    orderBy: { createdAt: "desc" },
    include: { product: true },
  });

  const recenetyPayment = await prisma.payment.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      user: { select: { name: true } },
      product: { select: { title: true, price: true } },
    },
    take: 5,
  });
  const topSellingProduct = await prisma.product.findMany({
    orderBy: { totalSale: "desc" },
    include: { category: { select: { title: true } } },
    take: 5,
  });

  // Calculate total sales
  let totalSale = 0;
  allPayment
    .map((p) => {
      return p.product.reduce(
        (accumulator, currentValue) => (accumulator += currentValue.price),
        0
      );
    })
    .forEach((price) => (totalSale += price));
  // Calculate this month's sales
  let totalSaleLastMonth = 0;
  paymentLasttMonth
    .map((p) => {
      return p.product.reduce(
        (accumulator, currentValue) => (accumulator += currentValue.price),
        0
      );
    })
    .forEach((price) => (totalSaleLastMonth += price));

  return Response.json(
    {
      message: "امار فروشگاه",
      data: {
        sales: { totalSale: totalSale, totalSaleLastMonth: totalSaleLastMonth },

        statistics: {
          allPayment: allPayment,
          paymentThisMonth: paymentLasttMonth,
          paymentLastDay: paymentLastDay,
          recenetyPayment: recenetyPayment,
          topSellingProduct: topSellingProduct,
        },
      },
    },
    { status: 200 }
  );
}

// امروز رو به میلی سکند تغییر میدم
// یک روز رو به میلی سکند تبدیل میکنم
// حالا از تاریخ امروز یک روز به میلی سکند کم میکنم
