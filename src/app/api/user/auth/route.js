import prisma from "../../../../../lib/prisma";
import { auth } from "../../../../../lib/auth";

const errors = {
  422: { message: "کاربری با این ایمیل وجود دارد 🚩", status: 422 },
};

export async function POST(req) {
  const body = await req.json();
  if (!body?.email || !body?.password || !body?.name)
    return Response.json(
      { message: "اطلاعات فرستاده شده کامل نیست" },
      { status: 400 }
    );
  try {
    const { headers, response } = await auth.api.signUpEmail({
      returnHeaders: true,
      body: body,
    });
    const userId = response?.user?.id;

    const setCokie = headers.getSetCookie();

    if (!userId) {
      throw new Error("شناسه کاربر وجود ندارد");
    }

    await prisma.cart.create({
      data: {
        userId: userId,
      },
    });

    return Response.json(
      { message: "با موفقیت ثبت نام شدید" },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Set-Cookie": setCokie || "",
        },
      }
    );
  } catch (error) {
    console.log("ERROR : ", error.body);
    const errorData = errors[error.statusCode];
    return Response.json(
      { message: errorData.message },
      {
        status: errorData.status,
      }
    );
  }
}
