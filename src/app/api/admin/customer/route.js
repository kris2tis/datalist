import prisma from "../../../../../lib/prisma";

export async function GET() {
  const customers = await prisma.payment.findMany({
    include: { user: true, product: true },
  });

  return Response.json(
    { message: "لیست مشتریان", data: customers },
    { status: 200 }
  );
}
