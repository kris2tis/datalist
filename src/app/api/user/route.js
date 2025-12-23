import { headers } from "next/headers";
import prisma from "../../../../lib/prisma";
import * as zod from "zod";
import { auth } from "../../../../lib/auth";
export async function GET() {
  const {
    user: { id },
  } = await auth.api.getSession({ headers: await headers() });

  const user = await prisma.user.findUnique({
    where: { id: id },
    include: { bookmarks: true, cart: true },
  });
  return Response.json(
    { user: user, message: "اطلاعات کاربر" },
    { status: 200 }
  );
}

const updateProfileSchema = zod.object({
  name: zod
    .string("نام الزامی است")
    .min(5, "نام نمیتواند کمتر از 5 کاراکتر باشد"),
  email: zod.email("ایمیل معتبر نیست"),
});

export async function PUT(req) {
  const body = await req.json();
  const result = updateProfileSchema.safeParse(body);
  const user = await prisma.user.findUnique({ where: { id: body.id } });

  if (!user?.id) {
    return Response.json("کاربری وجود ندارد", { status: 400 });
  }

  if (!result?.error) {
    await prisma.user.update({
      where: { id: body.id },
      data: body,
    });
    return Response.json("اطلاعات ذخیره شد", { status: 200 });
  } else if (result?.error) {
    const { fieldErrors } = zod.flattenError(result.error);
    return Response.json(fieldErrors, { status: 400 });
  }
}
