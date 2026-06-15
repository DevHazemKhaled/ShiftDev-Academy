// المنهج التعليمي الجديد: فصول، دروس، حوار مبسط (محمود وحازم)، وأسئلة كتابة كود
const courseData = {
    chapter1: {
        name: "الفصل الأول: الدخول إلى عالم الويب و أساسيات الـ HTML (الدرس 1-5)",
        lessons: {
            1: {
                title: "الدرس 1: يعني إيه موقع ويب أصلاً؟",
                topic: "مقدمة للمبتدئين تماماً",
                dialogue: [
                    { sender: "peer", text: "يا بشمهندس حازم، أنا نفسي أدخل مجال الويب بس حاسس إن الموضوع معقد وعامل زي الطلاسم، هو يعني إيه موقع ويب من الأساس؟" },
                    { sender: "mentor", text: "يا هلا يا محمود! بص يا سيدي، الموضوع أبسط مما تتخيل. شايف العمارة اللي بتتبني؟ الموقع بالظبط زيها. الـ HTML هي الطوب الأحمر والخرسانة (الهيكل الأساسي)، والـ CSS هي المحارة والدهانات والديكور اللي بيخلي شكل العمارة حلو." },
                    { sender: "peer", text: "أها، يعني الـ HTML هي اللي بتبني الأساس والـ CSS بتجمل الشكل؟" },
                    { sender: "mentor", text: "بالظبط كده! ومن غير الـ HTML مش هيكون فيه أي عنصر في الصفحة، لا زرار ولا كتابة ولا صورة. وعشان نثبت أول طوبة في دماغك، جرب تحل التحدي اللي ظهرلك تحت ده بسكرول الشاشة." }
                ],
                challenge: {
                    type: "quiz",
                    question: "ما هو الاختصار الصحيح للغة HTML التي تبني هيكل صفحات الويب؟",
                    options: [
                        "Hyper Text Markup Language",
                        "High Tech Modern Language",
                        "Home Tool Markup Language",
                        "Hyperlink and Text Management"
                    ],
                    answer: 0,
                    explanation: "برافو يا محمود! الاختصار هو Hyper Text Markup Language ودي لغة توصيف وتحديد عناصر الصفحة."
                }
            },
            2: {
                title: "الدرس 2: كتابة أول عنصر وقوانين التاجات (Tags)",
                topic: "هيكل الـ Tag في HTML",
                dialogue: [
                    { sender: "peer", text: "تمام يا بشمهندس، أنا عرفت اسمها. إزاي بقى بكتب الكود ده؟ يعني الكمبيوتر بيفهمني إزاي؟" },
                    { sender: "mentor", text: "جافاسكريبت والـ الويب بيفهموا عن طريق حاجة اسمها التاجات أو الـ Tags. بتفتح قوس أصغر من < وتكتب اسم العنصر وتقفل بقوس أكبر من >. وزي ما بتفتح الباب، لازم تقفله بـ سلاش /" },
                    { sender: "peer", text: "يعني لو عايز أكتب عنوان بكتبه إزاي؟" },
                    { sender: "mentor", text: "العناوين الرئيسية بنرمز لها بـ h1. تفتح التاج تكتب عنوانك وتقفل التاج بالشكل ده: <h1>عنواني</h1>. سكرول كده وشوف السؤال المفاجئ وجرب بنفسك!" }
                ],
                challenge: {
                    type: "code",
                    question: "اكتب تاج الإغلاق الصحيح لعنصر الفقرة المكتوب كالتالي: <p>أهلاً بكم في كورس الهندسة",
                    options: [
                        "</p>",
                        "<p/>",
                        "Progress",
                        "p/"
                    ],
                    answer: 0,
                    explanation: "عاش يا بشمهندس! تاج الإغلاق دايماً بيبدأ بالشرطة المائلة قبل اسم العنصر بالشكل ده </p>."
                }
            }
            // السيستم مهيأ لاستيعاب من 4 لـ 7 دروس لكل فصل
        },
        // المراجعة الشاملة للفصل الأول (من 5 إلى 10 أسئلة تظهر في النهاية)
        review: {
            title: "🔒 مراجعة الفصل الأول: اختبار صنايعية الكود (اكتب الكود الصحيح)",
            questions: [
                {
                    question: "السؤال 1: ما هو التاج المستخدم لإدراج عنوان بأكبر خط ممكن في الصفحة؟",
                    options: ["<h1>", "<heading>", "<h6", "<p>"],
                    answer: 0
                },
                {
                    question: "السؤال 2: ما هو التاج المناسب لكتابة فقرة نصية عادية (Paragraph)؟",
                    options: ["<p>", "<text>", "<paragraph>", "<lb>"],
                    answer: 0
                },
                {
                    question: "السؤال 3: أي مما يلي يمثل تاج إدراج صورة بشكل صحيح؟",
                    options: ["<img>", "<image>", "<picture>", "<src>"],
                    answer: 0
                }
            ]
        }
    }
};

