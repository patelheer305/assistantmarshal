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
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>3</b>","કટર: <b>7.5</b>","ચારણા 2 જાળી: ઉપર - <b>6</b>, નીચે - <b>5.5</b>","ચારણા 3 જાળી: ઉપર - <b>6</b>, વચ્ચે - <b>5.5</b>, નીચે - <b>5</b>","સુપડી જાળી: ઉપર - <b>6</b>, નીચે - <b>5.5</b>","રેત જાળી: <b>1.6</b>","હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>","ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>","ચારણાની ચાલ: <b>લાંબી</b>","ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: [
  "વી બેલ્ટ ત્રણ રાખો",
  "કટર સાત દશાંશ પાંચ રાખો",
  "ચારણા બે ની જાળી માં ઉપર છ અને નીચે પાંચ દશાંશ પાંચ રાખો",
  "ચારણા ત્રણ ની જાળી માં ઉપર છ, વચ્ચે પાંચ દશાંશ પાંચ અને નીચે પાંચ રાખો",
  "સુપડી જાળી માં ઉપર છ અને નીચે પાંચ દશાંશ પાંચ રાખો",
  "રેત જાળી એક દશાંશ છ રાખો",
  "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
  "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
  "ચારણાની ચાલ લાંબી રાખો",
  "ટ્રેક્ટરનો રેસ બાર રાખો"
]
    },
    hi: {
      name: "जीरा",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>3</b>","कटर: <b>7.5</b>","छलना 2 जाली: ऊपर - <b>6</b>, नीचे - <b>5.5</b>","छलना 3 जाली:  ऊपर - <b>6</b>, बीच में - <b>5.5</b>, नीचे - <b>5</b>","सुपड़ी जाली: ऊपर - <b>6</b>, नीचे - <b>5.5</b>","रेत जाली: <b>1.6</b>","हवा का हैंडल: आगे का  - <b>बीच में</b>, पीछे का - <b>ऊपर</b>","चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>","छलने की चाल: <b>लंबी</b>","ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: [
  "वी बेल्ट तीन रखें",
  "कटर सात दशमलव पाँच रखें",
  "छलना दो की जाली में ऊपर छह और नीचे पाँच दशमलव पाँच रखें",
  "छलना तीन की जाली में ऊपर छह, बीच में पाँच दशमलव पाँच और नीचे पाँच रखें",
  "सुपड़ी जाली में ऊपर छह और नीचे पाँच दशमलव पाँच रखें",
  "रेत जाली एक दशमलव छह रखें",
  "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
  "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
  "छलने की चाल लंबी रखें",
  "ट्रैक्टर का रेस बारह रखें"
]
    },
    en: {
      name: "Cumin",
      settingsDisplay: ["V-Belt: 3","Cutter: 7.5","Tractor RPM: 12"],
      settingsSpeech: ["Keep the V belt at three","Set the cutter at seven point five","Keep tractor RPM at twelve"]
    }
  },
