import prisma from "../../../../../lib/prisma";

export async function GET() {
  const categories = await prisma.category.findMany({});

  return Response.json(
    { message: "لیست دسته بندی ها", data: categories },
    { status: 200 }
  );
}
