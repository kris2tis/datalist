import prisma from "../../../../../lib/prisma";
import * as zod from "zod";
export async function GET() {
  const productList = await prisma.product.findMany({
    include: { category: true },
  });
  return Response.json(
    {
      message: "لیست محصولات ها",
      productList: productList,
    },
    { status: 200 }
  );
}

// افزودن محصول
const createProductSchema = zod.object({
  title: zod.string("تایتل صروری است").min(5, "حداقل باید 5 کارکاتر باشد"),
  price: zod.preprocess((val) => {
    if (typeof val === "string") {
      return Number.parseInt(val);
    }
    return val;
  }, zod.number("قیمت ضروری است")),
  quantity: zod.preprocess((val) => {
    if (typeof val === "string") {
      return Number.parseInt(val);
    }
    return val;
  }, zod.number("تعداد ضروری است")),
  properties: zod
    .array(
      zod.object({
        name: zod.string().min(1),
        value: zod.string().min(1),
      })
    )
    .min(2, "ویژگی کمتر از 2 تا نمیشود"),
});

export async function POST(req) {
  const body = await req.json();
  const data = {
    title: body.title,
    categoryId: body?.categoryId || null,
    price: parseInt(body.price),
    quantity: parseInt(body.quantity),
  };

  const categoryId = data?.categoryId
    ? await prisma.category.findUnique({
        where: { id: data.categoryId },
      })
    : null;

  if (data?.categoryId && !categoryId?.id) {
    return Response.json(
      { message: "دسته بندی با این مشحصه وجود ندارد" },
      { status: 404 }
    );
  }
  const result = createProductSchema.safeParse(body);
  if (result?.success) {
    await prisma.product.create({
      data: {
        title: data.title,
        price: data.price,
        categoryId: categoryId?.id ? data.categoryId : null,
        quantity: data.quantity,
        content: body?.content ? body?.content : null,
        properties: { createMany: { data: [...body.properties] } },
      },
    });

    return Response.json(
      { message: "محصول با موفقیت ساخته شد" },
      { status: 200 }
    );
  } else if (result?.error) {
    const { fieldErrors } = zod.flattenError(result.error);
    return Response.json(
      { errors: fieldErrors, message: "خطا" },
      { status: 400 }
    );
  }
  return Response.json({ message: "خطا" }, { status: 400 });
}

export async function PUT(req) {
  const body = await req.json();
  const productId = body?.productId || null;
  if (!productId)
    return Response.json(
      { message: "محصولی با این شناسه وجود ندارد" },
      { status: 400 }
    );
  const data = {
    title: body.title,
    categoryId: body.categoryId,
    price: parseInt(body.price),
    quantity: parseInt(body.quantity),
  };

  const categoryId = data?.categoryId
    ? await prisma.category.findUnique({
        where: { id: data.categoryId },
      })
    : null;

  if (data?.categoryId && !categoryId?.id) {
    return Response.json(
      { message: "دسته بندی با این شناسه وجود ندارد" },
      { status: 404 }
    );
  }
  const result = createProductSchema.safeParse(body);
  if (result?.success) {
    await prisma.product.update({
      where: { id: productId },
      data: {
        title: data.title,
        price: data.price,
        categoryId: data?.categoryId ? data.categoryId : null,
        quantity: data.quantity,
        content: body?.content ? body?.content : null,
        properties: {
          deleteMany: {},
          createMany: { data: [...body.properties], skipDuplicates: true },
        },
      },
    });

    return Response.json(
      { message: "محصول بروز رسانی شد ✅" },
      { status: 200 }
    );
  } else if (result?.error) {
    const { fieldErrors } = zod.flattenError(result.error);
    return Response.json(
      { errors: fieldErrors, message: "خطا در زمان بروزرسانی محصول" },
      { status: 400 }
    );
  }
}
