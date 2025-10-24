import "./../css/textBody.css";
import ImgBody from "./../img/ImgBody.jsx";
import AboutScience from "../AboutScience.jsx";

export default function TextBody() {
  return (
    <div className="text-body">
      <div > <AboutScience/></div>
      <div >
        <ImgBody />
      </div>
    </div>
  );
}
