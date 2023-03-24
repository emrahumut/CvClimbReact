import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.scss";
import Home from "./components/Home";
import { SECTION_COMPONENT_MAP } from "./config/section/section.component.config";
import BuilderLayout from "./layouts/BuilderLayout";
import Layout from "./layouts/Layout";
import ResumeBuilderLayout from "./layouts/ResumeBuilderLayout";
import NotFound from "./routes/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="build-resume" element={<ResumeBuilderLayout />}>
            <Route index element={<BuilderLayout />} />
            {/* @TODO: sayfalar için dinamik hale getirilecek*/}
            {Object.keys(SECTION_COMPONENT_MAP).map((selectionType) => {
              const SectionComponent =
                SECTION_COMPONENT_MAP[selectionType].component;

              return (
                <Route
                  key={selectionType}
                  path={selectionType}
                  element={<SectionComponent />}
                />
              );
            })}

            {/* <Route path="name" element={<Name />} /> */}
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
