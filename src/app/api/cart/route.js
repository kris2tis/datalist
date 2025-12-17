import prisma from "../../../../lib/prisma";
// دریافت سبد کاربر
export async function GET(req) {
  const id = req.headers.get("id");

  if (!id)
    return Response.json(
      { message: "کاربر احراز هویت نشده است" },
      {
        status: 401,
      }
    );

  const user = await prisma.user.findUnique({
    where: { id: parseInt(id) },
    include: {
      cart: { include: { productItems: { include: { product: true } } } },
    },
  });

  const totalPrice = user.cart.productItems.reduce(
    (accumulator, currentValue) =>
      (accumulator += currentValue.product.price * currentValue.quantity),
    0
  );

  const userCart = { ...user, cart: { ...user.cart, Count: totalPrice } };
  if (userCart?.id) {
    return Response.json(
      { message: "اطلاعات کاربر به همراه سبد خرید", user: userCart },
      {
        status: 200,
      }
    );
  } else {
    return Response.json(
      { message: "کاربری وجود ندارد" },
      {
        status: 404,
      }
    );
  }
}

// افزودن محصول به سبد
export async function POST(req) {
  const body = await req.json();
  const cartId = parseInt(body.cartId);
  const productId = parseInt(body.productId);

  if (!productId) return new Error("محصول وجود ندارد");
  if (!cartId) return new Error("سبد وجود ندارد");

  const cartItem = await prisma.cartItem.findUnique({
    where: { productId_cartId: { cartId: cartId, productId: productId } },
  });
  const product = await prisma.product.findUnique({ where: { id: productId } });
  // درصورتی که محصول اصلا در سبد نبود اضافش میکنیم به سید
  if (!cartItem?.cartId && !cartItem?.productId) {
    if (product.quantity === 0) return new Error("متاسفم تعداد محصول 0 است");

    await prisma.cartItem.create({
      data: { cartId: cartId, productId: productId, quantity: 1 },
    });
    return Response.json(
      { message: "محصول با موفقیت به سبد اضافه شد" },
      {
        status: 200,
      }
    );
  } else {
    // اگر که محصول بود تعداد رو  افزایش میدیم
    // اگر موجودی محصول اونقدری بود که بتونیم موجودی اون کارت رو افزایش بدیم
    if (product.quantity > cartItem.quantity) {
      const IncreasedCartItemQuantity = await prisma.cartItem.update({
        where: { productId_cartId: { cartId: cartId, productId: productId } },
        data: { quantity: cartItem.quantity + 1 },
      });
      return Response.json(
        {
          message: `تعداد محصول به ${IncreasedCartItemQuantity.quantity} افزایش پیدا کرد`,
        },
        {
          status: 200,
        }
      );
    } else {
      return Response.json(
        { message: "متاسفم موجودی محصول در انبار به اتمام رسیده" },
        {
          status: 400,
        }
      );
    }
  }
}
