const Name = () => {
  const data = {
    firstName: "Emrah Umut",
    lastName: "KOC",
    title: "Software Developer",
  };
  return (
    <div>
      <div className="name">
        <span id="FIELD_FNAM">{data.firstName}</span>
        <span id="FIELD_FNAM">{data.lastName}</span>
      </div>
      <div className="title" id="FIELD_DCTL">
        {data.title}
      </div>
    </div>
  );
};

export default Name;
