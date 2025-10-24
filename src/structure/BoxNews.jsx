import "./../css/boxNews.css";

export default function BoxNews({ imgNews, newsTitle, newsArticle }) {
  const today = new Date();
  const day = today.toLocaleDateString("en-US", { day: "2-digit" });
  const year = today.toLocaleDateString("en-US", { year: "numeric" });
  const monthName = today.toLocaleDateString("ar-EG", { month: "long" });
  const formattedDate = `${day} ${monthName} ${year}`;

  return (
    <div className="news-card">
      <img src={imgNews} alt="خبر" className="news-image" />
      <div className="news-info">
        <i class="fa-solid fa-newspaper"></i>
        <small>{formattedDate}</small>
        <h3>{newsTitle}</h3>
        <p>{newsArticle}</p>
      </div>
    </div>
  );
}
