import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("servicios", "routes/servicios.tsx"),
    route("blog", "routes/blog.tsx"),
] satisfies RouteConfig;