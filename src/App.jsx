import { useState } from "react";

import "./App.css";
import GeneralInformation from "./components/GeneralInformation";
import CvPreview from "./components/CvPreview";
function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  });
  return (
    <div className="container">
      <section className="info-redactor">
        <GeneralInformation
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />
      </section>
      <section className="cv-preview">
        <CvPreview generalInfo={generalInfo} />
      </section>
    </div>
  );
}

export default App;
