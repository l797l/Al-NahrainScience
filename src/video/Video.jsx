import myVideo from "./IMG_4074.MP4";

export default function Video() {
  const nameUniversityAR = "جامعة النهرين";
  const nameCollegeAR = "كلية العلوم";
  const nameUniversityEN = "    Al-Nahrain University";
  const nameCollegeEN = " College of Science";
  const text = "طريقك نحو المستقبل";

  return (
    <div style={{margin: "0"}}>
      <video
        style={{
          width: "100%",
          height: "100vh",
          objectFit: "cover",
          margin: "0",
          marginTop: "8px",
        }}
        src={myVideo}
        autoPlay
        loop
        muted
        playsInline
      >
        <p
          style={{
            fontSize: "30px",
          }}
        >
          كلية العلوم
        </p>
      </video>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      ></div>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "#e6cfa7",
          fontSize: "3rem",
          fontWeight: "bold",
          textAlign: "center",
          textShadow: "2px 2px 10px rgba(0,0,0,0.7)",
        }}
      >
        {nameUniversityAR}
        <br /> {nameCollegeAR}
        <br/>
         {nameUniversityEN}
        <br /> {nameCollegeEN}
        <h4
          style={{
            fontSize: "17px",
            marginTop: "25px",
          }}
        >
          {text}
        </h4>
      </div>
    </div>
  );
}
