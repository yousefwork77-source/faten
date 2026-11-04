const stages = [
  [
    { q: "السورة التي وردت فيها البسملة مرتين", a: "النمل" },
    { q: "باني الهرم الأكبر", a: "خوفو" },
    { q: "بلد المليون شهيد", a: "الجزائر" },
    { q: "الكوكب الأحمر", a: "المريخ" },
    { q: "أمير الشعراء", a: "أحمد شوقي" },
    { q: "أعلى فيلم إيرادات في التاريخ", a: "أفاتار" }
  ],
  [
    { q: "فاتح القسطنطينية", a: "محمد الفاتح" },
    { q: "عاصمة اليابان", a: "طوكيو" },
    { q: "وحدة قياس شدة التيار", a: "الأمبير" },
    { q: "شاعر النيل", a: "حافظ إبراهيم" },
    { q: "الاسم الأول لشكسبير", a: "وليام" },
    { q: "أول منتخب فاز بكأس العالم لكرة القدم", a: "الأوروغواي" }
  ],
  [
    { q: "النهر الذي يمر ببغداد", a: "دجلة" },
    { q: "مركز الذرة موجب الشحنة", a: "النواة" },
    { q: "لغة الضاد", a: "العربية" },
    { q: "مؤسس علم البصريات", a: "ابن الهيثم" },
    { q: "الهداف التاريخي لدوري أبطال أوروبا", a: "رونالدو" },
    { q: "عملة اليابان", a: "الين" }
  ],
  [
    { q: "الكوكب الذي يمتلك أكبر عدد من الأقمار", a: "زحل" },
    { q: "مؤسس علم الجبر", a: "الخوارزمي" },
    { q: "عائلة كرتونية صفراء", a: "سيمبسون" },
    { q: "الهداف التاريخي لكأس العالم", a: "مبابي" },
    { q: "الملقب بثعلب الصحراء", a: "رومل" },
    { q: "الحيوان الذي يملك أطول فترة حمل", a: "الفيل" }
  ],
  [
    { q: "صاحب كتاب الشفاء", a: "ابن سينا" },
    { q: "الاسم الأول لفان جوخ", a: "فنسنت" },
    { q: "المنتخب الفائز بمونديال 2006", a: "إيطاليا" },
    { q: "المعدن السائل", a: "الزئبق" },
    { q: "حيوان ينام وإحدى عينيه مفتوحة", a: "الدلفين" },
    { q: "النبي الذي لُقّب بأنه أول من خط بالقلم", a: "إدريس" }
  ],
  [
    { q: "مخرج فيلم إنسبشن", a: "نولان" },
    { q: "من سجل هدف نهائي مونديال 2014", a: "غوتزه" },
    { q: "أقدم لغة موثقة بالكتابة", a: "السومرية" },
    { q: "أكبر حيوان على وجه الأرض", a: "الحوت الأزرق" },
    { q: "شيء إذا نطقت اسمه كسرته", a: "الصمت" },
    { q: "أول مؤذن في الإسلام", a: "بلال" }
  ],
  [
    { q: "أول ناد عربي فاز بدوري أبطال أفريقيا", a: "الإسماعيلي" },
    { q: "أقدم قصة مكتوبة", a: "جلجامش" },
    { q: "الطائر الذي يستطيع الطيران للخلف", a: "الطنان" },
    { q: "شيء كلما أخذت منه كبر", a: "الحفرة" },
    { q: "السورة التي ذكر فيها اسم زيد", a: "الأحزاب" },
    { q: "قائد معركة حطين", a: "صلاح الدين" }
  ],
  [
    { q: "مخترع نظام لينكس", a: "تورفالدس" },
    { q: "أكبر طائر حي", a: "النعامة" },
    { q: "حبل ..... قصير", a: "الكذب" },
    { q: "ذات النطاقين", a: "أسماء" },
    { q: "مؤسس الدولة الأموية", a: "معاوية" },
    { q: "أصغر دولة في العالم", a: "الفاتيكان" }
  ],
  [
    { q: "أكبر أنواع القطط البرية", a: "الببر" },
    { q: "المرأة الوحيدة التي ذكر اسمها في القرآن الكريم", a: "مريم" },
    { q: "النبي الذي دعا أني مسني الضر", a: "أيوب" },
    { q: "آخر ملوك البطالمة في مصر", a: "كليوباترا" },
    { q: "مدينة الظلام في عالم باتمان", a: "جوثام" },
    { q: "العالم صاحب مبدأ عدم اليقين", a: "هايزنبرغ" }
  ],
  [
    { q: "النبي الذي سماه الله تعالى بنفسه", a: "يحيى" },
    { q: "الصحابي الملقب بذي النورين", a: "عثمان" },
    { q: "صاحب كتاب المقدمة", a: "ابن خلدون" },
    { q: "الدولة التي تمتلك أطول خط ساحلي في العالم", a: "كندا" },
    { q: "ناتج خلط النحاس مع القصدير", a: "البرونز" },
    { q: "صاحب كتاب تاريخ الرسل والملوك", a: "الطبري" }
  ],
  [
    { q: "العملية التي تصنع بها النباتات غذاءها", a: "البناء الضوئي" },
    { q: "صاحب رواية الأيام", a: "طه حسين" },
    { q: "النبي الذي كان يعمل نجارا", a: "زكريا" },
    { q: "أسرع حيوان بري", a: "الفهد" },
    { q: "أعمق بحيرة في العالم", a: "بايكال" },
    { q: "مؤسس الإمبراطورية المغولية", a: "جنكيز خان" }
  ],
  [
    { q: "الملك الذي وحد القطرين", a: "مينا" },
    { q: "الدولة التي فازت بأكبر عدد من كؤوس العالم لكرة القدم", a: "البرازيل" },
    { q: "عاصمة كندا", a: "أوتاوا" },
    { q: "العضو المسؤول عن تنقية الدم", a: "الكلى" },
    { q: "جمع كلمة قاض", a: "قضاة" },
    { q: "النبي الذي ألان الله له الحديد", a: "داود" }
  ],
  [
    { q: "أول إمبراطور روماني", a: "أغسطس" },
    { q: "ضد كلمة خامل", a: "نشيط" },
    { q: "أكبر قارة في العالم مساحة", a: "آسيا" },
    { q: "مؤسس شركة مايكروسوفت", a: "بيل جيتس" },
    { q: "الصحابي الذي اهتز لموته عرش الرحمن", a: "سعد بن معاذ" },
    { q: "الدولة التي تعرف ببلاد الشمس المشرقة", a: "اليابان" }
  ],
  [
    { q: "الغزوة التي عرفت بغزوة العسرة", a: "تبوك" },
    { q: "مدينة الضباب", a: "لندن" },
    { q: "مؤلف البؤساء", a: "هوجو" },
    { q: "مخترع الهاتف", a: "غراهام بيل" },
    { q: "أكبر كوكب في المجموعة الشمسية", a: "المشتري" },
    { q: "رسام لوحة الموناليزا", a: "دافنشي" }
  ],
  [
    { q: "النادي الملقب بالسيدة العجوز", a: "يوفنتوس" },
    { q: "وحدة قياس القوة", a: "نيوتن" },
    { q: "أقدم عاصمة مأهولة باستمرار", a: "دمشق" },
    { q: "المعركة التي هزم فيها نابليون نهائيا", a: "واترلو" },
    { q: "الدولة التي كانت تعرف قديما باسم سيام", a: "تايلاند" },
    { q: "لغة برمجة رمزها حيوان زاحف", a: "بايثون" }
  ],
  [
    { q: "صوت الضفدع", a: "نقيق" },
    { q: "المعاهدة التي أنهت الحرب العالمية الأولى مع ألمانيا", a: "فرساي" },
    { q: "الجهاز الذي يستخدم الموجات للكشف عن الأجسام", a: "الرادار" },
    { q: "النادي الفائز بأول نسخة من دوري أبطال أوروبا بمسماه الحديث", a: "مارسيليا" },
    { q: "ضد كلمة مستعص", a: "متيسر" },
    { q: "أخف عنصر في الجدول الدوري", a: "الهيدروجين" }
  ],
  [
    { q: "الدولة التي نظمت أول أولمبياد حديث", a: "اليونان" },
    { q: "القائد الذي فتح الأندلس", a: "طارق بن زياد" },
    { q: "عاصمة أستراليا", a: "كانبرا" },
    { q: "العضو المسؤول عن ضخ الدم", a: "القلب" },
    { q: "مرادف كلمة ضنين", a: "بخيل" },
    { q: "الجزء الذي يعالج البيانات في الحاسوب", a: "المعالج" }
  ],
  [
    { q: "الشركة المالكة لمنصة لينكد إن", a: "مايكروسوفت" },
    { q: "أول حارس مرمى فاز بالكرة الذهبية", a: "ياشين" },
    { q: "أكبر محيط في العالم", a: "الهادئ" },
    { q: "أغلى أنواع التوابل", a: "الزعفران" },
    { q: "ضد كلمة موارب", a: "صريح" },
    { q: "السورة التي تسمى سورة القتال", a: "محمد" }
  ],
  [
    { q: "الصلاة التي لا ركوع فيها ولا سجود", a: "الجنازة" },
    { q: "مرادف كلمة فطن", a: "ذكي" },
    { q: "صاحب نظرية النسبية", a: "أينشتاين" },
    { q: "أكثر لاعب فاز بالكرة الذهبية", a: "ميسي" },
    { q: "عاصمة الدولة العباسية", a: "بغداد" },
    { q: "أطول نهر في العالم", a: "النيل" }
  ],
  [
    { q: "مطور المصباح المتوهج العملي", a: "إديسون" },
    { q: "أطول برج في العالم", a: "خليفة" },
    { q: "أكبر عضو في جسم الإنسان", a: "الجلد" },
    { q: "فن طي الورق الياباني", a: "أوريجامي" },
    { q: "مؤلف روميو وجولييت", a: "شكسبير" },
    { q: "الدولة التي بدأت فيها الثورة الصناعية", a: "بريطانيا" }
  ],
  [
    { q: "اسم صغير الخيل", a: "مهر" },
    { q: "ضد كلمة عتيق", a: "حديث" },
    { q: "أقرب نجم إلى الأرض", a: "الشمس" },
    { q: "جائزة السينما الأشهر عالميا", a: "الأوسكار" },
    { q: "مخترع الديناميت", a: "نوبل" },
    { q: "اسم أم إسماعيل عليه السلام", a: "هاجر" }
  ],
  [
    { q: "أول رئيس للولايات المتحدة", a: "واشنطن" },
    { q: "مرادف كلمة دؤوب", a: "مجتهد" },
    { q: "الجهاز المستخدم لتحديد الاتجاهات", a: "البوصلة" },
    { q: "العنصر الكيميائي الذي رمزه Ag", a: "الفضة" },
    { q: "الليلة التي أنزل فيها القرآن", a: "القدر" },
    { q: "الشيء الذي يرمز للسلام", a: "الحمامة" }
  ],
  [
    { q: "نظام تشغيل الهواتف التابع لشركة جوجل", a: "أندرويد" },
    { q: "اللاعب الذي سجل أسرع هدف في تاريخ كأس العالم", a: "شوكور" },
    { q: "الصحابي الملقب بسيف الله المسلول", a: "خالد بن الوليد" },
    { q: "أكبر جزيرة في العالم", a: "غرينلاند" },
    { q: "مرادف كلمة نزر", a: "قليل" },
    { q: "العدد الذي نصفه يساوي ثلثه", a: "صفر" }
  ],
  [
    { q: "الصبغة الخضراء في النبات", a: "الكلوروفيل" },
    { q: "القائد الذي عبر جبال الألب بالفيلة", a: "حنبعل" },
    { q: "عاصمة الأندلس قديما", a: "قرطبة" },
    { q: "أكثر ناد تحقيقا للبطولات الأوروبية", a: "ريال مدريد" },
    { q: "عاصمة تركيا", a: "أنقرة" },
    { q: "العنصر الأساسي في تكوين الألماس", a: "الكربون" }
  ],
  [
    { q: "الجبل الذي يقف فيه الحجاج يوم عرفة", a: "عرفات" },
    { q: "محرك البحث الأشهر في العالم", a: "جوجل" },
    { q: "الشيء الذي يدخل الماء ولا يبتل", a: "الضوء" },
    { q: "أول سفير في الإسلام", a: "مصعب بن عمير" },
    { q: "الملكة المصرية صاحبة معبد الدير البحري", a: "حتشبسوت" },
    { q: "مرادف كلمة سرور", a: "فرح" }
  ],
  [
    { q: "أعمق نقطة معروفة في المحيطات", a: "تشالنجر ديب" },
    { q: "عاصمة المغرب", a: "الرباط" },
    { q: "الوحدة المستخدمة لقياس سعة تخزين البيانات", a: "البايت" },
    { q: "الإمبراطورية التي كانت عاصمتها القسطنطينية", a: "البيزنطية" },
    { q: "النادي الملقب بالبلوغرانا", a: "برشلونة" },
    { q: "الفائز المصري بجائزة نوبل في الأدب", a: "نجيب محفوظ" }
  ],
  [
    { q: "العندليب الأسمر", a: "عبد الحليم" },
    { q: "أول مسجد بني في الإسلام", a: "قباء" },
    { q: "أكبر صحراء حارة في العالم", a: " الكبرى" },
    { q: "الجهاز المستخدم لتكبير الأجسام الدقيقة", a: "المجهر" },
    { q: "صاحب رواية الخيميائي", a: "باولو كويلو" },
    { q: "القائد الذي فتح مصر", a: "عمرو بن العاص" }
  ],
  [
    { q: "المعركة التي هزم فيها المماليك المغول", a: "عين جالوت" },
    { q: "كوكب الشرق", a: "أم كلثوم" },
    { q: "الجبل الذي استوت عليه سفينة نوح", a: "الجودي" },
    { q: "صاحب معلقة قفا نبك", a: "امرؤ القيس" },
    { q: "أحد مؤسسي شركة آبل", a: "ستيف جوبز" },
    { q: "عاصمة البرازيل", a: "برازيليا" }
  ],
  [
    { q: "رسام لوحة ليلة النجوم", a: "فان غوخ" },
    { q: "المضيق الذي يفصل المغرب عن إسبانيا", a: "جبل طارق" },
    { q: "الذاكرة المؤقتة في الحاسوب", a: "رام" },
    { q: "الطبقة التي تحمينا من الأشعة فوق البنفسجية", a: "الأوزون" },
    { q: "ما الذي يقع بين السماء والأرض", a: "الواو" },
    { q: "السورة التي تسمى عروس القرآن", a: "الرحمن" }
  ],
  [
    { q: "أعلى جبل في أفريقيا", a: "كليمنجارو" },
    { q: "اللاعب الذي سجل هدف فوز إسبانيا بكأس العالم 2010", a: "إنييستا" },
    { q: "أصلب مادة طبيعية", a: "الألماس" },
    { q: "القائد المغولي الذي اجتاح بغداد", a: "هولاكو" },
    { q: "العلم الذي يدرس الزلازل", a: "السيزمولوجيا" },
    { q: "النبي الذي أرسل إلى أهل مدين", a: "شعيب" }
  ]
];
const TOTAL_STAGES = stages.length;
const LAST_STAGE = TOTAL_STAGES - 1;
const QUESTIONS_PER_STAGE = 6;

