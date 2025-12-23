import prisma from "../../../../../lib/prisma";
import * as zod from "zod";

export async function GET() {
  const categories = await prisma.category.findMany({
    orderBy: { id: "desc" },
  });
  return Response.json(
    { message: "لیست دسته بندی ها", data: categories },
    { status: 200 }
  );
}

const createProductSchema = zod.object({
  title: zod
    .string("عنوان دسته بندی را الزامی است")
    .min(5, "حداقل باید 5 کارکاتر باشد"),
});
export async function POST(req) {
  const body = await req.json();

  const result = createProductSchema.safeParse(body);

  const category = await prisma.category.findUnique({
    where: { title: body.title.trim() },
  });

  if (category?.title)
    return Response.json(
      { message: "دسته بندی با این نام وجود دارد" },
      { status: 400 }
    );

  if (result?.success) {
    await prisma.category.create({
      data: body,
    });
    return Response.json(
      { message: "دسته بندی با موفقیت ساخته شد" },
      { status: 200 }
    );
  } else if (result?.error) {
    const { fieldErrors } = zod.flattenError(result.error);
    return Response.json(
      { errors: fieldErrors, message: "خطا" },
      { status: 200 }
    );
  }
}
