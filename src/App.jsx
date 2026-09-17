import { useState } from "react";

import "./App.css";
import GeneralInformation from "./components/GeneralInformation";
import Education from "./components/Education";
import CvPreview from "./components/CvPreview";
import Experience from "./components/Experience";

const generalInfoDefaults = {
  name: "Your Name",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
};

const educationArr = [];
const experienceArr = [];

function App() {
  const [generalInfo, setGeneralInfo] = useState(generalInfoDefaults);
  const [educationInfo, setEducationInfo] = useState(educationArr);
  const [experienceInfo, setExperienceInfo] = useState(experienceArr);
  return (
    <div className="container">
      <section className="info-redactor">
        <GeneralInformation
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />
        <Education
          educationInfo={educationInfo}
          setEducationInfo={setEducationInfo}
        />
        <Experience
          setExperienceInfo={setExperienceInfo}
          experienceInfo={experienceInfo}
        />
      </section>
      <section className="cv-preview">
        <CvPreview
          generalInfo={generalInfo}
          educationInfo={educationInfo}
          experienceInfo={experienceInfo}
        />
      </section>
    </div>
  );
}

export default App;