// فحص أمان: بيطلعلك تحذير في الكونسول (F12) لو في مرحلة عدد أسئلتها غلط
// أو لو في إجابتين متكررتين جوه نفس المرحلة.
stages.forEach((stage, i) => {
  if (stage.length !== QUESTIONS_PER_STAGE) {
    console.error(`⚠️ المرحلة ${i + 1} فيها ${stage.length} أسئلة، والمفروض ${QUESTIONS_PER_STAGE}`);
  }
  const answers = stage.map(item => normalizeArabic(item.a));
  if (new Set(answers).size !== answers.length) {
    console.error(`⚠️ المرحلة ${i + 1} فيها إجابات مكررة`);
  }
});
// لو اللاعب جاي من رابط استعادة كلمة السر، لازم نعرف قبل ما Supabase يمسح الـ hash.
let recoveryMode = /type=recovery/.test(location.hash);
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_GVvXRyVhLDUKYoc7sNg2aw_z41UKfvL";
const db = window.supabase.createClient(
  "https://nwsvtrttlcrcepeohwfn.supabase.co",
  SUPABASE_PUBLISHABLE_KEY
);

let currentUser = null;
let bestScore = 0;
let authMode = "signup";
const $ = (id) => document.getElementById(id);
let stageIndex = 0;
let solved = new Set();
let picked = [];
let tileSet = [];
let soundOn = true;
try { soundOn = localStorage.getItem("faten-sound") !== "off"; } catch (_) {}
let audioContext = null;

