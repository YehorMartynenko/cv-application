import { useState } from "react";

const placeholders = {
  school: "Enter school/university",
  degree: "Enter degree/field of study",
  startDate: "Enter start date",
  endDate: "Enter end date",
};

const formDataDefault = {
  school: "",
  degree: "",
  startDate: "",
  endDate: "",
};

export default function Education({ educationInfo, setEducationInfo }) {
  const [formData, setFormData] = useState(formDataDefault);

  const [mode, setMode] = useState("add");
  const [editingKey, setEditingKey] = useState(null);

  function addEducationClick(e) {
    e.preventDefault();
    const newEduaction = {
      key: crypto.randomUUID(),
      school: formData.school,
      degree: formData.degree,
      startDate: formData.startDate,
      endDate: formData.endDate,
    };

    const newEducationArr = [...educationInfo, newEduaction];
    setEducationInfo(newEducationArr);
    setFormData(formDataDefault);
  }

  function addSubmitClick(e) {
    e.preventDefault();
    setEducationInfo(
      educationInfo.map((item) =>
        item.key === editingKey ? { ...item, ...formData } : item,
      ),
    );
    setEditingKey(null);
    setMode("add");
    setFormData(formDataDefault);
  }
  function cancelEditClick(e) {
    e.preventDefault();
    setMode("add");
    setFormData(formDataDefault);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function deleteItem(key) {
    setEducationInfo(educationInfo.filter((item) => item.key !== key));
  }

  function editItem(key) {
    setMode("edit");
    const itemToEdit = educationInfo.find((item) => item.key === key);
    if (itemToEdit) {
      setFormData({
        ...itemToEdit,
      });
      setEditingKey(key);
    }
  }

  return (
    <>
      <>
        <form
          className="from-section"
          method="post"
          action=""
        >
          <h2>Education: </h2>
          {educationInfo && (
            <div className="education-list-container">
              {educationInfo.map((school) => {
                return (
                  <div
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
                        onClick={() => editItem(school.key)}
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteItem(school.key)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <div className="form-item">
            <label htmlFor="school">School:</label>
            <input
              id="school"
              name="school"
              type="text"
              value={formData.school}
              onChange={handleChange}
              placeholder={placeholders.school}
            />
          </div>

          <div className="form-item">
            <label htmlFor="degree">Degree:</label>
            <input
              id="degree"
              name="degree"
              type="text"
              value={formData.degree}
              onChange={handleChange}
              placeholder={placeholders.degree}
            />
          </div>

          <div className="form-item">
            <label htmlFor="startDate">Start date:</label>
            <input
              id="startDate"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              placeholder={placeholders.startDate}
            />
          </div>

          <div className="form-item">
            <label htmlFor="endDate">End date:</label>
            <input
              id="endDate"
              name="endDate"
              type="date"
              value={formData.endDate}
              onChange={handleChange}
              placeholder={placeholders.endDate}
            />
          </div>

          <div className="add-btn-wrapper">
            {mode === "add" ? (
              <button
                className="add-education add-btn"
                type="button"
                onClick={addEducationClick}
              >
                Add Education
              </button>
            ) : (
              <>
                <button
                  className="submit-edit-education edit-btn"
                  type="button"
                  onClick={addSubmitClick}
                >
                  Submit
                </button>
                <button
                  type="button"
                  onClick={cancelEditClick}
                >
                  Cancel
                </button>
              </>
            )}
          </div>
        </form>
      </>
    </>
  );
}
