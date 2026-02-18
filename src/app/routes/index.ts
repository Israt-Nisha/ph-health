import { Router } from "express";
import { SpecialtyRoutes } from "../module/specialty/specialty.router";
import { AuthRoutes } from "../module/auth/auth.router";
import { UserRoutes } from "../module/user/user.router";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/specialties", SpecialtyRoutes)
router.use("/users", UserRoutes)


export const IndexRoutes = router;