// حالة التلميحات: عدد المتبقي، وأي سؤال اتكشف منه كام حرف، وهل اللاعب في وضع اختيار سؤال.
const HINTS_PER_STAGE = 3;
let hintsLeft = HINTS_PER_STAGE;
let hinted = {};
let hintMode = false;

// ===== اللاعبين وحفظ التقدم واللوحة الشرفية =====
// التقدم واللوحة الشرفية محفوظين على Supabase، والحفظ بيمر على طابور (queueSave) عشان الطلبات ما تتداخلش.

let playerName = "";

function openNameModal() {
  $("nameModal").classList.remove("hidden");
  $("nameError").textContent = "";
  $("nameInput").value = "";
  $("emailInput").value = "";
  $("passwordInput").value = "";
  $("showPassBtn").hidden = forgot;
  updateAuthUI();
}

function updateAuthUI() {
  const signup = authMode === "signup";
  const login = authMode === "login";
  const forgot = authMode === "forgot";
  const reset = authMode === "reset";

  $("authTitle").textContent = signup ? "إنشاء حساب جديد"
    : login ? "تسجيل الدخول"
    : forgot ? "استعادة كلمة السر"
    : "كلمة سر جديدة";

  $("authDescription").textContent = signup ? "أنشئ حسابك واحفظ تقدمك على أي جهاز."
    : login ? "سجّل دخولك عشان تكمل من آخر مرحلة."
    : forgot ? "اكتب إيميلك وهنبعتلك رابط تختار منه كلمة سر جديدة."
    : "اكتب كلمة السر الجديدة (٦ أحرف على الأقل).";

  $("nameInput").hidden = !signup;
  $("nameInput").required = signup;

  $("emailInput").hidden = reset;
  $("emailInput").required = !reset;

  $("passwordInput").hidden = forgot;
  $("passwordInput").required = !forgot;
  $("passwordInput").placeholder = reset
    ? "كلمة المرور الجديدة"
    : "كلمة المرور (٦ أحرف على الأقل)";
  $("passwordInput").autocomplete = login ? "current-password" : "new-password";

  $("forgotBtn").hidden = !login;

  $("startBtn").textContent = signup ? "إنشاء حساب"
    : login ? "تسجيل الدخول"
    : forgot ? "ابعت رابط الاستعادة"
    : "حفظ كلمة السر";

  $("authSwitchBtn").hidden = reset;
  $("authSwitchBtn").textContent = signup ? "عندك حساب؟ سجّل دخول"
    : login ? "لسه معندكش حساب؟ أنشئ حساب"
    : "رجوع لتسجيل الدخول";
}

