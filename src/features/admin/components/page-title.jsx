// components/Shared/PageTitle.jsx

import Link from "next/link";
import React from "react";

export default function PageTitle({ title, subtitle, breadcrumbs = [] }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2 text-sm">
        {breadcrumbs.map((item, index) => (
          <React.Fragment key={index}>
            <Link
              href={item.href || "#"}
              className={
                item.current
                  ? "text-white font-medium"
                  : "text-text-secondary hover:text-primary transition-colors"
              }
            >
              {item.label}
            </Link>
            {index < breadcrumbs.length - 1 && (
              <span className="text-text-secondary">/</span>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="flex flex-col gap-1">
        <h1 className="text-white tracking-tight text-3xl lg:text-4xl font-bold leading-tight">
          {title}
        </h1>
        <p className="text-text-secondary text-base">{subtitle}</p>
      </div>
    </div>
  );
}
