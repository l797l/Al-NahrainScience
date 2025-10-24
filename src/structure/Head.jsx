import IconLink from "./IconLink";
import './../css/head.css';
export default function Head() {

  const nameLag = "English"

  function switchLan(){
    alert("555")

  }
  return (
    <div className="head" style={{direction: "ltr"}}>
      <div
        className="
      head-top"
      >
        <ul>
          <IconLink onClick={switchLan} link="#" text={nameLag} />
        
        </ul >

        <ul >
          <IconLink link="#" icon="fa-brands fa-facebook" />
          <IconLink link="#" icon="fa-brands fa-x-twitter" />
          <IconLink link="#" icon="fa-brands fa-instagram" />
          <IconLink link="#" icon="fa-brands fa-linkedin" />
          <IconLink link="#" icon="fa-brands fa-youtube" />
          <IconLink link="#" icon="fa-brands fa-telegram" />
          <IconLink link="#" icon="fa-brands fa-tiktok" />
          <IconLink
            link="https://maps.app.goo.gl/ixG1TDxfiLD7J6kSA?g_st=ipc"
            icon="fa-solid fa-location-dot"
          />
        </ul>
      </div>
      <div>
        
      </div>
    </div>
  );
}
