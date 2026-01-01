import { auth } from "../../../../../lib/auth";
import { headers } from "next/headers";
import prisma from "../../../../../lib/prisma";

export async function POST(req) {
  const body = await req.json();
  const { user } = await auth.api.getSession({ headers: await headers() });
  const userId = user?.id || null;
  const productId = body?.productId || null;
  if (!productId) {
    return Response.json(
      { message: "شناسه محصول وجود ندارد" },
      { status: 400 }
    );
  }
  if (!userId) {
    return Response.json(
      { message: "ابتدا باید وارد سایت شوید" },
      { status: 401 }
    );
  }

  const isProductBookmarked = await prisma.bookmark.findUnique({
    where: { userId_productId: { productId: productId, userId: userId } },
    select: { id: true },
  });

  if (isProductBookmarked?.id) {
    await prisma.bookmark.delete({
      where: { userId_productId: { productId: productId, userId: userId } },
    });
    return Response.json(
      { message: "محصول از لیست علاقه مندی ها حذف شد" },
      { status: 200 }
    );
  } else {
    await prisma.bookmark.create({
      data: { productId: productId, userId: userId },
    });
    return Response.json({ message: "محصول ذخیره شد ✔️" }, { status: 200 });
  }
}
