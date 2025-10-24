import './../css/IconLink.css';
export default function IconLink({link, icon, text, onClick}) {

  if (!icon) {
    return <a  href={link} onClick={onClick} >{text} </a>;
  } 
  else {
    return (
      <a  href={link}>
        <i className={icon}></i>
      </a>
    );
  }
}
