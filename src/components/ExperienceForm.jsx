export default function ExperienceForm({
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
        <label htmlFor="company">Company Name:</label>
        <input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={onChange}
          placeholder={placeholders.company}
        />
      </div>
      <div className="form-item">
        <label htmlFor="position">Position title:</label>
        <input
          id="position"
          name="position"
          type="text"
          value={formData.position}
          onChange={onChange}
          placeholder={placeholders.position}
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
      <div className="form-item">
        <label htmlFor="desc">Description:</label>
        <textarea
          id="desc"
          name="desc"
          type="text"
          value={formData.desc}
          onChange={onChange}
          placeholder={placeholders.desc}
        />
      </div>
      <div className="btn-wrapper">
        {mode === "add" ? (
          <button
            className="primary-btn"
            type="button"
            onClick={onAdd}
          >
            Add Experience
          </button>
        ) : (
          <>
            <button
              className="primary-btn"
              type="button"
              onClick={onSubmit}
            >
              Submit
            </button>
            <button
              className="primary-btn"
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
