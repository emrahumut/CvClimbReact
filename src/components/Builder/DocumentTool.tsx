import { SectionModel } from "../../sections";
import "./DocumentTool.scss";
import { useNavigate } from "react-router-dom";

const DocumentTool = ({
  children,
  sectionData,
}: {
  children: any;
  sectionData: SectionModel;
}) => {
  const navigate = useNavigate();
  const handleEditSection = (event: any) => {
    console.log("HANDLE EDIT", sectionData);
    navigate(`${sectionData.sectionType}`);
  };
  return (
    <div className="section-container">
      <div className="tools">
        <button className="drag-tool">MOVE</button>
        {/* <div className="resize-tool">{">"}</div> */}

        <button onClick={handleEditSection}>EDIT</button>
      </div>
      <div
        id={sectionData.name}
        className="section"
        onClick={handleEditSection}
      >
        {children}
      </div>
    </div>
  );
};
export default DocumentTool;
