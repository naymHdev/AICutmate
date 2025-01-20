import { Router } from "express";

const router = Router();

const modelRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
];

modelRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
