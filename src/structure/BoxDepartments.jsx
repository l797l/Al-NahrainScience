import "./../css/boxDepartments.css";
export default function CollegeDepartments({ nameImg, nameDepartment }) {
  return (
    <div className="box-departments">
      <img src={nameImg} />
      <div className="box-name-button">
        <h2>{nameDepartment}</h2>
        <button>
          {" "}
          <i class="fa-solid fa-arrow-left"></i>
        </button>
      </div>
    </div>
  );
}
