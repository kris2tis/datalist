import Link from "next/link";
import React from "react";

export default function AdminBreadcrumb({ paths }) {
  return (
    <nav className="flex items-center gap-2 text-sm">
      <Link
        className="text-text-muted hover:text-white transition-colors"
        href="/admin"
      >
        داشبورد
      </Link>

      {paths.map((path, index) => {
        let lastIndex = paths.length === index + 1;

        return lastIndex ? (
          <>
            <span className="text-text-muted">/</span>
            <span className={`text-primary font-medium`}>{path.title}</span>
          </>
        ) : (
          <Link key={index + 1}>
            <span className="text-text-muted">/</span>
            <span className={`font-medium`}>{path.title}</span>
          </Link>
        );
      })}
    </nav>
  );
}
