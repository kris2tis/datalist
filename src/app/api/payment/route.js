import prisma from "../../../../lib/prisma";

export async function POST(req) {
  const body = await req.json();
  const userId = parseInt(body?.userId);
  const cartId = parseInt(body?.cartId);
  const productId = parseInt(body?.productId);

  await prisma.payment.create({
    data: { userId: userId, product: { connect: { id: productId } } },
    select: { user: true },
  });

  await prisma.cartItem.deleteMany({
    where: { cartId: cartId },
  });

  return Response.json(
    { message: "پرداخت با موفقیت اجرا شد" },
    { status: 200 }
  );
}
