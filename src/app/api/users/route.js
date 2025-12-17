import prisma from "../../../../lib/prisma";

export async function GET() {
  const usersList = await prisma.user.findMany({ orderBy: { id: "desc" } });

  return Response.json(
    { usersList: usersList, message: "لیست کاربران" },
    { status: 200 }
  );
}
