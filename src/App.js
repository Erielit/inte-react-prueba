import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About } from "./components/About";
import { Form } from "./components/Form";
import { Aside } from "./shared/Aside";
import { Footer } from "./shared/Footer";
import { NavBar } from "./shared/NavBar";

export const App = () => {
  return (
    <div className="">
      <Router>
        <NavBar />
        <Aside />
        <div className="content-wrapper">
          <div className="content-header">
            <div className="container-fluid">
              <div className="row mb-2">
                <div className="col-sm-6">
                  <h1 className="m-0">Gestión</h1>
                </div>
                <div className="col-sm-6">
                  <ol className="breadcrumb float-sm-right">
                    <li className="breadcrumb-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="breadcrumb-item active">Gestión</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <section className="content">
            <div className="container-fluid">
              {/* Se agregar el Router */}
              <Routes>
                <Route path={"/"} element={<Form />} />
                <Route path={"/about"} element={<About />} />
              </Routes>
            </div>
          </section>
        </div>
      </Router>
      <Footer />
    </div>
  );
};