async function initializePlayer(user) {
  currentUser = user;

  const { data: profile, error: profileError } = await db
    .from("profiles")
    .select("username, score")
    .eq("id", user.id)
    .single();

  if (profileError) {
    openNameModal();
    $("nameError").textContent =
      "تعذر تحميل بيانات اللاعب: " + profileError.message;
    return;
  }

  playerName = profile.username;
  bestScore = profile.score || 0;

  const { data: progress, error: progressError } = await db
    .from("progress")
    .select("stage, solved, score")
    .eq("user_id", user.id)
    .maybeSingle();

  if (progressError) {
    openNameModal();
    $("nameError").textContent =
      "تعذر تحميل التقدم: " + progressError.message;
    return;
  }

  stageIndex = progress ? Math.min(progress.stage, LAST_STAGE) : 0;
  solved = new Set((progress?.solved || []).map(Number));
  picked = [];

  $("playerName").textContent = playerName;
  $("nameModal").classList.add("hidden");
  $("nameError").textContent = "";
  $("feedback").textContent = "";
  $("feedback").className = "feedback";

  loadHints();
  prepareTiles();
  renderAll();

  if (solved.size === QUESTIONS_PER_STAGE) {
    setTimeout(showStageComplete, 300);
  }
}
let saveQueue = Promise.resolve();

function queueSave() {
  saveQueue = saveQueue.then(saveProgress).catch(console.error);
  return saveQueue;
}
async function saveProgress() {
  if (!currentUser) return;

  const score = stageIndex * QUESTIONS_PER_STAGE + solved.size;
  bestScore = Math.max(bestScore, score);

  const { error: progressError } = await db
    .from("progress")
    .upsert({
      user_id: currentUser.id,
      stage: stageIndex,
      solved: [...solved],
      score: bestScore,
      updated_at: new Date().toISOString()
    }, { onConflict: "user_id" });

  if (progressError) {
    $("feedback").textContent = "تعذر حفظ التقدم. تحقق من اتصالك.";
    $("feedback").className = "feedback bad";
    console.error(progressError);
    return;
  }




}


// بنرسم أول ١٠ لاعبين خلّصوا اللعبة، بترتيب الأسرع في الإنهاء.

async function renderBoard() {
  const list = $("boardList");
  list.innerHTML = "<li class='board-empty'>جارٍ تحميل النتائج...</li>";

  const { data, error } = await db.rpc("get_leaderboard");

  list.innerHTML = "";

  if (error) {
    list.innerHTML =
      "<li class='board-empty'>تعذر تحميل اللوحة الشرفية.</li>";
    console.error(error);
    return;
  }

  if (!data || !data.length) {
    list.innerHTML =
      "<li class='board-empty'>لسه مفيش لاعبين.</li>";
    return;
  }

  const medals = ["🥇", "🥈", "🥉"];
  const total = TOTAL_STAGES * QUESTIONS_PER_STAGE;
  let gapAdded = false;

  data.forEach(player => {
    const rank = Number(player.rank);

    // لو اللاعب برا أول ١٠، بنحط فاصل قبل صفه.
    if (rank > 10 && !gapAdded) {
      const gap = document.createElement("li");
      gap.className = "board-gap";
      gap.textContent = "⋯";
      list.appendChild(gap);
      gapAdded = true;
    }

    const li = document.createElement("li");
    li.className = "board-row";
    if (player.is_me) li.classList.add("me");
    if (player.finished) li.classList.add("finished");

    const rankEl = document.createElement("span");
    rankEl.className = "rank";
    rankEl.textContent = rank <= 3 ? medals[rank - 1] : displayNumber(rank);

    const name = document.createElement("span");
    name.className = "board-name";
    name.textContent = player.username + (player.finished ? " 🏆" : "");

    const score = document.createElement("span");
    score.className = "board-score";
    score.textContent = `${displayNumber(player.score)} / ${displayNumber(total)}`;

    li.append(rankEl, name, score);
    list.appendChild(li);
  });
}

function openBoard() {
  $("boardModal").classList.remove("hidden");
  renderBoard();
}


// الشاشة الختامية بعد آخر مرحلة.

async function showFinish() {
  await saveQueue;
  const totalAnswers = TOTAL_STAGES * QUESTIONS_PER_STAGE;
  $("finishAnswers").textContent = `${displayNumber(totalAnswers)} / ${displayNumber(totalAnswers)}`;
  $("finishStages").textContent = `${displayNumber(TOTAL_STAGES)} / ${displayNumber(TOTAL_STAGES)}`;
  $("finishTitle").textContent = `مبروك يا ${playerName}!`;
  $("finishText").textContent =
    "أنهيت كل مراحل فَطِن! شوف اللوحة الشرفية.";

  $("finishRank").textContent = "—";
  $("finishModal").classList.remove("hidden");
    launchConfetti(.2, .3, 70);
  launchConfetti(.5, .25, 90);
  launchConfetti(.8, .3, 70);

  const { data, error } = await db.rpc("get_leaderboard");

  if (error) {
    console.error(error);
    return;
  }

  const me = (data || []).find(player => player.is_me);

  if (me) {
    const rank = Number(me.rank);
    $("finishRank").textContent = `#${displayNumber(rank)}`;
    if (rank === 1) {
      $("finishText").textContent =
        "أنت أول لاعب في اللوحة الشرفية دلوقتي!";
    }
  }

  playTone(660, .12);
  setTimeout(() => playTone(880, .16), 130);
  setTimeout(() => playTone(1100, .2), 280);
  setTimeout(() => playTone(1320, .25), 450);
}


// بنعيد اللعب من المرحلة الأولى، ونتيجتك الأعلى بتفضل محفوظة.
function replay() {
  stageIndex = 0;
  resetHints();
  saveHints();
  solved = new Set();
  $("finishModal").classList.add("hidden");
  queueSave();
  prepareTiles();
  $("feedback").textContent = "";
  $("feedback").className = "feedback";
  renderAll();
}

