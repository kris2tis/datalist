import { headers } from "next/headers";
import { auth } from "../../../../../lib/auth";
import prisma from "../../../../../lib/prisma";
// دریافت سبد کاربر
export async function GET() {
  const session = await auth.api.getSession({ headers: await headers() });
  const userId = session?.user?.id || null;
  if (!userId)
    return Response.json(
      { message: "کاربر احراز هویت نشده است" },
      {
        status: 401,
      }
    );

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      cart: { include: { productItems: { include: { product: true } } } },
    },
  });

  const totalPrice = user.cart.productItems.length
    ? user.cart.productItems.reduce(
        (accumulator, currentValue) =>
          (accumulator += currentValue.product.price * currentValue.quantity),
        0
      )
    : 0;

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
  const { productId } = await req.json();
  const { user } =
    (await auth.api.getSession({ headers: await headers() })) || {};
  const { id: cartId } = user.cart || {};
  if (!productId) return new Error("محصول وجود ندارد");
  if (!cartId) return new Error("سبد وجود ندارد");

  const cartItem = await prisma.cartItem.findUnique({
    where: { productId_cartId: { cartId: cartId, productId: productId } },
  });
  const product = await prisma.product.findUnique({ where: { id: productId } });
  // درصورتی که محصول اصلا در سبد نبود اضافش میکنیم به سید
  if (!cartItem?.cartId && !cartItem?.productId) {
    if (product.quantity === 0)
      return Response.json(
        { message: " متاسفم, موجودی محصول به اتمام رسیده است " },
        {
          status: 500,
        }
      );

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

export async function DELETE() {
  const { user } = await auth.api.getSession({ headers: await headers() });

  await prisma.cartItem.deleteMany({ where: { cartId: user.cart.id } });
  return Response.json(
    { message: "محصولات با موفقیت از سبد حذف شدند" },
    {
      status: 200,
    }
  );
}
