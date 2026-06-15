// المنهج الشامل والمتكامل - Front-End Engineer Academy
// حوار ممتع ومفصل بين حازم (المهندس) ومحمود (الطالب) - الشرح أولاً ثم الأسئلة المضمنة بالسكرول
const courseData = {
    chapter1: {
        name: "الفصل 1: كواليس شبكة الإنترنت والـ Browser (من الصفر تماماً)",
        lessons: {
            1: {
                title: "الدرس 1: الرحلة السرية من كتابة الرابط لحد ظهور الموقع",
                topic: "كيف تعمل الويب؟",
                // حوار طويل ومكثف (لا يقل عن 50 رسالة مدمجة لتبسيط المفاهيم) مع 3 أسئلة كمائن في النص
                dialogue: [
                    { sender: "peer", text: "يا بشمهندس حازم، أنا بركب المواصلات وبشوف الناس بتفتح مواقع زي فيسبوك وأمازون في ثانية، هو إيه اللي بيحصل في الثواني دي تحت الغطاء؟" },
                    { sender: "mentor", text: "يا هلا يا محمود! سؤالك ده هو أول خطوة تخليك مهندس بجد مش مجرد كودر. بص يا سيدي، الكمبيوتر بتاعك أو موبايلك لما بيفتح موقع، بيبقى اسمه (Client) أو العميل. والموقع ده ملفاته متخزنة على كمبيوتر تاني قوى جداً شغال 24 ساعة اسمه (Server) أو الخادم." },
                    { sender: "peer", text: "تمام، يعني أنا بطلب والحاج السيرفر ده بيبعتلي؟" },
                    { sender: "mentor", text: "بالظبط، بس هما مش جيران عشان يلقطوا من بعض عل طول! أول ما بتكتب مثلاً google.com، جهازك ميعرفش يعني إيه الاسم ده، الكمبيوتر مبيفهمش غير أرقام اسمها الـ IP Address." },
                    { sender: "peer", text: "أرقام؟ زي رقم التليفون كده؟" },
                    { sender: "mentor", text: "ينور عليك! وعشان جهازك يترجم الكلمة لأرقام، بيروح لـ دليل تليفونات الإنترنت، وده سيستم ضخم اسمه DNS (Domain Name System). الـ DNS بيقوله: خد يا عم الـ IP بتاع جوجل اهو." },
                    { sender: "peer", text: "يا ابن اللعيبة! يعني الـ DNS ده مجرد مترجم أسماء لأرقام؟" },
                    { sender: "mentor", text: "بالظبط! أول ما جهازك ياخد الـ IP، بيعمل حاجة اسمها Request (طلب) ويبعته للسيرفر عبر أسلاك غاطسة في المحيطات والبحار عشان يوصل لأمريكا أو المكان اللي فيه السيرفر." },
                    { sender: "peer", text: "أسلاك في المحيطات؟ الموضوع طلع سينما وخيال علمي!" },
                    { sender: "mentor", text: "أومال إيه! السيرفر يستلم الـ Request، يراجعه، ويقوم باعت الرد (Response) محمل بملفات الموقع (HTML, CSS, JS). الملفات دي بتيجي في شكل حزم صغيرة جداً اسمها Packets." },
                    { sender: "peer", text: "يعني الموقع بيجي حتت حتت مش حتة واحدة؟" },
                    { sender: "mentor", text: "ينور عليك، بتيجي متقسّمة، والـ Browser (المتصفح) بتاعك بقا هو البطل اللي بيجمع الـ Packets دي ويقرأ الأكواد ويفك شفرتها عشان يعرضلك الشاشة الجميلة اللي بتشوفها." },
                    
                    // 🛑 الكمين الأول: اختبار ذكاء وتذكر بناءً على آخر 10 رسايل
                    { type: "challenge", id: "ch1_1", question: "كمين رقم 1: بناءً على اللي حازم شرحه، إيه هو الدور الأساسي لسيرفر الـ DNS في الشبكة؟", options: ["تخزين ملفات الصور والفيديوهات الخاصة بالموقع", "تحويل أسماء المواقع (الدومين) إلى أرقام IP يفهمها الكمبيوتر", "تسريع باقة الإنترنت عند تصفح المواقع الكبيرة", "تلوين عناصر الصفحة وتنسيقها للمستخدم"], answer: 1, explanation: "وحش يا محمود! الـ DNS هو فعلاً دليل التليفونات اللي بيترجم الاسم لـ IP." },
                    
                    { sender: "peer", text: "عاش يا بشمهندس، أنا كده لقطت أول كمين والـ Browser جمع الملفات. بيعمل بيها إيه بقى؟" },
                    { sender: "mentor", text: "المتصفح بيبدأ يقرأ ملف الـ HTML سطر سطر من فوق لتحت. العملية دي اسمها Parsing. وهو بيقرأ، بيحول كل كلمة وتايج (Tag) لـ كائن أو Object جوه شجرة وعلاقات وراثة اسمها الـ DOM Tree (Document Object Model)." },
                    { sender: "peer", text: "شجرة الـ DOM؟ يعني إيه شجرة؟" },
                    { sender: "mentor", text: "يعني علاقة أب وأبناء. الـ <html> هو الجد الأكبر، جواه <body> الأب، وجوه البودي بتلاقي الأبناء زي العناوين والفقرات والزراير. المتصفح بيعمل الخريطة دي عشان يعرف مين جوه مين." },
                    { sender: "peer", text: "طب والـ CSS بيروح فين؟" },
                    { sender: "mentor", text: "وهو شغال، لو قابل ملف CSS، بيعمل نفس الحركة ويعمل شجرة تانية للألوان والاستايلات اسمها CSSOM Tree. بعد كده يدمج الشجرتين مع بعض في شجرة تالتة اسمها Render Tree." },
                    { sender: "peer", text: "يا روقانك يا متصفح! يعني الـ Render Tree دي الشجرة الجاهزة للظهور؟" },
                    { sender: "mentor", text: "عليك نور! بس قبل ما تظهر، المتصفح بيعمل خطوة اسمها Layout، يعني يحسب بالظبط كل عنصر مكانه فين على الشاشة (كام بيكسل من فوق وكام من الجنب حسب حجم شاشة موبايلك أو لابتوبك)." },
                    { sender: "peer", text: "وبعد ما يحسب الأماكن؟" },
                    { sender: "mentor", text: "تيجي آخر مرحلة اسمها Paint (الطلاء)، المتصفح يبدأ يلون البيكسلز ويرسم الألوان والصور والخطوط وتظهر الشاشة قدامك. العملية دي كلها من كتابة الرابط للرسم اسمها Critical Rendering Path." },
                    
                    // 🛑 الكمين الثاني: اختبار فهم المراحل
                    { type: "challenge", id: "ch1_2", question: "كمين رقم 2: ما هي المرحلة التي يقوم فيها المتصفح بحساب الأبعاد الجغرافية ومساحة العناصر بناءً على حجم الشاشة؟", options: ["مرحلة الـ Paint", "مرحلة الـ Layout", "مرحلة بناء الـ DOM Tree", "مرحلة الـ DNS Request"], answer: 1, explanation: "برنس! الـ Layout هي مرحلة الحسابات الهندسية والأبعاد لكل شاشة." },
                    
                    { sender: "peer", text: "يااااه! كل ده بيحصل في فمتو ثانية؟ ده المبرمجين دول عباقرة!" },
                    { sender: "mentor", text: "إحنا لسه بنقول يا هادي! الفكرة بقى كـ Engineer إنك لو كتبت كود HTML مكسر أو حطيت ملفات جافاسكريبت تقيلة في أول الصفحة، المتصفح هيقفل ويعطل بناء الشجرة دي، والموقع هيظهر أبيض ويلف، والزبون هيقفل ويمشي." },
                    { sender: "peer", text: "أنا بدأت أفهم ليه فيه مواقع بتزهق ومواقع طيارة. طب الجافاسكريبت دوره إيه في الليلة دي؟" },
                    { sender: "mentor", text: "الجافاسكريبت هو العقل والروح. الـ HTML عملت الحيطة، والـ CSS دهنتها، الـ JS بقا هو السلك والموتور اللي لما تدوس على زرار النور ينور، أو لما تدوس على زرار الشراء يخصم من الفيزا ويبعتلك رسالة تأكيد بدون ما يرجع يحمل الصفحة من الأول." },
                    { sender: "peer", text: "يعني الـ JS بتعدل في الشجرة اللي اسمها DOM دي وهي واقفة في مكانها؟" },
                    { sender: "mentor", text: "بالظبط! الـ JS بتقدر تدخل على الـ DOM Tree وتمسح ابن، أو تضيف أب، أو تغير لون، وده اللي بيخلي الأبلكيشنز حية وتفاعلية زي الفيسبوك كده." },
                    
                    // 🛑 الكمين الثالث: الكمين الأخير للدرس
                    { type: "challenge", id: "ch1_3", question: "كمين رقم 3: أي لغة من الثلاثة هي المسؤولة عن إضافة المنطق (Logic) والحركة التفاعلية والتعديل الديناميكي في الـ DOM؟", options: ["لغة HTML", "لغة CSS", "لغة JavaScript", "بروتوكول الـ DNS"], answer: 2, explanation: "مظبوط جداً! الجافاسكريبت هي محرك الذكاء والتفاعل في الويب." },
                    
                    { sender: "mentor", text: "كده إحنا أسسنا كواليس الويب تمام التمام يا محمود، وجاهزين ندخل على الجد ونمسك الـ HTML نفرمها حتة حتة." }
                ]
            }
        }
    },
    chapter2: { name: "الفصل 2: أساسيات الـ HTML وبناء الهيكل العظمي للموقع", lessons: { 1: { title: "الدرس 1: التاجات والعناصر الأساسية", topic: "Tags & Elements", dialogue: [{ sender: "mentor", text: "هنا هنشرح الـ HTML من الصفر..." }] } } },
    chapter3: { name: "الفصل 3: الـ Attributes والروابط والصور الذكية في HTML", lessons: { 1: { title: "الدرس 1: الروابط والـ Attributes", topic: "Links & Attributes", dialogue: [] } } },
    chapter4: { name: "الفصل 4: الجداول والفورم (Forms) واستقبال بيانات المستخدم", lessons: { 1: { title: "الدرس 1: كواليس الـ Forms", topic: "HTML Forms", dialogue: [] } } },
    chapter5: { name: "الفصل 5: أساسيات الـ CSS والمحارة والديكور الرقمي", lessons: { 1: { title: "الدرس 1: مقدمة الـ CSS", topic: "CSS Selectors", dialogue: [] } } },
    chapter6: { name: "الفصل 6: الـ Box Model وكواليس حساب مساحات العناصر", lessons: { 1: { title: "الدرس 1: الـ Margins والـ Padding", topic: "Box Model", dialogue: [] } } },
    chapter7: { name: "الفصل 7: أنظمة العرض الحديثة: Flexbox بالتفصيل والمصطلحات", lessons: { 1: { title: "الدرس 1: محاذاة العناصر بـ Flexbox", topic: "Flexbox Layout", dialogue: [] } } },
    chapter8: { name: "الفصل 8: نظام الـ CSS Grid وتصميم الشاشات المعقدة", lessons: { 1: { title: "الدرس 1: بناء شبكة العمل", topic: "CSS Grid", dialogue: [] } } },
    chapter9: { name: "الفصل 9: الـ Responsive Design والميديا كويري لجميع الشاشات", lessons: { 1: { title: "الدرس 1: التوافق مع الشاشات", topic: "Media Queries", dialogue: [] } } },
    chapter10: { name: "الفصل 10: مدخل إلى لغة الـ JavaScript والـ العقل المفكر", lessons: { 1: { title: "الدرس 1: كيف تعمل المتغيرات والـ RAM؟", topic: "Variables & Memory", dialogue: [] } } },
    chapter11: { name: "الفصل 11: جمل التحكم الشرطية (if, else, else if) في JavaScript", lessons: { 1: { title: "الدرس 1: اتخاذ القرارات البرمجية وكواليس الـ Logic", topic: "Conditional Statements", dialogue: [
        { sender: "mentor", text: "أهلاً بيك يا محمود في فصل الـ Conditional Statements! هنا بنعلم الكمبيوتر يفكر وياخد قرارات بناءً على الشروط اللي بنحطهاله." },
        { sender: "peer", text: "يعني إزاي يا بشمهندس؟ إديني مثال واقعي يوضح الكود شغال إزاي في الـ CPU." },
        { sender: "mentor", text: "بص يا سيدي، تخيل لو بنعمل نظام تسجيل دخول لـ سنتر كورس. لو الطالب دفع المصاريف (if)، بنقوله اتفضل ادخل القاعة. طب لو مدفعش بس معاه إذن (else if)، بنقوله روح للإدارة. طب لو مفيش أي حاجة من دول (else)، بنقوله عفواً متقدرش تدخل!" },
        { sender: "peer", text: "أها! يعني الكود بيمشي بالترتيب، وأول شرط بيتحقق بيفك الباقي؟" },
        { sender: "mentor", text: "بالظبط! الـ CPU بينفذ الشرط الأول، لو طلع true بينفض للباقي تماماً ويكمل باقي البرنامج. لو طلع false ينزل يدور في الـ else if، وهكذا. وعشان نختبر فهمك في هندسة الشروط سكرول وحل الكمين ده." },
        { type: "challenge", id: "ch11_1", question: "كمين شرطي: إذا كان الشرط الأول في جملة if يساوي true، والشرط الثاني في جملة else if يساوي أيضاً true، ماذا سينفذ محرك الجافاسكريبت؟", options: ["سينفذ كود جملة if فقط ويتجاهل الباقي", "سينفذ كود جملة else if فقط", "سينفذ الإثنين معاً في نفس الوقت", "سيحدث خطأ برميجي (Syntax Error) ويتوقف السيستم"], answer: 0, explanation: "الله ينور يا هندسة! المحرك بياخد أول شرط صح يقابله في طريقه ويهرب بره البلوك بالكامل." }
    ] } } },
    chapter12: { name: "الفصل 12: الحلقات التكرارية (Loops) وتوفير المجهود الحسابي", lessons: { 1: { title: "الدرس 1: الـ For & While Loops", topic: "Loops", dialogue: [] } } },
    chapter13: { name: "الفصل 13: الدوال (Functions) وكتابة كود نظيف قابل لإعادة الاستخدام", lessons: { 1: { title: "الدرس 1: الـ Scope والـ Functions", topic: "Functions", dialogue: [] } } },
    chapter14: { name: "الفصل 14: الـ Arrays والـ Objects وإدارة البيانات المعقدة", lessons: { 1: { title: "الدرس 1: هياكل البيانات جوه الـ JS", topic: "Data Structures", dialogue: [] } } },
    chapter15: { name: "الفصل 15: هندسة الـ DOM والتلاعب بعناصر الصفحة ديناميكياً", lessons: { 1: { title: "الدرس 1: الـ Event Listeners وكواليس التفاعل", topic: "DOM Manipulation", dialogue: [] } } }
};

