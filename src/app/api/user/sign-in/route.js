import { auth } from "../../../../../lib/auth";
import prisma from "../../../../../lib/prisma";

const errors = {
  401: { message: "ایمیل یا رمز عبور اشتباه است 🚩", status: 401 },
};

export async function POST(req) {
  const body = await req.json();

  const email = body?.email || null;
  const password = body?.password || null;

  try {
    const { response, headers } = await auth.api.signInEmail({
      returnHeaders: true,
      body: body,
    });
    const userName = response?.user?.name;
    return Response.json(
      { message: `${userName} جان خوش آمدی 😄` },
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Set-Cookie": headers.getSetCookie() || "",
        },
      }
    );
  } catch (error) {
    const errorData = errors[error.statusCode.toString()];

    return Response.json(
      { message: errorData.message },
      { status: errorData.status }
    );
  }
}