// بنوحّد شكل الحروف عشان اختلاف الهمزات أو المسافات ما يمنعش التحقق من الإجابة.
function normalizeArabic(value) {
  return value.normalize("NFC")
    .replace(/[ًٌٍَُِّْـٰ]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ى/g, "ي")
    .replace(/[^\u0621-\u064A]/g, "");
}

// بنعرض الأرقام بالأرقام العربية عشان شكل الواجهة يبقى مناسب للعبة.
function displayNumber(n) {
  return String(n).replace(/\d/g, d => "٠١٢٣٤٥٦٧٨٩"[Number(d)]);
}

// بنقسم كل إجابة لمقاطع؛ الأغلب حرفين، والأقل حرف أو تلاتة، عشان اللوحة تبقى أخف وأوضح.
function splitWordIntoChunks(word) {
  const clean = normalizeArabic(word);
  const chunks = [];
    // كلمة من ٣ حروف بس: بنقسمها لمقطعين عشان ما تظهرش جاهزة على اللوحة.
  if (clean.length === 3) {
    const cut = Math.random() < .5 ? 1 : 2;
    return [clean.slice(0, cut), clean.slice(cut)];
  }
  let i = 0;
  while (i < clean.length) {
    const remaining = clean.length - i;
    let size;
    if (remaining <= 3) {
      // آخر الكلمة: لو فاضل ٣ بنخليه مقطع واحد، وغير كده بنقفل بالباقي زي ما هو.
      size = remaining;
    } else if (remaining === 4) {
      size = 2; // ٢ + ٢
    } else {
      // الأغلب حرفين (٧٠٪)، وأحيانًا تلاتة (١٥٪) أو حرف (١٥٪).
      const r = Math.random();
      size = r < .7 ? 2 : (r < .85 ? 3 : 1);
    }
    chunks.push(clean.slice(i, i + size));
    i += size;
  }
  return chunks;
}

// بنقسم الإجابة كلمة كلمة، عشان مفيش مقطع يجمع آخر حرف في كلمة مع أول حرف في اللي بعدها.
function splitIntoChunks(answer) {
  return answer
    .trim()
    .split(/\s+/)
    .flatMap(word => splitWordIntoChunks(word));
}

// بنخلط البلاطات عشان ترتيبها ما يكشفش الإجابات من البداية.
function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

// أقصى عدد حروف ممكن اللاعب يختاره = طول أطول إجابة لسه متحلتش في المرحلة.
function getMaxLetters() {
  const lengths = stages[stageIndex]
    .filter((_, index) => !solved.has(index))
    .map(item => normalizeArabic(item.a).length);
  return lengths.length ? Math.max(...lengths) : 0;
}

// عدد الحروف اللي اللاعب اختارها دلوقتي (المقطع ممكن يبقى حرفين).
function getPickedLetterCount() {
  return picked.reduce((sum, id) => {
    const tile = tileSet.find(item => item.id === id);
    return sum + (tile ? tile.value.length : 0);
  }, 0);
}

// صوت بسيط للتفاعل، وممكن اللاعب يكتمه من زر الصوت فوق.
function playTone(frequency = 660, duration = .09) {
  if (!soundOn) return;
  try {
    audioContext = audioContext || new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(.06, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + duration);
    oscillator.connect(gain);
    gain.connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
  } catch (_) {}
}

// بنجهز لوحة المرحلة من مقاطع إجابات الأسئلة اللي لسه متحلتش، وبعدها بنخلطها.
function prepareTiles() {
  const allTiles = [];
  stages[stageIndex].forEach((item, questionIndex) => {
    if (solved.has(questionIndex)) return;
    splitIntoChunks(item.a).forEach((value, chunkIndex) => {
      allTiles.push({ id: `${stageIndex}-${questionIndex}-${chunkIndex}-${Math.random().toString(36).slice(2, 8)}`, value, question: questionIndex });
    });
  });
  tileSet = shuffle(allTiles);
  picked = [];
}

// بنرسم نقط الإجابة: نقطة لكل حرف، ومسافة أكبر بين الكلمات، وبنكشف أول حروف لو اتطلب تلميح.
function getDots(answer, revealed = 0) {
  let counter = 0;
  return answer
    .trim()
    .split(/\s+/)
    .map(word =>
      [...normalizeArabic(word)]
        .map(letter => (counter++ < revealed ? letter : "•"))
        .join(" ")
    )
    .join(" \u2003 ");
}

// كل بطاقة بتعرض السؤال وتحته نقط بعدد حروف الإجابة، أو الإجابة نفسها بعد الحل.
function renderQuestions() {
  const grid = $("questionsGrid");
  grid.innerHTML = "";
  stages[stageIndex].forEach((item, index) => {
    const card = document.createElement("div");
    card.className = "question-card" + (solved.has(index) ? " solved" : "");
    const number = document.createElement("span");
    number.className = "number";
    number.textContent = displayNumber(index + 1);
    const question = document.createElement("span");
    question.className = "q-preview";
    question.textContent = item.q;
    const answer = document.createElement("div");
    answer.className = "card-answer" + (solved.has(index) ? " revealed" : "");
    answer.textContent = solved.has(index) ? item.a : getDots(item.a, hinted[index] || 0);
    card.append(number, question, answer);
    if (hintMode && !solved.has(index)) {
      card.classList.add("hintable");
      card.addEventListener("click", () => useHint(index));
    }
    if (solved.has(index)) {
      const status = document.createElement("span");
      status.className = "status";
      status.textContent = "✓";
      card.appendChild(status);
    }
    grid.appendChild(card);
  });
}

// بنعرض الحروف اللي اللاعب اختارها مؤقتًا، عشان يقدر يتابع تكوين الإجابة.
// بنعرض المقاطع اللي اللاعب اختارها، وأي مقطع بيرجع للوحة لما اللاعب يدوس عليه.
function renderPicked() {
  const slots = $("answerSlots");
  slots.innerHTML = "";
  $("checkBtn").disabled = picked.length === 0;
  if (!picked.length) {
    const hint = document.createElement("span");
    hint.className = "selection-hint";
        hint.textContent = "اختار مقاطع الحروف لتكوين إجابة";
    slots.appendChild(hint);
    return;
  }
  picked.forEach(id => {
    const tile = tileSet.find(item => item.id === id);
    if (!tile) return;
    const slot = document.createElement("button");
    slot.type = "button";
    slot.className = "answer-slot filled";
    slot.textContent = tile.value;
    slot.title = "اضغط لإرجاع المقطع";
    slot.addEventListener("click", () => removeTile(id));
    slots.appendChild(slot);
  });
}