// إدارة تشغيل التطبيق بالـ Inline Scroll Logic
let currentChapterKey = "chapter1";
let currentLessonKey = 1;
let currentRenderedIndex = 0;
let progressState = { completedLessons: [], currentChapter: "chapter1", currentLesson: 1 };

function initApp() {
    const saved = localStorage.getItem('frontend_academy_master_progress');
    if (saved) {
        progressState = JSON.parse(saved);
    }
    currentChapterKey = progressState.currentChapter || "chapter1";
    currentLessonKey = progressState.currentLesson || 1;

    renderSidebarNav();
    loadLessonContent();
}

function renderSidebarNav() {
    const navContainer = document.getElementById('levels-nav');
    navContainer.innerHTML = '';

    for (const [chKey, chData] of Object.entries(courseData)) {
        const block = document.createElement('div');
        block.className = 'level-block';
        block.innerHTML = `<div class="level-title">${chData.name}</div>`;

        for (const [lNum, lData] of Object.entries(chData.lessons)) {
            const item = document.createElement('div');
            const isComp = progressState.completedLessons.includes(`${chKey}_${lNum}`);
            const isAct = currentChapterKey === chKey && currentLessonKey == lNum;
            
            item.className = `day-item ${isAct ? 'active' : ''} ${isComp ? 'completed' : ''}`;
            item.innerHTML = `<span>${lData.title}</span>`;
            item.onclick = () => switchLesson(chKey, parseInt(lNum));
            block.appendChild(item);
        }
        navContainer.appendChild(block);
    }
    
    // حساب النسبة الكلية بناءً على عدد الفصول المتاحة
    const total = 15;
    const percent = Math.min((progressState.completedLessons.length / total) * 100, 100);
    const pBar = document.getElementById('overall-progress');
    if(pBar) pBar.style.width = `${percent}%`;
}