// إدارة حالة التطبيق الجديدة بالسكرول والفصول
let currentChapterKey = "chapter1";
let currentLessonKey = 1;
let progressState = { completedLessons: [], currentChapter: "chapter1", currentLesson: 1 };

function initApp() {
    const savedProgress = localStorage.getItem('frontend_academy_progress');
    if (savedProgress) {
        progressState = JSON.parse(savedProgress);
    }
    
    currentChapterKey = progressState.currentChapter || "chapter1";
    currentLessonKey = progressState.currentLesson || 1;

    renderSidebarNav();
    loadLessonContent();
    
    // إخفاء زر الرسالة التالية التقليدي لأننا بنعتمد السكرول التلقائي بالكامل
    const nextBtn = document.getElementById('next-chat-btn');
    if(nextBtn) nextBtn.style.display = 'none';
}

function renderSidebarNav() {
    const navContainer = document.getElementById('levels-nav');
    navContainer.innerHTML = '';

    for (const [chKey, chData] of Object.entries(courseData)) {
        const levelBlock = document.createElement('div');
        levelBlock.className = 'level-block';
        levelBlock.innerHTML = `<div class="level-title">${chData.name}</div>`;

        for (const [lessonNum, lessonData] of Object.entries(chData.lessons)) {
            const dayItem = document.createElement('div');
            const isCompleted = progressState.completedLessons.includes(`${chKey}_${lessonNum}`);
            const isActive = currentChapterKey === chKey && currentLessonKey == lessonNum;
            
            dayItem.className = `day-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
            dayItem.innerHTML = `<span>${lessonData.title}</span>`;
            dayItem.onclick = () => switchLesson(chKey, parseInt(lessonNum));
            levelBlock.appendChild(dayItem);
        }
        
        // إضافة زر المراجعة في نهاية الفصل
        const reviewItem = document.createElement('div');
        reviewItem.className = `day-item review-item`;
        reviewItem.innerHTML = `<span>📝 مراجعة الفصل واختبار الكود</span>`;
        reviewItem.onclick = () => loadChapterReview(chKey);
        levelBlock.appendChild(reviewItem);
        
        navContainer.appendChild(levelBlock);
    }
}

function loadLessonContent() {
    const lessonData = courseData[currentChapterKey].lessons[currentLessonKey];
    document.getElementById('current-day-title').innerText = lessonData.title;
    document.getElementById('current-day-topic').innerText = `الموضوع: ${lessonData.topic}`;
    
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = ''; // تنظيف الشات
    
    // عرض المحادثة بالكامل دفعة واحدة ليقوم المستخدم بعمل سكرول طبيعي وقراءتها
    lessonData.dialogue.forEach(msg => {
        const msgElement = document.createElement('div');
        msgElement.className = `message ${msg.sender}`;
        const name = msg.sender === 'mentor' ? 'حازم (المهندس الخبير)' : 'محمود (الطالب المحاور)';
        msgElement.innerHTML = `<strong>${name}</strong><p>${msg.text}</p>`;
        chatBox.appendChild(msgElement);
    });

    // إظهار السؤال المفاجئ تلقائياً في نهاية السكرول
    showChallenge(lessonData.challenge);
    chatBox.scrollTop = 0; // يبدأ من فوق عشان يسكرول براحته
}

function showChallenge(challenge) {
    document.getElementById('challenge-text').innerText = challenge.question;
    const optionsGrid = document.getElementById('challenge-options');
    optionsGrid.innerHTML = '';
    document.getElementById('feedback-message').innerText = '';
    
    challenge.options.forEach((option, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = option;
        btn.onclick = () => checkAnswer(index, challenge.answer, challenge.explanation);
        optionsGrid.appendChild(btn);
    });
    
    document.getElementById('challenge-container').style.display = 'block';
}

function checkAnswer(selectedIndex, correctIndex, explanation) {
    const feedback = document.getElementById('feedback-message');
    if (selectedIndex === correctIndex) {
        feedback.className = "feedback correct";
        feedback.innerText = `✅ عاش يا محمود! ${explanation}`;
        
        const mark = `${currentChapterKey}_${currentLessonKey}`;
        if (!progressState.completedLessons.includes(mark)) {
            progressState.completedLessons.push(mark);
        }
        
        localStorage.setItem('frontend_academy_progress', JSON.stringify(progressState));
        renderSidebarNav();
    } else {
        feedback.className = "feedback incorrect";
        feedback.innerText = "❌ ركز يا محمود، حازم قالك التاج بيتقفل إزاي؟ راجع المحادثة فوق تاني!";
    }
}

function loadChapterReview(chKey) {
    const reviewData = courseData[chKey].review;
    document.getElementById('current-day-title').innerText = reviewData.title;
    document.getElementById('current-day-topic').innerText = "تمارين مكثفة على كتابة الكود وفهم أساسيات الويب";
    
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = '<div class="message mentor"><strong>حازم</strong><p>وصلنا للمراجعة يا محمود! هنا مفيش كلام كتير، هنا فيه كود حقيقي محتاجين نتأكد إنك بتعرف تكتبه بإيدك، حل الـ 3 أسئلة دول عشان تفتح الفصل الجديد!</p></div>';
    
    // عرض أول سؤال مراجعة في صندوق التحدي
    let currentReviewIndex = 0;
    const showReviewQuestion = () => {
        if(currentReviewIndex < reviewData.questions.length) {
            const q = reviewData.questions[currentReviewIndex];
            document.getElementById('challenge-text').innerText = `[سؤال مراجعة ${currentReviewIndex + 1}] ${q.question}`;
            const optionsGrid = document.getElementById('challenge-options');
            optionsGrid.innerHTML = '';
            
            q.options.forEach((opt, idx) => {
                const btn = document.createElement('button');
                btn.className = 'option-btn';
                btn.innerText = opt;
                btn.onclick = () => {
                    if(idx === q.answer) {
                        currentReviewIndex++;
                        showReviewQuestion();
                    } else {
                        alert("الإجابة مش مظبوطة، فكر تاني قبل ما تكتب الكود!");
                    }
                };
                optionsGrid.appendChild(btn);
            });
        } else {
            document.getElementById('challenge-container').style.display = 'none';
            alert("💥 الله ينور! قفلت مراجعة الفصل ده بنجاح ومستعد للفصل القادم!");
        }
    };
    
    showReviewQuestion();
    document.getElementById('challenge-container').style.display = 'block';
}

function switchLesson(chKey, lessonNum) {
    currentChapterKey = chKey;
    currentLessonKey = lessonNum;
    progressState.currentChapter = chKey;
    progressState.currentLesson = lessonNum;
    localStorage.setItem('frontend_academy_progress', JSON.stringify(progressState));
    
    renderSidebarNav();
    loadLessonContent();
}

window.onload = initApp;