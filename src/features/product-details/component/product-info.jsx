import React from "react";

export default function ProductInfo({ title, price }) {
  return (
    <div className="bg-surface-light dark:bg-surface-dark px-4 pb-6 rounded-b-2xl mb-2 shadow-sm">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      <p className="text-3xl font-bold text-primary">
        {price.toLocaleString()}تومان
      </p>
    </div>
  );
}
