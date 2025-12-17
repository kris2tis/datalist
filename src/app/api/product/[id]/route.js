import prisma from "../../../../../lib/prisma";

export async function GET(req, { params }) {
  const { id } = await params;
    console.log(id)
  const product = await prisma.product.findUnique({
    where: { id: parseInt(id) },
  });
  
  if (product?.id) {
    return Response.json({ product: product }, { status: 200 });
  } else {
    return Response.json({ message: "محصولی یافت نشد" }, { status: 200 });
  }
}
    