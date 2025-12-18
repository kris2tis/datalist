import prisma from "../../../../lib/prisma";
import * as zod from "zod";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get("category");
  const whereCategory = category ? { title: category } : {};
  const sort = searchParams.get("sort") || "asc";
  const gte = Number(searchParams.get("gte")) || 0;
  const lte = Number(searchParams.get("lte")) || 1200000000;

  const productList = await prisma.product.findMany({
    where: {
      AND: [
        { category: { ...whereCategory } },
        { price: { gte: gte, lte: lte } },
      ],
    },
    orderBy: { createdAt: sort },
  });

  return Response.json(
    { productList: productList, message: "محصولات" },
    { status: 200 }
  );
}

// Create Product

const createProductSchema = zod.object({
  title: zod.string("تایتل صروری است").min(5, "حداقل باید 5 کارکاتر باشد"),
  price: zod.preprocess((val) => {
    if (typeof val === "string") {
      return Number.parseInt(val);
    }
    return val;
  }, zod.number("قیمت ضروری است")),
  categoryId: zod.preprocess((val) => {
    if (typeof val === "string") {
      return Number.parseInt(val);
    }
    return val;
  }, zod.number("دسته بندی ضروری است")),
  quantity: zod.preprocess((val) => {
    if (typeof val === "string") {
      return Number.parseInt(val);
    }
    return val;
  }, zod.number("تعداد ضروری است").min(1, "تعداد حداقل باید 1 باشد")),
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
    categoryId: parseInt(body.categoryId),
    price: parseInt(body.price),
    quantity: parseInt(body.quantity),
  };

  const categoryId = await prisma.category.findUnique({
    where: { id: parseInt(data.categoryId) },
  });

  if (!categoryId?.id) {
    return Response.json("دسته بندی با این مشحصه وجود ندارد", { status: 404 });
  }
  const result = createProductSchema.safeParse(body);
  if (result?.success) {
    await prisma.product.create({
      data: {
        title: data.title,
        price: data.price,
        categoryId: data.categoryId,
        quantity: data.quantity,
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
}
