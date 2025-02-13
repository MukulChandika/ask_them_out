const answers_no = {
    english: [
        "No",
        "Are you sure?",
        "Are you really sure??",
        "Are you really realy sure???",
        "Think again?",
        "Don't believe in second chances?",
        "Why are you being so cold?",
        "Maybe we can talk about it?",
        "I am not going to ask again!",
        "Ok now this is hurting my feelings!",
        "You are now just being mean!",
        "Why are you doing this to me?",
        "Please give me a chance!",
        "I am begging you to stop!",
        "Ok, Let's just start over.."
    ],
    telugu: [
        "లేదు",
        "నిజంగానే నా?",
        "నిజంగా నిజంగా అనుకుంటున్నావా??",
        "నువ్వు నిజంగానే ఖచ్చితంగా అనుకుంటున్నావా???",
        "మళ్ళీ ఆలోచించు?",
        "రెండవ అవకాశం ఇవ్వలేవా?",
        "ఎందుకు ఇంత కఠినంగా ఉన్నావు?",
        "దీని గురించి మాట్లాడుకోవచ్చా?",
        "నేను మళ్ళీ అడగను!",
        "సరే, ఇప్పుడు నాకు బాధగా ఉంది!",
        "నువ్వు చాలా మొరటుగా ప్రవర్తిస్తున్నావు!",
        "నాతో ఎందుకిలా చేస్తున్నావు?",
        "దయచేసి ఒక్క అవకాశం ఇవ్వు!",
        "వద్దని చెప్పడం ఆపమని వేడుకుంటున్నాను!",
        "సరే, మళ్ళీ మొదటి నుండి ప్రారంభిద్దాం.."
    ],
    marathi: [
        "नाही",
        "तुला खात्री आहे?",
        "तुला खरंच खात्री आहे??",
        "तुला खरंच खरंच खात्री आहे???",
        "पुन्हा विचार कर?",
        "दुसऱ्या संधीवर विश्वास नाही?",
        "तू इतका थंड का आहेस?",
        "आपण याबद्दल बोलू शकतो?",
        "मी पुन्हा विचारणार नाही!",
        "ठीक आहे, आता माझ्या भावना दुखावल्या!",
        "तू आता फक्त क्रूर होत आहेस!",
        "तू माझ्याशी असं का वागतो आहेस?",
        "कृपया मला एक संधी दे!",
        "मी तुला विनंती करतो थांबायला!",
        "ठीक आहे, पुन्हा सुरुवात करूया.."
    ]
};

const answers_yes = {
    "english": "Yes",
    "telugu": "అవును",
    "marathi": "होय"
};

let language = "english";
const no_button = document.getElementById('no-button');
const yes_button = document.getElementById('yes-button');
let i = 1;
let size = 50;
let clicks = 0;

no_button.addEventListener('click', () => {
    let banner = document.getElementById('banner');
    if (clicks === 0) {
        banner.src = "./public/images/no.gif";
        refreshBanner();
    }
    clicks++;
    const sizes = [40, 50, 30, 35, 45]
    const random = Math.floor(Math.random() * sizes.length);
    size += sizes[random]
    yes_button.style.height = `${size}px`;
    yes_button.style.width = `${size}px`;
    let total = answers_no[language].length;
    if (i < total - 1) {
        no_button.innerHTML = answers_no[language][i];
        i++;
    } else if (i === total - 1) {
        alert(answers_no[language][i]);
        i = 1;
        no_button.innerHTML = answers_no[language][0];
        yes_button.innerHTML = answers_yes[language];
        yes_button.style.height = "50px";
        yes_button.style.width = "50px";
        size = 50;
    }
});

yes_button.addEventListener('click', () => {
    const backgroundOverlay = document.getElementById('background-overlay');
    backgroundOverlay.style.display = 'block';
    
    let buttons = document.getElementsByClassName('buttons')[0];
    buttons.style.display = "none";
    let banner = document.getElementsByClassName('banner-gif')[0];
    banner.style.display = "none";
    let message = document.getElementsByClassName('message')[0];
    message.style.display = "block";
});

function refreshBanner() {
    let banner = document.getElementById('banner');
    let src = banner.src;
    banner.src = '';
    banner.src = src;
}

function changeLanguage() {
    const selectElement = document.getElementById("language-select");
    const selectedLanguage = selectElement.value;
    language = selectedLanguage;

    const questionHeading = document.getElementById("question-heading");
    if (language === "telugu") {
        questionHeading.textContent = "నా వాలెంటైన్ అవుతావా?";
    } else if (language === "marathi") {
        questionHeading.textContent = "तू माझं व्हॅलेंटाइन होशील का?";
    } else {
        questionHeading.textContent = "Will you be my valentine?";
    }

    yes_button.innerHTML = answers_yes[language];

    if (clicks === 0) {
        no_button.innerHTML = answers_no[language][0];
    } else {
        no_button.innerHTML = answers_no[language][clicks];
    }

    const successMessage = document.getElementById("success-message");
    if (language === "telugu") {
        successMessage.textContent = "యేయ్, త్వరలో కలుద్దాం :3";
    } else if (language === "marathi") {
        successMessage.textContent = "येय्, लवकरच भेटू :3";
    } else {
        successMessage.textContent = "Yepppie, see you sooonnn :3";
    }
}