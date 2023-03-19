import Builder from "../components/Builder/Builder";
import "./BuilderLayout.scss";
import jsPDF from "jspdf";
import { useRef } from "react";
import Card from "../components/UI/Card/Card";
import { ReactGridLayoutProps } from "react-grid-layout";
import { MOCK_SECTION_DATA } from "../mock/sectionsData";

export interface GridLayoutOptions extends ReactGridLayoutProps {}

const SECTION_DATA = MOCK_SECTION_DATA;

const BuilderLayout = () => {
  const reportTemplateRef: any = useRef(null);
  const gridLayoutOptions: GridLayoutOptions = {
    cols: 12,
  };
  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      format: [595, 842],
      unit: "px",
      // compress: true,
      // precision: 99,
    });

    // doc.setFont("Helvetica Neue", "normal");
    // doc.setFontSize(16);
    // doc.setFontSize(11);

    // solves for now
    const current: HTMLElement = reportTemplateRef.current;
    const removes: any = current.querySelectorAll(
      ".react-resizable-handle.react-resizable-handle-se"
    );
    for (let i = 0; i < removes.length; i++) {
      removes[i].style.visibility = "hidden";
    }
    doc.html(reportTemplateRef.current, {
      async callback(doc) {
        await doc.save("document");
        for (let i = 0; i < removes.length; i++) {
          removes[i].style.visibility = "visible";
        }
      },
    });
  };
  return (
    <div className="builder-wrapper">
      <div className="customize">
        <div>
          <button className="button" onClick={handleGeneratePdf}>
            Generate PDF
          </button>
        </div>
      </div>
      {/* <div>
        <BuilderHeader></BuilderHeader>
      </div> */}
      <div className="builder" ref={reportTemplateRef}>
        <Card>
          <Builder
            sectionsData={SECTION_DATA}
            gridLayoutOptions={gridLayoutOptions}
          ></Builder>
        </Card>
      </div>
    </div>
  );
};
export default BuilderLayout;
