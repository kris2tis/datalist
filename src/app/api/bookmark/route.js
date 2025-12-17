import prisma from "lib/prisma";

export async function POST(req) {
  const body = await req.json();
  const productId = parseInt(body.productId);
  const userId = parseInt(body.userId);
  if (!productId || !userId) return new Error("کاربر یا محصول وجود ندارد");
  await prisma.bookmark.create({ data: { product: productId, user: userId } });

  return Response.json({ message: "محصول ذخیره شد" }, { status: 200 });
}
