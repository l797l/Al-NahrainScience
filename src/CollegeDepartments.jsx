import BoxDepartments from "./structure/BoxDepartments";
import {  imgChemistry, imgComputer, imgFroensics } from "./img/SrcImg";
import "./css/collegeDepartments.css";
export default function CollegeDepartments() {
  return (
    <div className="college-departments" >
      <div className="header-departments">
        <h3>اقسام الكلية</h3>
        <h1>دراسة العلوم في جامعة النهرين </h1>

        <hr />
        <div>
          <p>
            تضم كلية العلوم – جامعة النهرين مجموعة من الأقسام العلمية المتميزة
            التي تهدف إلى إعداد كوادر علمية وبحثية رصينة تواكب التطور العالمي في
            مجالات العلوم الحديثة. حيث تجمع بين الدراسة الأكاديمية والتطبيق
            العملي في المختبرات المتطورة، مما يمنح الطلبة فرصة لاكتساب المعرفة
            النظرية والخبرة العملية معاً.
            <br /> <br />
            تتوزع الأقسام لتغطي أهم فروع العلوم الأساسية، مثل: علوم الحياة، علوم
            الكيمياء، علوم الفيزياء، علوم الحاسوب، علوم الرياضيات، وعلوم
            التحليلات المرضية التطبيقية ،علوم الفيزياء الطبية ، علوم الادلة
            الجنائية. ويعمل في هذه الأقسام نخبة من الأساتذة والباحثين ذوي
            الكفاءة العالية، الذين يسهمون في تطوير البحث العلمي وخدمة المجتمع
            عبر مشاريع رائدة ودراسات متقدمة.
            <br /> <br />
            تُعد أقسام كلية العلوم في جامعة النهرين بيئة علمية متكاملة، تسعى إلى
            تعزيز روح الابتكار والإبداع لدى الطلبة، وتزويدهم بالمهارات التي
            تؤهلهم للاندماج في سوق العمل والمشاركة الفاعلة في مسيرة التطوير
            والبناء.
          </p>
        </div>
      </div>
      <div className="box-departments-container">
        <BoxDepartments nameImg={imgChemistry} nameDepartment="علوم الكيمياء" />
        <BoxDepartments nameImg={imgComputer} nameDepartment="علوم الحاسوب" />

        <BoxDepartments nameImg={imgFroensics} nameDepartment="علوم الأدلة الجنائية" />

        <BoxDepartments nameImg={imgChemistry} nameDepartment="علوم الكيمياء" />

        <BoxDepartments nameImg={imgChemistry} nameDepartment="علوم الكيمياء" />
        <BoxDepartments nameImg={imgChemistry} nameDepartment="علوم الكيمياء" />
        <BoxDepartments nameImg={imgChemistry} nameDepartment="علوم الكيمياء" />
        <BoxDepartments nameImg={imgChemistry} nameDepartment="علوم الكيمياء" />
      </div>
    </div>
  );
}
