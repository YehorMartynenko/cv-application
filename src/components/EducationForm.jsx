export default function EducationForm({
  formData,
  onChange,
  placeholders,
  mode,
  onCancel,
  onSubmit,
  onAdd,
}) {
  return (
    <>
      <div className="form-item">
        <label htmlFor="school">School:</label>
        <input
          id="school"
          name="school"
          type="text"
          value={formData.school}
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
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
          onChange={onChange}
          placeholder={placeholders.endDate}
        />
      </div>
      <div className="add-btn-wrapper">
        {mode === "add" ? (
          <button
            className="add-education add-btn"
            type="button"
            onClick={onAdd}
          >
            Add Education
          </button>
        ) : (
          <>
            <button
              className="submit-edit-education edit-btn"
              type="button"
              onClick={onSubmit}
            >
              Submit
            </button>
            <button
              type="button"
              onClick={onCancel}
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </>
  );
}
