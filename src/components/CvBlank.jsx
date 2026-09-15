export default function CvBlank({ generalInfo }) {
  return (
    <div>
      <p>{generalInfo.name}</p>
      <p>{generalInfo.email}</p>
      <p>{generalInfo.phone}</p>
      <p>{generalInfo.linkedin}</p>
      <p>{generalInfo.github}</p>
    </div>
  );
}
