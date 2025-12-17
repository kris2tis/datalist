import * as zod from "zod";
import prisma from "../../../../lib/prisma";

const updateProfileSchema = zod.object({
  name: zod
    .string("نام الزامی است")
    .min(5, "نام نمیتواند کمتر از 5 کاراکتر باشد"),
  email: zod.email("ایمیل معتبر نیست"),
});

export async function GET(req) {
  const userId = JSON.parse(req.headers.get("userId"));
  if (!userId) throw new Error("کاربری یافت نشد");

  const user = await prisma.user.findUnique({
    where: { id: parseInt(userId) },
    include: {
      cart: true,
    },
  });

  return Response.json(
    { message: "اطلاعات کاربر", user: user },
    { status: 200 }
  );
}

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
