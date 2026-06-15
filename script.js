// هيكل المنهج التعليمي: 30 يوم مقسمة على 4 ليفلات هندسية متقدمة
const courseData = {
    level1: {
        name: "المستوى الأول: هندسة الـ DOM وكواليس عمل المتصفحات (أيام 1-7)",
        days: {
            1: {
                title: "اليوم 1: كيف يعرض المتصفح صفحات الويب فعلياً؟",
                topic: "كواليس الـ Critical Rendering Path",
                dialogue: [
                    { sender: "mentor", text: "يا هلا بمهندس المستقبل! فكك من فكرة إن الـ Front-End شوية ألوان زراير. عشان تبقى جورو بجد، لازم تفهم إيه اللي بيحصل لما تكتب عنوان موقع وتدوس Enter." },
                    { sender: "peer", text: "يا بشمهندس أنا عارف، السيرفر بيرجع ملف HTML والمتصفح بيعرضه وخلاص!" },
                    { sender: "mentor", text: "ده القشور يا صديقي! المتصفح بيمر بمراحل معقدة اسمها Critical Rendering Path. أولها بناء الـ DOM Tree والـ CSSOM Tree، وبعدين يدمجهم في Render Tree، وبعدين يحسب الأبعاد (Layout) وأخيراً يلون البيكسلز (Paint)." },
                    { sender: "peer", text: "أها! يعني كود الـ CSS والـ HTML مش بيشتغلوا مع بعض فجأة؟" },
                    { sender: "mentor", text: "بالظبط! وأي بلوك في الـ CSS أو الـ JS ممكن يعطل العملية دي كلها ويسبب بطء اسمه Rendering Blocking. وعشان نتاكد إنك لقطت الفكرة دي، حل معايا اللغز ده." }
                ],
                challenge: {
                    question: "إذا قمت بوضع ملف JavaScript ضخم في هيدر الصفحة <head> بدون أي الكلمات الدلالية مثل async أو defer، ماذا يحدث لعملية بناء الـ DOM؟",
                    options: [
                        "يتوقف المتصفح تماماً عن بناء الـ DOM حتى يتم تحميل الملف وتشغيله (Parser Blocking).",
                        "يستمر المتصفح في بناء الـ DOM في الخلفية دون أي تأثر.",
                        "يتم تجاهل ملف الجافاسكريبت حتى تنتهي الصفحة بالكامل.",
                        "يتحول الملف تلقائياً ويعمل بشكل غير متزامن."
                    ],
                    answer: 0,
                    explanation: "الله ينور! الجافاسكريبت بطبيعته يعطل الـ Parser، المتصفح أول ما بيشوف سكريبت عادي بيوقف بناء الـ DOM لحد ما ينزل السكريبت ويتنفذ، وده بيعمل بطء رهيب لو مش فاهم هندسة ويب."
                }
            },
            2: {
                title: "اليوم 2: معركة الـ Reflow والـ Repaint",
                topic: "تحسين أداء الجرافيكس في المتصفح",
                dialogue: [
                    { sender: "mentor", text: "النهاردة هنتكلم عن مفهومين هما سر سرعة أي أبلكيشن: الـ Reflow والـ Repaint. لما بتغير حاجة في الـ DOM بالـ JS، المتصفح بيضطر يعيد حساب الأبعاد." },
                    { sender: "peer", text: "طب ما دي حاجة عادية، المتصفح سريع جداً!" },
                    { sender: "mentor", text: "لو بتغير عنصر واحد عادي، تخيل لو بتعمل Loop بتغير أبعاد 1000 عنصر ورا بعض؟ المتصفح هيجيب شاشة بيضاء ويهنج لأن الـ Reflow عملية مكلفة جداً للحسابات (CPU Heavy)." }
                ],
                challenge: {
                    question: "أي من الخصائص التالية تغييرها يتسبب في حدوث Repaint فقط دون حدوث Reflow (أي لا تعيد حساب الأبعاد الهندسية للعناصر)؟",
                    options: [
                        "تغيير العرض width",
                        "تغيير لون الخلفية background-color",
                        "تغيير الهامش margin",
                        "تغيير الحشو padding"
                    ],
                    answer: 1,
                    explanation: "ممتاز! تغيير الألوان والـ visibility يسبب Repaint فقط لأنه لا يغير مساحة العنصر أو مكانه في التصميم، وبالتالي فهو أسرع بكتير للأداء."
                }
            }
            // يمكن هنا التوسع وإضافة الأيام من 3 إلى 30 بنفس النمط الهيكلي العالي
        }
    },
    level2: {
        name: "المستوى الثاني: جافا سكريبت المتقدمة وإدارة الذاكرة (أيام 8-15)",
        days: {
            8: {
                title: "اليوم 8: الـ Memory Leaks وكيف يشتغل الـ Garbage Collector؟",
                topic: "إدارة الذاكرة والـ Call Stack",
                dialogue: [
                    { sender: "mentor", text: "أهلاً بيك في ليفل جافاسكريبت للـ Engineers. جافاسكريبت بتنظف الذاكرة لوحدها عبر الـ Garbage Collection، بس الساحر ده ساعات بيغلط لو إنت سايب ثغرات." },
                    { sender: "peer", text: "ثغرات إزاي؟ أنا بعمل المتغيرات وخلاص!" },
                    { sender: "mentor", text: "لو عملت Event Listener على عنصر وعملت مسح (Remove) للعنصر ده من الـ DOM، الـ Listener بيفضل عايش في الذاكرة وميتشالش! ده بيعمل تسريب للذاكرة (Memory Leak) والأبلكيشن بيموت بمرور الوقت." }
                ],
                challenge: {
                    question: "كيف نتجنب تسريب الذاكرة الناتجة عن إنشاء تيمرات مستمرة باستخدام setInterval؟",
                    options: [
                        "عن طريق استدعاء clearInterval وتمرير معرف التايمر عند الانتهاء منه.",
                        "عن طريق تصفير الكود وجعله null فقط.",
                        "المتصفح يمسحها تلقائياً بمجرد الانتقال لصفحة أخرى بدون أي تدخل.",
                        "تغيير المتغير من let إلى const يمنع التسريب."
                    ],
                    answer: 0,
                    explanation: "هندسة! الـ clearInterval هي الطريقة الوحيدة لقطع الإشارة وإعلام المحرك أن هذه الذاكرة لم تعد مطلوبة ليقوم الـ Garbage Collector بعمله."
                }
            }
        }
    }
};

