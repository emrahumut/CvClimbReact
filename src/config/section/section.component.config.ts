import Accomplishments from "../../components/Builder/sections/Accomplishment";
import AdditionalInfo from "../../components/Builder/sections/AdditionalInfo";
import Affiliation from "../../components/Builder/sections/Affiliation";
import Certifications from "../../components/Builder/sections/Certifications";
import Contact from "../../components/Builder/sections/Contact";
import Custom from "../../components/Builder/sections/Custom";
import Education from "../../components/Builder/sections/Education";
import Experience from "../../components/Builder/sections/Experience";
import Interest from "../../components/Builder/sections/Interest";
import Language from "../../components/Builder/sections/Languages";
import Name from "../../components/Builder/sections/Name";
import Projects from "../../components/Builder/sections/Projects";
import Skill from "../../components/Builder/sections/Skill";
import Software from "../../components/Builder/sections/Software";
import Summary from "../../components/Builder/sections/Summary";
import { SectionTypeEnumModel } from "../../sections";

export const SECTION_COMPONENT_MAP = {
    [SectionTypeEnumModel.NAME]: {
        component: Name,
    },
    [SectionTypeEnumModel.CONTACT]: {
        component: Contact,
    },
    [SectionTypeEnumModel.LANGUAGE]: {
        component: Language,
    },
    [SectionTypeEnumModel.SKILL]: {
        component: Skill,
    },
    [SectionTypeEnumModel.SUMMARY]: {
        component: Summary,
    },
    [SectionTypeEnumModel.EXPERIENCE]: {
        component: Experience,
    },
    [SectionTypeEnumModel.INTEREST]: {
        component: Interest,
    },
    [SectionTypeEnumModel.EDUCATION]: {
        component: Education,
    },
    [SectionTypeEnumModel.CUSTOM]: {
        component: Custom,
    },
    [SectionTypeEnumModel.ACCOMPLISHMENT]: {
        component: Accomplishments,
    },
    [SectionTypeEnumModel.SOFTWARE]: {
        component: Software,
    },
    [SectionTypeEnumModel.CERTIFICATION]: {
        component: Certifications,
    },
    [SectionTypeEnumModel.AFFILIATION]: {
        component: Affiliation,
    },
    [SectionTypeEnumModel.ADDITIONALINFO]: {
        component: AdditionalInfo,
    },
    [SectionTypeEnumModel.PROJECT]: {
        component: Projects,
    },
};
