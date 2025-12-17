import prisma from "../../../../../lib/prisma";

export async function GET() {
  const productList = await prisma.product.findMany({
    include: { category: true },
  });

  return Response.json(
    {
      message: "لیست محصولات ها",
      productList: productList,
    },
    { status: 200 }
  );
}

// DELETE PRODUCT
export async function POST(req) {
  const body = await req.json();
  const productId = body.productId;
  if (!productId)
    return Response.json(
      {
        message: "آیدی محصول وجود ندارد",
      },
      { status: 400 }
    );

  const productList = await prisma.product.delete({ where: { id: productId } });

  return Response.json(
    {
      message: "محصول با موفقیت حذف شذ",
    },
    { status: 200 }
  );
}
