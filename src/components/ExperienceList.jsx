export default function ExperienceList({ experienceInfo, onEdit, onDelete }) {
  return (
    <ul className="education-list-container">
      {experienceInfo.map((work) => {
        return (
          <li
            className="school-item-edit"
            key={work.key}
          >
            <div className="main-info-wrapper">
              <div className="education-main-info">
                <span>{work.company}</span>
                <span>{work.position}</span>
              </div>
              <div className="education-dates">
                <span>{work.startDate}</span>
                <span>{work.endDate}</span>
              </div>
            </div>
            <span>{work.desc}</span>
            <div className="edit-btn-wrapper">
              <button
                type="button"
                onClick={() => onEdit(work.key)}
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => onDelete(work.key)}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
