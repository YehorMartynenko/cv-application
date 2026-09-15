const placeholders = {
  name: "Jane Doe",
  email: "example@gmail.com",
  phone: "+5 555 555 555",
  linkedin: "linkedin.com/in/jane-doe",
  github: "github.com/JaneDoe",
};

export default function GeneralInformation({ generalInfo, setGeneralInfo }) {
  function handleChange(e) {
    setGeneralInfo({ ...generalInfo, [e.target.name]: e.target.value });
  }

  return (
    <>
      <form
        className="general-info"
        method="post"
        action=""
      >
        <h2>General information: </h2>
        <label htmlFor="name">Full Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder={placeholders.name}
          value={generalInfo.name}
          onChange={handleChange}
        />

        <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder={placeholders.email}
          value={generalInfo.email}
          onChange={handleChange}
        />

        <label htmlFor="phone">Phone number: </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder={placeholders.phone}
          value={generalInfo.phone}
          onChange={handleChange}
        />

        <label htmlFor="linkedin">Linkedin: </label>
        <input
          id="linkedin"
          name="linkedin"
          type="text"
          placeholder={placeholders.linkedin}
          value={generalInfo.linkedin}
          onChange={handleChange}
        />

        <label htmlFor="github">Github: </label>
        <input
          id="github"
          name="github"
          type="text"
          placeholder={placeholders.github}
          value={generalInfo.github}
          onChange={handleChange}
        />
      </form>
    </>
  );
}
