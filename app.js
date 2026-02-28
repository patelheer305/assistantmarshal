document.addEventListener("DOMContentLoaded", function(){

const uiText = {
  gu: {
    crop: "પાક પસંદ કરો",
    problem: "તકલીફ પસંદ કરો",
    button: "ઉકેલ",
    back: "પાછળ જાઓ",
    stop: "આવાજ બંધ કરો",
    settingTitle: "પાક સેટિંગ",
    solutionTitle: "તકલીફનો ઉકેલ",
    languageName: "ગુજરાતી",
    introSetting: "હવે તમે પસંદ કરેલા પાક માટે સેટિંગ આ પ્રમાણે રાખો.",
    introSolution: "આ તકલીફ માટે નીચે મુજબ ઉકેલ કરો."
  },
  hi: {
    crop: "फसल चुनें",
    problem: "समस्या चुनें",
    button: "समाधान",
    back: "वापस जाएं",
    stop: "आवाज़ बंद करें",
    settingTitle: "फसल सेटिंग",
    solutionTitle: "समस्या का समाधान",
    languageName: "हिंदी",
    introSetting: "अब आपके द्वारा चुनी गई फसल के लिए सेटिंग इस प्रकार रखें।",
    introSolution: "इस समस्या के लिए निम्न समाधान करें।"
  },
  en: {
    crop: "Select Crop",
    problem: "Select Problem",
    button: "Get Solution",
    back: "Back",
    stop: "Stop Voice",
    settingTitle: "Crop Setting",
    solutionTitle: "Problem Solution",
    languageName: "English",
    introSetting: "Now keep the machine settings as follows.",
    introSolution: "For this problem, follow these solutions."
  }
};

const crops = {
  cumin: {
    gu: {
      name: "જીરૂ",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): 3","કટર: 3.6","ટ્રેક્ટરનો રેસ: 12"],
      settingsSpeech: ["વી બેલ્ટ ત્રણ રાખો","કટર ત્રણ દશાંશ છ રાખો","ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "जीरा",
      settingsDisplay: ["वी-बेल्ट (पट्टा): 3","कटर: 7.5","ट्रैक्टर का रेस: 12"],
      settingsSpeech: ["वी बेल्ट तीन रखें","कटर सात दशमलव पाँच रखें","ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Cumin",
      settingsDisplay: ["V-Belt: 3","Cutter: 7.5","Tractor RPM: 12"],
      settingsSpeech: ["Keep the V belt at three","Set the cutter at seven point five","Keep tractor RPM at twelve"]
    }
  }
};

const problems = {
  gu: [{
    title: "દાણા તૂટવા",
    solutionDisplay: ["ટ્રેક્ટર ની સ્પીડ ઓછી કરો.","પાક એકસરખા પ્રમાણમાં ઓરવો."],
    solutionSpeech: ["ટ્રેક્ટરની સ્પીડ ઓછી કરો","પાક એકસરખા પ્રમાણમાં ઓરવો"]
  }],
  hi: [{
    title: "दाने टूटना",
    solutionDisplay: ["ट्रैक्टर की गति कम करें.","फसल समान मात्रा में डालें."],
    solutionSpeech: ["ट्रैक्टर की गति कम करें","फसल समान मात्रा में डालें"]
  }],
  en: [{
    title: "Grain Breakage",
    solutionDisplay: ["Reduce tractor speed.","Maintain uniform feeding."],
    solutionSpeech: ["Reduce tractor speed","Maintain uniform feeding"]
  }]
};

const languageSelect = document.getElementById("languageSelect");
const cropSelect = document.getElementById("cropSelect");
const problemSelect = document.getElementById("problemSelect");
const ukelBtn = document.getElementById("ukelBtn");
const backBtn = document.getElementById("backBtn");
const stopVoiceBtn = document.getElementById("stopVoiceBtn");

const languageBox = document.getElementById("languageBox");
const selectionBox = document.getElementById("selectionBox");
const summaryBox = document.getElementById("summaryBox");
const resultBox = document.getElementById("resultBox");
const actionButtons = document.getElementById("actionButtons");

languageSelect.addEventListener("change", function(){

  const lang = this.value;
  if(!lang) return;

  document.getElementById("cropTitle").innerText = uiText[lang].crop;
  document.getElementById("problemTitle").innerText = uiText[lang].problem;
  ukelBtn.innerText = uiText[lang].button;
  backBtn.innerText = uiText[lang].back;
  stopVoiceBtn.innerText = uiText[lang].stop;

  cropSelect.innerHTML = '<option value="">--</option>';
  Object.keys(crops).forEach(key=>{
    let option = document.createElement("option");
    option.value = key;
    option.textContent = crops[key][lang].name;
    cropSelect.appendChild(option);
  });

  problemSelect.innerHTML = '<option value="">--</option>';
  problems[lang].forEach((p,index)=>{
    let option = document.createElement("option");
    option.value = index;
    option.textContent = p.title;
    problemSelect.appendChild(option);
  });

  selectionBox.classList.remove("hidden");
});

ukelBtn.addEventListener("click", function(){

  const lang = languageSelect.value;
  const cropKey = cropSelect.value;
  const problemIndex = problemSelect.value;

  if(!cropKey || problemIndex==="") return;

  const cropData = crops[cropKey][lang];
  const problemData = problems[lang][problemIndex];

  languageBox.classList.add("hidden");
  selectionBox.classList.add("hidden");

  summaryBox.classList.remove("hidden");
  resultBox.classList.remove("hidden");
  actionButtons.classList.remove("hidden");

  summaryBox.innerHTML = `
    <h3>Language: ${uiText[lang].languageName}</h3>
    <h3>Crop: ${cropData.name}</h3>
    <h3>Problem: ${problemData.title}</h3>
  `;

  resultBox.innerHTML = `
    <h2>${uiText[lang].settingTitle}</h2>
    <ul>${cropData.settingsDisplay.map(s=>`<li>${s}</li>`).join("")}</ul>
    <div style="margin-top:25px;"></div>
    <h2>${uiText[lang].solutionTitle}</h2>
    <ul>${problemData.solutionDisplay.map(s=>`<li>${s}</li>`).join("")}</ul>
  `;

  speak(lang, cropData.settingsSpeech, problemData.solutionSpeech);
});

function speak(lang, settings, solutions){

  let text = uiText[lang].introSetting + " ";
  settings.forEach(s=> text += s + ". ");
  text += uiText[lang].introSolution + " ";
  solutions.forEach(s=> text += s + ". ");

  const utter = new SpeechSynthesisUtterance(text);
  utter.lang = lang === "gu" ? "gu-IN" : lang + "-IN";
  utter.rate = 0.9;
  utter.pitch = 1;

  speechSynthesis.cancel();
  speechSynthesis.speak(utter);
}

stopVoiceBtn.addEventListener("click", ()=> speechSynthesis.cancel());

backBtn.addEventListener("click", ()=>{
  speechSynthesis.cancel();
  summaryBox.classList.add("hidden");
  resultBox.classList.add("hidden");
  actionButtons.classList.add("hidden");
  languageBox.classList.remove("hidden");
  selectionBox.classList.remove("hidden");
});

});