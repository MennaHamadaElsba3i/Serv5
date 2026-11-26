import React, { useMemo, useState } from 'react';
import { ArrowUpRight, BriefcaseBusiness, Check, ChevronLeft, ChevronRight, Clock3, MapPin, Search, ShieldCheck, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';

const jobs = [
  { id: 1000, role: 'analyst', title: 'محلل بيانات', dept: 'development', deptLabel: 'DEVELOPMENT', salary: 'راتب مجزي ومنافس', text: 'نبحث عن محلل بيانات شغوف ومحترف لتأسيس قسم بيانات قوي وتوجيه الأعمال نحو اتخاذ قرارات مدروسة ومبنية على البيانات الفعالة. (مرجع رقم 1000)' },
  { id: 999, role: 'designer', title: 'مصمم واجهات وتجربة مستخدم (UI/UX)', dept: 'hr', deptLabel: 'HR', salary: 'يحدد حسب الخبرة', text: 'نبحث عن مصمم واجهات وتجربة مستخدم (UI/UX Designer) للانضمام إلى فريقنا. خبرة لا تقل عن 5 سنوات في تصميم تطبيقات الجوال ومواقع الويب، وقدرة على توفير تجارب بصرية فريدة وسلسة للمستخدمين. (مرجع رقم 999)' },
  { id: 998, role: 'marketingManager', title: 'مدير تسويق', dept: 'marketing', deptLabel: 'MARKETING', salary: 'راتب مجزي ومنافس', text: 'نبحث عن مدير تسويق متميز ومحترف لإدارة قسم السوشيال ميديا وقسم السيو وتطوير خطط تسويقية استراتيجية لزيادة الحصة السوقية للشركة وتوجيه الحملات الإعلانية. (مرجع رقم 998)' },
  { id: 997, role: 'hrManager', title: 'مدير الموارد البشرية', dept: 'design', deptLabel: 'DESIGN', salary: 'راتب مجزي ومنافس', text: 'نبحث عن مدير موارد بشرية (HR Manager) ذو خبرة عالية لإدارة العمل، وتوفير البيئة المناسبة للموظفين، ومتابعة الحضور والرواتب وعمليات التوظيف بكفاءة. (مرجع رقم 997)' },
  { id: 996, role: 'backend', title: 'مطور خلفية PHP (لارافيل)', dept: 'development', deptLabel: 'التطوير والبرمجة', salary: '8,000 - 12,000 جنيه مصري', text: 'نبحث عن مطور خلفية PHP (لارافيل) للانضمام إلى فريقنا ذو الخبرة. المتطلبات: خبرة قوية في إطار عمل Laravel (3 سنوات على الأقل) وPHP مع MySQL (4 سنوات على الأقل)، وخبرة في تكامل الـ APIs وإدارة إصدارات الكود (Git). (مرجع رقم 996)' },
  { id: 995, role: 'flutter', title: 'مطور تطبيقات فلاتر (Flutter)', dept: 'hr', deptLabel: 'HR', salary: 'راتب مجزي ومنافس', text: 'نبحث عن مطور تطبيقات Flutter للانضمام إلى فريقنا. متطلبات العمل: تصميم وتطوير تطبيقات متكاملة متعددة المنصات، وبناء واجهات مستخدم متميزة مبنية على تصميمات UI/UX، وتكامل قواعد البيانات والـ APIs المختلفة. (مرجع رقم 995)' },
  { id: 994, role: 'motion', title: 'أخصائي موشن جرافيك', dept: 'marketing', deptLabel: 'MARKETING', salary: 'يحدد حسب الخبرة', text: 'نبحث عن أخصائي موشن جرافيك ذو خيال خصب وقدرة عالية على الابتكار لإنتاج مقاطع فيديو متحركة تسويقية وتعليمية مبهرة لمنتجاتنا وخدماتنا. (مرجع رقم 994)' },
  { id: 993, role: 'seo', title: 'أخصائي سيو (SEO)', dept: 'design', deptLabel: 'DESIGN', salary: 'راتب مجزي ومنافس', text: 'توفر سيرف فايف فرصة عمل لأخصائي سيو (SEO Specialist) ذو خبرة. إذا كنت ترغب في الانضمام إلينا، أرسل سيرتك الذاتية (فرصة تدريب متاحة للشغوفين بالتعلم). (مرجع رقم 993)' },
  { id: 992, role: 'graphic', title: 'مصمم جرافيك', dept: 'development', deptLabel: 'DEVELOPMENT', salary: 'يحدد حسب الخبرة', text: 'نحن نبحث عن مصمم مبدع ومحترف لديه القدرة على إنشاء تصميمات بصرية جذابة تروي قصة خدماتنا وتلهم مستخدمينا. (مرجع رقم 992)' }
];

const moreJobs = [
  { id: 991, role: 'frontend', title: 'مطور واجهات أمامية', dept: 'hr', deptLabel: 'HR', salary: 'راتب مجزي ومنافس', text: 'بناء أكواد ومكتبات برمجية قابلة لإعادة الاستخدام مستقبلاً، وتحسين سرعة وكفاءة تطبيقات الويب بشكل فائق. برمجة المتطلبات الجديدة وتصحيح المشاكل التقنية في مختلف الإصدارات. (مرجع رقم 991)' },
  { id: 990, role: 'analyst', title: 'محلل بيانات', dept: 'marketing', deptLabel: 'MARKETING', salary: 'راتب مجزي ومنافس', text: 'نبحث عن محلل بيانات شغوف ومحترف لتأسيس قسم بيانات قوي وتوجيه الأعمال نحو اتخاذ قرارات مدروسة ومبنية على البيانات الفعالة. (مرجع رقم 990)' },
  { id: 989, role: 'designer', title: 'مصمم واجهات وتجربة مستخدم (UI/UX)', dept: 'design', deptLabel: 'DESIGN', salary: 'يحدد حسب الخبرة', text: 'نبحث عن مصمم واجهات وتجربة مستخدم (UI/UX Designer) للانضمام إلى فريقنا. خبرة لا تقل عن 5 سنوات في تصميم تطبيقات الجوال ومواقع الويب، وقدرة على توفير تجارب بصرية فريدة وسلسة للمستخدمين. (مرجع رقم 989)' },
  { id: 988, role: 'marketingManager', title: 'مدير تسويق', dept: 'development', deptLabel: 'DEVELOPMENT', salary: 'راتب مجزي ومنافس', text: 'نبحث عن مدير تسويق متميز ومحترف لإدارة قسم السوشيال ميديا وقسم السيو وتطوير خطط تسويقية استراتيجية لزيادة الحصة السوقية للشركة وتوجيه الحملات الإعلانية. (مرجع رقم 988)' },
  { id: 987, role: 'hrManager', title: 'مدير الموارد البشرية', dept: 'hr', deptLabel: 'HR', salary: 'راتب مجزي ومنافس', text: 'نبحث عن مدير موارد بشرية (HR Manager) ذو خبرة عالية لإدارة العمل، وتوفير البيئة المناسبة للموظفين، ومتابعة الحضور والرواتب وعمليات التوظيف بكفاءة. (مرجع رقم 987)' },
  { id: 986, role: 'backend', title: 'مطور خلفية PHP (لارافيل)', dept: 'marketing', deptLabel: 'MARKETING', salary: '8,000 - 12,000 جنيه مصري', text: 'نبحث عن مطور خلفية PHP (لارافيل) للانضمام إلى فريقنا ذو الخبرة. المتطلبات: خبرة قوية في إطار عمل Laravel (3 سنوات على الأقل) وPHP مع MySQL (4 سنوات على الأقل)، وخبرة في تكامل الـ APIs وإدارة إصدارات الكود (Git). (مرجع رقم 986)' },
  { id: 985, role: 'flutter', title: 'مطور تطبيقات فلاتر (Flutter)', dept: 'design', deptLabel: 'DESIGN', salary: 'راتب مجزي ومنافس', text: 'نبحث عن مطور تطبيقات Flutter للانضمام إلى فريقنا. متطلبات العمل: تصميم وتطوير تطبيقات متكاملة متعددة المنصات، وبناء واجهات مستخدم متميزة مبنية على تصميمات UI/UX، وتكامل قواعد البيانات والـ APIs المختلفة. (مرجع رقم 985)' },
  { id: 984, role: 'motion', title: 'أخصائي موشن جرافيك', dept: 'development', deptLabel: 'DEVELOPMENT', salary: 'يحدد حسب الخبرة', text: 'نبحث عن أخصائي موشن جرافيك ذو خيال خصب وقدرة عالية على الابتكار لإنتاج مقاطع فيديو متحركة تسويقية وتعليمية مبهرة لمنتجاتنا وخدماتنا. (مرجع رقم 984)' },
  { id: 983, role: 'seo', title: 'أخصائي سيو (SEO)', dept: 'hr', deptLabel: 'HR', salary: 'راتب مجزي ومنافس', text: 'توفر سيرف فايف فرصة عمل لأخصائي سيو (SEO) ذو خبرة. إذا كنت ترغب في الانضمام إلينا، أرسل سيرتك الذاتية (فرصة تدريب متاحة للشغوفين بالتعلم). (مرجع رقم 983)' }
];

const roleDetails = {
  analyst: {
    responsibilities: ['تتبع وجمع وتفسير البيانات، ثم تحليل النتائج باستخدام التقنيات الإحصائية.', 'تحديد وتحليل وتفسير الاتجاهات أو الأنماط في مجموعات البيانات المعقدة.', 'تطبيق الحلول البرمجية القائمة على البيانات لتحسين كفاءة وجودة العمليات.'],
    requirements: ['خبرة قوية في SQL، ولغات البرمجة Python أو R، وأدوات التحليل الإحصائي.', 'دراية كاملة بأدوات عرض وتحليل البيانات مثل (Tableau أو PowerBI).', 'خبرة عملية لا تقل عن 2-3 سنوات كمحلل بيانات.']
  },
  designer: {
    responsibilities: ['بناء هياكل سلكية (Wireframes) وتدفقات مستخدم ونماذج أولية تفاعلية وممتازة.', 'تصميم واجهات مستخدم مذهلة وجمالية وعالية الدقة لتطبيقات الجوال ومواقع الويب.', 'التعاون مع مطوري الواجهات الأمامية لضمان مطابقة التصميم البرمجي مع التصميم الأصلي بدقة تامة.'],
    requirements: ['درجة البكالوريوس أو الماجستير في علوم الحاسب أو التصميم أو الفنون أو ما يعادلها.', 'خبرة لا تقل عن 5 سنوات في تصميم واجهات وتجربة المستخدم (Figma أو Adobe XD).', 'معرض أعمال متميز يثبت الفهم العميق لأسس التخطيط، والخطوط، والمسافات، والتفاعل التفاعلي الدقيق.']
  },
  marketingManager: {
    responsibilities: ['صياغة وتنفيذ استراتيجيات تسويقية لزيادة الحصة السوقية للشركة.', 'الإشراف على وتوجيه فريق عمل السوشيال ميديا وحملات قسم السيو.', 'تحليل أداء قنوات التسويق المختلفة ومعدلات تحويل العملاء والعائد على الاستثمار.'],
    requirements: ['خبرة لا تقل عن 3-5 سنوات كمدير تسويق أو خبير استراتيجي في التسويق الرقمي.', 'دراية قوية بإدارة الحملات الإعلانية ومراقبتها على قنوات التواصل الرقمية المتعددة.', 'مهارة عالية في تطوير الخطط التسويقية، تحليل البيانات، وتحقيق أهداف الاستحواذ على العملاء.']
  },
  hrManager: {
    responsibilities: ['إعداد ومتابعة وتحديث خطة العمالة السنوية بالشركة وعمليات التوظيف.', 'متابعة سجلات الحضور والانصراف، وجداول الرواتب، والامتثال للوائح العمل بالشركة.', 'إجراء مقابلات التوظيف الأولية واختيار أفضل الكفاءات ودمجهم بنجاح داخل بيئة العمل.'],
    requirements: ['خبرة لا تقل عن 3-5 سنوات كمدير للموارد البشرية أو مسؤول تنفيذي أول.', 'مهارات اتصال ممتازة، وقدرات تنظيمية وحل النزاعات بشكل احترافي.', 'معرفة عميقة بقوانين العمل واللوائح الإدارية للموارد البشرية الحديثة.']
  },
  backend: {
    responsibilities: ['كتابة أكواد PHP خلفية نظيفة وسريعة وهيكلية باستخدام إطار عمل Laravel.', 'تصميم قواعد بيانات متطورة وآمنة وقابلة للتوسع باستخدام MySQL/PostgreSQL.', 'تطوير وبناء ويب سيرفس متكاملة وREST APIs مؤمنة لتطبيقات الجوال ومواقع الويب.'],
    requirements: ['خبرة لا تقل عن 3 سنوات في Laravel وخبرة لا تقل عن 4 سنوات في PHP/MYSQL.', 'دراية كاملة بأنظمة إدارة وتعديل الكود (Git) وطرق العمل الجماعية للفرق البرمجية.', 'فهم مبادئ الذكاء الاصطناعي وتكاملات الـ APIs المتقدمة يعتبر ميزة إضافية كبيرة.']
  },
  flutter: {
    responsibilities: ['تصميم وبناء ونشر تطبيقات متعددة المنصات باستخدام إطار عمل Flutter.', 'تكامل الـ APIs الخارجية والمكتبات والحلول المتكاملة لتخزين البيانات وحمايتها.', 'تطبيق هياكل إدارة الحالة المتطورة مثل (Bloc أو Provider أو Riverpod).'],
    requirements: ['خبرة قوية في لغة البرمجة Dart وإطار عمل Flutter وتعديل الخصائص الأصلية للمنصات.', 'فهم ممتاز لهندسة البرمجيات مثل MVC وMVVM وMVP.', 'خبرة سابقة في رفع ونشر التطبيقات على متاجر Apple App Store وGoogle Play.']
  },
  motion: {
    responsibilities: ['تصور وتصميم الستوري بورد ورسم وتصميم مقاطع الموشن جرافيك بجودة عالية.', 'تطوير فيديوهات تجريبية للمنتجات وعروض تسويقية وحزم تعليمية متميزة.', 'تنسيق جداول التسليم والعمل بشكل وثيق مع المخرجين والمحررين لتقديم حركات احترافية.'],
    requirements: ['خبرة عملية لا تقل عن 5 سنوات في تصميم وتحريك الموشن جرافيك.', 'إتقان تام لبرامج Adobe After Effects وPremiere وIllustrator.', 'معرض أعمال متميز يبرز مهارات التحريك وسرد القصص البصرية الاحترافية.']
  },
  seo: {
    responsibilities: ['إجراء بحث شامل عن الكلمات المفتاحية لتحسين بنية المواقع والمدونات.', 'متابعة ترتيب صفحات الموقع في محركات البحث وتحسين الـ SEO الداخلي والخارجي.', 'تحليل الروابط الخلفية للمنافسين، فحص سرعة الموقع، ومؤشرات حركة المرور الطبيعية.'],
    requirements: ['خبرة عملية لا تقل عن سنتين في تحسين محركات البحث.', 'دراية قوية بأدوات Google Analytics وSearch Console وSemrush وأدوات الفحص والتحليل.', 'شغف كبير بالتسويق الرقمي ومواكبة تحديثات خوارزميات محركات البحث.']
  },
  graphic: {
    responsibilities: ['إنشاء تصميمات مبتكرة للسوشيال ميديا، الحملات الإعلانية، وأصول الهوية البصرية.', 'تصور وتطوير وتنفيذ الرسومات الرقمية لزيادة سهولة استخدام المنتجات.', 'التعاون مع قسم التسويق لإنتاج تصميمات إبداعية تتماشى مع هوية الشركة.'],
    requirements: ['خبرة عملية لا تقل عن 5 سنوات في مجال التصميم الجرافيكي.', 'معرفة احترافية ببرامج Adobe Photoshop وIllustrator والبرامج المماثلة.', 'معرض أعمال قوي يوضح المهارات الإبداعية وجودة التصميم.']
  },
  frontend: {
    responsibilities: ['تطوير واجهات مستخدم نظيفة، منظمة، ومتجاوبة تماماً باستخدام React وNext.js.', 'تحسين أداء تطبيقات الويب للوصول لأقصى سرعة وقابلية للتوسع.', 'التعاون مع مطوري الخلفية والمصممين لتكامل الـ APIs بسلاسة.'],
    requirements: ['إتقان تام لـ HTML5، CSS3، JavaScript (ES6+)، React، وNext.js.', 'فهم قوي لتصميمات الويب المتجاوبة وبنية الـ CSS والـ HTML الدلالية.', 'خبرة سابقة في تصحيح الأخطاء وتحسين الأداء عبر المتصفحات المختلفة.']
  }
};

const departments = [
  { id: 'all', label: 'كل الأقسام' },
  { id: 'design', label: 'التصميم والموشن' },
  { id: 'development', label: 'التطوير والبرمجة' },
  { id: 'hr', label: 'الموارد البشرية' },
  { id: 'marketing', label: 'التسويق والسيو' }
];

export function CareersPage() {
  const [department, setDepartment] = useState('all');
  const [search, setSearch] = useState('');
  const [selectedJob, setSelectedJob] = useState(null);
  const [showMore, setShowMore] = useState(false);
  const visibleJobs = useMemo(() => (showMore ? [...jobs, ...moreJobs] : jobs).filter((job) =>
    (department === 'all' || job.dept === department) &&
    `${job.title} ${job.text} ${job.deptLabel}`.includes(search.trim())
  ), [department, search, showMore]);

  return (
    <div className="source-careers-page" dir="rtl">
      <header className="content-page-hero">
        <div className="container content-page-hero-inner">
          <span className="content-page-eyebrow">سيرف فايف • الوظائف</span>
          <h1>انضم إلى فريق المبتكرين لدينا</h1>
          <p>نبحث عن العقول المبدعة والخبراء التقنيين لمساعدتنا في بناء حلول رقمية استثنائية.</p>
        </div>
      </header>
      <section className="content-page-section source-careers-section">
        <div className="container">
          <div className="source-careers-tools">
            <label className="source-job-search">
              <Search size={18} aria-hidden="true" />
              <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="ابحث عن وظائف..." aria-label="ابحث عن وظائف" />
            </label>
            <div className="source-job-filters" role="group" aria-label="فلترة الوظائف">
              {departments.map((item) => (
                <button key={item.id} type="button" className={department === item.id ? 'is-active' : ''} aria-pressed={department === item.id} onClick={() => setDepartment(item.id)}>{item.label}</button>
              ))}
            </div>
          </div>
          <div className="source-job-grid">
            {visibleJobs.map((job) => (
              <article className="content-page-card source-job-card" key={job.id}>
                <div className="source-job-meta"><span>{job.deptLabel}</span><span className="source-job-open"><i /> متاح</span></div>
                <h2>{job.title} <small>رقم {job.id}</small></h2>
                <p>{job.text}</p>
                <div className="source-job-facts"><span><MapPin size={15} /> المنصورة، مصر</span><span><BriefcaseBusiness size={15} /> {job.salary}</span></div>
                <button className="content-page-link source-job-details" type="button" onClick={() => setSelectedJob(job)}>تفاصيل الوظيفة <ArrowUpRight size={16} /></button>
              </article>
            ))}
            {visibleJobs.length === 0 && <p className="source-empty-jobs">لا توجد وظائف تطابق بحثك حاليًا.</p>}
          </div>
          {!showMore && <button type="button" className="source-jobs-more" onClick={() => setShowMore(true)}>عرض المزيد <ChevronLeft size={17} /></button>}
        </div>
      </section>
      {selectedJob && (
        <div className="source-job-backdrop" role="presentation" onClick={() => setSelectedJob(null)}>
          <section className="source-job-dialog" role="dialog" aria-modal="true" aria-labelledby="source-job-title" onClick={(event) => event.stopPropagation()}>
            <button type="button" className="source-job-close" aria-label="إغلاق" onClick={() => setSelectedJob(null)}>×</button>
            <span className="content-page-eyebrow">{selectedJob.deptLabel} • رقم {selectedJob.id}</span>
            <h2 id="source-job-title">{selectedJob.title}</h2>
            <p>{selectedJob.text}</p>
            <h3>المهام والمسؤوليات</h3>
            <ul>{roleDetails[selectedJob.role].responsibilities.map((item) => <li key={item}>{item}</li>)}</ul>
            <h3>المتطلبات</h3>
            <ul>{roleDetails[selectedJob.role].requirements.map((item) => <li key={item}>{item}</li>)}</ul>
            <div className="source-job-facts"><span><MapPin size={15} /> المنصورة، مصر</span><span><Clock3 size={15} /> {selectedJob.salary}</span></div>
            <a className="content-page-link" href="mailto:sales@serv5.com?subject=التقديم%20على%20وظيفة">أرسل سيرتك الذاتية <ArrowUpRight size={16} /></a>
          </section>
        </div>
      )}
    </div>
  );
}

const aboutSections = [
  { title: '15 عاماً من الخبرة في تطوير البرمجيات', text: 'توفر Serv5 مجموعة من الحلول البرمجية المتطورة والمخصصة لعملاء المؤسسات العالمية. مهمتنا هي تمكين الشركات من الازدهار في العصر الرقمي من خلال تقديم حلول برمجية مبتكرة.' },
  { title: 'حلول مبتكرة مصممة لتلبية احتياجاتك', text: 'نحن نتشارك مع الشركات لتحديد التحديات الخاصة بهم وصياغة حلول مبتكرة مصممة وفقاً لمتطلباتهم الدقيقة. من خلال الاستفادة من أحدث التقنيات ومنهجيات التطوير الرشيقة (Agile)، نضمن أن حلولنا لا تلبي احتياجاتك الحالية فحسب بل تتكيف أيضاً بسلاسة مع أهداف عملك المستقبلية.' }
];
const aboutPrinciples = [
  ['شريك موثوق', 'نحن شريك موثوق في دفع التحول الرقمي.'],
  ['حلول مبتكرة', 'نقدم حلولاً مبتكرة ومخصصة تدفع نمو الأعمال.'],
  ['فريق خبير', 'يتكون فريقنا من خبراء ذوي مهارات عالية ومكرسين للتميز.'],
  ['التركيز على العميل', 'نضع احتياجات عملائنا في المقام الأول ونضمن توافق كل مشروع مع أهدافهم.'],
  ['منهجية مثبتة', 'نستخدم منهجية مثبتة للنجاح، تجمع بين الممارسات الرشيقة والجودة العالية.'],
  ['دعم مستمر', 'نقدم دعماً وصيانة مستمرة لضمان الأداء الأمثل دائماً.']
];
const milestones = [
  ['2009', 'مصر', '10 عملاء نشطين', 'بدأنا عملياتنا في مصر بفريق صغير ومتخصص من المطورين.'],
  ['2011', 'مصر', '20 عميلاً نشطاً', 'قمنا بتوسيع فريقنا وقاعدة عملائنا، وتقديم حلول برمجية مخصصة.'],
  ['2013', 'مصر والسعودية', '35 عميلاً نشطاً', 'دخلنا السوق الخليجي، وأسسنا حضوراً قوياً في المملكة العربية السعودية.'],
  ['2015', 'مصر والسعودية', '40 عميلاً نشطاً', 'قمنا ببناء شراكات استراتيجية مع كبرى الشركات في المنطقة.'],
  ['2017', 'مصر والسعودية', '35 عميلاً نشطاً', 'أطلقنا منتجات SaaS المتخصصة لإدارة المؤسسات والشركات.'],
  ['2020', 'مصر والسعودية', '35 عميلاً نشطاً', 'واكبنا اتجاهات التحول الرقمي ودعمنا البنية التحتية للعمل عن بعد.'],
  ['2024', 'مصر والسعودية', '35 عميلاً نشطاً', 'نواصل مسيرتنا في تقديم حلول مخصصة عالية الجودة حول العالم.']
];

export function AboutContinuation() {
  return (
    <div className="source-about-continuation" dir="rtl">
      <section className="content-page-section"><div className="container source-about-intro">
        {aboutSections.map((item) => <article key={item.title}><h2>{item.title}</h2><p>{item.text}</p></article>)}
        <div className="source-about-locations"><h2>نحن هنا من أجلك</h2><p>نخدم عملائنا في جميع أنحاء العالم من خلال مكاتبنا الإقليمية الاستراتيجية.</p>
          <div className="source-location-list"><div><strong>المنصورة, مصر</strong><span>شارع قناة السويس أعلى صيدلية د. رامي</span></div><div><strong>الرياض, المملكة العربية السعودية</strong><span>حي الزهور - شارع الملك خالد</span></div><div><strong>حولي, الكويت</strong><span>حولي - شارع بيروت - المنيرة - مكتب 14</span></div></div>
        </div>
      </div></section>
      <section className="content-page-section source-about-values"><div className="container"><h2>لماذا تختارنا؟</h2><div className="source-principles">{aboutPrinciples.map(([title, text], index) => <article key={title}><span>{String(index + 1).padStart(2, '0')}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>
      <section className="content-page-section"><div className="container"><header className="source-section-heading"><h2>رحلتنا</h2><p>عقد من النمو، والابتكار، والشراكة.</p></header><div className="source-milestones">{milestones.map(([year, region, clients, text]) => <article key={year}><strong>{year}</strong><div><span>{region} • {clients}</span><p>“{text}”</p></div></article>)}</div></div></section>
      <section className="content-page-section source-about-values"><div className="container source-about-leadership"><div><span className="content-page-eyebrow">OURLEADERSHIP</span><h2>العقول التي تقود النجاح</h2><p>وراء كل مشروع ناجح فريق يجمع بين الخبرة، الإبداع، والشغف بالتكنولوجيا، لنقدم حلولًا رقمية تلبي احتياجات عملائنا وتساعدهم على النمو.</p><h3>م/ احمد نعمان</h3><span>فريق العمل</span></div><div><h2>التعاون، والإبداع والابتكار</h2><p>خلق بيئة تفاعلية تتلاقى فيها الرؤى والأفكار لتقديم حلول برمجية استثنائية.</p><h3>التميز التقني والبرمجي</h3><p>الالتزام بكتابة أكواد نظيفة، تصميم بنية تحتية قوية، واستخدام أحدث التقنيات التقنية.</p><h3>التصميم ذو الأثر الفعال</h3><p>دمج الذوق الإبداعي بمتطلبات تجربة المستخدم لخلق هويات رقمية مذهلة تحقق النتائج.</p></div></div></section>
      <section className="content-page-section"><div className="container"><header className="source-section-heading"><span className="content-page-eyebrow">OURTEAM</span><h2>فريقنا</h2></header><div className="source-team-list">{['م/ محمد سليمان', 'ابراهيم القباني', 'محمد كشك', 'عبدالله فايد'].map((name) => <div key={name}>{name}</div>)}</div></div></section>
      <section className="content-page-section source-about-cta"><div className="container"><h2>هل أنت مستعد لنقل عملك إلى المستوى التالي؟</h2><p>اتصل بنا اليوم لاستكشاف كيف يمكن لحلولنا البرمجية المبتكرة أن تدفع النمو وتبسط العمليات وتطلق العنان لإمكانياتك الكاملة في العصر الرقمي.</p><Link to="/contact-us" className="source-page-cta">اتصل بنا <ArrowUpRight size={17} /></Link></div></section>
    </div>
  );
}

export function TechnicalSupportPage() {
  const offerings = [
    ['إعداد السيرفر ومراقبة سلامته', 'تهيئة الخوادم وتتبع استهلاك الذاكرة ومساحة القرص لضمان الاستقرار.'],
    ['إصلاح الأخطاء وفحص الأكواد', 'اكتشاف وحل المشكلات الفنية وأخطاء الأكواد في البرمجيات المختلفة.'],
    ['تحسين سرعة وأداء الأنظمة والمواقع', 'تحسين استعلامات قواعد البيانات والتخزين المؤقت وضغط الصور لتسريع التصفح.'],
    ['إدارة النسخ الاحتياطي التلقائي', 'إعداد خطط نسخ احتياطي يومي وأسبوعي تلقائي للملفات في مواقع تخزين سحابية آمنة.'],
    ['تثبيت شهادات SSL والتحديثات الأمنية', 'تحديث مكتبات البرمجة وسد الثغرات الأمنية للحفاظ على استمرارية الأمان.'],
    ['إدارة النطاقات ورسائل البريد الإلكتروني', 'تهيئة النطاقات وإعدادات MX وSPF وDKIM لضمان وصول رسائل البريد الإلكتروني.']
  ];
  const steps = [
    ['الفحص والتشخيص الفني للأنظمة', 'مراجعة شاملة لملفات السجل، وأكواد التطبيقات، وإعدادات السيرفر الحالية.'],
    ['التأمين وتحسين الأداء والسرعة', 'معالجة الثغرات العاجلة، وتنظيف قواعد البيانات، وضبط كاش السيرفر.'],
    ['تفعيل إنذارات المراقبة الفورية', 'ربط وتفعيل أدوات مراقبة تنبهنا تلقائياً عند توقف الموقع أو زيادة الحمل.'],
    ['التقارير الدورية وسجلات العمل', 'مشاركة تقارير شهرية توضح حالة النظام الفنية وما تم إنجازه وصيانته.']
  ];
  const reasons = [
    ['ضمان وقت استجابة محدد SLA', 'نلتزم بالاستجابة في غضون دقائق لحالات تعطل الخادم أو توقف الخدمة.'],
    ['مكتب دعم فني متعدد القنوات', 'افتح تذكرة دعم، تواصل معنا مباشرة عبر واتساب، أو اتصل بنا هاتفياً.'],
    ['مهندسو خوادم ومديرو أنظمة مخصصون', 'يتولى رعاية أنظمتك وتأمينها مهندسو نظم مؤهلون ومحترفون.'],
    ['تقارير فنية دورية تفصيلية', 'نوفر لك كشوفات دورية واضحة حول استقرار الخادم والأمان ومعدلات الاستخدام.']
  ];
  return <div className="source-support-page" dir="rtl">
    <header className="content-page-hero"><div className="container content-page-hero-inner"><span className="content-page-eyebrow">سيرف فايف • خدماتنا</span><h1>الدعم الفني والصيانة الاحترافية على مدار الساعة</h1><p>حافظ على تشغيل أنظمتك الرقمية بسلاسة تامة. نقدم مراقبة الخوادم، إصلاح الأخطاء، التحديثات الدورية، وتحسين الأداء في أي وقت.</p><a className="source-page-cta" href="#support-contact">ابدأ الآن <ArrowUpRight size={17} /></a></div></header>
    <section className="content-page-section"><div className="container"><header className="source-section-heading"><h2>صيانة شاملة للموقع والأنظمة الإلكترونية</h2><p>فحوصات استباقية وحلول سريعة للحفاظ على نشاطك التجاري متصلاً بالإنترنت دون انقطاع.</p></header><div className="source-support-grid">{offerings.map(([title, text]) => <article className="content-page-card" key={title}><Wrench size={21} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
    <section className="content-page-section source-about-values"><div className="container source-support-copy"><div><span className="content-page-eyebrow">صيانة استباقية</span><h2>ضمان الصيانة المستمرة والوقائية</h2><p>نحن نؤمن بالصيانة الاستباقية بدلاً من انتظار حدوث العطل. يجري فريق الدعم لدينا تدقيقاً دورياً لقواعد البيانات، وينظف سجلات النظام المؤقتة، ويفحص سعة استيعاب الخادم، ويضمن تثبيت كافة التحديثات الأمنية لتفادي التوقف.</p></div><ul><li><Check size={17} /> تدقيق دوري أسبوعي لقواعد البيانات</li><li><Check size={17} /> تحليل فوري ومستمر لضغط وحركة الخادم</li><li><Check size={17} /> أولوية قصوى لتذاكر الطوارئ والأعطال المفاجئة</li></ul></div></section>
    <section className="content-page-section"><div className="container"><header className="source-section-heading"><span className="content-page-eyebrow">كيف نعمل؟</span><h2>لدينا خطة عمل واضحة من البداية إلى النهاية</h2></header><div className="source-principles">{steps.map(([title, text], i) => <article key={title}><span>{i + 1}</span><div><h3>{i + 1}- الخطوة {['الأولى', 'الثانية', 'الثالثة', 'الرابعة'][i]}: {title}</h3><p>{text}</p></div></article>)}</div><p className="source-support-punchline">التميز التقني والحل الفوري لكافة مشاكلك البرمجية على بعد تذكرة دعم واحدة.</p></div></section>
    <section className="content-page-section source-about-values" id="support-contact"><div className="container"><header className="source-section-heading"><h2>لماذا تختار فريق الدعم الفني لدينا؟</h2></header><div className="source-support-grid">{reasons.map(([title, text]) => <article className="content-page-card" key={title}><ShieldCheck size={21} /><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>
  </div>;
}

function ChoiceGroup({ label, options, value, onChange, name }) {
  return <fieldset className="source-choice-group"><legend>{label}</legend><div>{options.map((option) => <label key={option} className={value === option ? 'is-selected' : ''}><input type="radio" name={name} value={option} checked={value === option} onChange={() => onChange(option)} /><span>{option}</span></label>)}</div></fieldset>;
}

export function ProjectConsultationPage() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ kind: '', budget: '', readiness: '', name: '', phone: '', email: '' });
  const [sent, setSent] = useState(false);
  const set = (key) => (event) => setData((current) => ({ ...current, [key]: event.target.value }));
  const stepTitles = ['ما هو نوع مشروعك؟', 'هل لديك وثائق أو مواصفات للمشروع؟', 'ما هي الميزانية التقديرية للمشروع؟', 'اسم العميل', 'الجوال', 'البريد الإلكتروني', 'مراجعة بيانات الاستشارة'];
  const valid = [Boolean(data.kind), Boolean(data.readiness), Boolean(data.budget), Boolean(data.name.trim()), Boolean(data.phone.trim()), Boolean(data.email.trim()), true][step];
  const next = () => { if (valid) setStep((current) => Math.min(current + 1, 6)); };
  return <div className="source-form-page" dir="rtl">
    <header className="content-page-hero"><div className="container content-page-hero-inner"><span className="content-page-eyebrow">خدماتنا • استشارة المشروع</span><h1>استشارة المشروع</h1><p>ابدأ مشروعك برؤية احترافية. قم بتعبئة التفاصيل أدناه واحصل على استشارة مجانية من خبرائنا.</p></div></header>
    <section className="content-page-section"><div className="container"><div className="source-form-panel">
      {sent ? <div className="source-form-success"><Check size={34} /><h2>شكرًا لاهتمامك بالتواصل معنا</h2><p>اكتملت بيانات الاستشارة. يمكنك التواصل معنا مباشرة عبر <a href="mailto:sales@serv5.com">sales@serv5.com</a>.</p></div> : <>
        <div className="source-form-heading"><div><span className="content-page-eyebrow">استشارة مجانية</span><h2>{stepTitles[step]}</h2></div><span>{step + 1} / 7</span></div>
        <div className="source-form-progress"><i style={{ width: `${((step + 1) / 7) * 100}%` }} /></div>
        {step === 0 && <ChoiceGroup name="project-kind" label="ما هو نوع مشروعك؟" options={['تطبيق جوال', 'موقع إلكتروني / تطبيق ويب', 'نظام ERP / CRM', 'أخرى / فكرة مبتكرة']} value={data.kind} onChange={(value) => setData((current) => ({ ...current, kind: value }))} />}
        {step === 1 && <ChoiceGroup name="project-readiness" label="هل لديك وثائق أو مواصفات للمشروع؟" options={['نعم، لدي مواصفات كاملة', 'لا، أحتاج إلى استشارة فنية']} value={data.readiness} onChange={(value) => setData((current) => ({ ...current, readiness: value }))} />}
        {step === 2 && <ChoiceGroup name="project-budget" label="ما هي الميزانية التقديرية للمشروع؟" options={['أقل من 5,000 ريال', '12,000 - 35,000 ريال', '35,000 - 80,000 ريال', 'أكثر من 80,000 ريال']} value={data.budget} onChange={(value) => setData((current) => ({ ...current, budget: value }))} />}
        {step === 3 && <div className="source-form-fields"><label className="is-wide">اسم العميل<input value={data.name} onChange={set('name')} required placeholder="اكتب اسمك الكامل" /></label></div>}
        {step === 4 && <div className="source-form-fields"><label className="is-wide">الجوال<input value={data.phone} onChange={set('phone')} required type="tel" placeholder="رقم الجوال" /></label></div>}
        {step === 5 && <div className="source-form-fields"><label className="is-wide">البريد الإلكتروني<input value={data.email} onChange={set('email')} required type="email" placeholder="example@domain.com" /></label></div>}
        {step === 6 && <div className="source-consultation-review"><p><strong>نوع المشروع:</strong> {data.kind}</p><p><strong>الميزانية:</strong> {data.budget}</p><p><strong>المواصفات:</strong> {data.readiness}</p><p><strong>اسم العميل:</strong> {data.name}</p><p><strong>الجوال:</strong> {data.phone}</p><p><strong>البريد الإلكتروني:</strong> {data.email}</p></div>}
        <div className="source-form-actions">{step > 0 && <button type="button" className="source-form-secondary" onClick={() => setStep((current) => current - 1)}><ChevronRight size={17} /> الخطوة السابقة</button>}{step < 6 ? <button type="button" className="source-form-primary" onClick={next} disabled={!valid}>الخطوة التالية <ChevronLeft size={17} /></button> : <button type="button" className="source-form-primary" onClick={() => setSent(true)}>إرسال طلب الاستشارة <ArrowUpRight size={17} /></button>}</div>
      </>}
    </div></div></section>
  </div>;
}

const quoteSteps = [
  { title: 'بيانات الاتصال', fields: [
    ['name', 'اسم العميل', 'اكتب اسمك الكامل', 'text', true], ['company', 'اسم الشركة', 'اكتب اسم شركتك', 'text'], ['phone', 'الجوال', '+966 50 000 0000', 'tel', true], ['email', 'البريد الإلكتروني', 'example@domain.com', 'email', true], ['country', 'الدولة', 'مثال: السعودية', 'text'], ['city', 'المدينة', 'مثال: الرياض', 'text']
  ] },
  { title: 'مواصفات المشروع', fields: [
    ['type', 'نوع الطلب', 'مثال: موقع تعريفي، متجر إلكتروني', 'text', true], ['budget', 'الميزانية المقترحة', 'مثال: 5,000 - 10,000 ريال', 'text'], ['url', 'اكتب رابط الموقع إن وجد', 'https://example.com', 'url'], ['contentHelp', 'هل لديك من يساعدك في إدارة محتويات الموقع؟', '', 'select'], ['logo', 'هل لديك شعار مصمم مسبقاً؟', '', 'select'], ['images', 'هل لديك صور تود وضعها في التصميم؟', '', 'select']
  ] },
  { title: 'تفاصيل ورؤية المشروع', fields: [
    ['vision', 'ماهي رؤيتك وأهدافك المرجوة من الموقع', 'اكتب رؤيتك ورسالتك وأهدافك من الموقع...', 'textarea'], ['services', 'اكتب نبذة عن خدماتك ومنتجاتك المطلوبة في الموقع', 'اكتب نبذة مختصرة عن المنتجات أو الخدمات المطلوبة...', 'textarea'], ['colors', 'ماهي الألوان التي تفضلها في الموقع؟ وهل هناك ألوان تستبعدها؟', 'مثال: أفضل اللون الأزرق الفاتح والأسود، وأستبعد اللون الأحمر...', 'textarea'], ['references', 'ماهي المواقع التي نالت إعجابك وتراها مناسبة لفكرتك من تصميم وبرمجة؟', 'مثال: https://google.com أو مواقع منافسة نالت إعجابك...', 'textarea'], ['notes', 'ملاحظات وإضافات أخرى', 'أي إضافات أو ميزات خاصة تود إضافتها للمشروع...', 'textarea']
  ] }
];

export function RequestQuotePage() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState({});
  const [sent, setSent] = useState(false);
  const fields = quoteSteps[step].fields;
  const valid = fields.filter((field) => field[4]).every((field) => Boolean(values[field[0]]?.trim()));
  const set = (key) => (event) => setValues((current) => ({ ...current, [key]: event.target.value }));
  return <div className="source-form-page" dir="rtl">
    <header className="content-page-hero"><div className="container content-page-hero-inner"><span className="content-page-eyebrow">خدماتنا • نموذج طلب عرض سعر</span><h1>اطلب تسعير مشروعك</h1><p>احصل على عرض سعر مخصص لموقعك، متجرك، أو تطبيق الجوال الخاص بك اليوم. فقط املأ التفاصيل أدناه.</p></div></header>
    <section className="content-page-section"><div className="container"><form className="source-form-panel" onSubmit={(event) => { event.preventDefault(); if (step < 2) setStep((current) => current + 1); else setSent(true); }}>
      {sent ? <div className="source-form-success"><Check size={34} /><h2>اكتملت تفاصيل طلب عرض السعر</h2><p>شكرًا لمشاركة تفاصيل مشروعك. للتواصل المباشر: <a href="mailto:sales@serv5.com">sales@serv5.com</a>.</p></div> : <>
        <div className="source-form-heading"><div><span className="content-page-eyebrow">نموذج طلب عرض سعر</span><h2>{quoteSteps[step].title}</h2></div><span>{step + 1} / 3</span></div>
        <div className="source-form-progress"><i style={{ width: `${((step + 1) / 3) * 100}%` }} /></div>
        <div className="source-form-fields">{fields.map(([key, label, placeholder, type, required]) => <label key={key} className={type === 'textarea' ? 'is-wide' : ''}>{label}{required && <b> *</b>}{type === 'textarea' ? <textarea rows="3" required={required} value={values[key] || ''} onChange={set(key)} placeholder={placeholder} /> : type === 'select' ? <select value={values[key] || ''} onChange={set(key)}><option value="">اختر إجابة...</option><option>نعم</option><option>لا</option></select> : <input type={type} required={required} value={values[key] || ''} onChange={set(key)} placeholder={placeholder} />}</label>)}</div>
        {step === 1 && <label className="source-file-field">ارفع هنا اللوجو إن وجد أو أي صور تود وضعها في التصميم إن وجدت<input type="file" accept="image/jpeg,image/png,image/gif" multiple /><small>اسحب وأفلت الملفات هنا، أو انقر للاختيار. يقبل ملفات JPEG, PNG, JPG, GIF</small></label>}
        <div className="source-form-actions">{step > 0 && <button type="button" className="source-form-secondary" onClick={() => setStep((current) => current - 1)}><ChevronRight size={17} /> الخطوة السابقة</button>}{step < 2 ? <button type="submit" className="source-form-primary" disabled={!valid}>الخطوة التالية <ChevronLeft size={17} /></button> : <button type="submit" className="source-form-primary">إرسال طلب عرض السعر <ArrowUpRight size={17} /></button>}</div>
      </>}
    </form></div></section>
  </div>;
}
