// ====================== GLOBAL STATE ======================
let currentLang = "";
let selectedModel = "";

// ====================== MODELS ======================
const models = {
    shahenshah:       { name: { en: "Marshal Shahenshah Thresher", hi: "मार्शल शहेनशाह थ्रेसर", gu: "માર્શલ શહેનશાહ થ્રેસર" }, modes: ["single"], type: "standard_single" },
    maharaja:         { name: { en: "Marshal Maharaja Thresher", hi: "मार्शल महाराजा थ्रेसर", gu: "માર્શલ મહારાજા થ્રેસર" }, modes: ["single","double"], type: "maharaja" },
    jageerdar_single: { name: { en: "Marshal Jageerdar Single Shaft Thresher", hi: "मार्शल जागीरदार सिंगल शाफ्ट थ्रेसर", gu: "માર્શલ જાગીરદાર સિંગલ શાફ્ટ થ્રેસર" }, modes: ["single"], type: "standard_single" },
    jageerdar_double: { name: { en: "Marshal Jageerdar Double Shaft Thresher", hi: "मार्शल जागीरदार डबल शाफ्ट थ्रेसर", gu: "માર્શલ જાગીરદાર ડબલ શાફ્ટ થ્રેસર" }, modes: ["single","double"], type: "smart_double" },
    smart_single:     { name: { en: "Marshal Smart Single Shaft Thresher", hi: "मार्शल स्मार्ट सिंगल शाफ्ट थ्रेसर", gu: "માર્શલ સ્માર્ટ સિંગલ શાફ્ટ થ્રેસર" }, modes: ["single"], type: "standard_single" },
    smart_double:     { name: { en: "Marshal Smart Double Shaft Thresher", hi: "मार्शल स्मार्ट डबल शाफ्ट थ्रेसर", gu: "માર્શલ સ્માર્ટ ડબલ શાફ્ટ થ્રેસર" }, modes: ["single","double"], type: "smart_double" }
};

// ====================== UI TEXT ======================
const uiText = {
    gu: { modelTitle: "મોડલ પસંદ કરો", crop: "પાક પસંદ કરો", problem: "જનરલ સેટિંગ સમસ્યા પસંદ કરો (વૈકલ્પિક)", button: "ઉકેલ", back: "પાછળ જાઓ", stop: "આવાજ બંધ કરો", settingTitle: "પાક સેટિંગ", solutionTitle: "તકલીફનો ઉકેલ", languageName: "ગુજરાતી", introSetting: "માર્શલ થ્રેશરમાં તમે પસંદ કરેલા પાક માટે સેટિંગ આ પ્રમાણે રાખો.", introSolution: "આ સેટિંગ સમસ્યા માટે નીચે મુજબ ઉકેલ કરો.", selectedModel: "મોડલ", languageLabel: "ભાષા", selectedCrop: "પાક", selectedProblem: "જનરલ સેટિંગ સમસ્યા", fanPulleyGroove: "ફેન પુલી ગ્રુવ", sieveMesh: "ચારણા જાળી" },
    hi: { modelTitle: "मॉडल चुनें", crop: "फसल चुनें", problem: "जनरल सेटिंग समस्या चुनें (वैकल्पिक)", button: "समाधान", back: "वापस जाएं", stop: "आवाज़ बंद करें", settingTitle: "फसल सेटिंग", solutionTitle: "समस्या का समाधान", languageName: "हिंदी", introSetting: "मार्शल थ्रेशर में आपके द्वारा चुनी गई फसल के लिए सेटिंग इस प्रकार रखें।", introSolution: "इस सेटिंग समस्या के लिए निम्न समाधान करें।", selectedModel: "मॉडल", languageLabel: "भाषा", selectedCrop: "फसल", selectedProblem: "सेटिंग समस्या", fanPulleyGroove: "फैन पुली ग्रूव", sieveMesh: "छलना जाली" },
    en: { modelTitle: "Select Model", crop: "Select Crop", problem: "Select Problem (Optional)", button: "Get Solution", back: "Back", stop: "Stop Voice", settingTitle: "Crop Setting", solutionTitle: "Problem Solution", languageName: "English", introSetting: "In Marshal Thresher, keep the machine settings as follows.", introSolution: "For this problem, follow these solutions.", selectedModel: "Model", languageLabel: "Language", selectedCrop: "Crop", selectedProblem: "Problem", fanPulleyGroove: "Fan Pulley Groove", sieveMesh: "Sieve Mesh" }
};

const pulleyTranslations = {
    en: { Large: "Large", Small: "Small", Big: "Big" },
    hi: { Large: "बड़ी", Small: "छोटी", Big: "बड़ी" },
    gu: { Large: "મોટી", Small: "નાની", Big: "મોટી" }
};

const machineLabels = {
    gu: { operatingMode: "ઓપરેટિંગ મોડ", vBeltFront: "વી-બેલ્ટ (આગળ)", lowerPulley: "નીચેની પુલી", upperPulley: "ઉપરની પુલી", vBeltBack: "વી-બેલ્ટ (પાછળ)", fanPulleyGroove: "ફેન પુલી ગ્રુવ", lowerPulleyRotor: "નીચેની પુલી (રોટર)", upperPulleyRotor: "ઉપરની પુલી (રોટર)", lowerPulleyFan: "નીચેની પુલી (ફેન)", upperPulleyFan: "ઉપરની પુલી (ફેન)", sieveMesh: "ચારણા જાળી" },
    hi: { operatingMode: "ऑपरेटिंग मोड", vBeltFront: "वी-बेल्ट (आगे)", lowerPulley: "नीचे की पुली", upperPulley: "ऊपर की पुली", vBeltBack: "वी-बेल्ट (पीछे)", fanPulleyGroove: "फैन पुली ग्रूव", lowerPulleyRotor: "नीचे की पुली (रोटर)", upperPulleyRotor: "ऊपर की पुली (रोटर)", lowerPulleyFan: "नीचे की पुली (फैन)", upperPulleyFan: "ऊपर की पुली (फैन)", sieveMesh: "छलना जाली" },
    en: { operatingMode: "Operating Mode", vBeltFront: "V-Belt (Front)", lowerPulley: "Lower Pulley", upperPulley: "Upper Pulley", vBeltBack: "V-Belt (Back)", fanPulleyGroove: "Fan Pulley Groove", lowerPulleyRotor: "Lower Pulley (Rotor)", upperPulleyRotor: "Upper Pulley (Rotor)", lowerPulleyFan: "Lower Pulley (Fan)", upperPulleyFan: "Upper Pulley (Fan)", sieveMesh: "Sieve Mesh" }
};

// ====================== DOM & Listeners (unchanged) ======================
let languageSelect, modelSelect, cropSelect, problemSelect, ukelBtn, backBtn, stopVoiceBtn;
let modelBox, selectionBox, summaryBox, resultBox, actionButtons, languageBox;

document.addEventListener("DOMContentLoaded", () => {
    languageSelect = document.getElementById("languageSelect");
    modelSelect    = document.getElementById("modelSelect");
    cropSelect     = document.getElementById("cropSelect");
    problemSelect  = document.getElementById("problemSelect");

    modelBox      = document.getElementById("modelBox");
    selectionBox  = document.getElementById("selectionBox");
    summaryBox    = document.getElementById("summaryBox");
    resultBox     = document.getElementById("resultBox");
    actionButtons = document.getElementById("actionButtons");
    languageBox   = document.getElementById("languageBox");

    ukelBtn = document.getElementById("ukelBtn");
    backBtn = document.getElementById("backBtn");
    stopVoiceBtn = document.getElementById("stopVoiceBtn");

    languageSelect.addEventListener("change", handleLanguageChange);
    modelSelect.addEventListener("change", handleModelChange);
    ukelBtn.addEventListener("click", getSolution);
    backBtn.addEventListener("click", resetToInitialScreen);
    stopVoiceBtn.addEventListener("click", () => speechSynthesis.cancel());
});

function handleLanguageChange() {
    currentLang = languageSelect.value;
    if (!currentLang) return;
    modelBox.classList.remove("hidden");
    selectionBox.classList.remove("hidden");
    loadModels();
    updateUIText();
}

function handleModelChange() {
    selectedModel = modelSelect.value;
    if (selectedModel) {
        loadCrops();
        loadProblems();
    }
}

function updateUIText() {
    const t = uiText[currentLang];
    if (!t) return;
    document.getElementById("modelTitle").innerText = t.modelTitle;
    document.getElementById("cropTitle").innerText = t.crop;
    document.getElementById("problemTitle").innerText = t.problem;
    ukelBtn.innerText = t.button;
    backBtn.innerText = t.back;
    stopVoiceBtn.innerText = t.stop;
}

function loadModels() {
    modelSelect.innerHTML = `<option value="">-- Select Model --</option>`;
    Object.keys(models).forEach(key => {
        const opt = document.createElement("option");
        opt.value = key;
        opt.textContent = models[key].name[currentLang];
        modelSelect.appendChild(opt);
    });
}

function loadCrops() {
    cropSelect.innerHTML = '<option value="">-- Select Crop --</option>';
    if (!selectedModel || !currentLang) return;
    const modelModes = models[selectedModel].modes || ["single"];
    Object.keys(crops).forEach(key => {
        if (!crops[key]?.[currentLang]) return;
        const cropModes = crops[key].en?.modes || ["single"];
        if (cropModes.some(m => modelModes.includes(m))) {
            const opt = document.createElement("option");
            opt.value = key;
            opt.textContent = crops[key][currentLang].name;
            cropSelect.appendChild(opt);
        }
    });
}

function loadProblems() {
    problemSelect.innerHTML = '<option value="">-- Select Problem (Optional) --</option>';
    if (!currentLang || !problems?.[currentLang]) return;
    problems[currentLang].forEach((p, i) => {
        const opt = document.createElement("option");
        opt.value = i;
        opt.textContent = p.title;
        problemSelect.appendChild(opt);
    });
}

// ====================== SIEVE OVERRIDE HELPER ======================
function getSimplifiedSieve(cropKey, lang) {
    const crop = crops[cropKey];
    if (!crop || !crop[lang]) return null;

    // 1. Use manual override if provided
    if (crop[lang].simplifiedSieve) {
        return crop[lang].simplifiedSieve;
    }

    // 2. Auto extract Upper and Lower from full line
    const data = crop[lang];
    const sieveLine = data.settingsDisplay.find(line => 
        line.includes("Sieve Mesh") || line.includes("ચારણા જાળી") || 
        line.includes("छलना जाली") || line.includes("छलनी मेश")
    );

    if (!sieveLine) return null;

    const upperMatch = sieveLine.match(/ઉપર|Upper|ऊपर\s*-\s*<b>(.*?)<\/b>/i);
    const lowerMatch = sieveLine.match(/નીચે|Lower|नीचे\s*-\s*<b>(.*?)<\/b>/i);

    const upperVal = upperMatch ? upperMatch[1] : "";
    const lowerVal = lowerMatch ? lowerMatch[1] : "";

    if (!upperVal || !lowerVal) return null;

    return `Upper - <b>${upperVal}</b>, Lower - <b>${lowerVal}</b>`;
}