// بنرسم كل بلاطات المرحلة، وبنخفي البلاطات اللي اتستخدمت في إجابة صحيحة.
function renderTiles() {
  const container = $("letterTiles");
  container.innerHTML = "";
  tileSet.forEach(tile => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "letter-tile";
    button.textContent = tile.value;
    button.disabled = picked.includes(tile.id);
    button.addEventListener("click", () => chooseTile(tile.id));
    container.appendChild(button);
  });
}
// لما اللاعب يدوس على مقطع في خانات الإجابة، بنشيله من الاختيار ونرجّعه للوحة.
function removeTile(tileId) {
  picked = picked.filter(id => id !== tileId);
  $("feedback").textContent = "";
  $("feedback").className = "feedback";
  playTone(380, .05);
  renderPicked();
  renderTiles();
}
// بنهز خانات الإجابة ونعمل اهتزاز في الموبايل لما اللاعب يغلط أو يوصل للحد الأقصى.
function shakeAnswer() {
  const slots = $("answerSlots");
  slots.classList.remove("shake");
  void slots.offsetWidth; // بيخلي الأنيميشن يشتغل تاني لو اتكرر
  slots.classList.add("shake");
  if (navigator.vibrate) navigator.vibrate(120);
}

// لما اللاعب يختار مقطع، بنضيفه لخانات الإجابة بس (الفحص بيتم لما يدوس "افحص").
function chooseTile(tileId) {
  if (picked.includes(tileId)) return;
  const tile = tileSet.find(item => item.id === tileId);
  if (!tile) return;
  // لو المقطع ده هيعدّي الحد الأقصى، بنمنعه ونقول للاعب السبب.
  if (getPickedLetterCount() + tile.value.length > getMaxLetters()) {
    $("feedback").textContent = "وصلت للحد الأقصى من الحروف، شيل مقطع الأول";
    $("feedback").className = "feedback bad";
    playTone(220, .1);
    shakeAnswer();
    return;
  }
  picked.push(tileId);
  playTone(460 + picked.length * 25, .06);
  $("feedback").textContent = "";
  $("feedback").className = "feedback";
  renderPicked();
  renderTiles();
}

// لما اللاعب يدوس "افحص"، بنقارن اللي جمعه بإجابات الأسئلة اللي لسه متحلتش.
function checkAnswer() {
  if (!picked.length) return;
  const attempt = picked.map(id => tileSet.find(tile => tile.id === id)?.value || "").join("");
  const normalizedAttempt = normalizeArabic(attempt);
  const questionIndex = stages[stageIndex].findIndex(
    (item, index) => !solved.has(index) && normalizeArabic(item.a) === normalizedAttempt
  );

  // إجابة غلط: بنهز الخانات، وبنسيب المقاطع مكانها عشان اللاعب يعدّل عليها.
  if (questionIndex === -1) {
    $("feedback").textContent = "إجابة غير صحيحة، جرّب تاني";
    $("feedback").className = "feedback bad";
    playTone(220, .12);
    shakeAnswer();
    return;
  }

  solved.add(questionIndex);
  $("feedback").textContent = "إجابة صحيحة! أحسنت ✓";
  $("feedback").className = "feedback good";
  playTone(880, .15);
  // لو كل المقاطع اللي اتختارت تبع نفس السؤال، بنشيلها بس وباقي البلاطات تفضل مكانها.
  // لو اللاعب خلط مقاطع من أسئلة تانية، بنعيد بناء اللوحة عشان كل سؤال يفضل ممكن يتحل.
  const allFromSameQuestion = picked.every(id => tileSet.find(t => t.id === id)?.question === questionIndex);
  if (allFromSameQuestion) {
    tileSet = tileSet.filter(t => t.question !== questionIndex);
    picked = [];
  } else {
    prepareTiles();
  }
  renderAll();
  document.querySelectorAll(".question-card")[questionIndex]?.classList.add("just-solved");
    const solvedCard = document.querySelectorAll(".question-card")[questionIndex];
  if (solvedCard) {
    const r = solvedCard.getBoundingClientRect();
    launchConfetti((r.left + r.width / 2) / innerWidth, (r.top + r.height / 2) / innerHeight, 30);
  }
  if (solved.size === QUESTIONS_PER_STAGE) {
    queueSave().then(() => setTimeout(showStageComplete, 650));
  } else {
    queueSave();
  }
}

// بنحدّث شريط التقدم وعدد الأسئلة اللي اتحلت في المرحلة الحالية.
function updateProgress() {
  $("levelLabel").textContent = `المرحلة ${displayNumber(stageIndex + 1)} من ${displayNumber(TOTAL_STAGES)}`;
  $("progressLabel").textContent = `${displayNumber(solved.size)} من ${displayNumber(QUESTIONS_PER_STAGE)} إجابات`;
  $("progressBar").style.width = `${solved.size / QUESTIONS_PER_STAGE * 100}%`;
}

// بنحدّث أجزاء الشاشة المرتبطة ببعض بعد كل إجابة.
function renderAll() {
  renderQuestions();
  renderPicked();
  renderTiles();
  updateProgress();
  updateHintButton();
}


// بنبدأ مرحلة جديدة بلوحة حروف جديدة وأسئلة غير محلولة، ونحفظ التقدم.
function nextStage() {
  stageIndex = Math.min(stageIndex + 1, LAST_STAGE);
  resetHints();
  saveHints();
  solved = new Set();
  $("stageModal").classList.add("hidden");
  queueSave();
  prepareTiles();
  $("feedback").textContent = "";
  $("feedback").className = "feedback";
  renderAll();
}

// بنظهر نافذة الاحتفال بعد حل أسئلة المرحلة الستة، وبعد آخر مرحلة بنفتح الشاشة الختامية.
function showStageComplete() {
  if (stageIndex === LAST_STAGE) {
    showFinish();
    return;
  }
  $("modalTitle").textContent = "أكملت المرحلة!";
  $("modalText").textContent = "أحسنت! ستة أسئلة أُجيبت بنجاح. مستعد للتحدي التالي؟";
  $("nextStageBtn").textContent = "المرحلة التالية ←";
  $("stageModal").classList.remove("hidden");
    launchConfetti(.25, .35, 60);
  launchConfetti(.75, .35, 60);
  playTone(660, .12);
  setTimeout(() => playTone(880, .16), 130);
  setTimeout(() => playTone(1100, .2), 280);
}


