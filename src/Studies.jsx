import PixelTransition from "./Animation/PixelTransition";
import { imgGas } from "./img/SrcImg";
import "./css/studies.css";

export default function Studies() {
  return (
    <div className="studies">
      <div className="box-titel">
        <h3>الدراسات </h3>
        <h1>في كلية العلوم</h1>
      </div>

      <div className="box-img">
        <PixelTransition
          firstContent={
            <img
              src={imgGas}
              alt="default pixel transition content, a cat!"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#840132",
              }}
            >
              <p
                style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}
              >
                شؤون الطلبة{" "}
              </p>
            </div>
          }
          gridSize={12}
          pixelColor="#fff"
          animationStepDuration={0.4}
          className="custom-pixel-card"
        />

        <PixelTransition
          firstContent={
            <img
              src={imgGas}
              alt="default pixel transition content, a cat!"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#840132",
              }}
            >
              <p
                style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}
              >
                الدراسات الاولية
              </p>
            </div>
          }
          gridSize={12}
          pixelColor="#fff"
          animationStepDuration={0.4}
          className="custom-pixel-card"
        />

        <PixelTransition
          firstContent={
            <img
              src={imgGas}
              alt="default pixel transition content, a cat!"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          }
          secondContent={
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "grid",
                placeItems: "center",
                backgroundColor: "#840132",
              }}
            >
              <p
                style={{ fontWeight: 900, fontSize: "3rem", color: "#ffffff" }}
              >
                دراسات العليا
              </p>
            </div>
          }
          gridSize={12}
          pixelColor="#fff"
          animationStepDuration={0.4}
          className="custom-pixel-card"
        />
      </div>
    </div>
  );
}
