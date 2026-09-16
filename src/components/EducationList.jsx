export default function EducationList({ educationInfo, onEdit, onDelete }) {
  return (
    <ul className="education-list-container">
      {educationInfo.map((school) => {
        return (
          <li
            className="school-item-edit"
            key={school.key}
          >
            <div className="main-info-wrapper">
              <div className="education-main-info">
                <span>{school.school}</span>
                <span>{school.degree}</span>
              </div>
              <div className="education-dates">
                <span>{school.startDate}</span>
                <span>{school.endDate}</span>
              </div>
            </div>
            <div className="edit-btn-wrapper">
              <button
                type="button"
                onClick={() => onEdit(school.key)}
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => onDelete(school.key)}
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
