import "../styles/CvPreview.css";
import githubIcon from "../icons/github-icon.svg";
import emailIcon from "../icons/email-icon.svg";
import phoneIcon from "../icons/phone-icon.svg";
import linkedinIcon from "../icons/linkedin-icon.svg";

function getUsername(url) {
  return "/" + url.split("/").filter(Boolean).pop();
}

function normalizeUrl(url) {
  url = url.toLowerCase();
  if (!url.startsWith("https://") && !url.startsWith("http://")) {
    return "https://" + url;
  }
  return url;
}

export default function CvPreview({
  generalInfo,
  educationInfo,
  experienceInfo,
}) {
  return (
    <>
      <div className="preview-container">
        <h1 className="cv-name">{generalInfo.name}</h1>
        <div className="cv-contact-info">
          {generalInfo.email && (
            <div className="info-item">
              <img
                className="icon"
                src={emailIcon}
              />
              <span className="contact-item">{generalInfo.email}</span>
            </div>
          )}
          {generalInfo.phone && (
            <div className="info-item">
              <img
                className="icon"
                src={phoneIcon}
              />
              <span className="contact-item">{generalInfo.phone}</span>
            </div>
          )}
          {generalInfo.linkedin && (
            <div className="info-item">
              <img
                className="icon"
                src={linkedinIcon}
              />
              <a
                href={normalizeUrl(generalInfo.linkedin)}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                {getUsername(generalInfo.linkedin)}
              </a>
            </div>
          )}

          {generalInfo.github && (
            <div className="info-item">
              <img
                className="icon"
                src={githubIcon}
              />
              <a
                href={normalizeUrl(generalInfo.github)}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                {getUsername(generalInfo.github)}
              </a>
            </div>
          )}
        </div>
        {educationInfo.length > 0 && (
          <>
            <h2>Education</h2>
            {educationInfo.map((school) => {
              return (
                <div
                  className="school-item"
                  key={school.key}
                >
                  <div className="education-main-info">
                    <span className="bold-text">{school.school}</span>
                    <span>{school.degree}</span>
                  </div>
                  <div className="education-dates">
                    <span className="bold-text">{school.startDate}</span>
                    {" - "}
                    <span className="bold-text">
                      {school.startDate && !school.endDate
                        ? "Now"
                        : school.endDate}
                    </span>
                  </div>
                </div>
              );
            })}
          </>
        )}

        {experienceInfo.length > 0 && (
          <>
            <h2>Experience</h2>
            {experienceInfo.map((work) => {
              return (
                <div
                  className="school-item"
                  key={work.key}
                >
                  <div className="education-main-info">
                    <span className="bold-text">{work.company}</span>
                    <span>{work.position}</span>
                  </div>
                  <div className="education-dates">
                    <span className="bold-text">{work.startDate}</span>
                    {" - "}
                    <span className="bold-text">
                      {work.startDate && !work.endDate ? "Now" : work.endDate}
                    </span>
                  </div>
                  <div className="desc-container">
                    <span>{work.desc}</span>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </div>
      <button
        className="print-btn"
        onClick={() => window.print()}
      >
        Save as PDF/Print
      </button>
    </>
  );
}
