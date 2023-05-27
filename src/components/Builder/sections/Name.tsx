import {SectionModel} from "../../../sections";

const Name = (sectionData: SectionModel) => {
  const data = {
    firstName: "Abidin",
    lastName: "KILLIBACAK",
    title: "SÜFTVEYIR Developer",
  };
  return (
    <div>
      <div className="name">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius iure minima nemo nihil officia omnis perferendis quaerat repellendus sed similique, tempora temporibus veritatis? Aspernatur aut autem consequatur cum error et ex, facilis fuga magni minima nemo, odit officiis pariatur soluta sunt tenetur totam vel veniam? Accusantium cumque cupiditate doloremque et fuga hic maxime modi, molestias, mollitia neque nisi nobis nulla numquam obcaecati quae quaerat recusandae. Aliquam aperiam at beatae commodi consectetur consequatur cumque debitis delectus dignissimos doloremque eligendi error fuga illo impedit magnam minima nemo non obcaecati odio omnis placeat porro quam qui quo rem repellendus similique soluta, tempora ut!
        <span id="FIELD_FNAM">{data.firstName}</span>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias animi aliquid ab eaque possimus facilis maiores ex quisquam accusamus unde maxime tempore inventore eius, laudantium reprehenderit illo a corporis magnam quibusdam veniam culpa quis illum enim labore. Ipsa voluptate at soluta vitae, officiis quas corrupti iusto. Atque reiciendis est expedita.
        <span id="FIELD_FNAM">{data.lastName}</span>
      </div>
      <div className="title" id="FIELD_DCTL">
        {data.title}
      </div>
    </div>
  );
};

export default Name;