// ====================== generateSettings - FIXED SIEVE VOICE ======================
function generateSettings(cropKey, lang, modelKey) {
    const cropData = crops[cropKey]?.[lang];
    if (!cropData) return { settings: ["Error"], voiceSettings: [], mode: "single" };

    const model = models[modelKey];
    const labels = machineLabels[lang] || machineLabels.en;
    const trans = pulleyTranslations[lang] || pulleyTranslations.en;

    const cropModes = crops[cropKey].en?.modes || ["single"];
    let mode = (model.modes.includes("double") && cropModes.includes("double")) ? "double" : "single";

    const modeText = mode === "double" 
        ? (lang === "gu" ? "ડબલ શાફ્ટ" : lang === "hi" ? "डबल शाफ्ट" : "Double Shaft")
        : (lang === "gu" ? "સિંગલ શાફ્ટ" : lang === "hi" ? "सिंगल शाफ्ट" : "Single Shaft");

    let settings = [`${labels.operatingMode}: <b>${modeText}</b>`];
    let voiceSettings = [`${labels.operatingMode} ${modeText}`];

    // V-Belt Front
    let vBeltFront = (model.type === "smart_double" && mode === "double") ? "5" : "3";
    settings.push(`${labels.vBeltFront}: <b>${vBeltFront}</b>`);
    voiceSettings.push(lang === "gu" ? `વી-બેલ્ટ આગળનું ${vBeltFront}` : 
                       lang === "hi" ? `वी-बेल्ट आगे ${vBeltFront}` : 
                       `V-belt front ${vBeltFront}`);

// === Pulley Logic - FINAL (Double Shaft: Lower Small, Upper Large) ===
    let fanGroove = mode === "single" ? "1" : "2";
    if (cropKey === "castor_small" || cropKey === "castor_large") fanGroove = "3/4";

    if (modelKey === "shahenshah" || 
        (model.type === "standard_single") || 
        (modelKey === "maharaja" && mode === "single")) {
        
        // Single Shaft Models
        // Lower = Large, Upper = Small
        settings.push(`${labels.lowerPulley}: <b>${trans.Large}</b>`);
        settings.push(`${labels.upperPulley}: <b>${trans.Small}</b>`);
        voiceSettings.push(`${labels.lowerPulley} ${trans.Large}`);
        voiceSettings.push(`${labels.upperPulley} ${trans.Small}`);

        if (modelKey === "maharaja") {
            settings.push(`${labels.vBeltBack}: <b>1</b>`);
            settings.push(`${labels.fanPulleyGroove}: <b>${fanGroove}</b>`);
            voiceSettings.push(lang === "gu" ? `વી-બેલ્ટ પાછળનું 1` : lang === "hi" ? `वी-बेल्ट पीछे 1` : `V-belt back 1`);
            voiceSettings.push(`${labels.fanPulleyGroove} ${fanGroove}`);
        }
    } 
    else if (model.type === "smart_double") {
        if (mode === "double") {
            settings.push(`${labels.lowerPulleyRotor}: <b>${trans.Small}</b>`);
            settings.push(`${labels.upperPulleyRotor}: <b>${trans.Big}</b>`);
            settings.push(`${labels.lowerPulleyFan}: <b>${trans.Large}</b>`);
            settings.push(`${labels.upperPulleyFan}: <b>${trans.Small}</b>`);
            voiceSettings.push(`${labels.lowerPulleyRotor} ${trans.Small}`);
            voiceSettings.push(`${labels.upperPulleyRotor} ${trans.Big}`);
            voiceSettings.push(`${labels.lowerPulleyFan} ${trans.Large}`);
            voiceSettings.push(`${labels.upperPulleyFan} ${trans.Small}`);
        } else {
            settings.push(`${labels.lowerPulley}: <b>${trans.Large}</b>`);
            settings.push(`${labels.upperPulley}: <b>${trans.Small}</b>`);
            voiceSettings.push(`${labels.lowerPulley} ${trans.Large}`);
            voiceSettings.push(`${labels.upperPulley} ${trans.Small}`);
        }
    } 
    else if (model.type === "maharaja" && mode === "double") {
        // Maharaja Double Shaft - As per your latest requirement
        settings.push(`${labels.lowerPulley}: <b>${trans.Small}</b>`);
        settings.push(`${labels.upperPulley}: <b>${trans.Large}</b>`);
        settings.push(`${labels.vBeltBack}: <b>1</b>`);
        settings.push(`${labels.fanPulleyGroove}: <b>${fanGroove}</b>`);
        
        voiceSettings.push(`${labels.lowerPulley} ${trans.Small}`);
        voiceSettings.push(`${labels.upperPulley} ${trans.Large}`);
        voiceSettings.push(lang === "gu" ? `વી-બેલ્ટ પાછળનું 1` : lang === "hi" ? `वी-बेल्ट पीछे 1` : `V-belt back 1`);
        voiceSettings.push(`${labels.fanPulleyGroove} ${fanGroove}`);
    }
    
    // ====================== CUTTER + SIEVE - FIXED NATURAL VOICE ======================
    const isPremiumModel = (modelKey === "shahenshah" || modelKey === "maharaja");
    const cutterLine = cropData.settingsDisplay[0];

    // Cutter
    if (cutterLine) {
        settings.push(cutterLine);
        const cutterValue = cutterLine.match(/<b>(.*?)<\/b>/)?.[1] || "";
        const cutterVoice = lang === "gu" ? `કટર ${cutterValue} રાખો` :
                           lang === "hi" ? `कटर ${cutterValue} रखें` :
                           `Set cutter at ${cutterValue}`;
        voiceSettings.push(cutterVoice);
    }

    // ====================== SIEVE - Always Upper & Lower (All Languages) ======================
    const sieveLine = cropData.settingsDisplay.find(line => 
        line.includes("Sieve Mesh") || line.includes("ચારણા જાળી") || 
        line.includes("छलना जाली") || line.includes("छलनी मेश")
    );

    if (sieveLine) {
        if (isPremiumModel) {
            // Maharaja & Shahenshah - Full 3 values
            settings.push(sieveLine);
            let fullText = sieveLine.replace(/<b>/g, '').replace(/<\/b>/g, '').trim();
            fullText = fullText.replace("ચારણા જાળી:", "ચારણા જાળીમાં")
                              .replace("छलना जाली:", "छलना जाली में")
                              .replace("Sieve Mesh:", "Sieve mesh");
            voiceSettings.push(fullText);
        } else {
            // === NON-PREMIUM - Always show as Upper & Lower ===
            const pair = cropData.sievePair || "upper_lower";
            let displaySieve = sieveLine;

            if (pair === "upper_lower") {
                displaySieve = sieveLine.replace(/વચ્ચે - <b>.*?<\/b>,?\s*/, "")
                                       .replace(/बीच में - <b>.*?<\/b>,?\s*/, "")
                                       .replace(/Middle - <b>.*?<\/b>,?\s*/, "");
            } 
            else if (pair === "upper_middle") {
                // Upper + Middle → Show as Upper & Lower
                displaySieve = sieveLine.replace(/નીચે - <b>.*?<\/b>/, "")
                                       .replace(/नीचे - <b>.*?<\/b>/, "")
                                       .replace(/Lower - <b>.*?<\/b>/, "")
                                       .replace("Middle", "Lower")
                                       .replace("વચ્ચે", "નીચે")           // Gujarati
                                       .replace("बीच में", "नीचे");       // Hindi
            } 
            else if (pair === "middle_lower") {
                // Middle + Lower → Show as Upper & Lower
                displaySieve = sieveLine.replace(/ઉપર - <b>.*?<\/b>,?\s*/, "")
                                       .replace(/ऊपर - <b>.*?<\/b>,?\s*/, "")
                                       .replace(/Upper - <b>.*?<\/b>,?\s*/, "")
                                       .replace("Middle", "Upper")
                                       .replace("વચ્ચે", "ઉપર")           // Gujarati
                                       .replace("बीच में", "ऊपर");        // Hindi
            }

            // Remove original label (prevents "ચારણા જાળી: ચારણા જાળી:")
            displaySieve = displaySieve.replace(/^.*?(ચારણા જાળી|छलना जाली|Sieve Mesh|छलनी मेश)[:：]?\s*/i, "").trim();
            displaySieve = displaySieve.replace(/,\s*$/, "");   // Remove trailing comma

            // Final localization of Upper/Lower
            if (lang === "gu") {
                displaySieve = displaySieve.replace("Upper", "ઉપર").replace("Lower", "નીચે");
            }
            if (lang === "hi") {
                displaySieve = displaySieve.replace("Upper", "ऊपर").replace("Lower", "नीचे");
            }

            settings.push(`${labels.sieveMesh}: ${displaySieve}`);

            // Natural Voice
            let cleanSieve = displaySieve.replace(/<b>/g, '').replace(/<\/b>/g, '').trim();
            const sieveVoice = lang === "gu" ? `ચારણા જાળીમાં ${cleanSieve} રાખો` :
                               lang === "hi" ? `छलना जाली में ${cleanSieve} रखें` :
                               `Sieve mesh ${cleanSieve}`;
            voiceSettings.push(sieveVoice);
        }
    }

    // Remaining settings
    const remaining = cropData.settingsDisplay.filter((_, i) => i !== 0);
    settings = settings.concat(remaining.filter(line => 
        !line.includes("Sieve Mesh") && !line.includes("ચારણા જાળી") && 
        !line.includes("छलना जाली") && !line.includes("छलनी मेश")
    ));

    return { settings, voiceSettings, mode };
}

// ====================== GET SOLUTION ======================
function getSolution() {
    if (!currentLang) return alert("Please select language first");
    if (!selectedModel) return alert("Please select model");
    if (!cropSelect.value) return alert(currentLang === "gu" ? "પાક પસંદ કરો" : currentLang === "hi" ? "फसल चुनें" : "Please select crop");

    const lang = currentLang;
    const cropKey = cropSelect.value;
    const problemIndex = problemSelect.value ? Number(problemSelect.value) : null;

    const cropData = crops[cropKey]?.[lang];
    const problemData = problemIndex !== null ? problems[lang]?.[problemIndex] : null;

    if (!cropData) return alert("Crop data not found");

    const { settings, voiceSettings } = generateSettings(cropKey, lang, selectedModel);

    languageBox.classList.add("hidden");
    modelBox.classList.add("hidden");
    selectionBox.classList.add("hidden");

    summaryBox.classList.remove("hidden");
    resultBox.classList.remove("hidden");
    actionButtons.classList.remove("hidden");

    summaryBox.innerHTML = `
        <h3>${uiText[lang].languageLabel}: ${uiText[lang].languageName}</h3>
        <h3>${uiText[lang].selectedModel}: ${models[selectedModel].name[lang]}</h3>
        <h3>${uiText[lang].selectedCrop}: ${cropData.name}</h3>
        ${problemData ? `<h3>${uiText[lang].selectedProblem}: ${problemData.title}</h3>` : ''}
    `;

    resultBox.innerHTML = `
        <h2>${uiText[lang].settingTitle}</h2>
        <ul>${settings.map(s => `<li>${s}</li>`).join("")}</ul>
        ${problemData ? `<h2 style="margin-top:30px;">${uiText[lang].solutionTitle}</h2><ul>${(problemData.solutionDisplay || []).map(s => `<li>${s}</li>`).join("")}</ul>` : ''}
    `;

    speakSolution(lang, voiceSettings, cropData.settingsSpeech || [], problemData ? problemData.solutionSpeech || [] : []);
}

function speakSolution(lang, machineVoiceSettings, cropSpeech, solutionSpeech) {
    let text = (uiText[lang]?.introSetting || "") + " ";
    machineVoiceSettings.forEach(line => text += line + ". ");
    if (cropSpeech?.length) cropSpeech.forEach(line => { if (line) text += line + ". "; });
    if (solutionSpeech?.length) {
        text += (uiText[lang]?.introSolution || "") + " ";
        solutionSpeech.forEach(s => { if (s) text += s + ". "; });
    }

    const utterance = new SpeechSynthesisUtterance(text.trim());
    utterance.lang = lang === "gu" ? "gu-IN" : lang + "-IN";
    utterance.rate = 0.92;
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
}

function resetToInitialScreen() {
    speechSynthesis.cancel();
    summaryBox.classList.add("hidden");
    resultBox.classList.add("hidden");
    actionButtons.classList.add("hidden");
    languageBox.classList.remove("hidden");
    modelBox.classList.remove("hidden");
    selectionBox.classList.remove("hidden");
}

// ====================== CROPS & PROBLEMS ======================


