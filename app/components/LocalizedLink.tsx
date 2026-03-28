"use client";

import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";
import { useLanguage } from "./LanguageProvider";

type Props = LinkProps & {
  children: ReactNode;
  className?: string;
};

export default function LocalizedLink({
  href,
  children,
  className,
  ...rest
}: Props) {
  const { lang } = useLanguage();

  // 👉 STRING FALL (z.B. "/contact")
  if (typeof href === "string") {
    const hasQuery = href.includes("?");
    const localizedHref = `${href}${hasQuery ? "&" : "?"}lang=${lang}`;

    return (
      <Link href={localizedHref} className={className} {...rest}>
        {children}
      </Link>
    );
  }

  // 👉 OBJECT FALL (z.B. { pathname, query })
  const newQuery = {
    ...(typeof href.query === "object" && href.query !== null
      ? href.query
      : {}),
    lang,
  };

  return (
    <Link
      href={{
        ...href,
        query: newQuery,
      }}
      className={className}
      {...rest}
    >
      {children}
    </Link>
  );
}