pearl_millet_g: {
        gu: {
          name: "બાજરી (G)",
          settingsDisplay:[
            "વી બેલ્ટ (પટ્ટા): <b>3</b>",
            "કટર: <b>4</b>",
            "ચારણા 2 જાળી: ઉપર - <b>6</b>, નીચે - <b>4</b>",
            "ચારણા 3 જાળી: ઉપર - <b>6</b>, વચ્ચે - <b>5.5</b>, નીચે - <b>4</b>",
            "સુપડી જાળી: ઉપર - <b>4</b>, નીચે - <b>4</b>",
            "રેત જાળી: <b>1.6</b>",
            "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
            "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
            "ચારણાની ચાલ: <b>લાંબી</b>",
            "ટ્રેક્ટરનો રેસ: <b>12</b>"
          ],
settingsSpeech:[
  "વી બેલ્ટ ત્રણ રાખો",
  "કટર ચાર રાખો",
  "ચારણા બે ની જાળી માં ઉપર છ અને નીચે ચાર રાખો",
  "ચારણા ત્રણ ની જાળી માં ઉપર છ, વચ્ચે પાંચ દશાંશ પાંચ અને નીચે ચાર રાખો",
  "સુપડી જાળી માં ઉપર ચાર અને નીચે ચાર રાખો",
  "રેત જાળી એક દશાંશ છ રાખો",
  "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
  "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
  "ચારણાની ચાલ લાંબી રાખો",
  "ટ્રેક્ટરનો રેસ બાર રાખો"
]
        },
        hi: {
          name: "बाजरा (G)",
          settingsDisplay:[
                   "वी-बेल्ट (पट्टा): <b>3</b>",
  "कटर: <b>4</b>",
  "छलना 2 जाली: ऊपर - <b>6</b>, नीचे - <b>4</b>",
  "छलना 3 जाली:  ऊपर - <b>6</b>, बीच में - <b>5.5</b>, नीचे - <b>4</b>",
  "सुपड़ी जाली: ऊपर - <b>4</b>, नीचे - <b>4</b>",
  "रेत जाली: <b>1.6</b>",
  "हवा का हैंडल: आगे का  - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
  "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
  "छलने की चाल: <b>लंबी</b>",
            "ट्रैक्टर का रेस: <b>12</b>"
          ],
settingsSpeech:[
  "वी बेल्ट तीन रखें",
  "कटर चार रखें",
  "छलना दो की जाली में ऊपर छह और नीचे चार रखें",
  "छलना तीन की जाली में ऊपर छह, बीच में पाँच दशमलव पाँच और नीचे चार रखें",
  "सुपड़ी जाली में ऊपर चार और नीचे चार रखें",
  "रेत जाली एक दशमलव छह रखें",
  "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
  "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
  "छलने की चाल लंबी रखें",
  "ट्रैक्टर का रेस बारह रखें"
]
        },
        en: {
          name: "Pearl Millet (G)",
          settingsDisplay:[
          "V-Belt: <b>3</b>",
  "Cutter: <b>4</b>",
  "Sieve 2 Mesh: Upper - <b>6</b>, Lower - <b>4</b>",
  "Sieve 3 Mesh: Upper - <b>6</b>, Middle - <b>5.5</b>, Lower - <b>4</b>",
  "Winnowing Mesh: Upper - <b>4</b>, Lower - <b>4</b>",
  "Sand Mesh: <b>1.6</b>",
  "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
  "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
  "Sieve Movement: <b>Long</b>",
  "Tractor Race: <b>12</b>"
          ],
settingsSpeech:[
  "Keep the V belt at three",
  "Set the cutter at four",
  "In sieve two mesh, keep the upper at six and the lower at four",
  "In sieve three mesh, keep the upper at six, the middle at five point five, and the lower at four",
  "In the winnowing mesh, keep both upper and lower at four",
  "Keep the sand mesh at one point six",
  "Set the air handle with the front at middle and the rear at up",
  "Set the chamber curtain with the side down and the rear at medium",
  "Keep the sieve movement long",
  "Keep the tractor RPM at twelve"
]
        }
      },

};

const problems = {
  gu: [{
    title: "દાણા તૂટવા",
    solutionDisplay: ["ટ્રેક્ટર ની સ્પીડ વધારે હોય તો સ્પીડ ઓછી કરવી.","સૂપડા માં ઓરવાનું પ્રમાણ વધારે/ઓછું હોય તો એકસરખું પ્રમાણમાં ઓરવું.","કટર (કોનકેવ) ઊંચી હોય તો થોડી નીચે ઉતારી ગેજ પ્રમાણે ગોઠવવી","ચેમ્બર નીચે અનાજ કે ભૂસું ભરાઈ ગયું હોય તો ગીસી પડદો ઊંચો કરવો."],
    solutionSpeech: ["ટ્રેક્ટર ની સ્પીડ વધારે હોય તો સ્પીડ ઓછી કરવી.","સૂપડા માં ઓરવાનું પ્રમાણ વધારે/ઓછું હોય તો એકસરખું પ્રમાણમાં ઓરવું.","કટર (કોનકેવ) ઊંચી હોય તો થોડી નીચે ઉતારી ગેજ પ્રમાણે ગોઠવવી","ચેમ્બર નીચે અનાજ કે ભૂસું ભરાઈ ગયું હોય તો ગીસી પડદો ઊંચો કરવો."]
  }],
  hi: [{
    title: "दाने टूटना",
    solutionDisplay: ["ट्रैक्टर की गति अधिक हो तो गति कम करे।","सूपड़े में फसल डालने की मात्रा ज़्यादा/कम हो तो एकसमान डाले।","कटर (कॉनकेव) ऊँचा हो तो गेज के अनुसार थोड़ा नीचे करे।","चैंबर(कटर) के नीचे फसल या भूसा भर गया हो तो गीसी पड़दे ऊँचा करे।"],
    solutionSpeech: ["ट्रैक्टर की गति अधिक हो तो गति कम करे।","सूपड़े में फसल डालने की मात्रा ज़्यादा/कम हो तो एकसमान डाले।","कटर (कॉनकेव) ऊँचा हो तो गेज के अनुसार थोड़ा नीचे करे।","चैंबर(कटर) के नीचे फसल या भूसा भर गया हो तो गीसी पड़दे ऊँचा करे।"]
  }],
  en: [{
    title: "Grain Breakage",
    solutionDisplay: ["If the tractor's speed is too high, reduce the speed.","If the amount fed into the feeder is incorrect, maintain uniform feeding.","If the cutter (concave) is too high, adjust it slightly lower as per the gauge.","If grain or chaff is clogged under the chamber, raise the sieve curtain."],
    solutionSpeech: ["If the tractor's speed is too high, reduce the speed.","If the amount fed into the feeder is incorrect, maintain uniform feeding.","If the cutter (concave) is too high, adjust it slightly lower as per the gauge.","If grain or chaff is clogged under the chamber, raise the sieve curtain."]
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


