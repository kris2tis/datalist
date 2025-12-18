import prisma from "../../../../../lib/prisma";

export async function GET() {
  const users = await prisma.user.findMany({ orderBy: { id: "asc" } });

  return Response.json(
    { message: "لیست کاربران", data: users },
    { status: 200 }
  );
}
