import "./DocumentTool.scss";

const DocumentTool = ({ children }: any) => {
  return (
    <div>
      <div className="emrah">DRAG</div>
      {children}
    </div>
  );
};
export default DocumentTool;
