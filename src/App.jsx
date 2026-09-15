import { useState } from "react";

import "./App.css";
import GeneralInformation from "./components/GeneralInformation";
import CvBlank from "./components/CvBlank";
function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: "",
    email: "",
    phone: "",
    linkedin: "",
    github: "",
  });
  return (
    <>
      <section className="info-redactor">
        <GeneralInformation
          generalInfo={generalInfo}
          setGeneralInfo={setGeneralInfo}
        />
      </section>
      <section className="cv-blank">
        <CvBlank generalInfo={generalInfo} />
      </section>
    </>
  );
}

export default App;
