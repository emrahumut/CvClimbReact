import { FieldCDModel, SectionModel } from "./sections";

export const sections: Array<SectionModel> = [
  {
    id: "sectionid1",
    index: 0,
    sectionType: "name",
    name: "Name",
    paragraphs: [
      {
        id: "paragraphsID",
        docDatas: [
          {
            id: "docID1",
            index: 0,
            value: "Emrah Umut",
            fieldCD: FieldCDModel.FNAM,
          },
          {
            id: "docID2",
            index: 0,
            value: "Emrah Umut",
            fieldCD: FieldCDModel.FNAM,
          },
        ],
      },
    ],
  },
  {
    id: "sectionid2",
    index: 0,
    sectionType: "contact",
    name: "name",
    paragraphs: [
      {
        id: "paragraphsID",
        docDatas: [
          {
            id: "docID",
            index: 0,
            value: "Emrah Umut",
            fieldCD: FieldCDModel.FNAM,
          },
        ],
      },
    ],
  },
];
