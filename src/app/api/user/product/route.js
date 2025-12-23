import prisma from "../../../../../lib/prisma";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;

  const category = searchParams.get("category");
  const whereCategory = category ? { title: category } : {};
  const sort = searchParams.get("sort") || "asc";
  const gte = Number(searchParams.get("gte")) || 0;
  const lte = Number(searchParams.get("lte")) || 1200000000;

  const productList = await prisma.product.findMany({
    where: {
      AND: [
        { category: { ...whereCategory } },
        { price: { gte: gte, lte: lte } },
      ],
    },
    orderBy: { createdAt: sort },
  });
  return Response.json(
    { productList: productList, message: "لیست محصولات" },
    { status: 200 }
  );
}
