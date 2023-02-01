import { lazy, Suspense } from "react";

import Logout from "../components/Logout";
import Nav from "../components/Nav";
const DespachosTable = lazy(() => import("../components/DespachosTable"));

function HomePage() {
  return (
    <Suspense
      fallback={
        <>
          <h2>Cargando...</h2>
        </>
      }
    >
      <div>
        <h1>Home</h1>
        <Nav />
        <Logout />
        <DespachosTable />
      </div>
    </Suspense>
  );
}

export default HomePage;
