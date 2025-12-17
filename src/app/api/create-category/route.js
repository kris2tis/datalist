import prisma from "../../../../lib/prisma";
import * as zod from "zod";

const createProductSchema = zod.object({
  title: zod
    .string("عنوان دسته بندی را الزامی است")
    .min(5, "حداقل باید 5 کارکاتر باشد"),
});
export async function POST(req) {
  const body = await req.json();

  const result = createProductSchema.safeParse(body);
  if (result?.success) {
    await prisma.category.create({
      data: body,
    });
    return Response.json("دسته بندی با موفقیت ساخته شد", { status: 200 });
  } else if (result?.error) {
    const { fieldErrors } = zod.flattenError(result.error);
    return Response.json(
      { errors: fieldErrors, message: "خطا" },
      { status: 200 }
    );
  }
}
