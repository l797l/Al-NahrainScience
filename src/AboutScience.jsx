import { useState } from "react";
import "./css/aboutScince.css";
export default function AboutScience() {
  const [index, seIndex] = useState(0);

  const [fade, setFade] = useState(false);

  const texts = [
    "كلية العلوم في جامعة النهرين تأسست في عام 1987، وتضم مجموعة من الأقسام العلمية التي تقدم برامج دراسية متنوعة في مجالات العلوم الأساسية والتطبيقية. تهدف الكلية إلى توفير بيئة تعليمية وبحثية متميزة تسهم في تطوير المعرفة والمهارات لدى الطلاب.",
    "تضم الكلية أقساماً متعددة تشمل علوم الحياة، الكيمياء، الفيزياء، الرياضيات، علوم الحاسوب، والجيولوجيا. كل قسم يقدم برامج دراسية متقدمة تهدف إلى تأهيل الطلاب لسوق العمل والمساهمة في البحث العلمي.",
    "تتميز كلية العلوم بوجود هيئة تدريس مؤهلة وذات خبرة عالية في مجالات تخصصها. كما توفر الكلية مرافق حديثة تشمل مختبرات مجهزة بأحدث التقنيات لدعم العملية التعليمية والبحثية.",
    "تسعى الكلية إلى تعزيز البحث العلمي من خلال تشجيع الطلاب وأعضاء هيئة التدريس على المشاركة في المشاريع البحثية والمؤتمرات العلمية. كما تهدف إلى بناء شراكات مع مؤسسات بحثية وصناعية محلية ودولية.",
    "تلتزم كلية العلوم بتقديم تعليم عالي الجودة يركز على تطوير مهارات التفكير النقدي، التحليل، والابتكار لدى الطلاب. كما تسعى إلى إعداد خريجين قادرين على مواجهة تحديات العصر والمساهمة في تنمية المجتمع.",
    "تقدم الكلية مجموعة من الأنشطة الطلابية التي تهدف إلى تعزيز التفاعل الاجتماعي والثقافي بين الطلاب. تشمل هذه الأنشطة النوادي العلمية، الرحلات الميدانية، والمسابقات الأكاديمية.",
    "تعتبر كلية العلوم في جامعة النهرين مركزاً هاماً للبحث العلمي والتعليم في العراق، وتسعى باستمرار إلى تحسين برامجها ومرافقها لتلبية احتياجات الطلاب والمجتمع العلمي.",
  ];

  function leftPost() {
    setFade(true);
    setTimeout(() => {
      seIndex((index) => (index === 0 ? texts.length - 1 : index - 1));
      setFade(false);
    }, 800);
  }
  function rightPost() {
    setFade(true);
    setTimeout(() => {
      seIndex((index) => (index === texts.length - 1 ? 0 : index + 1));
      setFade(false);
    }, 800);
  }
  return (
    <div className="box-about-science">
      <div className="header-about-science">
        <button disabled>
          <h2>نبذة عن الكلية</h2>
        </button>
      </div>
      <div className="body-about-science">
        <p className={`fade-text ${fade ? "fade-out" : "fade-in"}`}>
          {texts[index]}
        </p>
      </div>
      <div className="box-tow-button">
        <button onClick={leftPost}>
          <i class="fa-solid fa-arrow-left"></i>{" "}
        </button>
        <button onClick={rightPost}>
          {" "}
          <i class="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}
