import prisma from "../../../../../lib/prisma";

export async function GET() {
  const paymentsList = await prisma.payment.findMany({
    include: { product: true, user: true },
  });

  return Response.json(
    {
      message: "لیست پرداختی ها",
      paymentList: paymentsList,
    },
    { status: 200 }
  );
}