// إدارة حالة التطبيق ومزامنتها مع الـ LocalStorage
let currentLevelKey = "level1";
let currentDayKey = 1;
let currentMessageIndex = 0;
let progressState = {};

function initApp() {
    const savedProgress = localStorage.getItem('frontend_engineer_roadmap');
    if (savedProgress) {
        progressState = JSON.parse(savedProgress);
    } else {
        // تهيئة البيانات لأول مرة
        progressState = { completedDays: [], currentLevel: "level1", currentDay: 1 };
        localStorage.setItem('frontend_engineer_roadmap', JSON.stringify(progressState));
    }
    
    currentLevelKey = progressState.currentLevel;
    currentDayKey = progressState.currentDay;

    renderSidebarNav();
    loadDayContent();
}

function renderSidebarNav() {
    const navContainer = document.getElementById('levels-nav');
    navContainer.innerHTML = '';

    for (const [levelKey, levelData] of Object.entries(courseData)) {
        const levelBlock = document.createElement('div');
        levelBlock.className = 'level-block';
        levelBlock.innerHTML = `<div class="level-title">${levelData.name}</div>`;

        for (const [dayNum, dayData] of Object.entries(levelData.days)) {
            const dayItem = document.createElement('div');
            const isCompleted = progressState.completedDays.includes(`${levelKey}_${dayNum}`);
            const isActive = currentLevelKey === levelKey && currentDayKey == dayNum;
            
            dayItem.className = `day-item ${isActive ? 'active' : ''} ${isCompleted ? 'completed' : ''}`;
            dayItem.innerHTML = `<span>${dayData.title}</span>`;
            dayItem.onclick = () => switchDay(levelKey, parseInt(dayNum));
            levelBlock.appendChild(dayItem);
        }
        navContainer.appendChild(levelBlock);
    }
    
    // تحديث شريط النسبة الكلية للتعلم
    const totalDays = 30; // الخطة المستهدفة
    const percent = Math.min((progressState.completedDays.length / totalDays) * 100, 100);
    document.getElementById('overall-progress').style.width = `${percent}%`;
}

