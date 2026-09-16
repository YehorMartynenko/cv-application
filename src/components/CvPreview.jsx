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

export default function CvPreview({ generalInfo }) {
  return (
    <>
      <div className="preview-container">
        <h1 className="cv-name">{generalInfo.name || "Your Name"}</h1>
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
