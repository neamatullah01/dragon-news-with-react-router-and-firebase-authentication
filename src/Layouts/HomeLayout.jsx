import React from "react";
import { Outlet, useNavigate } from "react-router";
import Header from "../Components/Header";
import LatestNews from "../Components/LatestNews";
import Navbar from "../Components/Navbar";
import LeftAside from "../Components/homelayout/LeftAside";
import RightAside from "../Components/homelayout/RightAside";
import Loading from "../Pages/Loading";

const HomeLayout = () => {
  const { state } = useNavigate();
  return (
    <div>
      <header className="mt-4">
        <Header></Header>
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
        <nav className="w-11/12 mx-auto my-4">
          <Navbar></Navbar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto my-5 grid grid-cols-12 gap-3">
        <aside className="col-span-3 sticky top-0 h-fit">
          <LeftAside></LeftAside>
        </aside>
        <section className="col-span-6 mx-3">
          {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
        </section>
        <aside className="col-span-3 sticky top-0 h-fit">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
