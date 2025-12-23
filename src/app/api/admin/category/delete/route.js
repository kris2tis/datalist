import prisma from "../../../../../../lib/prisma";

export async function POST(req) {
  const body = await req.json();

  const categoryId = body.categoryId;
  if (!categoryId)
    return Response.json(
      {
        message: "آیدی دسته بندی وجود ندارد",
      },
      { status: 400 }
    );

  const category = await prisma.category.findUnique({
    where: { id: categoryId.toString() },
  });
 
  if (!category?.id)
    return Response.json(
      {
        message: "دسته بندی با این مشخصه یافت نشد",
      },
      { status: 404 }
    );
  await prisma.category.delete({ where: { id:categoryId.toString() } });

  return Response.json(
    {
      message: "دسته بندی با موفقیت حذف شذ",
    },
    { status: 200 }
  );
}