// ===== الكونفيتي =====
let confettiParticles = [];
let confettiRunning = false;

// بنقرا ألوان الثيم الحالي عشان الكونفيتي يطابقه.
function confettiColors() {
  const css = getComputedStyle(document.documentElement);
  return ["--jade", "--gold", "--good", "--text"].map(name => css.getPropertyValue(name).trim());
}

// x و y نسب من ٠ لـ ١ من حجم الشاشة، وcount عدد القطع.
function launchConfetti(x = .5, y = .4, count = 40) {

  const canvas = $("confettiCanvas");
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  const colors = confettiColors();

  for (let i = 0; i < count; i++) {
    const angle = Math.random() * Math.PI * 2;
    const speed = 4 + Math.random() * 7;
    confettiParticles.push({
      x: x * canvas.width,
      y: y * canvas.height,
      vx: Math.cos(angle) * speed,
      vy: Math.sin(angle) * speed - 4,
      size: 5 + Math.random() * 6,
      rot: Math.random() * Math.PI,
      vr: (Math.random() - .5) * .4,
      color: colors[Math.floor(Math.random() * colors.length)],
      life: 1
    });
  }
  if (!confettiRunning) {
    confettiRunning = true;
    requestAnimationFrame(drawConfetti);
  }
}

function drawConfetti() {
  const canvas = $("confettiCanvas");
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  confettiParticles = confettiParticles.filter(p => p.life > 0 && p.y < canvas.height + 20);
  confettiParticles.forEach(p => {
    p.x += p.vx;
    p.y += p.vy;
    p.vy += .25;
    p.vx *= .99;
    p.rot += p.vr;
    p.life -= .012;
    ctx.save();
    ctx.globalAlpha = Math.max(p.life, 0);
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.fillStyle = p.color;
    ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
    ctx.restore();
  });

  if (confettiParticles.length) {
    requestAnimationFrame(drawConfetti);
  } else {
    confettiRunning = false;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}
// ===== التلميحات =====

// بنحفظ التلميحات على الجهاز، مربوطة بالمستخدم ورقم المرحلة.
function hintsKey() {
  return `faten-hints-${currentUser ? currentUser.id : "guest"}`;
}

function saveHints() {
  try {
    localStorage.setItem(hintsKey(), JSON.stringify({
      stage: stageIndex,
      left: hintsLeft,
      hinted
    }));
  } catch (_) {}
}

// بنسترجع التلميحات لو محفوظة لنفس المرحلة، وغير كده بنبدأ من الأول.
function loadHints() {
  resetHints();
  try {
    const saved = JSON.parse(localStorage.getItem(hintsKey()) || "null");
    if (saved && saved.stage === stageIndex) {
      hintsLeft = Math.max(0, Math.min(HINTS_PER_STAGE, Number(saved.left)));
      hinted = saved.hinted && typeof saved.hinted === "object" ? saved.hinted : {};
    }
  } catch (_) {}
}

// بنرجّع التلميحات لوضعها الأصلي مع كل مرحلة جديدة.
function resetHints() {
  hintsLeft = HINTS_PER_STAGE;
  hinted = {};
  hintMode = false;
}

// بنحدّث نص زر التلميح وبنعطّله لو التلميحات خلصت.
function updateHintButton() {
  const btn = $("hintBtn");
  $("hintCount").textContent = displayNumber(hintsLeft);
  btn.classList.toggle("active", hintMode);
  btn.classList.toggle("empty", hintsLeft <= 0);
  btn.disabled = hintsLeft <= 0 && !hintMode;
}

// بنكشف حرف من السؤال اللي اللاعب اختاره.
function useHint(questionIndex) {
  const length = normalizeArabic(stages[stageIndex][questionIndex].a).length;
  const revealed = hinted[questionIndex] || 0;
  hintMode = false;

  if (revealed >= length - 1) {
    $("feedback").textContent = "مفيش تلميح تاني للسؤال ده";
    $("feedback").className = "feedback bad";
    renderAll();
    return;
  }

  hinted[questionIndex] = revealed + 1;
  hintsLeft--;
    saveHints();
  $("feedback").textContent = "💡 اتكشف حرف";
  $("feedback").className = "feedback good";
  playTone(520, .1);
  renderAll();
}

$("hintBtn").addEventListener("click", () => {
  if (hintsLeft <= 0 && !hintMode) return;
  hintMode = !hintMode;
  $("feedback").textContent = hintMode ? "اضغط على السؤال اللي عايز تلميح ليه" : "";
  $("feedback").className = "feedback";
  renderAll();
});

// زر "افحص" بيتحقق من الإجابة اللي اللاعب جمعها.
$("checkBtn").addEventListener("click", checkAnswer);

// بنظبط شكل زر الصوت حسب الحالة الحالية.
function syncSoundButton() {
  $("soundToggle").textContent = soundOn ? "🔊" : "🔇";
  $("soundToggle").setAttribute("aria-label", soundOn ? "كتم الصوت" : "تشغيل الصوت");
}

// زر الصوت بيشغّل أو يكتم أصوات التفاعل.
$("soundToggle").addEventListener("click", () => {
  soundOn = !soundOn;
  try { localStorage.setItem("faten-sound", soundOn ? "on" : "off"); } catch (_) {}
  syncSoundButton();
  if (soundOn) playTone(660, .1);
});

// ===== الثيمات =====
const THEMES = [

  
  { id: "forest", icon: "🌲", name: "ثيم الغابة",   bar: "#121c16" },
    { id: "dark", icon: "🌙", name: "الوضع الداكن", bar: "#071b27" },
  { id: "sunset", icon: "🌅", name: "ثيم الغروب", bar: "#1c1526" },
    { id: "light", icon: "☀️", name: "الوضع الفاتح", bar: "#e9e4d8" }

];
function getThemeIndex() {
  const current = document.documentElement.getAttribute("data-theme") || "dark";
  const index = THEMES.findIndex(t => t.id === current);
  return index === -1 ? 0 : index;
}

// بنظبط أيقونة الزر (بتعرض الثيم اللي هيجي بعد كده) ولون شريط المتصفح.
function syncThemeButton() {
  const index = getThemeIndex();
  const current = THEMES[index];
  const next = THEMES[(index + 1) % THEMES.length];
  $("themeToggle").textContent = current.icon;
  $("themeToggle").setAttribute("aria-label", current.name + " (اضغط للتبديل إلى " + next.name + ")");
  $("themeToggle").title = current.name;
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.setAttribute("content", current.bar);
}
$("themeToggle").addEventListener("click", () => {
  const next = THEMES[(getThemeIndex() + 1) % THEMES.length];
  if (next.id === "dark") {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", next.id);
  }
  try { localStorage.setItem("faten-theme", next.id); } catch (_) {}
  syncThemeButton();
  playTone(520, .06);
});
// زر المرحلة التالية بينقل اللاعب للمرحلة اللي بعدها.
$("nextStageBtn").addEventListener("click", nextStage);


$("authSwitchBtn").addEventListener("click", () => {
  authMode = authMode === "login" ? "signup" : "login";
  $("nameError").textContent = "";
  $("nameError").classList.remove("success");
  updateAuthUI();
});

$("forgotBtn").addEventListener("click", () => {
  authMode = "forgot";
  $("nameError").textContent = "";
  $("nameError").classList.remove("success");
  updateAuthUI();
});

$("authForm").addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = $("emailInput").value.trim();
  const password = $("passwordInput").value;
  const username = $("nameInput").value.trim();

  $("nameError").textContent = "";
  $("nameError").classList.remove("success");
  $("startBtn").disabled = true;

  try {
    if (authMode === "forgot") {
      const { error } = await db.auth.resetPasswordForEmail(email, {
        redirectTo: location.origin + location.pathname
      });
      if (error) throw error;
      $("nameError").textContent =
        "لو الإيميل مسجل عندنا، هيوصلك رابط الاستعادة. شوف الـ Spam كمان.";
      $("nameError").classList.add("success");
      return;
    }

    if (authMode === "reset") {
      if (password.length < 6) {
        throw new Error("كلمة السر لازم تكون ٦ أحرف على الأقل.");
      }
      const { data, error } = await db.auth.updateUser({ password });
      if (error) throw error;
      recoveryMode = false;
      history.replaceState(null, "", location.pathname);
      authMode = "login";
      await initializePlayer(data.user);
      return;
    }

    if (authMode === "signup") {
      if (username.length < 2) {
        throw new Error("اكتب اسمًا من حرفين على الأقل.");
      }

      const { data, error } = await db.auth.signUp({
        email,
        password,
        options: {
          data: { username }
        }
      });

      if (error) throw error;

      if (!data.session) {
        $("nameError").textContent =
          "تم إنشاء الحساب. افتح بريدك الإلكتروني لتأكيده، ثم سجّل الدخول.";
        $("nameError").classList.add("success");
        return;
      }

      await initializePlayer(data.user);
    } else {
      const { data, error } = await db.auth.signInWithPassword({
        email,
        password
      });

      if (error) throw error;

      await initializePlayer(data.user);
    }
  } catch (error) {
    const message = error.message || "";
    $("nameError").textContent = /database error saving new user/i.test(message)
      ? "الاسم ده غالبًا مستخدم قبل كده، اختار اسم تاني."
      : message || "حصل خطأ أثناء التسجيل.";
  } finally {
    $("startBtn").disabled = false;
  }
});

