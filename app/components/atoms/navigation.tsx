import Link from "next/link";
import { Fragment } from "react";

export function Navigation() {
  return (
    <Fragment>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
    </Fragment>
  );
}
