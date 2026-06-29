/* ==========================================================
   Safety Digi — Landing Page JS
   - Bilingual (EN ⇄ AR with RTL)
   - Smooth scroll, sticky nav, scroll reveal
   - Module tabs
   ========================================================== */

(function () {
    'use strict';

    /* ---------------- i18n dictionary ---------------- */
    const I18N = {
        en: {
            'nav.home': 'Home',
            'nav.features': 'Features',
            'nav.pricing': 'Pricing',
            'nav.resources': 'Resources',
            'nav.contact': 'Contact',
            'nav.demo': 'Request Demo',
            'nav.pillars': 'Pillars',
            'nav.modules': 'Modules',
            'nav.screens': 'App Screens',
            'nav.workflow': 'Workflow',
            'nav.roles': 'Roles',
            'nav.download': 'Download',

            'hero.eyebrow': 'Smarter Safety. Stronger Workplaces.',
            'hero.title': 'All-in-One HSE Management App',
            'hero.sub': 'Empower your teams to work safer, report faster and stay compliant — anywhere, anytime.',
            'hero.ctaApp': 'App Store',
            'hero.ctaPlay': 'Google Play',
            'hero.f1t': 'Improve Safety',
            'hero.f1d': 'Reduce incidents and risks',
            'hero.f2t': 'Ensure Compliance',
            'hero.f2d': 'Stay aligned with standards',
            'hero.f3t': 'Real-time Insights',
            'hero.f3d': 'Make data-driven decisions',
            'hero.f4t': 'Empower Teams',
            'hero.f4d': 'Engage and protect your workforce',

            'band.title': 'Built for Every Industry',
            'band.sub': 'Construction, Manufacturing, Oil & Gas, Logistics, Healthcare and more.',

            'float.c1t': '98%',
            'float.c1s': 'Compliance Rate',
            'float.c2t': '1,248',
            'float.c2s': 'Inspections This Month',
            'float.c3t': '2,345',
            'float.c3s': 'Active Users',
            'float.c4t': '23',
            'float.c4s': 'Open Incidents',

            'trust.l1': 'Pillars',
            'trust.l2': 'Core Modules',
            'trust.l3': 'Inspections',
            'trust.l4': 'Report Types',
            'trust.l5': 'Incident Types',
            'trust.l6': 'Access Levels',

            'pillars.eyebrow': 'Our Four Pillars',
            'pillars.title': 'Built around what matters most on site.',
            'pillars.sub': 'Every screen, every workflow and every report in Safety Digi is shaped by these four pillars — so nothing gets missed in the field.',
            'pillars.s.title': 'Safety',
            'pillars.s.desc': 'Standardize incident reporting, near-miss capture and corrective actions. Auto-generate shareable PDF reports the moment an event is logged.',
            'pillars.h.title': 'Health',
            'pillars.h.desc': 'Track injuries, medical services and lost working days. Capture LTI data with structured forms so health trends surface instantly.',
            'pillars.e.title': 'Environment',
            'pillars.e.desc': 'Log environmental incidents and inspections with photo evidence. Spot patterns early and keep sustainability on the daily agenda.',
            'pillars.p.title': 'People',
            'pillars.p.desc': 'From daily Toolbox Talks to manpower and manhour tracking — give every worker on site a voice and a record.',

            'modules.eyebrow': 'Four Core Modules',
            'modules.title': 'One app. Every HSE workflow.',
            'modules.sub': 'From the moment a worker spots something on site to the monthly report on the manager\'s desk — Safety Digi covers it.',
            'modules.m1.name': 'Observation',
            'modules.m1.tag': 'Module 01',
            'modules.m1.title': 'Observation',
            'modules.m1.desc': 'Log a safety observation in seconds — type, place, category, time to close, responsible person — and let supervisors track close-outs through history and trend stats.',
            'modules.m1.f1': 'Quick dropdown-driven form (Type / Place / Category / Responsible)',
            'modules.m1.f2': 'Photo evidence on every record',
            'modules.m1.f3': 'Sortable history per author',
            'modules.m1.f4': 'Stats: Negative, Positive, Closed + Trend',
            'modules.m1.stitle': 'New Observation',
            'modules.m2.name': 'Inspection',
            'modules.m2.tag': 'Module 02',
            'modules.m2.title': 'Inspection',
            'modules.m2.desc': 'Six structured inspection types, each with a tailored Yes / No / N/A checklist, an "Other (specify)" field and photo attach — built for gloves, outdoors, and one-handed use.',
            'modules.m2.stitle': 'Equipment Inspection',
            'modules.m3.name': 'Reports',
            'modules.m3.tag': 'Module 03',
            'modules.m3.title': 'Reports',
            'modules.m3.desc': 'Daily reports capture manpower, manhours, TBTs and Permit-to-Work status. Once <strong>26 daily reports</strong> land, the <strong>Monthly Report auto-builds</strong>. Incident reports export to <strong>PDF</strong> in a single tap.',
            'modules.m3.f1': '<strong>Daily</strong> — Manpower · Manhour · TBT · Attendees · PWO Pending',
            'modules.m3.f2': '<strong>Monthly</strong> — auto-calculated from 26 daily reports',
            'modules.m3.f3': '<strong>Incident</strong> — Near miss · Accident · Environmental · LTI',
            'modules.m3.f4': 'PDF export ready to share with stakeholders',
            'modules.m3.stitle': 'Reports',
            'modules.m4.name': 'Monthly Stats',
            'modules.m4.tag': 'Module 04',
            'modules.m4.title': 'Monthly Stats',
            'modules.m4.desc': 'A management-grade performance view — aggregated HSE metrics that turn 26 days of daily field activity into clear, comparable monthly numbers.',
            'modules.m4.f1': 'Observation trend over time',
            'modules.m4.f2': 'Open vs Closed vs Incident counts',
            'modules.m4.f3': 'TBT, Manhour and PWO rollups',
            'modules.m4.f4': 'Drill down by site, area or role',
            'modules.m4.stitle': 'Monthly Stats',

            'form.type': 'Type',
            'form.place': 'Place',
            'form.category': 'Category',
            'form.ttc': 'Time to close',
            'form.resp': 'Responsible',
            'form.time': 'Time',
            'form.submit': 'Submit',
            'form.attach': 'Attach photo',

            'ins.i1': 'Guard in place',
            'ins.i2': 'Emergency stop working',
            'ins.i3': 'Controls functioning',
            'ins.i4': 'No leakage',
            'ins.i5': 'Warning labels visible',
            'ins.i6': 'PPE available',
            'ins.i7': 'Housekeeping good',

            'rep.daily': 'Daily Report',
            'rep.dailySub': 'Manpower · Manhour · TBT',
            'rep.monthly': 'Monthly Report',
            'rep.monthlySub': 'Auto from 26 daily',
            'rep.incident': 'Incident',
            'rep.incidentSub': 'Near miss · Accident · LTI',

            'stat.obs': 'Observations',
            'stat.closed': 'Closed',
            'stat.inc': 'Incidents',

            'screens.eyebrow': 'App Screens',
            'screens.title': 'A glimpse inside Safety Digi.',
            'screens.sub': 'Phone-first layouts, large tap targets, minimal typing. Designed for the field — gloves, sunlight and one hand.',
            'scr.login': 'Login',
            'scr.signin': 'Sign in',
            'scr.user': 'User',
            'scr.pwd': 'Password',
            'scr.loginBtn': 'Login',

            'inc.title': 'Incident',
            'inc.near': 'Near miss',
            'inc.acc': 'Accident',
            'inc.env': 'Environmental',
            'inc.lti': 'LTI',
            'inc.foot': 'Submit → generates a PDF report instantly.',

            'wf.eyebrow': 'How It Works',
            'wf.title': 'From field observation to monthly report — in four steps.',
            'wf.s1.t': 'Capture',
            'wf.s1.d': 'Field worker taps the center camera button or opens a module. Picklists + photo evidence — minimal typing.',
            'wf.s2.t': 'Submit',
            'wf.s2.d': 'Each record is stamped with Author, Date/Time and Level — automatically routed to the right supervisor.',
            'wf.s3.t': 'Track',
            'wf.s3.d': 'Open vs Closed, Positive vs Negative, trends by week. Corrective actions stay visible until confirmed.',
            'wf.s4.t': 'Report',
            'wf.s4.d': '26 daily reports auto-roll into a monthly report. Incident PDFs are one tap away.',

            'roles.eyebrow': 'Access Levels',
            'roles.title': 'Three levels. One source of truth.',
            'roles.sub': 'Every screen shows the user\'s Level in the header — clear, traceable, accountable.',
            'roles.r1.t': 'User',
            'roles.r1.title': 'Field Worker · Inspector',
            'roles.r1.l1': 'Create observations, inspections & daily reports',
            'roles.r1.l2': 'Attach photos on every record',
            'roles.r1.l3': 'View own history',
            'roles.r2.t': 'Admin',
            'roles.r2.title': 'Site · HSE Supervisor',
            'roles.r2.l1': 'Everything a User can do',
            'roles.r2.l2': 'View all records and stats across the site',
            'roles.r2.l3': 'Manage incidents & corrective actions',
            'roles.r3.t': 'Super Admin',
            'roles.r3.title': 'HSE Manager · System Owner',
            'roles.r3.l1': 'Everything an Admin can do',
            'roles.r3.l2': 'User management & configuration',
            'roles.r3.l3': 'Multi-site visibility',

            'ind.eyebrow': 'Built For',
            'ind.title': 'Industrial & construction HSE teams.',
            'ind.i1': 'Oil & Gas',
            'ind.i2': 'Construction',
            'ind.i3': 'Power & Energy',
            'ind.i4': 'Manufacturing',
            'ind.i5': 'Mining',
            'ind.i6': 'Infrastructure',

            'cta.title': 'Bring Safety Digi to your site today.',
            'cta.sub': 'Digitize paper checklists, capture photo evidence and turn 26 days of field data into a clean monthly report — automatically.',
            'cta.dl1': 'Download on the',
            'cta.dl2': 'Get it on',
            'cta.qr': 'Scan the QR code from your phone to install.',

            'footer.tag': 'Safer Today, Sustainable Tomorrow.',
            'footer.product': 'Product',
            'footer.company': 'Company',
            'footer.contact': 'Contact',
            'footer.about': 'About',
            'footer.privacy': 'Privacy',
            'footer.terms': 'Terms',
            'footer.region': 'MENA · Global',
            'footer.copy': '© 2026 Safety Digi. All rights reserved.',
            'footer.disclaimer': 'For professional HSE use on industrial & construction sites.',
            'hero.ctaDemo': 'Request Demo',
            'hero.ctaExplore': 'Explore Features',
            'fs.title': 'Everything You Need in One App',
            'fs.s1.t': 'Safety',
            'fs.s1.d': 'Observations, Inspections, Permits & More',
            'fs.s2.t': 'Reports',
            'fs.s2.d': 'Powerful reports and analytics',
            'fs.s3.t': 'Assets & Locations',
            'fs.s3.d': 'Track assets, sites and locations',
            'fs.s4.t': 'Alerts',
            'fs.s4.d': 'Real-time alerts and notifications',
            'fs.s5.t': 'Incident Management',
            'fs.s5.d': 'Report, track and resolve incidents fast',
            'modules.m2.c1': 'Equipment',
            'modules.m2.c2': 'PPE',
            'modules.m2.c3': 'Scaffold',
            'modules.m2.c4': 'Environmental',
            'modules.m2.c5': 'Fire',
            'modules.m2.c6': 'SMS Audit <small>(Phase 2)</small>',
            'logo.text': '<strong>Safety</strong><span>Digi</span>',
            'logo.sub': 'SAFETY · COMPLIANCE · CARE',
            'trial.title': 'Request a free trial',
            'trial.subtext': 'Access all the features for 30 days. No credit card needed.',
            'trial.namePlace': 'Full name',
            'trial.emailPlace': 'Work email',
            'trial.cityPlace': 'City',
            'trial.phonePlace': 'Phone',
            'trial.next': 'Submit Request',
            'trial.loading': 'Submitting...',
            'trial.h1': 'Start a 30-day free trial of Safety Digi EHS Software.',
            'trial.h2': 'No credit card. No obligation.',
            'trial.incTitle': 'The free trial includes:',
            'trial.inc1': 'Access to one or more core modules: Incident and Observation Management, Permit to Work, and Inspection Management',
            'trial.inc2': 'A 30-day trial period, with extensions available on request',
            'trial.inc3': 'Unlimited users and unrestricted usage during the trial',
            'trial.inc4': 'A fully cloud-based platform with no software installation required',
            'trial.inc5': 'Full access to mobile apps on both Android and iOS',
            'trial.inc6': 'Dedicated Safety Digi support to help set up the account, configure workflows, and digitize permit or inspection checklists',
            'trial.note': '<strong>Note:</strong> The form accepts only company or business email addresses. Personal email IDs such as Gmail, Yahoo, or Outlook are not supported.',
            'trial.errorPersonal': 'Please use your company or business email address. Personal emails are not allowed.',
            'trial.errorFields': 'Please fill in all fields correctly.',
            'trial.successHeader': 'Thank You!',
            'trial.successBody': 'Your request has been submitted successfully. We will email you your account details shortly.',
            'trial.successClose': 'Back to Home'
        },

        ar: {
            'nav.home': 'الرئيسية',
            'nav.features': 'المميزات',
            'nav.pricing': 'الأسعار',
            'nav.resources': 'الموارد',
            'nav.contact': 'تواصل معنا',
            'nav.demo': 'اطلب عرضاً',
            'nav.pillars': 'الركائز',
            'nav.modules': 'الوحدات',
            'nav.screens': 'شاشات التطبيق',
            'nav.workflow': 'سير العمل',
            'nav.roles': 'الأدوار',
            'nav.download': 'تحميل',

            'hero.eyebrow': 'سلامة أذكى. أماكن عمل أقوى.',
            'hero.title': 'تطبيق إدارة السلامة المتكامل',
            'hero.sub': 'مكّن فرقك من العمل بأمان والإبلاغ بسرعة والالتزام بالمعايير — في أي مكان وأي وقت.',
            'hero.ctaApp': 'آب ستور',
            'hero.ctaPlay': 'جوجل بلاي',
            'hero.f1t': 'تعزيز السلامة',
            'hero.f1d': 'تقليل الحوادث والمخاطر',
            'hero.f2t': 'ضمان الالتزام',
            'hero.f2d': 'الالتزام بالمعايير',
            'hero.f3t': 'رؤى فورية',
            'hero.f3d': 'اتخاذ قرارات مبنية على البيانات',
            'hero.f4t': 'تمكين الفرق',
            'hero.f4d': 'إشراك وحماية فريق العمل',

            'band.title': 'مصمم لكل صناعة',
            'band.sub': 'البناء، التصنيع، النفط والغاز، الخدمات اللوجستية، الرعاية الصحية والمزيد.',

            'float.c1t': '٪98',
            'float.c1s': 'معدل الالتزام',
            'float.c2t': '1,248',
            'float.c2s': 'تفتيش هذا الشهر',
            'float.c3t': '2,345',
            'float.c3s': 'مستخدم نشط',
            'float.c4t': '23',
            'float.c4s': 'حوادث مفتوحة',

            'trust.l1': 'الركائز',
            'trust.l2': 'الوحدات الأساسية',
            'trust.l3': 'أنواع التفتيش',
            'trust.l4': 'أنواع التقارير',
            'trust.l5': 'أنواع الحوادث',
            'trust.l6': 'مستويات الوصول',

            'pillars.eyebrow': 'ركائزنا الأربع',
            'pillars.title': 'مبني حول ما يهم في الموقع.',
            'pillars.sub': 'كل شاشة وكل سير عمل وكل تقرير في سيفتي ديجي مبني على هذه الركائز الأربع — حتى لا يُفوَّت شيء في الميدان.',
            'pillars.s.title': 'السلامة',
            'pillars.s.desc': 'وحِّد تقارير الحوادث والتقاط الحوادث الوشيكة والإجراءات التصحيحية. أنشئ تلقائيًا تقارير PDF قابلة للمشاركة لحظة تسجيل الحدث.',
            'pillars.h.title': 'الصحة',
            'pillars.h.desc': 'تتبع الإصابات والخدمات الطبية وأيام العمل المفقودة. التقط بيانات LTI بنماذج منظمة لتظهر اتجاهات الصحة فورًا.',
            'pillars.e.title': 'البيئة',
            'pillars.e.desc': 'سجّل الحوادث البيئية وعمليات التفتيش بأدلة مصورة. اكتشف الأنماط مبكرًا واجعل الاستدامة على agenda يومية.',
            'pillars.p.title': 'الناس',
            'pillars.p.desc': 'من اجتماعات Toolbox Talk اليومية إلى تتبع القوى العاملة وساعات العمل — امنح كل عامل في الموقع صوتًا وسجلًا.',

            'modules.eyebrow': 'أربع وحدات أساسية',
            'modules.title': 'تطبيق واحد. كل سير عمل HSE.',
            'modules.sub': 'من اللحظة التي يلاحظ فيها عامل شيئًا في الموقع إلى التقرير الشهري على مكتب المدير — سيفتي ديجي يغطي كل شيء.',
            'modules.m1.name': 'الملاحظات',
            'modules.m1.tag': 'الوحدة 01',
            'modules.m1.title': 'الملاحظات',
            'modules.m1.desc': 'سجّل ملاحظة سلامة في ثوانٍ — النوع والمكان والفئة ووقت الإغلاق والمسؤول — واترك المشرفين يتابعون الإغلاق عبر السجل والإحصائيات.',
            'modules.m1.f1': 'نموذج سريع بالقوائم المنسدلة (النوع/المكان/الفئة/المسؤول)',
            'modules.m1.f2': 'دليل مصور لكل سجل',
            'modules.m1.f3': 'سجل قابل للفرز لكل مؤلف',
            'modules.m1.f4': 'إحصائيات: سلبي، إيجابي، مغلق + اتجاه',
            'modules.m1.stitle': 'ملاحظة جديدة',
            'modules.m2.name': 'التفتيش',
            'modules.m2.tag': 'الوحدة 02',
            'modules.m2.title': 'التفتيش',
            'modules.m2.desc': 'ستة أنواع تفتيش منظمة، لكل منها قائمة مخصصة نعم/لا/غير منطبق، وحقل "أخرى (تحديد)" وإرفاق صورة — مصمم للقفازات والعمل في الهواء الطلق ويد واحدة.',
            'modules.m2.stitle': 'تفتيش المعدات',
            'modules.m3.name': 'التقارير',
            'modules.m3.tag': 'الوحدة 03',
            'modules.m3.title': 'التقارير',
            'modules.m3.desc': 'تجمع التقارير اليومية القوى العاملة وساعات العمل واجتماعات TBT وحالة تصاريح العمل. بمجرد اكتمال <strong>26 تقريرًا يوميًا</strong>، يُبنى <strong>التقرير الشهري تلقائيًا</strong>. تُصدَّر تقارير الحوادث بصيغة <strong>PDF</strong> بنقرة واحدة.',
            'modules.m3.f1': '<strong>يومي</strong> — القوى العاملة · ساعات العمل · TBT · الحضور · PWO المعلقة',
            'modules.m3.f2': '<strong>شهري</strong> — يُحسب تلقائيًا من 26 تقريرًا يوميًا',
            'modules.m3.f3': '<strong>حوادث</strong> — حادث وشيك · حادث · بيئي · LTI',
            'modules.m3.f4': 'تصدير PDF جاهز للمشاركة مع stakeholders',
            'modules.m3.stitle': 'التقارير',
            'modules.m4.name': 'إحصائيات شهرية',
            'modules.m4.tag': 'الوحدة 04',
            'modules.m4.title': 'إحصائيات شهرية',
            'modules.m4.desc': 'عرض أداء بمستوى إداري — مقاييس HSE مجمعة تحوّل 26 يومًا من النشاط الميداني اليومي إلى أرقام شهرية واضحة وقابلة للمقارنة.',
            'modules.m4.f1': 'اتجاه الملاحظات عبر الزمن',
            'modules.m4.f2': 'مفتوح مقابل مغلق وعدد الحوادث',
            'modules.m4.f3': 'تجمعات TBT وساعات العمل و PWO',
            'modules.m4.f4': 'تصفح حسب الموقع أو المنطقة أو الدور',
            'modules.m4.stitle': 'إحصائيات شهرية',

            'form.type': 'النوع',
            'form.place': 'المكان',
            'form.category': 'الفئة',
            'form.ttc': 'وقت الإغلاق',
            'form.resp': 'المسؤول',
            'form.time': 'الوقت',
            'form.submit': 'إرسال',
            'form.attach': 'إرفاق صورة',

            'ins.i1': 'الواقي في مكانه',
            'ins.i2': 'إيقاف الطوارئ يعمل',
            'ins.i3': 'أدوات التحكم تعمل',
            'ins.i4': 'لا يوجد تسرب',
            'ins.i5': 'ملصقات التحذير مرئية',
            'ins.i6': 'معدات الحماية متاحة',
            'ins.i7': 'النظام جيد',

            'rep.daily': 'التقرير اليومي',
            'rep.dailySub': 'القوى العاملة · ساعات العمل · TBT',
            'rep.monthly': 'التقرير الشهري',
            'rep.monthlySub': 'تلقائي من 26 يوميًا',
            'rep.incident': 'حادث',
            'rep.incidentSub': 'وشيك · حادث · LTI',

            'stat.obs': 'الملاحظات',
            'stat.closed': 'مغلق',
            'stat.inc': 'حوادث',

            'screens.eyebrow': 'شاشات التطبيق',
            'screens.title': 'لمحة داخل سيفتي ديجي.',
            'screens.sub': 'تصاميم Mobile-first، أهداف لمس كبيرة، كتابة قليلة. مصمم للميدان — القفازات وأشعة الشمس ويد واحدة.',
            'scr.login': 'تسجيل الدخول',
            'scr.signin': 'تسجيل الدخول',
            'scr.user': 'المستخدم',
            'scr.pwd': 'كلمة المرور',
            'scr.loginBtn': 'دخول',

            'inc.title': 'حادث',
            'inc.near': 'حادث وشيك',
            'inc.acc': 'حادث',
            'inc.env': 'بيئي',
            'inc.lti': 'LTI',
            'inc.foot': 'إرسال ← يُنشئ تقرير PDF فورًا.',

            'wf.eyebrow': 'كيف يعمل',
            'wf.title': 'من الملاحظة الميدانية إلى التقرير الشهري — في أربع خطوات.',
            'wf.s1.t': 'التقاط',
            'wf.s1.d': 'يضغط العامل على زر الكاميرا المركزي أو يفتح وحدة. قوائم + أدلة مصورة — كتابة قليلة.',
            'wf.s2.t': 'إرسال',
            'wf.s2.d': 'كل سجل يُختم بالمؤلف والتاريخ/الوقت والمستوى — ويُحوَّل تلقائيًا إلى المشرف المناسب.',
            'wf.s3.t': 'تتبع',
            'wf.s3.d': 'مفتوح مقابل مغلق، إيجابي مقابل سلبي، اتجاهات أسبوعية. الإجراءات التصحيحية تبقى مرئية حتى التأكيد.',
            'wf.s4.t': 'تقرير',
            'wf.s4.d': '26 تقريرًا يوميًا تتحول تلقائيًا إلى تقرير شهري. ملفات PDF للحوادث بنقرة واحدة.',

            'roles.eyebrow': 'مستويات الوصول',
            'roles.title': 'ثلاثة مستويات. مصدر حقيقة واحد.',
            'roles.sub': 'كل شاشة تعرض مستوى المستخدم في الترويسة — واضح وقابل للتتبع وقابل للمحاسبة.',
            'roles.r1.t': 'مستخدم',
            'roles.r1.title': 'عامل ميداني · مفتش',
            'roles.r1.l1': 'إنشاء ملاحظات وتفتيشات وتقارير يومية',
            'roles.r1.l2': 'إرفاق صور لكل سجل',
            'roles.r1.l3': 'عرض السجل الخاص به',
            'roles.r2.t': 'مسؤول',
            'roles.r2.title': 'مشرف موقع · HSE',
            'roles.r2.l1': 'كل ما يستطيع المستخدم فعله',
            'roles.r2.l2': 'عرض كل السجلات والإحصائيات عبر الموقع',
            'roles.r2.l3': 'إدارة الحوادث والإجراءات التصحيحية',
            'roles.r3.t': 'مسؤول عام',
            'roles.r3.title': 'مدير HSE · مالك النظام',
            'roles.r3.l1': 'كل ما يستطيع المسؤول فعله',
            'roles.r3.l2': 'إدارة المستخدمين والإعدادات',
            'roles.r3.l3': 'رؤية متعددة المواقع',

            'ind.eyebrow': 'مصمم لـ',
            'ind.title': 'فرق HSE في الصناعة والبناء.',
            'ind.i1': 'النفط والغاز',
            'ind.i2': 'البناء',
            'ind.i3': 'الطاقة والكهرباء',
            'ind.i4': 'التصنيع',
            'ind.i5': 'التعدين',
            'ind.i6': 'البنية التحتية',

            'cta.title': 'أحضر سيفتي ديجي إلى موقعك اليوم.',
            'cta.sub': 'رقّم قوائم الفحص الورقية، والتقط أدلة مصورة، وحول 26 يومًا من البيانات الميدانية إلى تقرير شهري نظيف — تلقائيًا.',
            'cta.dl1': 'حمّل من',
            'cta.dl2': 'احصل عليه من',
            'cta.qr': 'امسح رمز QR من جوالك للتثبيت.',

            'footer.tag': 'أكثر أمانًا اليوم، أكثر استدامة غدًا.',
            'footer.product': 'المنتج',
            'footer.company': 'الشركة',
            'footer.contact': 'اتصل بنا',
            'footer.about': 'من نحن',
            'footer.privacy': 'الخصوصية',
            'footer.terms': 'الشروط',
            'footer.region': 'الشرق الأوسط · عالمي',
            'footer.copy': '© 2026 سيفتي ديجي. جميع الحقوق محفوظة.',
            'footer.disclaimer': 'للاستخدام المهني في HSE في المواقع الصناعية والبناء.',
            'hero.ctaDemo': 'اطلب عرضاً',
            'hero.ctaExplore': 'استكشف المميزات',
            'fs.title': 'كل ما تحتاجه في تطبيق واحد',
            'fs.s1.t': 'السلامة',
            'fs.s1.d': 'الملاحظات، عمليات التفتيش، تصاريح العمل والمزيد',
            'fs.s2.t': 'التقارير',
            'fs.s2.d': 'تقارير وتحليلات قوية',
            'fs.s3.t': 'الأصول والمواقع',
            'fs.s3.d': 'تتبع الأصول والمواقع والمنشآت',
            'fs.s4.t': 'التنبيهات',
            'fs.s4.d': 'تنبيهات وإشعارات فورية',
            'fs.s5.t': 'إدارة الحوادث',
            'fs.s5.d': 'الإبلاغ عن الحوادث وتتبعها وحلها بسرعة',
            'modules.m2.c1': 'المعدات',
            'modules.m2.c2': 'أدوات الحماية',
            'modules.m2.c3': 'السقالات',
            'modules.m2.c4': 'البيئة',
            'modules.m2.c5': 'الحريق',
            'modules.m2.c6': 'تدقيق نظام الإدارة <small>(المرحلة 2)</small>',
            'logo.text': '<strong>سيفتي</strong><span>ديجي</span>',
            'logo.sub': 'سلامة · امتثال · رعاية',
            'trial.title': 'طلب تجربة مجانية',
            'trial.subtext': 'الوصول إلى جميع الميزات لمدة 30 يومًا. لا حاجة لبطاقة ائتمان.',
            'trial.namePlace': 'الاسم الكامل',
            'trial.emailPlace': 'بريد العمل الإلكتروني',
            'trial.cityPlace': 'المدينة',
            'trial.phonePlace': 'الهاتف',
            'trial.next': 'إرسال الطلب',
            'trial.loading': 'جاري الإرسال...',
            'trial.h1': 'ابدأ تجربة مجانية لمدة 30 يومًا لبرنامج سيفتي ديجي لإدارة السلامة.',
            'trial.h2': 'لا حاجة لبطاقة ائتمان. بدون التزامات.',
            'trial.incTitle': 'التجربة المجانية تشمل:',
            'trial.inc1': 'الوصول إلى وحدة واحدة أو أكثر من الوحدات الأساسية: إدارة الحوادث والملاحظات، تصاريح العمل، وإدارة التفتيش',
            'trial.inc2': 'فترة تجربة لمدة 30 يومًا، مع إمكانية التمديد عند الطلب',
            'trial.inc3': 'مستخدمين غير محدودين واستخدام غير مقيد أثناء فترة التجربة',
            'trial.inc4': 'منصة سحابية بالكامل لا تتطلب أي تثبيت للبرامج',
            'trial.inc5': 'الوصول الكامل إلى تطبيقات الهاتف المحمول على كل من نظامي أندرويد و iOS',
            'trial.inc6': 'دعم مخصص من سيفتي ديجي للمساعدة في إعداد الحساب، وتهيئة سير العمل، وتحويل قوائم التفتيش إلى رقمية',
            'trial.note': '<strong>ملاحظة:</strong> يقبل النموذج عناوين البريد الإلكتروني للشركات أو الأعمال فقط. عناوين البريد الشخصية مثل Gmail أو Yahoo أو Outlook غير مدعومة.',
            'trial.errorPersonal': 'يرجى استخدام البريد الإلكتروني للشركة أو العمل. غير مسموح بالبريد الشخصي.',
            'trial.errorFields': 'يرجى ملء جميع الحقول بشكل صحيح.',
            'trial.successHeader': 'شكرًا لك!',
            'trial.successBody': 'تم إرسال طلبك بنجاح. سنرسل إليك تفاصيل حسابك عبر البريد الإلكتروني قريبًا.',
            'trial.successClose': 'العودة للرئيسية'
        }
    };

    /* ---------------- State ---------------- */
    let currentLang = localStorage.getItem('sd_lang') || 'en';

    /* ---------------- Apply language ---------------- */
    function applyLang(lang) {
        currentLang = lang;
        const dict = I18N[lang];
        if (!dict) return;

        document.documentElement.lang = lang;
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

        // Toggle UI
        const langActive = document.querySelector('.lang-active');
        const langOther = document.querySelector('.lang-other');
        if (langActive && langOther) {
            langActive.textContent = lang.toUpperCase();
            langOther.textContent = lang === 'en' ? 'AR' : 'EN';
        }

        // Translate all data-i18n nodes
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (dict[key] !== undefined) {
                el.innerHTML = dict[key];
            }
        });

        // Dynamic Title and SEO Meta Description Update
        if (lang === 'ar') {
            document.title = 'سيفتي ديجي — أمان أكثر اليوم، استدامة غداً | تطبيق الهاتف المحمول للصحة والسلامة والبيئة (HSE)';
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute('content', 'سيفتي ديجي هو تطبيق الهاتف المحمول المتكامل لتسجيل وتتبع والتقرير عن أنشطة الصحة والسلامة والبيئة (HSE) — الملاحظات، التفتيش، الحوادث والتقارير — مع أدلة مصورة وملفات PDF تلقائية.');
            }
        } else {
            document.title = 'Safety Digi — Safer Today, Sustainable Tomorrow | HSE Mobile App';
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) {
                metaDesc.setAttribute('content', 'Safety Digi is the all-in-one mobile app for recording, tracking, and reporting Health, Safety & Environment (HSE) activities — observations, inspections, incidents and reports — with photo evidence and auto-generated PDFs.');
            }
        }

        localStorage.setItem('sd_lang', lang);
    }

    /* ---------------- Navbar scroll ---------------- */
    const nav = document.getElementById('navbar');
    function onScroll() {
        if (window.scrollY > 30) nav.classList.add('scrolled');
        else nav.classList.remove('scrolled');
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    /* ---------------- Mobile menu ---------------- */
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('open');
            navLinks.classList.toggle('open');
        });
        navLinks.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                menuToggle.classList.remove('open');
                navLinks.classList.remove('open');
            });
        });
    }

    /* ---------------- Language toggle ---------------- */
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            applyLang(currentLang === 'en' ? 'ar' : 'en');
        });
    }

    /* ---------------- Module tabs ---------------- */
    const mtabs = document.querySelectorAll('.mtab');
    const mpanels = document.querySelectorAll('.module-panel');
    mtabs.forEach(t => {
        t.addEventListener('click', () => {
            const tgt = t.getAttribute('data-target');
            mtabs.forEach(x => x.classList.remove('active'));
            mpanels.forEach(p => p.classList.remove('active'));
            t.classList.add('active');
            const panel = document.getElementById(tgt);
            if (panel) panel.classList.add('active');
        });
    });

    /* ---------------- Reveal on scroll ---------------- */
    const reveals = document.querySelectorAll(
        '.pillar-card, .role-card, .ind-tile, .flow-step, .section-head, .meta-item, .trust-item'
    );
    reveals.forEach(el => { el.classList.add('reveal', 'pre-animate'); });

    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach(en => {
                if (en.isIntersecting) {
                    en.target.classList.add('visible');
                    io.unobserve(en.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        reveals.forEach(el => io.observe(el));
    } else {
        reveals.forEach(el => el.classList.add('visible'));
    }

    /* ---------------- Animate trust strip numbers ---------------- */
    const nums = document.querySelectorAll('.trust-num');
    if ('IntersectionObserver' in window) {
        const io2 = new IntersectionObserver((entries) => {
            entries.forEach(en => {
                if (en.isIntersecting) {
                    animateNum(en.target);
                    io2.unobserve(en.target);
                }
            });
        }, { threshold: 0.5 });
        nums.forEach(n => io2.observe(n));
    }

    function animateNum(el) {
        const target = parseInt(el.textContent, 10);
        if (isNaN(target)) return;
        let cur = 0;
        const dur = 900;
        const start = performance.now();
        function tick(now) {
            const t = Math.min(1, (now - start) / dur);
            const eased = 1 - Math.pow(1 - t, 3);
            cur = Math.round(target * eased);
            el.textContent = cur;
            if (t < 1) requestAnimationFrame(tick);
            else el.textContent = target;
        }
        requestAnimationFrame(tick);
    }

    /* ---------------- Trial Form Handler ---------------- */
    const trialForm = document.getElementById('trialForm');
    const trialError = document.getElementById('trialError');
    const successModal = document.getElementById('successModal');
    const submitBtn = document.getElementById('submitBtn');
    const btnText = document.getElementById('btnText');

    if (trialForm) {
        const personalDomains = [
            'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com',
            'icloud.com', 'aol.com', 'zoho.com', 'yandex.com',
            'mail.com', 'gmx.com', 'protonmail.com', 'proton.me',
            'live.com', 'msn.com', 'hotmail.co.uk', 'yahoo.co.uk',
            'yahoo.fr', 'yahoo.de', 'wanadoo.fr', 'orange.fr',
            'comcast.net', 'sbcglobal.net', 'charter.net', 'verizon.net'
        ];

        function isBusinessEmail(email) {
            const parts = email.split('@');
            if (parts.length < 2) return false;
            const domain = parts[1].toLowerCase().trim();
            return !personalDomains.includes(domain);
        }

        trialForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            trialError.style.display = 'none';
            trialError.textContent = '';

            const name = document.getElementById('fullName').value.trim();
            const email = document.getElementById('workEmail').value.trim();
            const city = document.getElementById('city').value.trim();
            const countryCode = document.getElementById('countryCode').value;
            const phoneVal = document.getElementById('phone').value.trim();
            const fullPhone = `${countryCode} ${phoneVal}`;

            // 1. Basic empty validations
            if (!name || !email || !city || !phoneVal) {
                const errKey = 'trial.errorFields';
                trialError.textContent = I18N[currentLang][errKey] || 'Please fill in all fields correctly.';
                trialError.style.display = 'block';
                return;
            }

            // 2. Business Email Validation
            if (!isBusinessEmail(email)) {
                const errKey = 'trial.errorPersonal';
                trialError.textContent = I18N[currentLang][errKey] || 'Please use your company or business email address. Personal emails are not allowed.';
                trialError.style.display = 'block';
                return;
            }

            // 3. Submit Form Data
            try {
                // Disable button and show loading text
                submitBtn.disabled = true;
                const loadKey = 'trial.loading';
                btnText.textContent = I18N[currentLang][loadKey] || 'Submitting...';

                // Send details to hussaintarekproject@gmail.com via FormSubmit ajax API
                const response = await fetch('https://formsubmit.co/ajax/hussaintarekproject@gmail.com', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email,
                        city: city,
                        phone: fullPhone,
                        _subject: 'New Safety Digi 30-Day Free Trial Request'
                    })
                });

                const result = await response.json();
                
                if (response.ok && (result.success === 'true' || result.success === true)) {
                    // Show success modal
                    successModal.style.display = 'flex';
                    trialForm.reset();
                } else {
                    throw new Error(result.message || 'Form submission failed');
                }
            } catch (err) {
                console.error(err);
                trialError.textContent = currentLang === 'ar' 
                    ? 'حدث خطأ أثناء إرسال طلبك. يرجى المحاولة مرة أخرى لاحقًا.' 
                    : 'An error occurred while submitting your request. Please try again later.';
                trialError.style.display = 'block';
            } finally {
                submitBtn.disabled = false;
                btnText.textContent = I18N[currentLang]['trial.next'] || 'Submit Request';
            }
        });
    }

    /* ---------------- Init ---------------- */
    applyLang(currentLang);
})();