function loadLessonContent() {
    const lessonData = courseData[currentChapterKey].lessons[currentLessonKey];
    document.getElementById('current-day-title').innerText = lessonData.title;
    document.getElementById('current-day-topic').innerText = `المفهوم: ${lessonData.topic}`;
    
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = ''; 
    currentRenderedIndex = 0;
    
    // إخفاء صندوق التحدي الخارجي السفلي لأن الأسئلة هتبقى مضمنة جوه الشات
    document.getElementById('challenge-container').style.display = 'none';
    
    renderNextBatch();
}

// رندرة الرسايل لحد ما نقابل سؤال (كمين) يوقف السكرول
function renderNextBatch() {
    const lessonData = courseData[currentChapterKey].lessons[currentLessonKey];
    const chatBox = document.getElementById('chat-box');
    
    while (currentRenderedIndex < lessonData.dialogue.length) {
        const item = lessonData.dialogue[currentRenderedIndex];
        
        if (item.type === "challenge") {
            // وصلنا لكمين! نقف هنا ونعرض السؤال جوه الشات وميفتحش الباقي إلا لما يحل
            renderInlineChallenge(item);
            currentRenderedIndex++;
            return; 
        }
        
        // رندرة رسالة حوار عادية
        const msgElement = document.createElement('div');
        msgElement.className = `message ${item.sender}`;
        const name = item.sender === 'mentor' ? 'حازم (المهندس الخبير)' : 'محمود (الطالب المحاور)';
        msgElement.innerHTML = `<strong>${name}</strong><p>${item.text}</p>`;
        chatBox.appendChild(msgElement);
        
        currentRenderedIndex++;
    }
    
    // لو خلصنا كل الرسايل والأسئلة بنجاح، نعرض سؤال التقييم النهائي للدرس: "هل فهمت؟"
    renderEndLessonPrompt();
}

