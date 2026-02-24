import { Router } from "express";
import { SpecialtyRoutes } from "../module/specialty/specialty.router";
import { AuthRoutes } from "../module/auth/auth.router";
import { UserRoutes } from "../module/user/user.router";
import { DoctorRoutes } from "../module/doctor/doctor.router";
import { scheduleRoutes } from "../module/schedule/schedule.router";
import { DoctorScheduleRoutes } from "../module/doctorSchedule/doctorSchedule.router";
import { AppointmentRoutes } from "../module/appointment/appointment.router";
import { AdminRoutes } from "../module/admin/admin.router";

const router = Router();

router.use("/auth", AuthRoutes);
router.use("/specialties", SpecialtyRoutes)
router.use("/users", UserRoutes)
router.use("/doctors", DoctorRoutes)
router.use("/admins", AdminRoutes)
router.use("/schedules", scheduleRoutes)
router.use("/doctor-schedules", DoctorScheduleRoutes)
router.use("/appointments", AppointmentRoutes)


export const IndexRoutes = router;