$("boardBtn").addEventListener("click", openBoard);
$("closeBoardBtn").addEventListener("click", () => $("boardModal").classList.add("hidden"));

$("switchPlayerBtn").addEventListener("click", async () => {
  $("boardModal").classList.add("hidden");

  const { error } = await db.auth.signOut();

  if (error) {
    console.error(error);
    alert("تعذر تسجيل الخروج. حاول مرة أخرى.");
    return;
  }

  currentUser = null;
  playerName = "";
  bestScore = 0;
  openNameModal();
});

$("finishBoardBtn").addEventListener("click", () => {
  $("finishModal").classList.add("hidden");
  openBoard();
});
$("replayBtn").addEventListener("click", replay);

// بنرسم اللعبة الأول، وبعدها بنكمّل مع آخر لاعب لو موجود، أو نطلب الاسم.

async function initializeApp() {
  syncSoundButton();
  syncThemeButton();
  updateAuthUI();

  const { data, error } = await db.auth.getSession();

  if (error) {
    console.error(error);
    finishLoading();
    openNameModal();
    return;
  }

  if (recoveryMode) {
    authMode = "reset";
    finishLoading();
    openNameModal();
    return;
  }

  if (data.session) {
    await initializePlayer(data.session.user);
  } else {
    prepareTiles();
    renderAll();
    openNameModal();
  }
  finishLoading();
}

function finishLoading() {
  document.querySelector(".app-shell").classList.remove("loading");
  const loader = $("loader");
  if (loader) {
    loader.classList.add("done");
    setTimeout(() => loader.remove(), 500);
  }
}
db.auth.onAuthStateChange((event) => {
  if (event === "PASSWORD_RECOVERY") {
    recoveryMode = true;
    authMode = "reset";
    openNameModal();
  }
});
// Esc بيقفل اللوحة الشرفية.
document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (!$("boardModal").classList.contains("hidden")) {
    $("boardModal").classList.add("hidden");
  }
});
// ===== الكيبورد =====
document.addEventListener("keydown", (event) => {
  // لو في نافذة مفتوحة أو اللاعب بيكتب في حقل، منعملش حاجة.
  if (document.querySelector(".modal:not(.hidden)")) return;
  const tag = event.target.tagName;
  if (tag === "INPUT" || tag === "TEXTAREA") return;

  if (event.key === "Enter") {
    // لو الفوكس على زر، Enter بيضغطه بنفسه، فمنكرّرش.
    if (tag === "BUTTON") return;
    event.preventDefault();
    checkAnswer();
  } else if (event.key === "Backspace") {
    event.preventDefault();
    if (picked.length) removeTile(picked[picked.length - 1]);
  }
});
$("showPassBtn").addEventListener("click", () => {
  const input = $("passwordInput");
  const show = input.type === "password";
  input.type = show ? "text" : "password";
  $("showPassBtn").textContent = show ? "إخفاء كلمة السر" : "إظهار كلمة السر";
});
initializeApp();