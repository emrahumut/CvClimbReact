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
import Skill from "../../components/Builder/sections/Skill";
import Software from "../../components/Builder/sections/Software";
import Summary from "../../components/Builder/sections/Summary";

export const SECTION_COMPONENT_MAP = {
    name: {
        component: Name,
    },
    contact: {
        component: Contact,
    },
    language: {
        component: Language,
    },
    skill: {
        component: Skill,
    },
    summary: {
        component: Summary,
    },
    experience: {
        component: Experience,
    },
    interest: {
        component: Interest,
    },
    education: {
        component: Education,
    },
    custom: {
        component: Custom,
    },
    accomplishment: {
        component: Accomplishments,
    },
    software: {
        component: Software,
    },
    certification: {
        component: Certifications,
    },
    affiliation: {
        component: Affiliation,
    },
    additionalInfo: {
        component: AdditionalInfo,
    },
};
