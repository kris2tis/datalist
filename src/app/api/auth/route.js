import prisma from "../../../../lib/prisma";
import { cookies } from "next/headers";

export async function POST(req) {
  const body = await req.json();
  const cookieStore = await cookies();
  const user = await prisma.user.create({
    data: { name: body.name, email: body.email, cart: { create: {} } },
  });

  const maxAgeDate = new Date();
  maxAgeDate.setUTCDate(maxAgeDate.getUTCDate() + 400);

  cookieStore.set({
    name: "id",
    value: user.id,
    httpOnly: true,
    secure: false,
    sameSite: "lax",
    path: "/",
    expires: maxAgeDate.getTime(),
  });

  if (!user?.id) {
    return Response.json({ message: "خطا" }, { status: 500 });
  }
  return Response.json(
    { message: "کاربر با موفقیت ثبت نام شد" },
    { status: 200 }
  );
}
