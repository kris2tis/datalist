import prisma from "../../../../lib/prisma";

export async function GET() {
  const res = await prisma.$queryRaw`SELECT 1`;
  return Response.json({ ok: true, res });
}
