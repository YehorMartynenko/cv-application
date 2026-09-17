import { useState } from "react";
import ExperienceList from "./ExperienceList";
import ExperienceForm from "./ExperienceForm";

const placeholders = {
  company: "Enter company/institution name",
  position: "Enter position title",
  startDate: "Enter start date",
  endDate: "Enter end date",
  desc: "Enter description",
};

const formDataDefault = {
  company: "",
  position: "",
  startDate: "",
  endDate: "",
  desc: "",
};

export default function Experience({ experienceInfo, setExperienceInfo }) {
  const [formData, setFormData] = useState(formDataDefault);

  const [mode, setMode] = useState("add");
  const [editingKey, setEditingKey] = useState(null);

  function addExperienceClick(e) {
    e.preventDefault();
    const newExperience = {
      key: crypto.randomUUID(),
      company: formData.company,
      position: formData.position,
      startDate: formData.startDate,
      endDate: formData.endDate,
      desc: formData.desc,
    };

    const newExperienceArr = [...experienceInfo, newExperience];
    setExperienceInfo(newExperienceArr);
    setFormData(formDataDefault);
  }

  function submitEditClick(e) {
    e.preventDefault();
    setExperienceInfo(
      experienceInfo.map((item) =>
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
    setExperienceInfo(experienceInfo.filter((item) => item.key !== key));
  }

  function editItem(key) {
    setMode("edit");
    const itemToEdit = experienceInfo.find((item) => item.key === key);
    if (itemToEdit) {
      setFormData({
        ...itemToEdit,
      });
      setEditingKey(key);
    }
  }

  return (
    <form className="form-section">
      <h2>Experience: </h2>
      {experienceInfo.length > 0 && (
        <ExperienceList
          experienceInfo={experienceInfo}
          onEdit={editItem}
          onDelete={deleteItem}
        />
      )}
      <ExperienceForm
        formData={formData}
        onChange={handleChange}
        placeholders={placeholders}
        mode={mode}
        onCancel={cancelEditClick}
        onSubmit={submitEditClick}
        onAdd={addExperienceClick}
      />
    </form>
  );
}
