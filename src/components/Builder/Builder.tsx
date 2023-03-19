import GridLayout, { Layout } from "react-grid-layout";
import Name from "./sections/Name";
import "./Builder.scss";
import Experience from "./sections/Experience";
import Summary from "./sections/Summary";
import Contact from "./sections/Contact";
import Language from "./sections/Languages";
import Software from "./sections/Software";
import Skills from "./sections/Skills";
import { useState } from "react";
import Education from "./sections/Education";
import Interest from "./sections/Interest";
import Accomplishments from "./sections/Accomplishment";
import AdditionalInfo from "./sections/AdditionalInfo";
import { GridLayoutOptions } from "../../layouts/BuilderLayout";
import Affiliation from "./sections/Affiliation";
import Certifications from "./sections/Certifications";
import Custom from "./sections/Custom";
import Projects from "./sections/Projects";
import DocumentTool from "./DocumentTool";

const Builder = ({
  gridLayoutOptions,
}: {
  gridLayoutOptions: GridLayoutOptions;
}) => {
  const [layout, setLayout] = useState<Layout[]>([
    { i: "name", x: 0, y: 0, w: 12, h: 1 },
    { i: "summary", x: 0, y: 1, w: 12, h: 1 },
    { i: "contact", x: 0, y: 3, w: 4, h: 1 },
    { i: "skills", x: 0, y: 4, w: 4, h: 1 },
    // 2. column
    { i: "experience", x: 4, y: 4, w: 8, h: 1 },
    { i: "education", x: 4, y: 5, w: 8, h: 1 },
    { i: "language", x: 0, y: 5, w: 4, h: 1 },
    { i: "software", x: 0, y: 6, w: 4, h: 1 },
    { i: "interest", x: 4, y: 7, w: 8, h: 1 },
    { i: "accomplishment", x: 4, y: 8, w: 8, h: 1 },
    { i: "additionalInfo", x: 4, y: 9, w: 8, h: 1 },
    { i: "affiliation", x: 0, y: 10, w: 4, h: 1 },
    { i: "certifications", x: 4, y: 11, w: 8, h: 1 },
    { i: "custom", x: 0, y: 11, w: 4, h: 1 },
    { i: "projects", x: 4, y: 12, w: 8, h: 1 },
  ]);
  const [inital, setInitial] = useState<boolean>(true);
  const handleLayoutChange = (event: any) => {
    console.log("event", event);
    // const elements: any = document.querySelectorAll(".react-grid-item");
    // const heigths: any[] = [];
    // for (let i = 0; i < elements.length; i++) {
    //   heigths.push(Math.ceil(elements[i].firstElementChild.offsetHeight / 50));
    // }

    if (inital) {
      const div: any = document
        .querySelector(".react-grid-item")
        ?.querySelector(".section");

      const firstChildHeight = Math.ceil(div.offsetHeight / 50);
      const newLayout = [...event].map((l) => {
        if (l.i === "name") {
          console.log("lll", l);
          return {
            ...l,
            h: firstChildHeight,
          };
        }
        return l;
      });
      setLayout(newLayout);
      setInitial(false);
    }
  };
  const templates: any = {
    RT1: {
      id: "cart",
      layout: [
        { i: "a", x: 0, y: 0, w: 12, h: 2 },
        { i: "b", x: 1, y: 0, w: 3, h: 2 },
        { i: "c", x: 4, y: 0, w: 1, h: 2 },
      ],
    },
    RT2: {},
  };
  const test = () => {
    console.log("asdsadsd");
  };
  return (
    <div className="document">
      <GridLayout
        className="layout"
        layout={layout}
        cols={gridLayoutOptions.cols}
        // isResizable={false}
        rowHeight={50}
        width={595}
        autoSize={true}
        draggableHandle={".drag-tool"}
        // resizeHandle={".resize-tool"}
        onLayoutChange={handleLayoutChange}
        // useCSSTransforms={false}
        // containerPadding={[20, 20]}
        // preventCollision={true}
      >
        <div key="name">
          <DocumentTool>
            <Name></Name>
          </DocumentTool>
        </div>
        <div key="summary">
          <DocumentTool>
            <Summary></Summary>
          </DocumentTool>
        </div>
        <div key="contact">
          <DocumentTool>
            <Contact></Contact>
          </DocumentTool>
        </div>
        <div key="experience">
          <DocumentTool>
            <Experience></Experience>
          </DocumentTool>
        </div>
        <div key="language">
          <DocumentTool>
            <Language></Language>
          </DocumentTool>
        </div>
        <div key="software">
          <DocumentTool>
            <Software></Software>
          </DocumentTool>
        </div>
        <div key="skills">
          <DocumentTool>
            <Skills></Skills>
          </DocumentTool>
        </div>
        <div key="education">
          <DocumentTool>
            <Education></Education>
          </DocumentTool>
        </div>
        <div key="interest">
          <DocumentTool>
            <Interest></Interest>
          </DocumentTool>
        </div>
        <div key="accomplishment">
          <DocumentTool>
            <Accomplishments></Accomplishments>
          </DocumentTool>
        </div>
        <div key="additionalInfo">
          <DocumentTool>
            <AdditionalInfo></AdditionalInfo>
          </DocumentTool>
        </div>
        <div key="affiliation">
          <DocumentTool>
            <Affiliation></Affiliation>
          </DocumentTool>
        </div>
        <div key="certifications">
          <DocumentTool>
            <Certifications></Certifications>
          </DocumentTool>
        </div>
        <div key="custom">
          <DocumentTool>
            <Custom></Custom>
          </DocumentTool>
        </div>
        <div key="projects">
          <DocumentTool>
            <Projects></Projects>
          </DocumentTool>
        </div>
      </GridLayout>
    </div>
  );
};
export default Builder;
