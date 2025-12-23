import prisma from "../../../../../../lib/prisma";
import * as zod from "zod";

const createCategory = zod.object({
  title: zod
    .string("عنوان دسته بندی صروری است")
    .min(5, "حداقل باید 5 کارکاتر باشد"),
});
export async function POST(req) {
  const body = await req.json();
  console.log("____________", body);
  const categoryId = await prisma.category.findUnique({
    where: { id: body.categoryId },
  });

  if (!categoryId?.id) {
    return Response.json("دسته بندی با این مشحصه وجود ندارد", { status: 404 });
  }
  const result = createCategory.safeParse(body);
  if (result?.success) {
    await prisma.category.update({
      where: { id: categoryId.id },
      data: { title: body.title },
    });

    return Response.json(
      { message: "دسته بندی با موفقیت بروز شد" },
      { status: 200 }
    );
  } else if (result?.error) {
    const { fieldErrors } = zod.flattenError(result.error);
    return Response.json(
      { errors: fieldErrors, message: "خطا" },
      { status: 400 }
    );
  }
}
