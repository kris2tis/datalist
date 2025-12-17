import { cookies } from "next/headers";
import prisma from "../../../../lib/prisma";

export async function GET() {
  const cookieStore = await cookies();

  const id = cookieStore.get("id")?.value;

  const user = await prisma.user.findUnique({
    where: { id: Number(id) },
    include: { bookmarks: true },
  });
  return Response.json({ user: user }, { status: 200 });
}
