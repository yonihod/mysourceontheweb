import {
  FaDev,
  FaInfoCircle,
  FaSignLanguage,
  GoTools,
  IoIosDocument,
  IoIosPaperPlane,
  MdPerson,
  MdSchool,
  FaGamepad,
  MdWork,
} from "../components/Icons";

const sections = [
  { id: "about-me", title: "About Me", icon: MdPerson },
  { id: "work", title: "Work", icon: MdWork },
  { id: "education", title: "Education", icon: MdSchool },
  { id: "skills", title: "Skills", icon: GoTools },
  { id: "projects", title: "Projects", icon: FaDev },
  { id: "gaming", title: "Gaming", icon: FaGamepad },
  { id: "languages", title: "Languages", icon: FaSignLanguage },
  { id: "resume", title: "Resume", icon: IoIosDocument },
  { id: "contact", title: "Contact", icon: IoIosPaperPlane },
  { id: "footer", title: "About SotW", icon: FaInfoCircle },
];

export default sections;
