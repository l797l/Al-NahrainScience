import BoxNews from "./structure/BoxNews";
import { imgChemistry, imgComputer, imgFroensics } from "./img/SrcImg";
import "./css/news.css";
export default function News() {
  const setNewsArticle = [
    " العلمية التي تقدم برامج دراسية متنوعة في مجالات العلوم الأساسية والتطبيقية. تهدف الكلية إلى توفير بيئة تعليمية وبحثية متميزة تسهم في تطوير المعرفة والمهارات لدى الطلا",
    " العلمية التي تقدم برامج دراسية متنوعة في مجالات العلوم الأساسية والتطبيقية. تهدف الكلية إلى توفير بيئة تعليمية وبحثية متميزة تسهم في تطوير المعرفة والمهارات لدى الطلا",

    " العلمية التي تقدم برامج دراسية متنوعة في مجالات العلوم الأساسية والتطبيقية. تهدف الكلية إلى توفير بيئة تعليمية وبحثية متميزة تسهم في تطوير المعرفة والمهارات لدى الطلا",
  ];
  return (
    <div className="box-news">
      <div className="head-news">
        <h1>
          {" "}
          <span>آخر</span> الأخبار
        </h1>
      </div>
      <div className="set-boxNews">
        {" "}
        <BoxNews
          imgNews={imgComputer}
          newsTitle={"اهلا  اليوم"}
          newsArticle={setNewsArticle[0]}
        />
        <BoxNews
          imgNews={imgChemistry}
          newsTitle={"اهلا  اليوم"}
          newsArticle={setNewsArticle[1]}
        />
        <BoxNews
          imgNews={imgFroensics}
          newsTitle={"اهلا  اليوم"}
          newsArticle={setNewsArticle[0]}
        />
      </div>
    </div>
  );
}
