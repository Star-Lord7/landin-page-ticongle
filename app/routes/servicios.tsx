import type { Route } from "./+types/home";
// import { Welcome } from "../welcome/welcome";
import { Servicios } from "../pages/Servicios";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Servicios" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Servicios2() {
  return <Servicios />;
}