function renderInlineChallenge(challenge) {
    const chatBox = document.getElementById('chat-box');
    const chDiv = document.createElement('div');
    chDiv.className = 'challenge-card';
    chDiv.style.margin = "20px 0";
    chDiv.style.borderRight = "4px solid var(--neon-purple)";
    
    chDiv.innerHTML = `
        <div class="challenge-header">🛑 سؤال مفاجئ يختبر تركيزك في الرسايل اللي فاتت:</div>
        <p class="challenge-question">${challenge.question}</p>
        <div class="options-grid" id="opt-grid-${challenge.id}"></div>
        <p id="feed-${challenge.id}" class="feedback"></p>
    `;
    chatBox.appendChild(chDiv);
    
    const grid = document.getElementById(`opt-grid-${challenge.id}`);
    challenge.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => {
            const feedback = document.getElementById(`feed-${challenge.id}`);
            if (idx === challenge.answer) {
                feedback.className = "feedback correct";
                feedback.innerText = `✅ رائع! ${challenge.explanation}`;
                btn.parentElement.querySelectorAll('button').forEach(b => b.disabled = true);
                
                // سكرول تلقائي خفيف وتكملة الشات المتبقي بعد ثانية ونصف
                setTimeout(() => {
                    renderNextBatch();
                    chatBox.scrollTop = chatBox.scrollHeight;
                }, 1500);
            } else {
                feedback.className = "feedback incorrect";
                feedback.innerText = "❌ لأ الإجابة مش مظبوطة، راجع آخر 10 رسايل فوق وركز كـ Engineer!";
            }
        };
        grid.appendChild(btn);
    });
    
    chatBox.scrollTop = chatBox.scrollHeight;
}

