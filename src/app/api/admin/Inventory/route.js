import prisma from "../../../../../lib/prisma";

export async function GET() {
  const ProductStockList = await prisma.product.findMany({
    where: { quantity: { lte: 2 } },
    select: { id: true, quantity: true, title: true , category:{select:{title:true}} },
  });

  const lowProductStockList = ProductStockList.map((p) => {
    return {
      ...p,

      status:
        p.quantity > 0
          ? p.quantity > 1
            ? "In Stock"
            : "Low Stock"
          : "Out of Stock",
    };
  });

  return Response.json(
    { message: "لیست هشدار های فروشگاه", data: lowProductStockList },
    { status: 200 }
  );
}
