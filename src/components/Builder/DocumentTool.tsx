import { SectionModel } from "../../sections";
import "./DocumentTool.scss";

const DocumentTool = ({
  children,
  sectionData,
}: {
  children: any;
  sectionData: SectionModel;
}) => {
  const handleEditSection = (event: any) => {
    console.log("HANDLE EDIT");
  };
  return (
    <div className="section-container" onClick={handleEditSection}>
      <div className="tools">
        <button className="drag-tool">MOVE</button>
        {/* <div className="resize-tool">{">"}</div> */}

        <button onClick={handleEditSection}>EDIT</button>
      </div>
      <div className="section">{children}</div>
    </div>
  );
};
export default DocumentTool;
