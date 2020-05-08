import AdminHome from "modules/admin-home-page";
import LoginPage from "modules/users/components/loginPage";
import UserProfile from "modules/users/components/userProfile";
import UsersListPage from "modules/users/components/usersListPage";
import AnnouncementsListPage from "modules/announcements/components/page";
import CommitteesListPage from "modules/users/components/committeesListPage";

import { RouteStructure } from "globals/interfaces/route.interface";

export let adminRoutes: RouteStructure[] = [
  {
    path: "/",
    label: "Home",
    component: AdminHome,
  },
  {
    path: "/login",
    component: LoginPage,
  },
  {
    path: "/users",
    label: "Users",
    component: UsersListPage,
  },
  {
    path: "/users/:id",
    component: UserProfile,
  },
  {
    path: "/committees",
    label: "Committees",
    component: CommitteesListPage,
  },
  {
    path: "/announcements",
    label: "Announcements",
    component: AnnouncementsListPage,
  },
];