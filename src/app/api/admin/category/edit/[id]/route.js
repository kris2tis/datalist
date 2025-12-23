import prisma from "../../../../../../../lib/prisma";

export async function GET(req, { params }) {
  const { id } = await params;

    const category = await prisma.category.findUnique({ where: { id: id } });
  return Response.json(
    { message: "دسته بندی", data: category },
    { status: 200 }
  );
}
