import { createRouter, createWebHistory } from "vue-router";
import PresentationView from "../views/Presentation/PresentationView.vue";
import SignInBasicView from "../views/LandingPages/SignIn/BasicView.vue";
import Project from "../views/LandingPages/Project/Project.vue";
import Profile from "../views/LandingPages/Profile/Profile.vue";
import TopSecretProject from "../views/LandingPages/Project/TopSecretProject.vue";
import BasicRegister from "../views/LandingPages/SignIn/BasicRegister.vue";
import ForgotPassword from "../views/LandingPages/SignIn/ForgotPassword.vue";
import Projects from "../views/LandingPages/Project/AllProjects.vue";
import Profiles from "../views/LandingPages/Profile/AllProfiles.vue";
import ViewMyProfile from "../views/LandingPages/Profile/AdmireProfile.vue";
import EditMyProfile from "../views/LandingPages/Profile/EditProfile.vue";
import CreateProject from "../views/LandingPages/Project/AddProject.vue";
import EditProject from "../views/LandingPages/Project/EditProject.vue";
import MyProjects from "../views/LandingPages/Project/MyProjects.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "presentation",
      component: PresentationView,
    },

    {
      path: '/project/:id',
      name: 'project',
      component: Project
    },

    {
      path: '/projects',
      name: 'projects',
      component: Projects
    },

    {
      path: '/myprojects',
      name: 'myprojects',
      component: MyProjects
    },

    {
      path: '/CreateProject',
      name: 'createproject',
      component: CreateProject
    },
    
    {
      path: '/EditProject/:id',
      name: 'editproject',
      component: EditProject
    },

    {
      path: '/TopSecret',
      name: 'topsecretproject',
      component: TopSecretProject
    },

    {
      path: '/profile/:id',
      name: 'profile',
      component: Profile
    },

    {
      path: '/ViewMyProfile',
      name: 'viewmyprofile',
      component: ViewMyProfile
    },

    {
      path: '/EditMyProfile',
      name: 'editmyprofile',
      component: EditMyProfile
    },

    {
      path: '/profiles',
      name: 'profiles',
      component: Profiles
    },

    {
      path: "/register",
      name: "register",
      component: BasicRegister,
    },

    {
      path: "/forgot",
      name: "forgot",
      component: ForgotPassword,
    },

    {
      path: "/pages/landing-pages/basic",
      name: "signin-basic",
      component: SignInBasicView,
    },


  ],
});

export default router;
