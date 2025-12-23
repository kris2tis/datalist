export async function POST(req) {
  const body = await req.json();
  const productId = body.productId;
  console.log(productId)
  if (!productId)
    return Response.json(
      {
        message: "محصولی با این مشخصه وجود ندارد",
      },
      { status: 400 }
    );

  await prisma.product.delete({ where: { id: productId.toString() } });

  return Response.json(
    {
      message: "محصول با موفقیت حذف شد",
    },
    { status: 200 }
  );
}
