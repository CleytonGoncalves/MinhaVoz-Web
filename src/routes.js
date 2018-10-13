import Pacientes from "./pages/Pacientes";
import Sujeitos from "./pages/Sujeitos";

const routes = [
  { path: "/", component: Pacientes },
  { path: "/pacientes", component: Pacientes },
  { path: "/sujeitos", component: Sujeitos },
  { path: "/verbos", component: Pacientes },
  { path: "/complementos", component: Pacientes },
  { path: "/diversos", component: Pacientes }
];

export { routes };
