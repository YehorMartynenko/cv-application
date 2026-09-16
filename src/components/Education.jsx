import { useState } from "react";
import EducationList from "./EducationList";
import EducationForm from "./EducationForm";

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
    const newEducation = {
      key: crypto.randomUUID(),
      school: formData.school,
      degree: formData.degree,
      startDate: formData.startDate,
      endDate: formData.endDate,
    };

    const newEducationArr = [...educationInfo, newEducation];
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
    <form className="form-section">
      <h2>Education: </h2>
      {educationInfo.length > 0 && (
        <EducationList
          educationInfo={educationInfo}
          onEdit={editItem}
          onDelete={deleteItem}
        />
      )}
      <EducationForm
        formData={formData}
        onChange={handleChange}
        placeholders={placeholders}
        mode={mode}
        onCancel={cancelEditClick}
        onSubmit={addSubmitClick}
        onAdd={addEducationClick}
      />
    </form>
  );
}
