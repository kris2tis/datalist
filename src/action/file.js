"use server";

import fs from "node:fs/promises";

export const uploadFile = async (file) => {
  if (!file) throw new Error("فایلی یافت نشد");

  try {
    const formData = new FormData();
    formData.set("imageFile", file);
    const imagefile = formData.get("imageFile");

    const arrayBuffer = await imagefile.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    await fs.writeFile(`./public/uploads/${imagefile.name}`, buffer);

    return `./public/uploads/${imagefile.name}`;
  } catch (error) {
    throw new Error("خطا در ذخیره سازی عکس");
  }
};
