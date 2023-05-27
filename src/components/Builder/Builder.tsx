import GridLayout, { Layout } from "react-grid-layout";
import "./Builder.scss";
import { useState } from "react";
import { GridLayoutOptions } from "../../layouts/BuilderLayout";
import DocumentTool from "./DocumentTool";
import { SectionModel, SectionTypeEnumModel } from "../../sections";
import { SECTION_COMPONENT_MAP } from "../../config/section/section.component.config";

const COMPONENT_MAP = SECTION_COMPONENT_MAP;

const ROW_HEIGHT = 10;

const Builder = ({
  gridLayoutOptions,
  sectionsData,
}: {
  gridLayoutOptions: GridLayoutOptions;
  sectionsData: Array<SectionModel>;
}) => {
  // const gridLayoutRef: any = useRef(null);
  // console.log("sectionsData", sectionsData);
  const [layout, setLayout] = useState<Layout[]>([
    { i: SectionTypeEnumModel.NAME, x: 0, y: 0, w: 12, h: 1 },
    { i: SectionTypeEnumModel.SUMMARY, x: 0, y: 1, w: 12, h: 1 },
    { i: SectionTypeEnumModel.CONTACT, x: 0, y: 3, w: 4, h: 1 },
    { i: SectionTypeEnumModel.SKILL, x: 0, y: 4, w: 4, h: 1 },
    // 2. column
    { i: SectionTypeEnumModel.EXPERIENCE, x: 4, y: 3, w: 8, h: 1 },
    { i: SectionTypeEnumModel.SKILL, x: 4, y: 4, w: 8, h: 1 },
    { i: SectionTypeEnumModel.EDUCATION, x: 4, y: 5, w: 8, h: 1 },
    { i: SectionTypeEnumModel.LANGUAGE, x: 0, y: 5, w: 4, h: 1 },
    { i: SectionTypeEnumModel.SOFTWARE, x: 0, y: 6, w: 4, h: 1 },
    { i: SectionTypeEnumModel.INTEREST, x: 4, y: 7, w: 8, h: 1 },
    { i: SectionTypeEnumModel.ACCOMPLISHMENT, x: 4, y: 8, w: 8, h: 1 },
    { i: SectionTypeEnumModel.ADDITIONALINFO, x: 4, y: 9, w: 8, h: 1 },
    { i: SectionTypeEnumModel.AFFILIATION, x: 0, y: 10, w: 4, h: 1 },
    { i: SectionTypeEnumModel.CERTIFICATION, x: 4, y: 11, w: 8, h: 1 },
    { i: SectionTypeEnumModel.CUSTOM, x: 0, y: 11, w: 4, h: 1 },
    { i: SectionTypeEnumModel.PROJECT, x: 4, y: 12, w: 8, h: 1 },
  ]);
  const [inital, setInitial] = useState<boolean>(true);
  const handleLayoutChange = (layoutItems: any) => {
    // console.log("event", event);
    // const elements: any = document.querySelectorAll(".react-grid-item");
    // const heigths: any[] = [];
    // for (let i = 0; i < elements.length; i++) {
    //   heigths.push(Math.ceil(elements[i].firstElementChild.offsetHeight / 50));
    // }

    // TODO: Apply for all the layouts
    if (inital) {
      // TODO: alternative ways.
      const gridItems: any = document
        .querySelector(".react-grid-layout")
        ?.querySelectorAll(".react-grid-item");
      let newLayout: any = [];
      gridItems.forEach((gridItem) => {
        const section = gridItem.querySelector(".section");
        const sectionId = gridItem.querySelector(".section").getAttribute("id");
        const sectionFirstChild = section.firstChild;
        const firstChildHeight = Math.ceil(
          sectionFirstChild.offsetHeight / ROW_HEIGHT
        );

        layoutItems.forEach((item) => {
          if (item.i === sectionId) {
            newLayout.push({
              ...item,
              h: firstChildHeight,
              minH: firstChildHeight,
            });
          }
        });
      });
      setLayout(newLayout);
      setInitial(false);
    }
  };
  return (
    <div className="document">
      <GridLayout
        // ref={gridLayoutRef}
        className="layout"
        layout={layout}
        cols={gridLayoutOptions.cols}
        // isResizable={false}
        rowHeight={ROW_HEIGHT}
        width={595}
        autoSize={true}
        draggableHandle={".drag-tool"}
        margin={[0, 0]}
        // resizeHandle={".resize-tool"}
        onLayoutChange={handleLayoutChange}
        // useCSSTransforms={false}
        // containerPadding={[20, 20]}
        // preventCollision={true}
      >
        {sectionsData.map((sectionData) => {
          const SectionComponent =
            COMPONENT_MAP[sectionData.sectionType].component;

          return (
            <div key={sectionData.sectionType}>
              <DocumentTool sectionData={sectionData}>
                <SectionComponent {...sectionData} />
              </DocumentTool>
            </div>
          );
        })}
      </GridLayout>
    </div>
  );
};
export default Builder;