function loadDayContent() {
    const dayData = courseData[currentLevelKey].days[currentDayKey];
    document.getElementById('current-day-title').innerText = dayData.title;
    document.getElementById('current-day-topic').innerText = `المفهوم الهندسي: ${dayData.topic}`;
    
    // تصفير منطقة الشات والتحكم
    document.getElementById('chat-box').innerHTML = '';
    document.getElementById('challenge-container').style.display = 'none';
    document.getElementById('next-chat-btn').style.display = 'block';
    currentMessageIndex = 0;
    
    // تشغيل أول رسالة تلقائياً
    triggerNextMessage();
}

function triggerNextMessage() {
    const dayData = courseData[currentLevelKey].days[currentDayKey];
    const chatBox = document.getElementById('chat-box');
    
    if (currentMessageIndex < dayData.dialogue.length) {
        const msg = dayData.dialogue[currentMessageIndex];
        const msgElement = document.createElement('div');
        msgElement.className = `message ${msg.sender}`;
        
        const senderName = msg.sender === 'mentor' ? 'المهندس الإستشاري' : 'أنت (المهندس المحاور)';
        msgElement.innerHTML = `<strong>${senderName}</strong><p>${msg.text}</p>`;
        
        chatBox.appendChild(msgElement);
        chatBox.scrollTop = chatBox.scrollHeight;
        
        currentMessageIndex++;
    } else {
        // حان وقت التحدي لفتح باقي المحادثة أو الانتقال
        document.getElementById('next-chat-btn').style.display = 'none';
        showChallenge(dayData.challenge);
    }
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
        feedback.innerText = `✅ إجابة هندسية صحيحة! ${explanation}`;
        
        // تسجيل اليوم كمكتمل
        const dayMark = `${currentLevelKey}_${currentDayKey}`;
        if (!progressState.completedDays.includes(dayMark)) {
            progressState.completedDays.push(dayMark);
        }
        
        localStorage.setItem('frontend_engineer_roadmap', JSON.stringify(progressState));
        renderSidebarNav();
        
        // إظهار زر الانتقال لليوم التالي بعد ثانيتين
        setTimeout(() => {
            document.getElementById('challenge-container').style.display = 'none';
            alert("مبروك قفلت اليوم ده بنجاح، تقدر تنقل على اليوم اللي بعده من القائمة الجانبية أو استمر في استكشاف الكود!");
        }, 3000);
    } else {
        feedback.className = "feedback incorrect";
        feedback.innerText = "❌ لأ فكر تاني كـ Engineer.. الطريقة دي هتسبب بطء أو تسريب داتا!";
    }
}

function switchDay(levelKey, dayNum) {
    currentLevelKey = levelKey;
    currentDayKey = dayNum;
    progressState.currentLevel = levelKey;
    progressState.currentDay = dayNum;
    localStorage.setItem('frontend_engineer_roadmap', JSON.stringify(progressState));
    
    renderSidebarNav();
    loadDayContent();
}

// تشغيل التطبيق فور تحميل الصفحة
window.onload = initApp;