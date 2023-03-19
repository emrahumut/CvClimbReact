export enum SectionTypeModel {
  NAME = "name",
  CTNC = "contact",
  LANG = "language",
  SKIL = "skills",
  SUMM = "summary",
  EXPR = "experience",
  INTR = "interests",
  EDUC = "education",
  CUST = "custom",
  ACCM = "accomplishment",
  SFTR = "software",
  CERT = "certification",
  AFIL = "affiliations",
  ADDI = "additionalInformation",
  PJEC = "projects",
}

// export const test: Array<SectionModel> = [
//   {
//     id: 'a',
//     sectionType: SectionTypeModel.ACCM,
//     name: 'a',
//   }
// ]

export interface SectionModel {
  id: string,
  index?: number,
  sectionType: "name" | "contact" | "language" |
  "hilt" | "summary" | "experience" | "interests" |
  "education" | "custom" | "accomplishment" | "software" |
  "certification" | "affiliations" | "additionalInformation",
  name: string,
  paragraphs: Array<ParagraphModel>,
}

export interface ParagraphModel {
  id: string,
  docDatas: Array<ParagraphDataModel>
}

export interface ParagraphDataModel {
  id?: string,
  index: number,
  value: string,
  fieldCD: string,
}

export enum FieldCDModel {
  FNAM = "firstName",
  LNAM = "lastName",
  DCTL = "title", // software developer
  STRT = "street",
  STAT = "state",
  CITY = "city",
  ZIPC = "zip",
  CNTY = "country",
  HPHN = "phone",
  EMAI = "email",
  WEB1 = "web1",
  SOCL = "SOCIAL"
}


// fields

export interface ResumeHeading {
  firstName: string,
  lastName: string,
  title: string,
  street: string,
  state: string,
  city: string,
  zip: string,
  country: string,
  phone: string,
  email: string,
  socialMedia: Array<ResumeSocialMediaModel>
}

export interface ResumeLanguage {
  rate: number,
  value: string,
}

export interface ResumeSocialMediaModel {
  linkedIn: string,
  website: string,
  twitter: string,
}

