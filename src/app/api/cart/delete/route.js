import prisma from "../../../../../lib/prisma";

export async function POST(req) {
  const body = await req.json();
  const productId = parseInt(body.productId);
  const cartId = parseInt(body.cartId);

  if (!productId || !cartId) throw new Error("محصول یا سبد وجود ندارد");

  await prisma.cartItem.delete({
    where: { productId_cartId: { cartId: cartId, productId: productId } },
  });

  return Response.json({ message: "محصول از سبد شما حذف شد" }, { status: 200 });
}
