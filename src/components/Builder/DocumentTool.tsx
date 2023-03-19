import "./DocumentTool.scss";

const DocumentTool = ({ children }: any) => {
  const handleEditSection = (event: any) => {
    console.log("handle event", event);
    console.log("HANDLE EDIT");
  };
  return (
    <div className="section-container">
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
