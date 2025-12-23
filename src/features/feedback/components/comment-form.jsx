"use client";
import { toast } from "sonner";
import { http } from "../../../httpServices";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CommentForm = () => {
  const [rating, setRating] = useState(4);
  const { refresh } = useRouter();
  const handleSubmitCreateComment = async (e) => {
    e.preventDefault();
    const data = {
      content: e.currentTarget.content.value,
    };

    console.log(data);
    try {
      const { message } = await http
        .post("/user/feedback", data)
        .then(({ data }) => data);
      toast.success(message);
      refresh();
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "خطا");
    }
  };

  return (
    <div className="bg-surface-dark rounded-2xl border border-surface-border p-6 shadow-xl relative overflow-hidden text-right">
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-l from-primary to-transparent"></div>
      <div className="flex items-center gap-3 mb-6">
        <h3 className="text-xl font-bold text-white">ثبت نظر جدید</h3>
        {/* <span className="bg-primary/10 text-primary p-2 rounded-lg material-symbols-outlined">
          rate_review
        </span> */}
      </div>
      <form
        onSubmit={handleSubmitCreateComment}
        className="flex flex-col gap-4"
      >
        {/* Stars */}
        {/* <div className="flex flex-col gap-2">
          <label className="text-sm font-medium text-text-secondary">امتیاز شما</label>
          <div className="flex flex-row-reverse justify-end gap-1 cursor-pointer">
            {[5, 4, 3, 2, 1].map((num) => (
              <span 
                key={num}
                onClick={() => setRating(num)}
                className={`material-symbols-outlined text-2xl transition-colors ${num <= rating ? 'text-yellow-400 fill' : 'text-surface-border'}`}
              >
                star
              </span>
            ))}
          </div>
        </div> */}
        <textarea
          className="w-full h-32 bg-background-dark border border-surface-border rounded-lg p-3 text-white focus:ring-1 focus:ring-primary outline-none text-sm text-right"
          placeholder="تجربه خرید خود را بنویسید..."
          name="content"
        ></textarea>
        <button
          type="submit"
          className="w-full h-12 rounded-xl bg-primary text-background-dark font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all"
        >
          <span>ارسال نظر</span>
          {/* <span className="material-symbols-outlined">send</span> */}
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
