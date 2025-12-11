import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("servicios", "routes/servicios2.tsx"),
] satisfies RouteConfig;