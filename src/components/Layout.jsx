import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Contact from "./Contact";
import SparkleTrail from "./SparkleTrail";

export default function Layout() {
  return (
    <div className="grain min-h-screen">
      <SparkleTrail />
      <Nav />
      <main>
        <Outlet />
      </main>
      <Contact />
    </div>
  );
}
