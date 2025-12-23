import prisma from "../../../../../../lib/prisma";

// حذف یا کاهش تعداد محصول از سبد
export async function POST(req) {
  const body = await req.json();
  const cartId = parseInt(body.cartId);
  const productId = parseInt(body.productId);
  if (!productId) return new Error("محصول وجود ندارد");
  if (!cartId) return new Error("سبد وجود ندارد");

  const cartItem = await prisma.cartItem.findUnique({
    where: { productId_cartId: { cartId: cartId, productId: productId } },
    include: { product: { select: { title: true } } },
  });

  // چک میشه محصول وجود دارد یانه
  if (cartItem?.cartId && cartItem?.productId) {
    // اگر تعداد محصول بیشتر از 1 بود کاهش میدیم
    if (cartItem.quantity > 1) {
      const updateCartItemQuantity = await prisma.cartItem.update({
        where: { productId_cartId: { cartId: cartId, productId: productId } },
        data: { quantity: cartItem.quantity - 1 },
      });
      const newCartItemQuantity = updateCartItemQuantity.quantity;
      return Response.json(
        { message: `تعداد مصحول به ${newCartItemQuantity} کاهش یافت` },
        {
          status: 200,
        }
      );
    } else if (cartItem.quantity === 1) {
      // اگر تعداد 1 بود کارت ایتم حذف میشه
      await prisma.cartItem.delete({
        where: { productId_cartId: { cartId: cartId, productId: productId } },
      });
      const deletedProduct = cartItem.product.title;
      return Response.json(
        { message: `مصحول ${deletedProduct} از سبد حذف شد` },
        {
          status: 200,
        }
      );
    }
  } else {
    return Response.json(
      { message: "محصول با این مشخصه وجود ندارد" },
      {
        status: 404,
      }
    );
  }
}
