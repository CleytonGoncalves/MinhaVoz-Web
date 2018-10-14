import Pacientes from "./pages/Pacientes";
import Sujeitos from "./pages/Sujeitos";

const routes = [
  { path: "/", redirect: "/pacientes" },
  {
    path: "/pacientes",
    title: "Pacientes",
    icon: "sentiment_satisfied_alt",
    component: Pacientes
  },
  {
    path: "/sujeitos",
    title: "Sujeitos",
    icon: "accessibility_new",
    component: Sujeitos
  },
  {
    path: "/verbos",
    title: "Verbos",
    icon: "pool",
    component: Pacientes
  },
  {
    path: "/complementos",
    title: "Complementos",
    icon: "local_florist",
    component: Pacientes
  },
  {
    path: "/diversos",
    title: "Diversos",
    icon: "format_quote",
    component: Pacientes
  }
];

export { routes };
