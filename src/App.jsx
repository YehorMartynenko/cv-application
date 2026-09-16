import { useState } from "react";

import "./App.css";
import GeneralInformation from "./components/GeneralInformation";
import Education from "./components/Education";
import CvPreview from "./components/CvPreview";

const generalInfoDefaults = {
  name: "Your Name",
  email: "",
  phone: "",
  linkedin: "",
  github: "",
};

const educationArr = [];

function App() {
  const [generalInfo, setGeneralInfo] = useState(generalInfoDefaults);
  const [educationInfo, setEducationInfo] = useState(educationArr);
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
      </section>
      <section className="cv-preview">
        <CvPreview
          generalInfo={generalInfo}
          educationInfo={educationInfo}
        />
      </section>
    </div>
  );
}

export default App;