const crops = {pearl_millet_g: {gu: {name: "બાજરી (G)",sievePair: "upper_lower",settingsDisplay:["કટર: <b>4</b>","ચારણા જાળી: ઉપર - <b>6</b>, વચ્ચે - <b>5.5</b>, નીચે - <b>4</b>","સુપડી જાળી: ઉપર - <b>4</b>, નીચે - <b>4</b>","રેત જાળી: <b>1.6</b>","હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>","ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>","ચારણાની ચાલ: <b>લાંબી</b>","ટ્રેક્ટરનો રેસ: <b>12</b>"],settingsSpeech:["સુપડી જાળી માં ઉપર ચાર અને નીચે ચાર રાખો","રેત જાળી એક દશાંશ છ રાખો","હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો","ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો","ચારણાની ચાલ લાંબી રાખો","ટ્રેક્ટરનો રેસ બાર રાખો"]},hi: {name: "बाजरा (G)",sievePair: "upper_lower",settingsDisplay:["कटर: <b>4</b>","छलना जाली:  ऊपर - <b>6</b>, बीच में - <b>5.5</b>, नीचे - <b>4</b>","सुपड़ी जाली: ऊपर - <b>4</b>, नीचे - <b>4</b>","रेत जाली: <b>1.6</b>","हवा का हैंडल: आगे का  - <b>बीच में</b>, पीछे का - <b>ऊपर</b>","चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>","छलने की चाल: <b>लंबी</b>","ट्रैक्टर का रेस: <b>12</b>"],settingsSpeech:["सुपड़ी जाली में ऊपर चार और नीचे चार रखें","रेत जाली एक दशमलव छह रखें","हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें","चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें","छलने की चाल लंबी रखें","ट्रैक्टर का रेस बारह रखें"]},en: {name: "Pearl Millet (G)",modes: ["single"],sievePair: "upper_lower",settingsDisplay:["Cutter: <b>4</b>","Sieve Mesh: Upper - <b>6</b>, Middle - <b>5.5</b>, Lower - <b>4</b>","Winnowing Mesh: Upper - <b>4</b>, Lower - <b>4</b>","Sand Mesh: <b>1.6</b>","Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>","Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>","Sieve Movement: <b>Long</b>","Tractor Race: <b>12</b>"],settingsSpeech:["In the winnowing mesh, keep both upper and lower at four","Keep the sand mesh at one point six","Set the air handle with the front at middle and the rear at up","Set the chamber curtain with the side down and the rear at medium","Keep the sieve movement long","Keep the tractor RPM at twelve"]}},

pearl_millet_r: {
  gu: {
    name: "બાજરી (R)",
    sievePair: "upper_lower",
    settingsDisplay: [
      "કટર: <b>3.6</b>",
      "ચારણા જાળી: ઉપર - <b>6</b>, વચ્ચે - <b>5.5</b>, નીચે - <b>4</b>",
      "સુપડી જાળી: ઉપર - <b>4</b>, નીચે - <b>3</b>",
      "રેત જાળી: <b>1.6</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર ચાર અને નીચે ત્રણ રાખો",
      "રેત જાળી એક દશાંશ છ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "बाजरा (R)",
    sievePair: "upper_lower",
    settingsDisplay: [
      "कटर: <b>3.6</b>",
      "छलना जाली: ऊपर - <b>6</b>, बीच में - <b>5.5</b>, नीचे - <b>4</b>",
      "सुपड़ी जाली: ऊपर - <b>4</b>, नीचे - <b>3</b>",
      "रेत जाली: <b>1.6</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर चार और नीचे तीन रखें",
      "रेत जाली एक दशमलव छह रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Pearl Millet (R)",
    modes: ["single"],
    sievePair: "upper_lower",
    settingsDisplay: [
      "Cutter: <b>3.6</b>",
      "Sieve Mesh: Upper - <b>6</b>, Middle - <b>5.5</b>, Lower - <b>4</b>",
      "Winnowing Mesh: Upper - <b>4</b>, Lower - <b>3</b>",
      "Sand Mesh: <b>1.6</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at four and the lower at three",
      "Keep the sand mesh at one point six",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},
wheat: {
  gu: {
    name: "ઘઉં",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>7.5</b>",
      "ચારણા જાળી: ઉપર - <b>7</b>, વચ્ચે - <b>6</b>, નીચે - <b>5.5</b>",
      "સુપડી જાળી: ઉપર - <b>5.5</b>, નીચે - <b>5.5</b>",
      "રેત જાળી: <b>3</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>ટુંકી</b>",
      "ટ્રેક્ટરનો રેસ: <b>14</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર પાંચ દશાંશ પાંચ અને નીચે પણ પાંચ દશાંશ પાંચ રાખો",
      "રેત જાળી ત્રણ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ ટુંકી રાખો",
      "ટ્રેક્ટરનો રેસ ચૌદ રાખો"
    ]
  },
  hi: {
    name: "गेहूं",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>7.5</b>",
      "छलना जाली: ऊपर - <b>7</b>, बीच में - <b>6</b>, नीचे - <b>5.5</b>",
      "सुपड़ी जाली: ऊपर - <b>5.5</b>, नीचे - <b>5.5</b>",
      "रेत जाली: <b>3</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>टूंकी</b>",
      "ट्रैक्टर का रेस: <b>14</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर पाँच दशमलव पाँच और नीचे भी पाँच दशमलव पाँच रखें",
      "रेत जाली तीन रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल टूंकी रखें",
      "ट्रैक्टर का रेस चौदह रखें"
    ]
  },
  en: {
    name: "Wheat",
    modes: ["single"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>7.5</b>",
      "Sieve Mesh: Upper - <b>7</b>, Middle - <b>6</b>, Lower - <b>5.5</b>",
      "Winnowing Mesh: Upper - <b>5.5</b>, Lower - <b>5.5</b>",
      "Sand Mesh: <b>3</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Short</b>",
      "Tractor Race: <b>14</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep both upper and lower at five point five",
      "Keep the sand mesh at three",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement short",
      "Keep the tractor RPM at fourteen"
    ]
  }
},

wheat_bhalia: {
  gu: {
    name: "ઘઉં (ભાલિયા)",
    sievePair: "upper_middle",
    settingsDisplay: [
      "કટર: <b>7.5</b>",
      "ચારણા જાળી: ઉપર - <b>8</b>, વચ્ચે - <b>7</b>, નીચે - <b>6</b>",
      "સુપડી જાળી: ઉપર - <b>9</b>, નીચે - <b>8</b>",
      "રેત જાળી: <b>3</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>ટૂંકી</b>",
      "ટ્રેક્ટરનો રેસ: <b>14</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર નવ અને નીચે આઠ રાખો",
      "રેત જાળી ત્રણ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ ટૂંકી રાખો",
      "ટ્રેક્ટરનો રેસ ચૌદ રાખો"
    ]
  },
  hi: {
    name: "गेहूं (भालिया)",
    sievePair: "upper_middle",
    settingsDisplay: [
      "कटर: <b>7.5</b>",
      "छलना जाली: ऊपर - <b>8</b>, बीच में - <b>7</b>, नीचे - <b>6</b>",
      "सुपड़ी जाली: ऊपर - <b>9</b>, नीचे - <b>8</b>",
      "रेत जाली: <b>3</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>टूंकी</b>",
      "ट्रैक्टर का रेस: <b>14</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर नौ और नीचे आठ रखें",
      "रेत जाली तीन रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल टूंकी रखें",
      "ट्रैक्टर का रेस चौदह रखें"
    ]
  },
  en: {
    name: "Wheat (Bhalia)",
    modes: ["single"],
    sievePair: "upper_middle",
    settingsDisplay: [
      "Cutter: <b>7.5</b>",
      "Sieve Mesh: Upper - <b>8</b>, Middle - <b>7</b>, Lower - <b>6</b>",
      "Winnowing Mesh: Upper - <b>9</b>, Lower - <b>8</b>",
      "Sand Mesh: <b>3</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Short</b>",
      "Tractor Race: <b>14</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at nine and the lower at eight",
      "Keep the sand mesh at three",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement short",
      "Keep the tractor RPM at fourteen"
    ]
  }
},

mustard: {
  gu: {
    name: "રાયડો",
    sievePair: "upper_lower",
    settingsDisplay: [
      "કટર: <b>7.5</b>",
      "ચારણા જાળી: ઉપર - <b>6</b>, વચ્ચે - <b>5.5</b>, નીચે - <b>4</b>",
      "સુપડી જાળી: ઉપર - <b>4</b>, નીચે - <b>4</b>",
      "રેત જાળી: <b>1.6</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>13</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર ચાર અને નીચે ચાર રાખો",
      "રેત જાળી એક દશાંશ છ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ તેર રાખો"
    ]
  },
  hi: {
    name: "रायड़ा / सरसों",
    sievePair: "upper_lower",
    settingsDisplay: [
      "कटर: <b>7.5</b>",
      "छलना जाली: ऊपर - <b>6</b>, बीच में - <b>5.5</b>, नीचे - <b>4</b>",
      "सुपड़ी जाली: ऊपर - <b>4</b>, नीचे - <b>4</b>",
      "रेत जाली: <b>1.6</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>13</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर चार और नीचे चार रखें",
      "रेत जाली एक दशमलव छह रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस तेरह रखें"
    ]
  },
  en: {
    name: "Mustard",
    modes: ["single"],
    sievePair: "upper_lower",
    settingsDisplay: [
      "Cutter: <b>7.5</b>",
      "Sieve Mesh: Upper - <b>6</b>, Middle - <b>5.5</b>, Lower - <b>4</b>",
      "Winnowing Mesh: Upper - <b>4</b>, Lower - <b>4</b>",
      "Sand Mesh: <b>1.6</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>13</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep both upper and lower at four",
      "Keep the sand mesh at one point six",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at thirteen"
    ]
  }
},

sorghum_small: {
  gu: {
    name: "જુવાર (નાની)",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>6</b>",
      "ચારણા જાળી: ઉપર - <b>6</b>, વચ્ચે - <b>5.5</b>, નીચે - <b>5</b>",
      "સુપડી જાળી: ઉપર - <b>5.5</b>, નીચે - <b>5.5</b>",
      "રેત જાળી: <b>1.6</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર પાંચ દશાંશ પાંચ અને નીચે પણ પાંચ દશાંશ પાંચ રાખો",
      "રેત જાળી એક દશાંશ છ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "ज्वार (छोटी)",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>6</b>",
      "छलना जाली: ऊपर - <b>6</b>, बीच में - <b>5.5</b>, नीचे - <b>5</b>",
      "सुपड़ी जाली: ऊपर - <b>5.5</b>, नीचे - <b>5.5</b>",
      "रेत जाली: <b>1.6</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर पाँच दशमलव पाँच और नीचे भी पाँच दशमलव पाँच रखें",
      "रेत जाली एक दशमलव छह रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Sorghum (Small)",
    modes: ["single"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>6</b>",
      "Sieve Mesh: Upper - <b>6</b>, Middle - <b>5.5</b>, Lower - <b>5</b>",
      "Winnowing Mesh: Upper - <b>5.5</b>, Lower - <b>5.5</b>",
      "Sand Mesh: <b>1.6</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep both upper and lower at five point five",
      "Keep the sand mesh at one point six",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},

sorghum_large: {
  gu: {
    name: "જુવાર (મોટી)",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>8.5</b>",
      "ચારણા જાળી: ઉપર - <b>9</b>, વચ્ચે - <b>8</b>, નીચે - <b>7</b>",
      "સુપડી જાળી: ઉપર - <b>9</b>, નીચે - <b>8</b>",
      "રેત જાળી: <b>3</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર નવ અને નીચે આઠ રાખો",
      "રેત જાળી ત્રણ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "ज्वार (बड़ी)",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>8.5</b>",
      "छलना जाली: ऊपर - <b>9</b>, बीच में - <b>8</b>, नीचे - <b>7</b>",
      "सुपड़ी जाली: ऊपर - <b>9</b>, नीचे - <b>8</b>",
      "रेत जाली: <b>3</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर नौ और नीचे आठ रखें",
      "रेत जाली तीन रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Sorghum (Large)",
    modes: ["single"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>8.5</b>",
      "Sieve Mesh: Upper - <b>9</b>, Middle - <b>8</b>, Lower - <b>7</b>",
      "Winnowing Mesh: Upper - <b>9</b>, Lower - <b>8</b>",
      "Sand Mesh: <b>3</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at nine and the lower at eight",
      "Keep the sand mesh at three",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},

guar: {
  gu: {
    name: "ગુવાર",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>7.5</b>",
      "ચારણા જાળી: ઉપર - <b>6</b>, વચ્ચે - <b>5.5</b>, નીચે - <b>5</b>",
      "સુપડી જાળી: ઉપર - <b>5.5</b>, નીચે - <b>5.5</b>",
      "રેત જાળી: <b>3</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>ઉપર</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>13</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર પાંચ દશાંશ પાંચ અને નીચે પણ પાંચ દશાંશ પાંચ રાખો",
      "રેત જાળી ત્રણ રાખો",
      "હવાનું હેન્ડલ માં આગળનું ઉપર અને પાછળનું પણ ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ તેર રાખો"
    ]
  },
  hi: {
    name: "ग्वार",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>7.5</b>",
      "छलना जाली: ऊपर - <b>6</b>, बीच में - <b>5.5</b>, नीचे - <b>5</b>",
      "सुपड़ी जाली: ऊपर - <b>5.5</b>, नीचे - <b>5.5</b>",
      "रेत जाली: <b>3</b>",
      "हवा का हैंडल: आगे का - <b>ऊपर</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>13</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर पाँच दशमलव पाँच और नीचे भी पाँच दशमलव पाँच रखें",
      "रेत जाली तीन रखें",
      "हवा के हैंडल में आगे वाला ऊपर और पीछे वाला भी ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस तेरह रखें"
    ]
  },
  en: {
    name: "Guar",
    modes: ["single"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>7.5</b>",
      "Sieve Mesh: Upper - <b>6</b>, Middle - <b>5.5</b>, Lower - <b>5</b>",
      "Winnowing Mesh: Upper - <b>5.5</b>, Lower - <b>5.5</b>",
      "Sand Mesh: <b>3</b>",
      "Air Handle: Front - <b>Up</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>13</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep both upper and lower at five point five",
      "Keep the sand mesh at three",
      "Set the air handle with both front and rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at thirteen"
    ]
  }
},

cumin: {
  gu: {
    name: "જીરું",
    sievePair: "upper_middle",
    settingsDisplay: [
      "કટર: <b>7.5</b>",
      "ચારણા જાળી: ઉપર - <b>6</b>, વચ્ચે - <b>5.5</b>, નીચે - <b>5</b>",
      "સુપડી જાળી: ઉપર - <b>6</b>, નીચે - <b>5.5</b>",
      "રેત જાળી: <b>1.6</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
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
    sievePair: "upper_middle",
    settingsDisplay: [
      "कटर: <b>7.5</b>",
      "छलना जाली: ऊपर - <b>6</b>, बीच में - <b>5.5</b>, नीचे - <b>5</b>",
      "सुपड़ी जाली: ऊपर - <b>6</b>, नीचे - <b>5.5</b>",
      "रेत जाली: <b>1.6</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
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
    modes: ["single"],
    sievePair: "upper_middle",
    settingsDisplay: [
      "Cutter: <b>7.5</b>",
      "Sieve Mesh: Upper - <b>6</b>, Middle - <b>5.5</b>, Lower - <b>5</b>",
      "Winnowing Mesh: Upper - <b>6</b>, Lower - <b>5.5</b>",
      "Sand Mesh: <b>1.6</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at six and the lower at five point five",
      "Keep the sand mesh at one point six",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},

fennel: {
  gu: {
    name: "વરિયાળી",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>7.5</b>",
      "ચારણા જાળી: ઉપર - <b>7</b>, વચ્ચે - <b>6</b>, નીચે - <b>5.5</b>",
      "સુપડી જાળી: ઉપર - <b>8</b>, નીચે - <b>7</b>",
      "રેત જાળી: <b>1.6</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર આઠ અને નીચે સાત રાખો",
      "રેત જાળી એક દશાંશ છ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "सौंफ",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>7.5</b>",
      "छलना जाली: ऊपर - <b>7</b>, बीच में - <b>6</b>, नीचे - <b>5.5</b>",
      "सुपड़ी जाली: ऊपर - <b>8</b>, नीचे - <b>7</b>",
      "रेत जाली: <b>1.6</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर आठ और नीचे सात रखें",
      "रेत जाली एक दशमलव छह रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Fennel",
    modes: ["single"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>7.5</b>",
      "Sieve Mesh: Upper - <b>7</b>, Middle - <b>6</b>, Lower - <b>5.5</b>",
      "Winnowing Mesh: Upper - <b>8</b>, Lower - <b>7</b>",
      "Sand Mesh: <b>1.6</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at eight and the lower at seven",
      "Keep the sand mesh at one point six",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},

psyllium: {
  gu: {
    name: "ઇસબગુલ",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>6</b>",
      "ચારણા જાળી: ઉપર - <b>4.5</b>, વચ્ચે - <b>4</b>, નીચે - <b>3</b>",
      "સુપડી જાળી: ઉપર - <b>4</b>, નીચે - <b>3 / 2.5</b>",
      "રેત જાળી: <b>1.6</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર ચાર અને નીચે ત્રણ અથવા બે દશાંશ પાંચ રાખો",
      "રેત જાળી એક દશાંશ છ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "इसबगोल",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>6</b>",
      "छलना जाली: ऊपर - <b>4.5</b>, बीच में - <b>4</b>, नीचे - <b>3</b>",
      "सुपड़ी जाली: ऊपर - <b>4</b>, नीचे - <b>3 / 2.5</b>",
      "रेत जाली: <b>1.6</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर चार और नीचे तीन या दो दशमलव पाँच रखें",
      "रेत जाली एक दशमलव छह रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Psyllium",
    modes: ["single"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>6</b>",
      "Sieve Mesh: Upper - <b>4.5</b>, Middle - <b>4</b>, Lower - <b>3</b>",
      "Winnowing Mesh: Upper - <b>4</b>, Lower - <b>3 / 2.5</b>",
      "Sand Mesh: <b>1.6</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at four and the lower at three or two point five",
      "Keep the sand mesh at one point six",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},

amaranth: {
  gu: {
    name: "રાજગરો",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>7.5</b>",
      "ચારણા જાળી: ઉપર - <b>4</b>, વચ્ચે - <b>3</b>, નીચે - <b>1.6</b>",
      "સુપડી જાળી: ઉપર - <b>4</b>, નીચે - <b>3</b>",
      "રેત જાળી: <b>પતરું</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર ચાર અને નીચે ત્રણ રાખો",
      "રેત જાળી માં પતરું રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "राजगिरा",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>7.5</b>",
      "छलना जाली: ऊपर - <b>4</b>, बीच में - <b>3</b>, नीचे - <b>1.6</b>",
      "सुपड़ी जाली: ऊपर - <b>4</b>, नीचे - <b>3</b>",
      "रेत जाली: <b>चद्दर</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर चार और नीचे तीन रखें",
      "रेत जाली की जगह चद्दर का उपयोग करें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Amaranth",
    modes: ["single"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>7.5</b>",
      "Sieve Mesh: Upper - <b>4</b>, Middle - <b>3</b>, Lower - <b>1.6</b>",
      "Winnowing Mesh: Upper - <b>4</b>, Lower - <b>3</b>",
      "Sand Mesh: <b>Sheet</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at four and the lower at three",
      "Use a sheet for the sand mesh",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},

ajwain: {
  gu: {
    name: "અજમો",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>7.5</b>",
      "ચારણા જાળી: ઉપર - <b>5</b>, વચ્ચે - <b>4.5</b>, નીચે - <b>4</b>",
      "સુપડી જાળી: ઉપર - <b>5</b>, નીચે - <b>4.5</b>",
      "રેત જાળી: <b>1.6</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર પાંચ અને નીચે ચાર દશાંશ પાંચ રાખો",
      "રેત જાળી એક દશાંશ છ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "अजवायन",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>7.5</b>",
      "छलना जाली: ऊपर - <b>5</b>, बीच में - <b>4.5</b>, नीचे - <b>4</b>",
      "सुपड़ी जाली: ऊपर - <b>5</b>, नीचे - <b>4.5</b>",
      "रेत जाली: <b>1.6</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर पाँच और नीचे चार दशमलव पाँच रखें",
      "रेत जाली एक दशमलव छह रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Ajwain",
    modes: ["single"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>7.5</b>",
      "Sieve Mesh: Upper - <b>5</b>, Middle - <b>4.5</b>, Lower - <b>4</b>",
      "Winnowing Mesh: Upper - <b>5</b>, Lower - <b>4.5</b>",
      "Sand Mesh: <b>1.6</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at five and the lower at four point five",
      "Keep the sand mesh at one point six",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},

dill: {
  gu: {
    name: "સુવા",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>7.5</b>",
      "ચારણા જાળી: ઉપર - <b>6</b>, વચ્ચે - <b>5.5</b>, નીચે - <b>5</b>",
      "સુપડી જાળી: ઉપર - <b>6</b>, નીચે - <b>5.5</b>",
      "રેત જાળી: <b>1.6</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર છ અને નીચે પાંચ દશાંશ પાંચ રાખો",
      "રેત જાળી એક દશાંશ છ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "सुवा",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>7.5</b>",
      "छलना जाली: ऊपर - <b>6</b>, बीच में - <b>5.5</b>, नीचे - <b>5</b>",
      "सुपड़ी जाली: ऊपर - <b>6</b>, नीचे - <b>5.5</b>",
      "रेत जाली: <b>1.6</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर छह और नीचे पाँच दशमलव पाँच रखें",
      "रेत जाली एक दशमलव छह रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Dill",
    modes: ["single"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>7.5</b>",
      "Sieve Mesh: Upper - <b>6</b>, Middle - <b>5.5</b>, Lower - <b>5</b>",
      "Winnowing Mesh: Upper - <b>6</b>, Lower - <b>5.5</b>",
      "Sand Mesh: <b>1.6</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at six and the lower at five point five",
      "Keep the sand mesh at one point six",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},

fenugreek: {
  gu: {
    name: "મેથી",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>7.5</b>",
      "ચારણા જાળી: ઉપર - <b>6</b>, વચ્ચે - <b>5.5</b>, નીચે - <b>5</b>",
      "સુપડી જાળી: ઉપર - <b>6</b>, નીચે - <b>5.5</b>",
      "રેત જાળી: <b>1.6</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર છ અને નીચે પાંચ દશાંશ પાંચ રાખો",
      "રેત જાળી એક દશાંશ છ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "मेथी",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>7.5</b>",
      "छलना जाली: ऊपर - <b>6</b>, बीच में - <b>5.5</b>, नीचे - <b>5</b>",
      "सुपड़ी जाली: ऊपर - <b>6</b>, नीचे - <b>5.5</b>",
      "रेत जाली: <b>1.6</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर छह और नीचे पाँच दशमलव पाँच रखें",
      "रेत जाली एक दशमलव छह रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Fenugreek",
    modes: ["single"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>7.5</b>",
      "Sieve Mesh: Upper - <b>6</b>, Middle - <b>5.5</b>, Lower - <b>5</b>",
      "Winnowing Mesh: Upper - <b>6</b>, Lower - <b>5.5</b>",
      "Sand Mesh: <b>1.6</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at six and the lower at five point five",
      "Keep the sand mesh at one point six",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},

radish_seed: {
  gu: {
    name: "રજકો",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>7.5</b>",
      "ચારણા જાળી: ઉપર - <b>4.5</b>, વચ્ચે - <b>4</b>, નીચે - <b>3</b>",
      "સુપડી જાળી: ઉપર - <b>4</b>, નીચે - <b>3</b>",
      "રેત જાળી: <b>1.6</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર ચાર અને નીચે ત્રણ રાખો",
      "રેત જાળી એક દશાંશ છ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "रजका",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>7.5</b>",
      "छलना जाली: ऊपर - <b>4.5</b>, बीच में - <b>4</b>, नीचे - <b>3</b>",
      "सुपड़ी जाली: ऊपर - <b>4</b>, नीचे - <b>3</b>",
      "रेत जाली: <b>1.6</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर चार और नीचे तीन रखें",
      "रेत जाली एक दशमलव छह रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Radish Seed",
    modes: ["single"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>7.5</b>",
      "Sieve Mesh: Upper - <b>4.5</b>, Middle - <b>4</b>, Lower - <b>3</b>",
      "Winnowing Mesh: Upper - <b>4</b>, Lower - <b>3</b>",
      "Sand Mesh: <b>1.6</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at four and the lower at three",
      "Keep the sand mesh at one point six",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},

chicory: {
  gu: {
    name: "ચીકોરી",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>7.5</b>",
      "ચારણા જાળી: ઉપર - <b>4.5</b>, વચ્ચે - <b>4</b>, નીચે - <b>3</b>",
      "સુપડી જાળી: ઉપર - <b>4</b>, નીચે - <b>3</b>",
      "રેત જાળી: <b>1.6</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર ચાર અને નીચે ત્રણ રાખો",
      "રેત જાળી એક દશાંશ છ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "चिकोरी",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>7.5</b>",
      "छलना जाली: ऊपर - <b>4.5</b>, बीच में - <b>4</b>, नीचे - <b>3</b>",
      "सुपड़ी जाली: ऊपर - <b>4</b>, नीचे - <b>3</b>",
      "रेत जाली: <b>1.6</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर चार और नीचे तीन रखें",
      "रेत जाली एक दशमलव छह रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Chicory",
    modes: ["single"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>7.5</b>",
      "Sieve Mesh: Upper - <b>4.5</b>, Middle - <b>4</b>, Lower - <b>3</b>",
      "Winnowing Mesh: Upper - <b>4</b>, Lower - <b>3</b>",
      "Sand Mesh: <b>1.6</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at four and the lower at three",
      "Keep the sand mesh at one point six",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},

onion_seed: {
  gu: {
    name: "ડુંગળી નું બી",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>7.5</b>",
      "ચારણા જાળી: ઉપર - <b>4.5</b>, વચ્ચે - <b>4</b>, નીચે - <b>3</b>",
      "સુપડી જાળી: ઉપર - <b>4</b>, નીચે - <b>3</b>",
      "રેત જાળી: <b>1.6</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર ચાર અને નીચે ત્રણ રાખો",
      "રેત જાળી એક દશાંશ છ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "प्याज का बीज",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>7.5</b>",
      "छलना जाली: ऊपर - <b>4.5</b>, बीच में - <b>4</b>, नीचे - <b>3</b>",
      "सुपड़ी जाली: ऊपर - <b>4</b>, नीचे - <b>3</b>",
      "रेत जाली: <b>1.6</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर चार और नीचे तीन रखें",
      "रेत जाली एक दशमलव छह रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Onion Seed",
    modes: ["single"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>7.5</b>",
      "Sieve Mesh: Upper - <b>4.5</b>, Middle - <b>4</b>, Lower - <b>3</b>",
      "Winnowing Mesh: Upper - <b>4</b>, Lower - <b>3</b>",
      "Sand Mesh: <b>1.6</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at four and the lower at three",
      "Keep the sand mesh at one point six",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},

taramira: {
  gu: {
    name: "તારામેરા",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>7.5</b>",
      "ચારણા જાળી: ઉપર - <b>4.5</b>, વચ્ચે - <b>4</b>, નીચે - <b>3</b>",
      "સુપડી જાળી: ઉપર - <b>4</b>, નીચે - <b>3</b>",
      "રેત જાળી: <b>1.6</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર ચાર અને નીચે ત્રણ રાખો",
      "રેત જાળી એક દશાંશ છ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "तारामीरा",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>7.5</b>",
      "छलना जाली: ऊपर - <b>4.5</b>, बीच में - <b>4</b>, नीचे - <b>3</b>",
      "सुपड़ी जाली: ऊपर - <b>4</b>, नीचे - <b>3</b>",
      "रेत जाली: <b>1.6</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर चार और नीचे तीन रखें",
      "रेत जाली एक दशमलव छह रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Taramira",
    modes: ["single"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>7.5</b>",
      "Sieve Mesh: Upper - <b>4.5</b>, Middle - <b>4</b>, Lower - <b>3</b>",
      "Winnowing Mesh: Upper - <b>4</b>, Lower - <b>3</b>",
      "Sand Mesh: <b>1.6</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at four and the lower at three",
      "Keep the sand mesh at one point six",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},

linseed: {
  gu: {
    name: "અસારીયો",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>7.5</b>",
      "ચારણા જાળી: ઉપર - <b>4.5</b>, વચ્ચે - <b>4</b>, નીચે - <b>3</b>",
      "સુપડી જાળી: ઉપર - <b>4</b>, નીચે - <b>3</b>",
      "રેત જાળી: <b>1.6</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર ચાર અને નીચે ત્રણ રાખો",
      "રેત જાળી એક દશાંશ છ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "असारिया",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>7.5</b>",
      "छलना जाली: ऊपर - <b>4.5</b>, बीच में - <b>4</b>, नीचे - <b>3</b>",
      "सुपड़ी जाली: ऊपर - <b>4</b>, नीचे - <b>3</b>",
      "रेत जाली: <b>1.6</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर चार और नीचे तीन रखें",
      "रेत जाली एक दशमलव छह रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Linseed",
    modes: ["single"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>7.5</b>",
      "Sieve Mesh: Upper - <b>4.5</b>, Middle - <b>4</b>, Lower - <b>3</b>",
      "Winnowing Mesh: Upper - <b>4</b>, Lower - <b>3</b>",
      "Sand Mesh: <b>1.6</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at four and the lower at three",
      "Keep the sand mesh at one point six",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},

barley: {
  gu: {
    name: "જવ",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>7.5</b>",
      "ચારણા જાળી: ઉપર - <b>8</b>, વચ્ચે - <b>7</b>, નીચે - <b>6</b>",
      "સુપડી જાળી: ઉપર - <b>8</b>, નીચે - <b>7</b>",
      "રેત જાળી: <b>1.6</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર આઠ અને નીચે સાત રાખો",
      "રેત જાળી એક દશાંશ છ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "जव",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>7.5</b>",
      "छलना जाली: ऊपर - <b>8</b>, बीच में - <b>7</b>, नीचे - <b>6</b>",
      "सुपड़ी जाली: ऊपर - <b>8</b>, नीचे - <b>7</b>",
      "रेत जाली: <b>1.6</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर आठ और नीचे सात रखें",
      "रेत जाली एक दशमलव छह रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Barley",
    modes: ["single"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>7.5</b>",
      "Sieve Mesh: Upper - <b>8</b>, Middle - <b>7</b>, Lower - <b>6</b>",
      "Winnowing Mesh: Upper - <b>8</b>, Lower - <b>7</b>",
      "Sand Mesh: <b>1.6</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at eight and the lower at seven",
      "Keep the sand mesh at one point six",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},

sesame: {
  gu: {
    name: "તલ",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>7.5</b>",
      "ચારણા જાળી: ઉપર - <b>4.5</b>, વચ્ચે - <b>4</b>, નીચે - <b>3</b>",
      "સુપડી જાળી: ઉપર - <b>4</b>, નીચે - <b>3</b>",
      "રેત જાળી: <b>1.6</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર ચાર અને નીચે ત્રણ રાખો",
      "રેત જાળી એક દશાંશ છ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "तिल",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>7.5</b>",
      "छलना जाली: ऊपर - <b>4.5</b>, बीच में - <b>4</b>, नीचे - <b>3</b>",
      "सुपड़ी जाली: ऊपर - <b>4</b>, नीचे - <b>3</b>",
      "रेत जाली: <b>1.6</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर चार और नीचे तीन रखें",
      "रेत जाली एक दशमलव छह रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Sesame",
    modes: ["single"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>7.5</b>",
      "Sieve Mesh: Upper - <b>4.5</b>, Middle - <b>4</b>, Lower - <b>3</b>",
      "Winnowing Mesh: Upper - <b>4</b>, Lower - <b>3</b>",
      "Sand Mesh: <b>1.6</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at four and the lower at three",
      "Keep the sand mesh at one point six",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},

green_gram: {
  gu: {
    name: "મગ",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>8.5</b>",
      "ચારણા જાળી: ઉપર - <b>7</b>, વચ્ચે - <b>6</b>, નીચે - <b>5.5</b>",
      "સુપડી જાળી: ઉપર - <b>6</b>, નીચે - <b>5.5</b>",
      "રેત જાળી: <b>3</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર છ અને નીચે પાંચ દશાંશ પાંચ રાખો",
      "રેત જાળી ત્રણ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "मूंग",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>8.5</b>",
      "छलना जाली: ऊपर - <b>7</b>, बीच में - <b>6</b>, नीचे - <b>5.5</b>",
      "सुपड़ी जाली: ऊपर - <b>6</b>, नीचे - <b>5.5</b>",
      "रेत जाली: <b>3</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर छह और नीचे पाँच दशमलव पाँच रखें",
      "रेत जाली तीन रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Green Gram",
    modes: ["double"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>8.5</b>",
      "Sieve Mesh: Upper - <b>7</b>, Middle - <b>6</b>, Lower - <b>5.5</b>",
      "Winnowing Mesh: Upper - <b>6</b>, Lower - <b>5.5</b>",
      "Sand Mesh: <b>3</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at six and the lower at five point five",
      "Keep the sand mesh at three",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},

moth_bean: {
  gu: {
    name: "મઠ",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>8.5</b>",
      "ચારણા જાળી: ઉપર - <b>7</b>, વચ્ચે - <b>6</b>, નીચે - <b>5.5</b>",
      "સુપડી જાળી: ઉપર - <b>6</b>, નીચે - <b>5.5</b>",
      "રેત જાળી: <b>3</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર છ અને નીચે પાંચ દશાંશ પાંચ રાખો",
      "રેત જાળી ત્રણ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "मोठ",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>8.5</b>",
      "छलना जाली: ऊपर - <b>7</b>, बीच में - <b>6</b>, नीचे - <b>5.5</b>",
      "सुपड़ी जाली: ऊपर - <b>6</b>, नीचे - <b>5.5</b>",
      "रेत जाली: <b>3</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर छह और नीचे पाँच दशमलव पाँच रखें",
      "रेत जाली तीन रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Moth Bean",
    modes: ["double"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>8.5</b>",
      "Sieve Mesh: Upper - <b>7</b>, Middle - <b>6</b>, Lower - <b>5.5</b>",
      "Winnowing Mesh: Upper - <b>6</b>, Lower - <b>5.5</b>",
      "Sand Mesh: <b>3</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at six and the lower at five point five",
      "Keep the sand mesh at three",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},

black_gram: {
  gu: {
    name: "અડદ",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>8.5</b>",
      "ચારણા જાળી: ઉપર - <b>7</b>, વચ્ચે - <b>6</b>, નીચે - <b>5.5</b>",
      "સુપડી જાળી: ઉપર - <b>6</b>, નીચે - <b>5.5</b>",
      "રેત જાળી: <b>3</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર છ અને નીચે પાંચ દશાંશ પાંચ રાખો",
      "રેત જાળી ત્રણ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "उड़द",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>8.5</b>",
      "छलना जाली: ऊपर - <b>7</b>, बीच में - <b>6</b>, नीचे - <b>5.5</b>",
      "सुपड़ी जाली: ऊपर - <b>6</b>, नीचे - <b>5.5</b>",
      "रेत जाली: <b>3</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर छह और नीचे पाँच दशमलव पाँच रखें",
      "रेत जाली तीन रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Black Gram",
    modes: ["double"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>8.5</b>",
      "Sieve Mesh: Upper - <b>7</b>, Middle - <b>6</b>, Lower - <b>5.5</b>",
      "Winnowing Mesh: Upper - <b>6</b>, Lower - <b>5.5</b>",
      "Sand Mesh: <b>3</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at six and the lower at five point five",
      "Keep the sand mesh at three",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},

cowpea: {
  gu: {
    name: "ચોળી",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>8.5</b>",
      "ચારણા જાળી: ઉપર - <b>8</b>, વચ્ચે - <b>7</b>, નીચે - <b>6</b>",
      "સુપડી જાળી: ઉપર - <b>8</b>, નીચે - <b>7</b>",
      "રેત જાળી: <b>3</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર આઠ અને નીચે સાત રાખો",
      "રેત જાળી ત્રણ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "चोली",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>8.5</b>",
      "छलना जाली: ऊपर - <b>8</b>, बीच में - <b>7</b>, नीचे - <b>6</b>",
      "सुपड़ी जाली: ऊपर - <b>8</b>, नीचे - <b>7</b>",
      "रेत जाली: <b>3</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर आठ और नीचे सात रखें",
      "रेत जाली तीन रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Cowpea",
    modes: ["double"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>8.5</b>",
      "Sieve Mesh: Upper - <b>8</b>, Middle - <b>7</b>, Lower - <b>6</b>",
      "Winnowing Mesh: Upper - <b>8</b>, Lower - <b>7</b>",
      "Sand Mesh: <b>3</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at eight and the lower at seven",
      "Keep the sand mesh at three",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},

pigeon_pea: {
  gu: {
    name: "તુવેર",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>8.5</b>",
      "ચારણા જાળી: ઉપર - <b>11</b>, વચ્ચે - <b>10</b>, નીચે - <b>9</b>",
      "સુપડી જાળી: ઉપર - <b>11</b>, નીચે - <b>10</b>",
      "રેત જાળી: <b>5</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર અગિયાર અને નીચે દસ રાખો",
      "રેત જાળી પાંચ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "तुअर",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>8.5</b>",
      "छलना जाली: ऊपर - <b>11</b>, बीच में - <b>10</b>, नीचे - <b>9</b>",
      "सुपड़ी जाली: ऊपर - <b>11</b>, नीचे - <b>10</b>",
      "रेत जाली: <b>5</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर ग्यारह और नीचे दस रखें",
      "रेत जाली पांच रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Pigeon Pea",
    modes: ["double"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>8.5</b>",
      "Sieve Mesh: Upper - <b>11</b>, Middle - <b>10</b>, Lower - <b>9</b>",
      "Winnowing Mesh: Upper - <b>11</b>, Lower - <b>10</b>",
      "Sand Mesh: <b>5</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at eleven and the lower at ten",
      "Keep the sand mesh at five",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},

chickpea_desi: {
  gu: {
    name: "ચણા (દેશી)",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>8.5</b>",
      "ચારણા જાળી: ઉપર - <b>11</b>, વચ્ચે - <b>10</b>, નીચે - <b>9</b>",
      "સુપડી જાળી: ઉપર - <b>11</b>, નીચે - <b>10</b>",
      "રેત જાળી: <b>5</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર અગિયાર અને નીચે દસ રાખો",
      "રેત જાળી પાંચ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "चना (देशी)",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>8.5</b>",
      "छलना जाली: ऊपर - <b>11</b>, बीच में - <b>10</b>, नीचे - <b>9</b>",
      "सुपड़ी जाली: ऊपर - <b>11</b>, नीचे - <b>10</b>",
      "रेत जाली: <b>5</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर ग्यारह और नीचे दस रखें",
      "रेत जाली पांच रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Chickpea (Desi)",
    modes: ["double"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>8.5</b>",
      "Sieve Mesh: Upper - <b>11</b>, Middle - <b>10</b>, Lower - <b>9</b>",
      "Winnowing Mesh: Upper - <b>11</b>, Lower - <b>10</b>",
      "Sand Mesh: <b>5</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at eleven and the lower at ten",
      "Keep the sand mesh at five",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},

lentil: {
  gu: {
    name: "ચણા (કાબુલી)",
    sievePair: "upper_middle",
    settingsDisplay: [
      "કટર: <b>9.5</b>",
      "ચારણા જાળી: ઉપર - <b>12</b>, વચ્ચે - <b>11</b>, નીચે - <b>10</b>",
      "સુપડી જાળી: ઉપર - <b>12</b>, નીચે - <b>11</b>",
      "રેત જાળી: <b>5</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર બાર અને નીચે અગિયાર રાખો",
      "રેત જાળી પાંચ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "चना (काबुली)",
    sievePair: "upper_middle",
    settingsDisplay: [
      "कटर: <b>9.5</b>",
      "छलना जाली: ऊपर - <b>12</b>, बीच में - <b>11</b>, नीचे - <b>10</b>",
      "सुपड़ी जाली: ऊपर - <b>12</b>, नीचे - <b>11</b>",
      "रेत जाली: <b>5</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर बारह और नीचे ग्यारह रखें",
      "रेत जाली पांच रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Chickpea (Kabuli)",
    modes: ["double"],
    sievePair: "upper_middle",
    settingsDisplay: [
      "Cutter: <b>9.5</b>",
      "Sieve Mesh: Upper - <b>12</b>, Middle - <b>11</b>, Lower - <b>10</b>",
      "Winnowing Mesh: Upper - <b>12</b>, Lower - <b>11</b>",
      "Sand Mesh: <b>5</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at twelve and the lower at eleven",
      "Keep the sand mesh at five",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},

soyabean: {
  gu: {
    name: "સોયાબીન",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>8.5</b>",
      "ચારણા જાળી: ઉપર - <b>11</b>, વચ્ચે - <b>10</b>, નીચે - <b>9</b>",
      "સુપડી જાળી: ઉપર - <b>11</b>, નીચે - <b>10</b>",
      "રેત જાળી: <b>5</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર અગિયાર અને નીચે દસ રાખો",
      "રેત જાળી પાંચ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "सोयाबीन",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>8.5</b>",
      "छलना जाली: ऊपर - <b>11</b>, बीच में - <b>10</b>, नीचे - <b>9</b>",
      "सुपड़ी जाली: ऊपर - <b>11</b>, नीचे - <b>10</b>",
      "रेत जाली: <b>5</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर ग्यारह और नीचे दस रखें",
      "रेत जाली पांच रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Soyabean",
    modes: ["double"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>8.5</b>",
      "Sieve Mesh: Upper - <b>11</b>, Middle - <b>10</b>, Lower - <b>9</b>",
      "Winnowing Mesh: Upper - <b>11</b>, Lower - <b>10</b>",
      "Sand Mesh: <b>5</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at eleven and the lower at ten",
      "Keep the sand mesh at five",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},

vaal: {
  gu: {
    name: "વાલ",
    sievePair: "upper_middle",
    settingsDisplay: [
      "કટર: <b>9.5</b>",
      "ચારણા જાળી: ઉપર - <b>12</b>, વચ્ચે - <b>11</b>, નીચે - <b>10</b>",
      "સુપડી જાળી: ઉપર - <b>12</b>, નીચે - <b>11</b>",
      "રેત જાળી: <b>5</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર બાર અને નીચે અગિયાર રાખો",
      "રેત જાળી પાંચ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "वाल",
    sievePair: "upper_middle",
    settingsDisplay: [
      "कटर: <b>9.5</b>",
      "छलना जाली: ऊपर - <b>12</b>, बीच में - <b>11</b>, नीचे - <b>10</b>",
      "सुपड़ी जाली: ऊपर - <b>12</b>, नीचे - <b>11</b>",
      "रेत जाली: <b>5</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर बारह और नीचे ग्यारह रखें",
      "रेत जाली पांच रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Hyacinth Bean",
    modes: ["double"],
    sievePair: "upper_middle",
    settingsDisplay: [
      "Cutter: <b>9.5</b>",
      "Sieve Mesh: Upper - <b>12</b>, Middle - <b>11</b>, Lower - <b>10</b>",
      "Winnowing Mesh: Upper - <b>12</b>, Lower - <b>11</b>",
      "Sand Mesh: <b>5</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at twelve and the lower at eleven",
      "Keep the sand mesh at five",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},

coriander: {
  gu: {
    name: "ધાણા",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>8.5</b>",
      "ચારણા જાળી: ઉપર - <b>9</b>, વચ્ચે - <b>8</b>, નીચે - <b>7</b>",
      "સુપડી જાળી: ઉપર - <b>8</b>, નીચે - <b>7</b>",
      "રેત જાળી: <b>3</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>10</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર આઠ અને નીચે સાત રાખો",
      "રેત જાળી ત્રણ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ દસ રાખો"
    ]
  },
  hi: {
    name: "धनिया",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>8.5</b>",
      "छलना जाली: ऊपर - <b>9</b>, बीच में - <b>8</b>, नीचे - <b>7</b>",
      "सुपड़ी जाली: ऊपर - <b>8</b>, नीचे - <b>7</b>",
      "रेत जाली: <b>3</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>10</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर आठ और नीचे सात रखें",
      "रेत जाली तीन रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस दस रखें"
    ]
  },
  en: {
    name: "Coriander",
    modes: ["double"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>8.5</b>",
      "Sieve Mesh: Upper - <b>9</b>, Middle - <b>8</b>, Lower - <b>7</b>",
      "Winnowing Mesh: Upper - <b>8</b>, Lower - <b>7</b>",
      "Sand Mesh: <b>3</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>10</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at eight and the lower at seven",
      "Keep the sand mesh at three",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at ten"
    ]
  }
},

castor_small: {
  gu: {
    name: "એરંડા (નાના)",
    sievePair: "upper_lower",
    settingsDisplay: [
      "કટર: <b>7</b>",
      "ચારણા જાળી: ઉપર - <b>11</b>, વચ્ચે - <b>10</b>, નીચે - <b>9</b>",
      "સુપડી જાળી: ઉપર - <b>11</b>, નીચે - <b>10</b>",
      "રેત જાળી: <b>5</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>ઉપર</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>10</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર અગિયાર અને નીચે દસ રાખો",
      "રેત જાળી પાંચ રાખો",
      "હવાનું હેન્ડલ માં આગળનું ઉપર અને પાછળનું પણ ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ દસ રાખો"
    ]
  },
  hi: {
    name: "अरंडी (छोटी)",
    sievePair: "upper_lower",
    settingsDisplay: [
      "कटर: <b>7</b>",
      "छलना जाली: ऊपर - <b>11</b>, बीच में - <b>10</b>, नीचे - <b>9</b>",
      "सुपड़ी जाली: ऊपर - <b>11</b>, नीचे - <b>10</b>",
      "रेत जाली: <b>5</b>",
      "हवा का हैंडल: आगे का - <b>ऊपर</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>10</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर ग्यारह और नीचे दस रखें",
      "रेत जाली पांच रखें",
      "हवा के हैंडल में आगे वाला ऊपर और पीछे वाला भी ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस दस रखें"
    ]
  },
  en: {
    name: "Castor (Small)",
    modes: ["double"],
    sievePair: "upper_lower",
    settingsDisplay: [
      "Cutter: <b>7</b>",
      "Sieve Mesh: Upper - <b>11</b>, Middle - <b>10</b>, Lower - <b>9</b>",
      "Winnowing Mesh: Upper - <b>11</b>, Lower - <b>10</b>",
      "Sand Mesh: <b>5</b>",
      "Air Handle: Front - <b>Up</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>10</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at eleven and the lower at ten",
      "Keep the sand mesh at five",
      "Set both the front and rear air handles to up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at ten"
    ]
  }
},

castor_large: {
  gu: {
    name: "એરંડા (મોટા)",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>7.5</b>",
      "ચારણા જાળી: ઉપર - <b>12</b>, વચ્ચે - <b>11</b>, નીચે - <b>10</b>",
      "સુપડી જાળી: ઉપર - <b>12</b>, નીચે - <b>11</b>",
      "રેત જાળી: <b>5</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>ઉપર</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>10</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર બાર અને નીચે અગિયાર રાખો",
      "રેત જાળી પાંચ રાખો",
      "હવાનું હેન્ડલ માં આગળનું ઉપર અને પાછળનું પણ ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ દસ રાખો"
    ]
  },
  hi: {
    name: "अरंडी (बड़ी)",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>7.5</b>",
      "छलना जाली: ऊपर - <b>12</b>, बीच में - <b>11</b>, नीचे - <b>10</b>",
      "सुपड़ी जाली: ऊपर - <b>12</b>, नीचे - <b>11</b>",
      "रेत जाली: <b>5</b>",
      "हवा का हैंडल: आगे का - <b>ऊपर</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>10</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर बारह और नीचे ग्यारह रखें",
      "रेत जाली पांच रखें",
      "हवा के हैंडल में आगे वाला ऊपर और पीछे वाला भी ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस दस रखें"
    ]
  },
  en: {
    name: "Castor (Large)",
    modes: ["double"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>7.5</b>",
      "Sieve Mesh: Upper - <b>12</b>, Middle - <b>11</b>, Lower - <b>10</b>",
      "Winnowing Mesh: Upper - <b>12</b>, Lower - <b>11</b>",
      "Sand Mesh: <b>5</b>",
      "Air Handle: Front - <b>Up</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>10</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at twelve and the lower at eleven",
      "Keep the sand mesh at five",
      "Set both the front and rear air handles to up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at ten"
    ]
  }
},

maize: {
  gu: {
    name: "મકાઈ",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>32</b>",
      "ચારણા જાળી: ઉપર - <b>12</b>, વચ્ચે - <b>11</b>, નીચે - <b>10</b>",
      "સુપડી જાળી: ઉપર - <b>12</b>, નીચે - <b>11</b>",
      "રેત જાળી: <b>5</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>10/12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર બાર અને નીચે અગિયાર રાખો",
      "રેત જાળી પાંચ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ દસ અથવા બાર રાખો"
    ]
  },
  hi: {
    name: "मक्का",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>32</b>",
      "छलना जाली: ऊपर - <b>12</b>, बीच में - <b>11</b>, नीचे - <b>10</b>",
      "सुपड़ी जाली: ऊपर - <b>12</b>, नीचे - <b>11</b>",
      "रेत जाली: <b>5</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>10/12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर बारह और नीचे ग्यारह रखें",
      "रेत जाली पांच रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस दस या बारह रखें"
    ]
  },
  en: {
    name: "Maize",
    modes: ["double"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>32</b>",
      "Sieve Mesh: Upper - <b>12</b>, Middle - <b>11</b>, Lower - <b>10</b>",
      "Winnowing Mesh: Upper - <b>12</b>, Lower - <b>11</b>",
      "Sand Mesh: <b>5</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>10/12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at twelve and the lower at eleven",
      "Keep the sand mesh at five",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at ten or twelve"
    ]
  }
},

paddy: {
  gu: {
    name: "ડાંગર",
    sievePair: "middle_lower",
    settingsDisplay: [
      "કટર: <b>7.5</b>",
      "ચારણા જાળી: ઉપર - <b>9</b>, વચ્ચે - <b>8</b>, નીચે - <b>7</b>",
      "સુપડી જાળી: ઉપર - <b>9</b>, નીચે - <b>8</b>",
      "રેત જાળી: <b>1.6</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર નવ અને નીચે આઠ રાખો",
      "રેત જાળી એક દશાંશ છ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "डांगर",
    sievePair: "middle_lower",
    settingsDisplay: [
      "कटर: <b>7.5</b>",
      "छलना जाली: ऊपर - <b>9</b>, बीच में - <b>8</b>, नीचे - <b>7</b>",
      "सुपड़ी जाली: ऊपर - <b>9</b>, नीचे - <b>8</b>",
      "रेत जाली: <b>1.6</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर नौ और नीचे आठ रखें",
      "रेत जाली एक दशमलव छह रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Paddy",
    modes: ["double"],
    sievePair: "middle_lower",
    settingsDisplay: [
      "Cutter: <b>7.5</b>",
      "Sieve Mesh: Upper - <b>9</b>, Middle - <b>8</b>, Lower - <b>7</b>",
      "Winnowing Mesh: Upper - <b>9</b>, Lower - <b>8</b>",
      "Sand Mesh: <b>1.6</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at nine and the lower at eight",
      "Keep the sand mesh at one point six",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
},

groundnut: {
  gu: {
    name: "મગફળી",
    sievePair: "upper_lower",
    settingsDisplay: [
      "કટર: <b>32</b>",
      "ચારણા જાળી: ઉપર - <b>22</b>, નીચે - <b>18</b>",
      "સુપડી જાળી: ઉપર - <b>22</b>, નીચે - <b>18</b>",
      "રેત જાળી: <b>8</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "સુપડી જાળી માં ઉપર બાવીસ અને નીચે અઢાર રાખો",
      "રેત જાળી આઠ રાખો",
      "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો",
      "ચેમ્બર એટલે કોઠી ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો",
      "ચારણાની ચાલ લાંબી રાખો",
      "ટ્રેક્ટરનો રેસ બાર રાખો"
    ]
  },
  hi: {
    name: "मूंगफली",
    sievePair: "upper_lower",
    settingsDisplay: [
      "कटर: <b>32</b>",
      "छलना जाली: ऊपर - <b>22</b>, नीचे - <b>18</b>",
      "सुपड़ी जाली: ऊपर - <b>22</b>, नीचे - <b>18</b>",
      "रेत जाली: <b>8</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "सुपड़ी जाली में ऊपर बाईस और नीचे अठारह रखें",
      "रेत जाली आठ रखें",
      "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें",
      "चैम्बर यानी कोठी के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें",
      "छलने की चाल लंबी रखें",
      "ट्रैक्टर का रेस बारह रखें"
    ]
  },
  en: {
    name: "Groundnut",
    modes: ["double"],
    sievePair: "upper_lower",
    settingsDisplay: [
      "Cutter: <b>32</b>",
      "Sieve Mesh: Upper - <b>22</b>, Lower - <b>18</b>",
      "Winnowing Mesh: Upper - <b>22</b>, Lower - <b>18</b>",
      "Sand Mesh: <b>8</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "In the winnowing mesh, keep the upper at twenty two and the lower at eighteen",
      "Keep the sand mesh at eight",
      "Set the air handle with the front at middle and the rear at up",
      "Set the chamber curtain with the side down and the rear at medium",
      "Keep the sieve movement long",
      "Keep the tractor RPM at twelve"
    ]
  }
}

};
const problems = {gu: [{title: "દાણા તૂટવા",solutionDisplay: ["ટ્રેક્ટર ની સ્પીડ વધારે હોય તો સ્પીડ ઓછી કરવી.","સૂપડા માં ઓરવાનું પ્રમાણ વધારે/ઓછું હોય તો એકસરખા પ્રમાણમાં ઓરવું.","કટર (કોનકેવ) ઊંચી હોય તો થોડી નીચે ઉતારી ગેજ પ્રમાણે ગોઠવવી.","ચેમ્બર નીચે અનાજ કે ભૂસું ભરાઈ ગયું હોય તો ગીસી પડદો ઊંચો કરવો."],solutionSpeech: ["ટ્રેક્ટર ની સ્પીડ વધારે હોય તો સ્પીડ ઓછી કરવી.", "સૂપડા માં ઓરવાનું પ્રમાણ એકસરખું રાખવું.", "કટર ઊંચી હોય તો ગેજ પ્રમાણે થોડી નીચે ઉતારવી.", "ચેમ્બર નીચે કચરો હોય તો ગીસી પડદો ઊંચો કરવો."]},{title: "ભૂસા સાથે દાણા જવા",solutionDisplay: ["થ્રેસરની સ્પીડ વધારે હોય તો ટ્રેક્ટરની ગતિ ઓછી કરવી.","પંખા ની સ્પીડ વધારે હોય તો પંખાની સ્પીડ ઓછી કરવી.","ચારણો ધીમે ચાલતો હોય તો ચારણા ની સ્પીડ વધારવી.","ચારણો વધારે ઊંચો હોય તો ચારણો પ્રમાણસર નીચે ઉતારવો.","ચારણો નો ઢાળ ઉલટો હોય તો ચારણો દાણા નીકળવાની બાજુએ નીચે કરવો.","થ્રેસરના ચેમ્બર નીચેના સાઈડના પડદા વધારે પડતા નીચે રાખેલા હોય તો પડદા પ્રમાણસર ઉંચા કરી સેટ કરવા.","થ્રેસરમાં ચેમ્બરની અંદરનો ગીસી પડદો નીચે હોય તો ગીસી વાળો પડદો પ્રમાણસર ઉંચે ઉઠાવી લેવો."],solutionSpeech: ["ટ્રેક્ટર અને પંખાની સ્પીડ ઓછી કરવી.", "જો ચારણો ધીમે હોય તો સ્પીડ વધારવી.", "ચારણો પ્રમાણસર નીચે ઉતારવો અને ઢાળ સીધો કરવો.", "સાઈડના અને ગીસી પડદા પ્રમાણસર ઉંચા કરવા."]},{title: "અનાજ સાફ ન નીકળતું હોય",solutionDisplay: ["રોટરની સ્પીડ ઓછી હોય તો રોટરની સ્પીડ વધારવી.","પંખાની સ્પીડ ઓછી હોય તો પંખાની સ્પીડ વધારવી.","ચારણો વધારે પડતો નીચે લીધેલો હોય તો ચારણો ઊંચો કરવો.","થ્રેસરમાં ચેમ્બરની અંદરનો ગીસી પડદો ઉંચો લીધેલો હોય તો ગીસી પડદો નીચે લેવો.","થ્રેસરના ચેમ્બર નીચેના સાઈડના પડદા ઉંચા લીધેલા હોય તો પડદા પ્રમાણસર નીચે રાખવા.","સૂપડીમાં જાળી નીચે ખસતું પતરું અંદરની બાજુ ખેંચેલું હોય તો પતરું બહારની બાજુ ખેંચી લેવું.","ચારણાનો ઢાળ પાછળ વધારે હોય તો ચારણો પાછળથી ઉંચો લેવો.","ચારણાની સ્પીડ ઓછી કે વધારે હોય તો ચારણાની સ્પીડ મધ્યમ કરવી.","સૂપડામાં ઓછું કે વધારે ઓરવામાં આવતું હોય તો એક સરખા પ્રમાણમાં ઓરવું.","થ્રેસર હુક આગળથી નીચું હોય તો થ્રેસર હુક આગળથી ઉંચું કરવું.","સૂપડીમાં હવા ઓછી કરેલ હોય તો સૂપડીમાં હવા વધારી દેવી.","હવાના નાના ભૂંગળામાં ખિસકોલી એ માળો કરેલો હોય તો માળો કાઢી નાખવો."],solutionSpeech: ["રોટર અને પંખાની સ્પીડ વધારવી.", "ચારણો ઊંચો કરવો અને પડદા નીચે લેવા.", "સૂપડીનું પતરું બહાર ખેંચવું અને ચારણાનો ઢાળ સેટ કરવો.", "ઓરવાનું પ્રમાણ એકસરખું રાખવું.", "થ્રેસર હુક ઊંચો કરવો, હવા વધારવી અને હવાના ભૂંગળા સાફ કરવા."]},{title: "ચારણાથી બરાબર ચળાતું ન હોય",solutionDisplay: ["ચારણાની જાળીઓ ભરાઈ ગઈ હોય તો પાવડી (તાવેથા)નો ઉપયોગ કરી જાળીઓ સાફ કરી દેવી.","ચારણો પાછળ નમેલો હોય તો ચારણો સમતોલ કરવો.","ચારણાની સ્પીડ વધારે હોય તો ચારણાની સ્પીડ ઓછી કરવી.","ચારણામાં જાળીઓ ઉંધી લગાવેલી હોય તો જાળીઓ સીધી લગાવી દેવી."],solutionSpeech: ["પાવડીથી જાળીઓ સાફ કરવી.", "ચારણો સમતોલ કરવો અને સ્પીડ ઓછી કરવી.", "જાળીઓ સીધી લગાવવી."]},{title: "થ્રેસીંગ ડ્રમ ભરાઇ જવું",solutionDisplay: ["એકી સાથે વધારે પડતું ઓરવાતું હોય તો ડ્રમ ખાલી કરી સપ્રમાણ ઓરવું.","મેઇન રોટરની સ્પીડ ઓછી હોય તો મેઇન રોટરની સ્પીડ વધારવી.","ભેજવાળું કે લીલું ઓરવામાં આવતું હોય તો સૂકાયેલું ઓરવું.","થ્રેસીંગ ચેમ્બરની અંદરનો ગીસી પડદો નીચે ઉતરી ગયો હોય તો ગીસી પડદો યોગ્ય પ્રમાણમાં ઉંચો લેવો.","થ્રેસીંગ ચેમ્બરની કટર વધારે પડતી નીચી રાખેલી હોય તો કટર સાધારણ ઉંચી કરવી."],solutionSpeech: ["ડ્રમ ખાલી કરી સપ્રમાણ ઓરવું.", "મેઇન રોટરની સ્પીડ વધારવી.", "સૂકો પાક ઓરવો અને પડદો તેમજ કટર ઊંચા કરવા."]},{title: "થ્રેસર નું ધ્રુજવું",solutionDisplay: ["રોટરની શાફ્ટ આઉટ હોય તો રોટરની શાફ્ટ થ્રુ(બેલેન્સ) કરાવવી.","થ્રેસરના ટાયરનો સપોર્ટ ઢીલો પડી ગયો હોય તો પથ્થર કે લાકડાનો ટુકડો મૂકી ટાયરને સપોર્ટ આપવો.","ટાયરમાં હવાનું પ્રમાણ ઘટી ગયું હોય તો ટાયરોમાં પ્રમાણસર હવા ભરાવી લેવી.","મેઇન રોટરનું યોગ્ય રીતે બેલેન્સ કરેલું ન હોય તો મેઇન રોટરને બેલેન્સ કરાવી લેવું.","બેરીંગો તૂટી ગઈ હોય તો નવી બેરીંગો નખાવવી.","થ્રેસર કે ટ્રેક્ટર સાઈડ જોઈન્ટ આઉટ થઈ ગયો હોય તો જોઈન્ટ વ્યવસ્થિત લેથ ઉપર ચઢાવી રીપેરીંગ કરી દેવો.","થ્રેસરમાં રોટરના પાટા ખોટી રીતે લગાવેલા હોય તો પાટા ખોલીને લાઈન મુજબ લગાવી દેવા.","થ્રેસરનું ફ્લાયવ્હીલ આઉટ હોય તો ફ્લાયવ્હીલ બદલીને નવું લગાવી દેવું.","વી-બેલ્ટ (પટ્ટા) ઢીલા પડી ગયા હોય તો સપોર્ટપુલીથી પટ્ટા ટાઈટ કરવા."],solutionSpeech: ["રોટર શાફ્ટ અને બેલેન્સિંગ ચેક કરાવવું.", "ટાયર સપોર્ટ અને હવા ચેક કરવી.", "બેરીંગો અને જોઈન્ટ રીપેર કરાવવા.", "રોટરના પાટા લાઈનમાં લગાવવા અને વી-બેલ્ટ ટાઈટ કરવા."]}],hi: [{title: "दाने टूटना",solutionDisplay: ["ट्रैक्टर की गति अधिक हो तो गति कम करे।","सूपड़े में फसल डालने की मात्रा ज़्यादा/कम हो तो एकसमान डाले।","कटर (कॉनकेव) ऊँचा हो तो गेज के अनुसार थोड़ा नीचे करे।","चैंबर(कटर) के नीचे फसल या भूसा भर गया हो तो गीसी पड़दे ऊँचा करे।"],solutionSpeech: ["ट्रैक्टर की गति कम करे।", "फसल एकसमान मात्रा में डाले।", "कटर को थोड़ा नीचे करे और गीसी पड़दे ऊँचा करे।"]},{title: "भूसे के साथ दाने जाना",solutionDisplay: ["थ्रेशर की गति अधिक हो तो ट्रैक्टर की गति कम करे।","पंखे की गति अधिक हो तो पंखे की गति कम करे।","छलना धीमा चलता हो तो छलने की गति बढ़ाए।","छलना ज़्यादा ऊँचा हो तो छलने को सही मात्रा में नीचे उतारे।","छलने का ढलाव उल्टा हो तो छलने को दाने निकलने की ओर नीचे करे।","थ्रेशर में चैंबर के नीचे की साइड के पड़दे ज़्यादा नीचे रखे हों तो पड़दे को सही मात्रा में ऊँचा करके सेट करे।","थ्रेशर में चैंबर के अंदर का गीसी पड़दा नीचे हो तो सही मात्रा में ऊँचा उठाले।"],solutionSpeech: ["ट्रैक्टर और पंखे की गति कम करे।", "छलने की गति बढ़ाएं और ढलाव सही करे।", "साइड के और गीसी पड़दे ऊँचा करे।"]},{title: "फसल साफ न निकलना",solutionDisplay: ["रोटर की गति कम हो तो रोटर की गति बढ़ाए।","पंखे की गति कम हो तो पंखे की गति बढ़ाए।","छलना ज़्यादा नीचे लिया गया हो तो छलने को ऊँचा करे।","थ्रेशर में चैंबर के अंदर का गीसी पड़दा ऊँचा लिया गया हो तो नीचे करे।","थ्रेशर के चैंबर के नीचे की साइड के पड़दे ऊँचे लिए गए हों तो पर्दों को सही मात्रा में नीचे रखे।","सूपड़ी में जाली के नीचे खिसकने वाला पतरा अंदर की ओर खींचा गया हो तो पतरे को बाहर की ओर खींच ले।","छलने का ढलाव पीछे अधिक हो तो छलने को पीछे से ऊँचा करे।","छलने की गति ज़्यादा/कम हो तो मध्यम करे।","सूपड़े में फसल एकसमान मात्रा में डाले।","थ्रेशर हुक आगे से नीचा हो तो उसे ऊँचा करे।","सूपडी में हवा कम की गई हो तो उसे बढ़ा दे।","हवा के छोटे भूंगले में गिलहरी ने घोंसला बनाया हो तो घोंसला हटा दे।"],solutionSpeech: ["रोटर और पंखे की गति बढ़ाएं।", "छलने और पड़दे की सेटिंग सही करे।", "सूपड़ी का पतरा बाहर खींचे और ढलाव सही करे।", "हुक ऊँचा करे और हवा के पाइप साफ़ करे।"]},{title: "छलना से ठीक न छलना",solutionDisplay: ["छलने की नीचे की जालियां भर जाए तो पावड़ी का उपयोग कर छलने की जालियां साफ़ करे।","छलना पीछे झुका हो तो छलने को समतल करे।","छलने की गति अधिक हो तो उसे कम करे।","छलने में जालियाँ उलटी लगी हों तो उन्हें सीधा लगाए।"],solutionSpeech: ["जालियों को साफ़ करे और छलने को समतल रखे।", "गति कम करे और जालियां सीधी लगाए।"]},{title: "थ्रेसिंग ड्रम(कोठी) भर जाना",solutionDisplay: ["एक साथ बहुत अधिक फसल न डालें, कोठी खाली करके उसे सही मात्रामें डाले।","मुख्य रोटर की गति कम हो तो उसे सही तरह से बढ़ाए।","गीली या हरी फसल डाली जा रही हो तो सुखी ही डाले।","थ्रेसिंग चैम्बर के अंदर का गीसी पड़दा नीचे उतर गया हो तो सही मात्रा में ऊपर करे।","थ्रेसिंग चैंबर का कटर बहुत नीचा रखा गया हो तो कटर को सही मात्रा में ऊँचा करे।"],solutionSpeech: ["कोठी खाली करे और फसल एकसमान डाले।", "रोटर की गति बढ़ाएं और सूखी फसल का उपयोग करे।"]},{title: "थ्रेशर का कंपन",solutionDisplay: ["रोटर का शाफ़्ट थ्रु(बैलेन्स) करवाए।","टायर को पत्थर या लकड़ी का टुकड़ा लगाकर सपोर्ट दे।","टायर में हवा का दबाव सही रखें।","मेन रोटर का बैलेंसिंग सही करवाएं।","बेअरिंग तूट गई हो तो नई डलवाए।","थ्रेशर या ट्रेक्टर साईड जॉइंट आउट हो तो लेथ पर रिपेर करवाए।","रोटर के पाटे सही लाइन में लगाए।","लोडव्हील आउट हो तो नया डलवाए।","ऑपरेटिंग मोड: ढीले पड़े हो तो सपोर्ट पुली से टाइट करे।"],solutionSpeech: ["शाफ़्ट और बैलेंसिंग चेक करवाए।", "टायर और बेअरिंग की जांच करे।", "जॉइंट और पाटे सही करे और बेल्ट टाइट करे।"]}],en: [{title: "Grain Breakage",solutionDisplay: ["If the tractor's speed is too high, reduce the speed.","If the amount fed into the feeder is incorrect, maintain uniform feeding.","If the cutter (concave) is too high, adjust it slightly lower as per the gauge.","If grain or chaff is clogged under the chamber, raise the sieve curtain."],solutionSpeech: ["Reduce tractor speed and ensure uniform feeding.", "Adjust the cutter lower and raise the sieve curtain if needed."]},{title: "Grains Going with Chaff",solutionDisplay: ["If the thresher's speed is too high, reduce the tractor's speed.","If the fan's speed is too high, lower the fan's speed.","If the sieve feeder runs slowly, increase the sieve feeder's speed.","If the sieve feeder is too high, lower it proportionately.","If the sieve feeder's slope is reversed, lower it toward the grain outlet side.","If the chamber's side curtains are too low, raise them proportionately.","If the sieve curtain inside the chamber is too low, raise it proportionately."],solutionSpeech: ["Reduce speed and adjust the sieve feeder's height and slope.", "Raise the side and internal sieve curtains."]},{title: "Grain Not Coming Out Clean",solutionDisplay: ["If the rotor's speed is low, increase the rotor's speed.","If the fan's speed is low, increase the fan's speed.","If the sieve feeder is set too low, raise it.","If the sieve curtain inside the chamber is set too high, lower it.","If the chamber's side curtains are set too high, lower them proportionately.","If the movable sheet under the feeder mesh is pulled inward, pull it outward.","If the sieve feeder's rear slope is too high, raise the rear end.","If the sieve feeder's speed is incorrect, set it to medium speed.","Feed crops uniformly into the feeder.","If the thresher hook is low, raise the front of the hook.","If air flow in the feeder is low, increase it.","If squirrels have nested in air ducts, remove the nest."],solutionSpeech: ["Increase rotor and fan speed.", "Adjust sieve and curtain heights.", "Check the feeder sheet, hook height, and clear any nests in air ducts."]},{title: "Sieve Feeder Not Working Properly",solutionDisplay: ["If meshes are clogged, clean them using a trowel.","If the sieve feeder is tilted backward, level it.","If the speed is too high, reduce it.","If meshes are installed upside down, install them correctly."],solutionSpeech: ["Clean meshes, level the feeder, and check the speed and mesh orientation."]},{title: "Threshing Drum Jamming",solutionDisplay: ["Avoid overfeeding; empty the drum and feed proportionately.","If main rotor speed is low, increase it appropriately.","If crops are wet, feed dried crops.","If the internal sieve curtain is low, raise it.","If the cutter is too low, raise it slightly."],solutionSpeech: ["Ensure uniform feeding and increase rotor speed.", "Use dry crops and adjust the curtain and cutter height."]},{title: "Thresher Vibrating",solutionDisplay: ["Balance the rotor shaft.","Support the tires with stones or wood if loose.","Maintain correct tire pressure.","Ensure the main rotor is properly balanced.","Replace broken bearings.","Repair misaligned joints on a lathe.","Align rotor blades correctly in a line.","Replace the flywheel if it is out.","Tighten loose Operating modes using the pulley."],solutionSpeech: ["Balance the shaft and rotor.", "Check tires and bearings.", "Repair joints and align blades and belts."]}]};

console.log("✅ Marshal Thresher - Sieve Mesh with Override Support Added");






