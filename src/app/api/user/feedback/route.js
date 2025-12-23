import { auth } from "../../../../../lib/auth";
import prisma from "../../../../../lib/prisma";
import { headers } from "next/headers";
import * as zod from "zod";

export async function GET() {
  const feedbacks = await prisma.comment.findMany({
    include: { user: true },
    take: 2,
    orderBy: { createdAt: "desc" },
  });

  return Response.json(
    { message: "لیست نظرات کاربران درباره ما", data: feedbacks },
    { status: 200 }
  );
}

const createMessageSchema = zod.object({
  content: zod
    .string("متن نظر ضروری است")
    .min(5, "متن نظر حداقل 5 کاراکتر باشد"),
});
export async function POST(req) {
  const body = await req.json();
  const { user } = await auth.api.getSession({ headers: await headers() });
  const { id } = user;
  if (!id) {
    return Response.json(
      { message: "ابتدا باید وارد سایت شوید 😄" },
      { status: 401 }
    );
  }
  const result = createMessageSchema.safeParse(body);
  if (!result?.error) {
    await prisma.comment.create({
      data: { content: body.content, userId: id },
    });

    return Response.json({ message: "نظر ساخته شد 🚩" }, { status: 200 });
  } else {
    const { fieldErrors } = zod.flattenError(result.error);
    return Response.json({ message: fieldErrors.content[0] }, { status: 400 });
  }
}
