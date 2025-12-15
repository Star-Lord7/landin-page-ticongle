import type { Route } from "./+types/home";
import { Blog } from "~/pages/Blog";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Blog" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function BlogPages() {
  return <Blog />;
}