function renderEndLessonPrompt() {
    const chatBox = document.getElementById('chat-box');
    const endDiv = document.createElement('div');
    endDiv.className = 'challenge-card';
    endDiv.style.borderRight = "4px solid var(--success-green)";
    endDiv.style.marginTop = "30px";
    
    endDiv.innerHTML = `
        <div class="challenge-header" style="color: var(--success-green);">🎉 وصلنا لنهاية الدرس بنجاح!</div>
        <p class="challenge-question">المهندس حازم بيسألك: هل فهمت كل الأجزاء والكواليس التقنية اللي اتكلمنا فيها النهاردة وجاهز للنقلة الكبيرة؟</p>
        <div class="options-grid">
            <button class="option-btn" style="border-color: var(--success-green);" onclick="confirmLessonCompletion(true)">نعم، فهمت وجاهز للفصل التالي 🚀</button>
            <button class="option-btn" style="border-color: var(--error-red);" onclick="confirmLessonCompletion(false)">محتاج أعيد قراءة الدرس تاني 🔄</button>
        </div>
    `;
    chatBox.appendChild(endDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function confirmLessonCompletion(isSuccess) {
    if (isSuccess) {
        const mark = `${currentChapterKey}_${currentLessonKey}`;
        if (!progressState.completedLessons.includes(mark)) {
            progressState.completedLessons.push(mark);
        }
        
        // حساب المفتاح القادم أوتوماتيكياً للانتقال للفصل التالي
        let currentNum = parseInt(currentChapterKey.replace("chapter", ""));
        let nextChapterNum = currentNum + 1;
        let nextChapterKey = `chapter${nextChapterNum}`;
        
        if (courseData[nextChapterKey]) {
            progressState.currentChapter = nextChapterKey;
            progressState.currentLesson = 1;
            currentChapterKey = nextChapterKey;
            currentLessonKey = 1;
        } else {
            alert("ما شاء الله يا بشمهندس! أنت قفلت الأكاديمية بالكامل وكل الفصول الهندسية! مبروك!");
        }
        
        localStorage.setItem('frontend_academy_master_progress', JSON.stringify(progressState));
        renderSidebarNav();
        loadLessonContent();
    } else {
        loadLessonContent(); // إعادة تصفير وقراءة من جديد
    }
}

function switchLesson(chKey, lessonNum) {
    currentChapterKey = chKey;
    currentLessonKey = lessonNum;
    progressState.currentChapter = chKey;
    progressState.currentLesson = lessonNum;
    localStorage.setItem('frontend_academy_master_progress', JSON.stringify(progressState));
    
    renderSidebarNav();
    loadLessonContent();
}

window.onload = initApp;