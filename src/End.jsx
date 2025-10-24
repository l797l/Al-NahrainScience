import "./css/End.css";
export default function End() {
    const time = new Date();
  const year = time.toLocaleDateString("en-US", { year: "numeric" });

  return (
    <div className="end">
      <div></div>
      <div className="text-title">
        <h2>كلية العلوم</h2>
        <p>© حقوق النشر محفوظة لجامعة النهرين © {year}</p>
      </div>
    </div>
  );
}
