import { auth } from "../../../../../lib/auth";
import prisma from "../../../../../lib/prisma";
import { headers } from "next/headers";

export async function POST(req) {
  const body = await req.json();

  const { user } = await auth.api.getSession({ headers: await headers() });

  const userId = user?.id;
  const cartId = user?.cart?.id;
  const productsId = body?.productsId;

  const productsIdForPayment = body?.productsId.map((id) => ({ id: id }));

  await prisma.payment.create({
    data: { userId: userId, product: { connect: productsIdForPayment } },
    select: { user: true },
  });

  // //  حذف ایتم های درون سبد کاربر
  await prisma.cartItem.deleteMany({
    where: { cartId: cartId },
  });
  // // افزایش فیلد totalsale محولات خریداری شده
  await prisma.product.updateMany({
    where: { id: { in: productsId } },
    data: { totalSale: { increment: 1 }, quantity: { decrement: 1 } },
  });

  return Response.json(
    { message: "سفارش شما با موفقیت انجام شد" },
    { status: 200 }
  );
}
