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
  
pearl_millet_r: {
  gu: {
    name: "બાજરી (R)",
    settingsDisplay: [
      "વી બેલ્ટ (પટ્ટા): <b>3</b>",
      "કટર: <b>3.6</b>",
      "ચારણા 2 જાળી: ઉપર - <b>6</b>, નીચે - <b>4</b>",
      "ચારણા 3 જાળી: ઉપર - <b>6</b>, વચ્ચે - <b>5.5</b>, નીચે - <b>4</b>",
      "સુપડી જાળી: ઉપર - <b>4</b>, નીચે - <b>3</b>",
      "રેત જાળી: <b>1.6</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>લાંબી</b>",
      "ટ્રેક્ટરનો રેસ: <b>12</b>"
    ],
    settingsSpeech: [
      "વી બેલ્ટ ત્રણ રાખો",
      "કટર ત્રણ દશાંશ છ રાખો",
      "ચારણા બે ની જાળી માં ઉપર છ અને નીચે ચાર રાખો",
      "ચારણા ત્રણ ની જાળી માં ઉપર છ, વચ્ચે પાંચ દશાંશ પાંચ અને નીચે ચાર રાખો",
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
    settingsDisplay: [
      "वी-बेल्ट (पट्टा): <b>3</b>",
      "कटर: <b>3.6</b>",
      "छलना 2 जाली: ऊपर - <b>6</b>, नीचे - <b>4</b>",
      "छलना 3 जाली: ઉપર - <b>6</b>, बीच में - <b>5.5</b>, नीचे - <b>4</b>",
      "सुपड़ी जाली: ऊपर - <b>4</b>, नीचे - <b>3</b>",
      "रेत जाली: <b>1.6</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>लंबी</b>",
      "ट्रैक्टर का रेस: <b>12</b>"
    ],
    settingsSpeech: [
      "वी बेल्ट तीन रखें",
      "कटर तीन दशमलव छह रखें",
      "छलना दो की जाली में ऊपर छह और नीचे चार रखें",
      "छलना तीन की जाली में ऊपर छह, बीच में पाँच दशमलव पाँच और नीचे चार रखें",
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
    settingsDisplay: [
      "V-Belt: <b>3</b>",
      "Cutter: <b>3.6</b>",
      "Sieve 2 Mesh: Upper - <b>6</b>, Lower - <b>4</b>",
      "Sieve 3 Mesh: Upper - <b>6</b>, Middle - <b>5.5</b>, Lower - <b>4</b>",
      "Winnowing Mesh: Upper - <b>4</b>, Lower - <b>3</b>",
      "Sand Mesh: <b>1.6</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Long</b>",
      "Tractor Race: <b>12</b>"
    ],
    settingsSpeech: [
      "Keep the V belt at three",
      "Set the cutter at three point six",
      "In sieve two mesh, keep the upper at six and the lower at four",
      "In sieve three mesh, keep the upper at six, the middle at five point five, and the lower at four",
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
    settingsDisplay: [
      "વી બેલ્ટ (પટ્ટા): <b>3</b>",
      "કટર: <b>7.5</b>",
      "ચારણા 2 જાળી: ઉપર - <b>6</b>, નીચે - <b>5.5</b>",
      "ચારણા 3 જાળી: ઉપર - <b>7</b>, વચ્ચે - <b>6</b>, નીચે - <b>5.5</b>",
      "સુપડી જાળી: ઉપર - <b>5.5</b>, નીચે - <b>5.5</b>",
      "રેત જાળી: <b>3</b>",
      "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>",
      "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>",
      "ચારણાની ચાલ: <b>ટુંકી</b>",
      "ટ્રેક્ટરનો રેસ: <b>14</b>"
    ],
    settingsSpeech: [
      "વી બેલ્ટ ત્રણ રાખો",
      "કટર સાત દશાંશ પાંચ રાખો",
      "ચારણા બે ની જાળી માં ઉપર છ અને નીચે પાંચ દશાંશ પાંચ રાખો",
      "ચારણા ત્રણ ની જાળી માં ઉપર સાત, વચ્ચે છ અને નીચે પાંચ દશાંશ પાંચ રાખો",
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
    settingsDisplay: [
      "वी-बेल्ट (पट्टा): <b>3</b>",
      "कटर: <b>7.5</b>",
      "छलना 2 जाली: ऊपर - <b>6</b>, नीचे - <b>5.5</b>",
      "छलना 3 जाली: ऊपर - <b>7</b>, बीच में - <b>6</b>, नीचे - <b>5.5</b>",
      "सुपड़ी जाली: ऊपर - <b>5.5</b>, नीचे - <b>5.5</b>",
      "रेत जाली: <b>3</b>",
      "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>",
      "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>",
      "छलने की चाल: <b>टूंकी</b>",
      "ट्रैक्टर का रेस: <b>14</b>"
    ],
    settingsSpeech: [
      "वी बेल्ट तीन रखें",
      "कटर सात दशमलव पाँच रखें",
      "छलना दो की जाली में ऊपर छह और नीचे पाँच दशमलव पाँच रखें",
      "छलना तीन की जाली में ऊपर सात, बीच में छह और नीचे पाँच दशमलव पाँच रखें",
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
    settingsDisplay: [
      "V-Belt: <b>3</b>",
      "Cutter: <b>7.5</b>",
      "Sieve 2 Mesh: Upper - <b>6</b>, Lower - <b>5.5</b>",
      "Sieve 3 Mesh: Upper - <b>7</b>, Middle - <b>6</b>, Lower - <b>5.5</b>",
      "Winnowing Mesh: Upper - <b>5.5</b>, Lower - <b>5.5</b>",
      "Sand Mesh: <b>3</b>",
      "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>",
      "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>",
      "Sieve Movement: <b>Short</b>",
      "Tractor Race: <b>14</b>"
    ],
    settingsSpeech: [
      "Keep the V belt at three",
      "Set the cutter at seven point five",
      "In sieve two mesh, keep the upper at six and the lower at five point five",
      "In sieve three mesh, keep the upper at seven, the middle at six, and the lower at five point five",
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
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>3</b>", "કટર: <b>7.5</b>", "ચારણા 2 જાળી: ઉપર - <b>8</b>, નીચે - <b>7</b>", "ચારણા 3 જાળી: ઉપર - <b>8</b>, વચ્ચે - <b>7</b>, નીચે - <b>6</b>", "સુપડી જાળી: ઉપર - <b>9</b>, નીચે - <b>8</b>", "રેત જાળી: <b>3</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>ટૂંકી</b>", "ટ્રેક્ટરનો રેસ: <b>14</b>"],
      settingsSpeech: ["વી બેલ્ટ ત્રણ રાખો", "કટર સાત દશાંશ પાંચ રાખો", "ચારણા બે ની જાળી માં ઉપર આઠ અને નીચે સાત રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર આઠ, વચ્ચે સાત અને નીચે છ રાખો", "સુપડી જાળી માં ઉપર નવ અને નીચે આઠ રાખો", "રેત જાળી ત્રણ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ ટૂંકી રાખો", "ટ્રેક્ટરનો રેસ ચૌદ રાખો"]
    },
    hi: {
      name: "गेहूं (भालिया)",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>3</b>", "कटर: <b>7.5</b>", "छलना 2 जाली: ऊपर - <b>8</b>, नीचे - <b>7</b>", "छलना 3 जाली: ऊपर - <b>8</b>, बीच में - <b>7</b>, नीचे - <b>6</b>", "सुपड़ी जाली: ऊपर - <b>9</b>, नीचे - <b>8</b>", "रेत जाली: <b>3</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>टूंकी</b>", "ट्रैक्टर का रेस: <b>14</b>"],
      settingsSpeech: ["वी बेल्ट तीन रखें", "कटर सात दशमलव पाँच रखें", "छलना दो की जाली में ऊपर आठ और नीचे सात रखें", "छलना तीन की जाली में ऊपर आठ, बीच में सात और नीचे छह रखें", "सुपड़ी जाली में ऊपर नौ और नीचे आठ रखें", "रेत जाली तीन रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल टूंकी रखें", "ट्रैक्टर का रेस चौदह रखें"]
    },
    en: {
      name: "Wheat (Bhalia)",
      settingsDisplay: ["V-Belt: <b>3</b>", "Cutter: <b>7.5</b>", "Sieve 2 Mesh: Upper - <b>8</b>, Lower - <b>7</b>", "Sieve 3 Mesh: Upper - <b>8</b>, Middle - <b>7</b>, Lower - <b>6</b>", "Winnowing Mesh: Upper - <b>9</b>, Lower - <b>8</b>", "Sand Mesh: <b>3</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Short</b>", "Tractor Race: <b>14</b>"],
      settingsSpeech: ["Keep the V belt at three", "Set the cutter at seven point five", "In sieve two mesh, keep upper at eight and lower at seven", "In sieve three mesh, keep upper at eight, middle at seven, and lower at six", "In winnowing mesh, keep upper at nine and lower at eight", "Keep sand mesh at three", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement short", "Keep tractor RPM at fourteen"]
    }
  },
  mustard: {
    gu: {
      name: "રાયડો",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>3</b>", "કટર: <b>7.5</b>", "ચારણા 2 જાળી: ઉપર - <b>6</b>, નીચે - <b>4</b>", "ચારણા 3 જાળી: ઉપર - <b>6</b>, વચ્ચે - <b>5.5</b>, નીચે - <b>4</b>", "સુપડી જાળી: ઉપર - <b>4</b>, નીચે - <b>4</b>", "રેત જાળી: <b>1.6</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>13</b>"],
      settingsSpeech: ["વી બેલ્ટ ત્રણ રાખો", "કટર સાત દશાંશ પાંચ રાખો", "ચારણા બે ની જાળી માં ઉપર છ અને નીચે ચાર રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર છ, વચ્ચે પાંચ દશાંશ પાંચ અને નીચે ચાર રાખો", "સુપડી જાળી માં ઉપર ચાર અને નીચે ચાર રાખો", "રેત જાળી એક દશાંશ છ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ તેર રાખો"]
    },
    hi: {
      name: "रायड़ा / सरसव",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>3</b>", "कटर: <b>7.5</b>", "छलना 2 जाली: ऊपर - <b>6</b>, नीचे - <b>4</b>", "छलना 3 जाली: ऊपर - <b>6</b>, बीच में - <b>5.5</b>, नीचे - <b>4</b>", "सुपड़ी जाली: ऊपर - <b>4</b>, नीचे - <b>4</b>", "रेत जाली: <b>1.6</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>13</b>"],
      settingsSpeech: ["वी बेल्ट तीन रखें", "कटर सात दशमलव पाँच रखें", "छलना दो की जाली में ऊपर छह और नीचे चार रखें", "छलना तीन की जाली में ऊपर छह, बीच में पाँच दशमलव पाँच और नीचे चार रखें", "सुपड़ी जाली में ऊपर चार और नीचे चार रखें", "रेत जाली एक दशमलव छह रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस तेरह रखें"]
    },
    en: {
      name: "Mustard",
      settingsDisplay: ["V-Belt: <b>3</b>", "Cutter: <b>7.5</b>", "Sieve 2 Mesh: Upper - <b>6</b>, Lower - <b>4</b>", "Sieve 3 Mesh: Upper - <b>6</b>, Middle - <b>5.5</b>, Lower - <b>4</b>", "Winnowing Mesh: Upper - <b>4</b>, Lower - <b>4</b>", "Sand Mesh: <b>1.6</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>13</b>"],
      settingsSpeech: ["Keep the V belt at three", "Set the cutter at seven point five", "In sieve two mesh, keep upper at six and lower at four", "In sieve three mesh, keep upper at six, middle at five point five, and lower at four", "In winnowing mesh, keep upper at four and lower at four", "Keep sand mesh at one point six", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at thirteen"]
    }
  },
  sorghum_small: {
    gu: {
      name: "જુવાર (નાની)",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>3</b>", "કટર: <b>6</b>", "ચારણા 2 જાળી: ઉપર - <b>5.5</b>, નીચે - <b>5</b>", "ચારણા 3 જાળી: ઉપર - <b>6</b>, વચ્ચે - <b>5.5</b>, નીચે - <b>5</b>", "સુપડી જાળી: ઉપર - <b>5.5</b>, નીચે - <b>5.5</b>", "રેત જાળી: <b>1.6</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ ત્રણ રાખો", "કટર છ રાખો", "ચારણા બે ની જાળી માં ઉપર પાંચ દશાંશ પાંચ અને નીચે પાંચ રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર છ, વચ્ચે પાંચ દશાંશ પાંચ અને નીચે પાંચ રાખો", "સુપડી જાળી માં ઉપર પાંચ દશાંશ પાંચ અને નીચે પણ પાંચ દશાંશ પાંચ રાખો", "રેત જાળી એક દશાંશ છ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "जवार (छोटी)",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>3</b>", "कटर: <b>6</b>", "छलना 2 जाली: ऊपर - <b>5.5</b>, नीचे - <b>5</b>", "छलना 3 जाली: ऊपर - <b>6</b>, बीच में - <b>5.5</b>, नीचे - <b>5</b>", "सुपड़ी जाली: ऊपर - <b>5.5</b>, नीचे - <b>5.5</b>", "रेत जाली: <b>1.6</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: ["वी बेल्ट तीन रखें", "कटर छह रखें", "छलना दो की जाली में ऊपर पाँच दशमलव पाँच और नीचे पाँच रखें", "छलना तीन की जाली में ऊपर छह, बीच में पाँच दशमलव पाँच और नीचे पाँच रखें", "सुपड़ी जाली में ऊपर पाँच दशमलव पाँच और नीचे भी पाँच दशमलव पाँच रखें", "रेत जाली एक दशमलव छह रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Sorghum (Small)",
      settingsDisplay: ["V-Belt: <b>3</b>", "Cutter: <b>6</b>", "Sieve 2 Mesh: Upper - <b>5.5</b>, Lower - <b>5</b>", "Sieve 3 Mesh: Upper - <b>6</b>, Middle - <b>5.5</b>, Lower - <b>5</b>", "Winnowing Mesh: Upper - <b>5.5</b>, Lower - <b>5.5</b>", "Sand Mesh: <b>1.6</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at three", "Set the cutter at six", "In sieve two mesh, keep upper at five point five and lower at five", "In sieve three mesh, keep upper at six, middle at five point five, and lower at five", "In winnowing mesh, keep upper and lower at five point five", "Keep sand mesh at one point six", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  },
  sorghum_large: {
    gu: {
      name: "જુવાર (મોટી)",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>3</b>", "કટર: <b>8.5</b>", "ચારણા 2 જાળી: ઉપર - <b>8</b>, નીચે - <b>7</b>", "ચારણા 3 જાળી: ઉપર - <b>9</b>, વચ્ચે - <b>8</b>, નીચે - <b>7</b>", "સુપડી જાળી: ઉપર - <b>9</b>, નીચે - <b>8</b>", "રેત જાળી: <b>3</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ ત્રણ રાખો", "કટર આઠ દશાંશ પાંચ રાખો", "ચારણા બે ની જાળી માં ઉપર આઠ અને નીચે સાત રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર નવ, વચ્ચે આઠ અને નીચે સાત રાખો", "સુપડી જાળી માં ઉપર નવ અને નીચે આઠ રાખો", "રેત જાળી ત્રણ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "जवार (बड़ी)",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>3</b>", "कटर: <b>8.5</b>", "छलना 2 जाली: ऊपर - <b>8</b>, नीचे - <b>7</b>", "छलना 3 जाली: ऊपर - <b>9</b>, बीच में - <b>8</b>, नीचे - <b>7</b>", "सुपड़ी जाली: ऊपर - <b>9</b>, नीचे - <b>8</b>", "रेत जाली: <b>3</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: ["वी बेल्ट तीन रखें", "कटर आठ दशमलव पाँच रखें", "छलना दो की जाली में ऊपर आठ और नीचे सात रखें", "छलना तीन की जाली में ऊपर नौ, बीच में आठ और नीचे सात रखें", "सुपड़ी जाली में ऊपर नौ और नीचे आठ रखें", "रेत जाली तीन रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Sorghum (Large)",
      settingsDisplay: ["V-Belt: <b>3</b>", "Cutter: <b>8.5</b>", "Sieve 2 Mesh: Upper - <b>8</b>, Lower - <b>7</b>", "Sieve 3 Mesh: Upper - <b>9</b>, Middle - <b>8</b>, Lower - <b>7</b>", "Winnowing Mesh: Upper - <b>9</b>, Lower - <b>8</b>", "Sand Mesh: <b>3</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at three", "Set the cutter at eight point five", "In sieve two mesh, keep upper at eight and lower at seven", "In sieve three mesh, keep upper at nine, middle at eight, and lower at seven", "In winnowing mesh, keep upper at nine and lower at eight", "Keep sand mesh at three", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  },
  guar: {
    gu: {
      name: "ગુવાર",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>3</b>", "કટર: <b>7.5</b>", "ચારણા 2 જાળી: ઉપર - <b>5.5</b>, નીચે - <b>5</b>", "ચારણા 3 જાળી: ઉપર - <b>6</b>, વચ્ચે - <b>5.5</b>, નીચે - <b>5</b>", "સુપડી જાળી: ઉપર - <b>5.5</b>, નીચે - <b>5.5</b>", "રેત જાળી: <b>3</b>", "હવાનું હૅન્ડલ: આગળનું - <b>ઉપર</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>13</b>"],
      settingsSpeech: ["વી બેલ્ટ ત્રણ રાખો", "કટર સાત દશાંશ પાંચ રાખો", "ચારણા બે ની જાળી માં ઉપર પાંચ દશાંશ પાંચ અને નીચે પાંચ રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર છ, વચ્ચે પાંચ દશાંશ પાંચ અને નીચે પાંચ રાખો", "સુપડી જાળી માં ઉપર પાંચ દશાંશ પાંચ અને નીચે પણ પાંચ દશાંશ પાંચ રાખો", "રેત જાળી ત્રણ રાખો", "હવાનું હેન્ડલ માં આગળનું ઉપર અને પાછળનું પણ ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ તેર રાખો"]
    },
    hi: {
      name: "गुवार",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>3</b>", "कटर: <b>7.5</b>", "छलना 2 जाली: ऊपर - <b>5.5</b>, नीचे - <b>5</b>", "छलना 3 जाली: ऊपर - <b>6</b>, बीच में - <b>5.5</b>, नीचे - <b>5</b>", "सुपड़ी जाली: ऊपर - <b>5.5</b>, नीचे - <b>5.5</b>", "रेत जाली: <b>3</b>", "हवा का हैंडल: आगे का - <b>ऊपर</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>13</b>"],
      settingsSpeech: ["वी बेल्ट तीन रखें", "कटर सात दशमलव पाँच रखें", "छलना दो की जाली में ऊपर पाँच दशमलव पाँच और नीचे पाँच रखें", "छलना तीन की जाली में ऊपर छह, बीच में पाँच दशमलव पाँच और नीचे पाँच रखें", "सुपड़ी जाली में ऊपर पाँच दशमलव पाँच और नीचे भी पाँच दशमलव पाँच रखें", "रेत जाली तीन रखें", "हवा के हैंडल में आगे वाला ऊपर और पीछे वाला भी ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस तेरह रखें"]
    },
    en: {
      name: "Guar",
      settingsDisplay: ["V-Belt: <b>3</b>", "Cutter: <b>7.5</b>", "Sieve 2 Mesh: Upper - <b>5.5</b>, Lower - <b>5</b>", "Sieve 3 Mesh: Upper - <b>6</b>, Middle - <b>5.5</b>, Lower - <b>5</b>", "Winnowing Mesh: Upper - <b>5.5</b>, Lower - <b>5.5</b>", "Sand Mesh: <b>3</b>", "Air Handle: Front - <b>Up</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>13</b>"],
      settingsSpeech: ["Keep the V belt at three", "Set the cutter at seven point five", "In sieve two mesh, keep upper at five point five and lower at five", "In sieve three mesh, keep upper at six, middle at five point five, and lower at five", "In winnowing mesh, keep upper and lower at five point five", "Keep sand mesh at three", "Set air handle front to up and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at thirteen"]
    }
  },
  cumin: {
    gu: {
      name: "જીરું",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>3</b>", "કટર: <b>7.5</b>", "ચારણા 2 જાળી: ઉપર - <b>6</b>, નીચે - <b>5.5</b>", "ચારણા 3 જાળી: ઉપર - <b>6</b>, વચ્ચે - <b>5.5</b>, નીચે - <b>5</b>", "સુપડી જાળી: ઉપર - <b>6</b>, નીચે - <b>5.5</b>", "રેત જાળી: <b>1.6</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ ત્રણ રાખો", "કટર સાત દશાંશ પાંચ રાખો", "ચારણા બે ની જાળી માં ઉપર છ અને નીચે પાંચ દશાંશ પાંચ રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર છ, વચ્ચે પાંચ દશાંશ પાંચ અને નીચે પાંચ રાખો", "સુપડી જાળી માં ઉપર છ અને નીચે પાંચ દશાંશ પાંચ રાખો", "રેત જાળી એક દશાંશ છ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "जीरा",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>3</b>", "कटर: <b>7.5</b>", "छलना 2 जाली: ऊपर - <b>6</b>, नीचे - <b>5.5</b>", "छलना 3 जाली: ऊपर - <b>6</b>, बीच में - <b>5.5</b>, नीचे - <b>5</b>", "सुपड़ी जाली: ऊपर - <b>6</b>, नीचे - <b>5.5</b>", "रेत जाली: <b>1.6</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: ["वी बेल्ट तीन रखें", "कटर सात दशमलव पाँच रखें", "छलना दो की जाली में ऊपर छह और नीचे पाँच दशमलव पाँच रखें", "छलना तीन की जाली में ऊपर छह, बीच में पाँच दशमलव पाँच और नीचे पाँच रखें", "सुपड़ी जाली में ऊपर छह और नीचे पाँच दशमलव पाँच रखें", "रेत जाली एक दशमलव छह रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Cumin",
      settingsDisplay: ["V-Belt: <b>3</b>", "Cutter: <b>7.5</b>", "Sieve 2 Mesh: Upper - <b>6</b>, Lower - <b>5.5</b>", "Sieve 3 Mesh: Upper - <b>6</b>, Middle - <b>5.5</b>, Lower - <b>5</b>", "Winnowing Mesh: Upper - <b>6</b>, Lower - <b>5.5</b>", "Sand Mesh: <b>1.6</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at three", "Set the cutter at seven point five", "In sieve two mesh, keep upper at six and lower at five point five", "In sieve three mesh, keep upper at six, middle at five point five, and lower at five", "In winnowing mesh, keep upper at six and lower at five point five", "Keep sand mesh at one point six", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  },
  fennel: {
    gu: {
      name: "વરિયાળી",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>3</b>", "કટર: <b>7.5</b>", "ચારણા 2 જાળી: ઉપર - <b>6</b>, નીચે - <b>5.5</b>", "ચારણા 3 જાળી: ઉપર - <b>7</b>, વચ્ચે - <b>6</b>, નીચે - <b>5.5</b>", "સુપડી જાળી: ઉપર - <b>8</b>, નીચે - <b>7</b>", "રેત જાળી: <b>1.6</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ ત્રણ રાખો", "કટર સાત દશાંશ પાંચ રાખો", "ચારણા બે ની જાળી માં ઉપર છ અને નીચે પાંચ દશાંશ પાંચ રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર સાત, વચ્ચે છ અને નીચે પાંચ દશાંશ પાંચ રાખો", "સુપડી જાળી માં ઉપર આઠ અને નીચે સાત રાખો", "રેત જાળી એક દશાંશ છ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "सौंफ",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>3</b>", "कटर: <b>7.5</b>", "छलना 2 जाली: ऊपर - <b>6</b>, नीचे - <b>5.5</b>", "छलना 3 जाली: ऊपर - <b>7</b>, बीच में - <b>6</b>, नीचे - <b>5.5</b>", "सुपड़ी जाली: ऊपर - <b>8</b>, नीचे - <b>7</b>", "रेत जाली: <b>1.6</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: ["वी बेल्ट तीन रखें", "कटर सात दशमलव पाँच रखें", "छलना दो की जाली में ऊपर छह और नीचे पाँच दशमलव पाँच रखें", "छलना तीन की जाली में ऊपर सात, बीच में छह और नीचे पाँच दशमलव पाँच रखें", "सुपड़ी जाली में ऊपर आठ और नीचे सात रखें", "रेत जाली एक दशमलव छह रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Fennel",
      settingsDisplay: ["V-Belt: <b>3</b>", "Cutter: <b>7.5</b>", "Sieve 2 Mesh: Upper - <b>6</b>, Lower - <b>5.5</b>", "Sieve 3 Mesh: Upper - <b>7</b>, Middle - <b>6</b>, Lower - <b>5.5</b>", "Winnowing Mesh: Upper - <b>8</b>, Lower - <b>7</b>", "Sand Mesh: <b>1.6</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at three", "Set the cutter at seven point five", "In sieve two mesh, keep upper at six and lower at five point five", "In sieve three mesh, keep upper at seven, middle at six, and lower at five point five", "In winnowing mesh, keep upper at eight and lower at seven", "Keep sand mesh at one point six", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  },
  psyllium: {
    gu: {
      name: "ઇસબગુલ",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>3</b>", "કટર: <b>6</b>", "ચારણા 2 જાળી: ઉપર - <b>4</b>, નીચે - <b>3</b>", "ચારણા 3 જાળી: ઉપર - <b>4.5</b>, વચ્ચે - <b>4</b>, નીચે - <b>3</b>", "સુપડી જાળી: ઉપર - <b>4</b>, નીચે - <b>3/2.5</b>", "રેત જાળી: <b>1.6</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ ત્રણ રાખો", "કટર છ રાખો", "ચારણા બે ની જાળી માં ઉપર ચાર અને નીચે ત્રણ રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર ચાર દશાંશ પાંચ, વચ્ચે ચાર અને નીચે ત્રણ રાખો", "સુપડી જાળી માં ઉપર ચાર અને નીચે ત્રણ અથવા બે દશાંશ પાંચ રાખો", "રેત જાળી એક દશાંશ છ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "इसबगोल",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>3</b>", "कटर: <b>6</b>", "छलना 2 जाली: ऊपर - <b>4</b>, नीचे - <b>3</b>", "छलना 3 जाली: ऊपर - <b>4.5</b>, बीच में - <b>4</b>, नीचे - <b>3</b>", "सुपड़ी जाली: ऊपर - <b>4</b>, नीचे - <b>3/2.5</b>", "रेत जाली: <b>1.6</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: ["वी बेल्ट तीन रखें", "कटर छह रखें", "छलना दो की जाली में ऊपर चार और नीचे तीन रखें", "छलना तीन की जाली में ऊपर चार दशमलव पाँच, बीच में चार और नीचे तीन रखें", "सुपड़ी जाली में ऊपर चार और नीचे तीन या दो दशमलव पाँच रखें", "रेत जाली एक दशमलव छह रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Psyllium",
      settingsDisplay: ["V-Belt: <b>3</b>", "Cutter: <b>6</b>", "Sieve 2 Mesh: Upper - <b>4</b>, Lower - <b>3</b>", "Sieve 3 Mesh: Upper - <b>4.5</b>, Middle - <b>4</b>, Lower - <b>3</b>", "Winnowing Mesh: Upper - <b>4</b>, Lower - <b>3/2.5</b>", "Sand Mesh: <b>1.6</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at three", "Set the cutter at six", "In sieve two mesh, keep upper at four and lower at three", "In sieve three mesh, keep upper at four point five, middle at four, and lower at three", "In winnowing mesh, keep upper at four and lower at three or two point five", "Keep sand mesh at one point six", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  },
  amaranth: {
    gu: {
      name: "રાજગરો",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>3</b>", "કટર: <b>7.5</b>", "ચારણા 2 જાળી: ઉપર - <b>3</b>, નીચે - <b>1.6</b>", "ચારણા 3 જાળી: ઉપર - <b>4</b>, વચ્ચે - <b>3</b>, નીચે - <b>1.6</b>", "સુપડી જાળી: ઉપર - <b>4</b>, નીચે - <b>3</b>", "રેત જાળી: <b>પતરું</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ ત્રણ રાખો", "કટર સાત દશાંશ પાંચ રાખો", "ચારણા બે ની જાળી માં ઉપર ત્રણ અને નીચે એક દશાંશ છ રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર ચાર, વચ્ચે ત્રણ અને નીચે એક દશાંશ છ રાખો", "સુપડી જાળી માં ઉપર ચાર અને નીચે ત્રણ રાખો", "રેત જાળી માં પતરું રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "राजगिरा",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>3</b>", "कटर: <b>7.5</b>", "छलना 2 जाली: ऊपर - <b>3</b>, नीचे - <b>1.6</b>", "छलना 3 जाली: ऊपर - <b>4</b>, बीच में - <b>3</b>, नीचे - <b>1.6</b>", "सुपड़ी जाली: ऊपर - <b>4</b>, नीचे - <b>3</b>", "रेत जाली: <b>चद्दर</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: ["वी बेल्ट तीन रखें", "कटर सात दशमलव पाँच रखें", "छलना दो की जाली में ऊपर तीन और नीचे एक दशमलव छह रखें", "छलना तीन की जाली में ऊपर चार, बीच में तीन और नीचे एक दशमलव छह रखें", "सुपड़ी जाली में ऊपर चार और नीचे तीन रखें", "रेत जाली की जगह चद्दर का उपयोग करें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Amaranth",
      settingsDisplay: ["V-Belt: <b>3</b>", "Cutter: <b>7.5</b>", "Sieve 2 Mesh: Upper - <b>3</b>, Lower - <b>1.6</b>", "Sieve 3 Mesh: Upper - <b>4</b>, Middle - <b>3</b>, Lower - <b>1.6</b>", "Winnowing Mesh: Upper - <b>4</b>, Lower - <b>3</b>", "Sand Mesh: <b>Sheet</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at three", "Set the cutter at seven point five", "In sieve two mesh, keep upper at three and lower at one point six", "In sieve three mesh, keep upper at four, middle at three, and lower at one point six", "In winnowing mesh, keep upper at four and lower at three", "Use a metal sheet for sand mesh", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  },
  ajwain: {
    gu: {
      name: "અજમો",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>3</b>", "કટર: <b>7.5</b>", "ચારણા 2 જાળી: ઉપર - <b>4.5</b>, નીચે - <b>4</b>", "ચારણા 3 જાળી: ઉપર - <b>5</b>, વચ્ચે - <b>4.5</b>, નીચે - <b>4</b>", "સુપડી જાળી: ઉપર - <b>5</b>, નીચે - <b>4.5</b>", "રેત જાળી: <b>1.6</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ ત્રણ રાખો", "કટર સાત દશાંશ પાંચ રાખો", "ચારણા બે ની જાળી માં ઉપર ચાર દશાંશ પાંચ અને નીચે ચાર રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર પાંચ, વચ્ચે ચાર દશાંશ પાંચ અને નીચે ચાર રાખો", "સુપડી જાળી માં ઉપર પાંચ અને નીચે ચાર દશાંશ પાંચ રાખો", "રેત જાળી એક દશાંશ છ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "अजवायन",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>3</b>", "कटर: <b>7.5</b>", "छलना 2 जाली: ऊपर - <b>4.5</b>, नीचे - <b>4</b>", "छलना 3 जाली: ऊपर - <b>5</b>, बीच में - <b>4.5</b>, नीचे - <b>4</b>", "सुपड़ी जाली: ऊपर - <b>5</b>, नीचे - <b>4.5</b>", "रेत जाली: <b>1.6</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: ["वी बेल्ट तीन रखें", "कटर सात दशमलव पाँच रखें", "छलना दो की जाली में ऊपर साढ़े चार और नीचे चार रखें", "छलना तीन की जाली में ऊपर पाँच, बीच में साढ़े चार और नीचे चार रखें", "सुपड़ी जाली में ऊपर पाँच और नीचे साढ़े चार रखें", "रेत जाली एक दशमलव छह रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Ajwain",
      settingsDisplay: ["V-Belt: <b>3</b>", "Cutter: <b>7.5</b>", "Sieve 2 Mesh: Upper - <b>4.5</b>, Lower - <b>4</b>", "Sieve 3 Mesh: Upper - <b>5</b>, Middle - <b>4.5</b>, Lower - <b>4</b>", "Winnowing Mesh: Upper - <b>5</b>, Lower - <b>4.5</b>", "Sand Mesh: <b>1.6</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at three", "Set the cutter at seven point five", "In sieve two mesh, keep upper at four point five and lower at four", "In sieve three mesh, keep upper at five, middle at four point five, and lower at four", "In winnowing mesh, keep upper at five and lower at four point five", "Keep sand mesh at one point six", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  },
  dill: {
    gu: {
      name: "સુવા",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>3</b>", "કટર: <b>7.5</b>", "ચારણા 2 જાળી: ઉપર - <b>5.5</b>, નીચે - <b>5</b>", "ચારણા 3 જાળી: ઉપર - <b>6</b>, વચ્ચે - <b>5.5</b>, નીચે - <b>5</b>", "સુપડી જાળી: ઉપર - <b>6</b>, નીચે - <b>5.5</b>", "રેત જાળી: <b>1.6</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ ત્રણ રાખો", "કટર સાત દશાંશ પાંચ રાખો", "ચારણા બે ની જાળી માં ઉપર પાંચ દશાંશ પાંચ અને નીચે પાંચ રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર છ, વચ્ચે પાંચ દશાંશ પાંચ અને નીચે પાંચ રાખો", "સુપડી જાળી માં ઉપર છ અને નીચે પાંચ દશાંશ પાંચ રાખો", "રેત જાળી એક દશાંશ છ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "सुवा",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>3</b>", "कटर: <b>7.5</b>", "छलना 2 जाली: ऊपर - <b>5.5</b>, नीचे - <b>5</b>", "छलना 3 जाली: ऊपर - <b>6</b>, बीच में - <b>5.5</b>, नीचे - <b>5</b>", "सुपड़ी जाली: ऊपर - <b>6</b>, नीचे - <b>5.5</b>", "रेत जाली: <b>1.6</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: ["वी बेल्ट तीन रखें", "कटर सात दशमलव पाँच रखें", "छलना दो की जाली में ऊपर साढ़े पाँच और नीचे पाँच रखें", "छलना तीन की जाली में ऊपर छह, बीच में साढ़े पाँच और नीचे पाँच रखें", "सुपड़ी जाલી में ऊपर छह और नीचे साढ़े पाँच रखें", "रेत जाली एक दशमलव छह रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Dill",
      settingsDisplay: ["V-Belt: <b>3</b>", "Cutter: <b>7.5</b>", "Sieve 2 Mesh: Upper - <b>5.5</b>, Lower - <b>5</b>", "Sieve 3 Mesh: Upper - <b>6</b>, Middle - <b>5.5</b>, Lower - <b>5</b>", "Winnowing Mesh: Upper - <b>6</b>, Lower - <b>5.5</b>", "Sand Mesh: <b>1.6</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at three", "Set the cutter at seven point five", "In sieve two mesh, keep upper at five point five and lower at five", "In sieve three mesh, keep upper at six, middle at five point five, and lower at five", "In winnowing mesh, keep upper at six and lower at five point five", "Keep sand mesh at one point six", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  },
  fenugreek: {
    gu: {
      name: "મેથી",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>3</b>", "કટર: <b>7.5</b>", "ચારણા 2 જાળી: ઉપર - <b>5.5</b>, નીચે - <b>5</b>", "ચારણા 3 જાળી: ઉપર - <b>6</b>, વચ્ચે - <b>5.5</b>, નીચે - <b>5</b>", "સુપડી જાળી: ઉપર - <b>6</b>, નીચે - <b>5.5</b>", "રેત જાળી: <b>1.6</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ ત્રણ રાખો", "કટર સાત દશાંશ પાંચ રાખો", "ચારણા બે ની જાળી માં ઉપર પાંચ દશાંશ પાંચ અને નીચે પાંચ રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર છ, વચ્ચે પાંચ દશાંશ પાંચ અને નીચે પાંચ રાખો", "સુપડી જાળી માં ઉપર છ અને નીચે પાંચ દશાંશ પાંચ રાખો", "રેત જાળી એક દશાંશ છ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "मेथी",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>3</b>", "कटर: <b>7.5</b>", "छलना 2 जाली: ऊपर - <b>5.5</b>, नीचे - <b>5</b>", "छलना 3 जाली: ऊपर - <b>6</b>, बीच में - <b>5.5</b>, नीचे - <b>5</b>", "सुपड़ी जाली: ऊपर - <b>6</b>, नीचे - <b>5.5</b>", "रेत जाली: <b>1.6</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: ["वी बेल्ट तीन रखें", "कटर सात दशमलव पाँच रखें", "छलना दो की जाली में ऊपर साढ़े पाँच और नीचे पाँच रखें", "छलना तीन की जाली में ऊपर छह, बीच में साढ़े पाँच और नीचे पाँच रखें", "सुपड़ी जाली में ऊपर छह और नीचे साढ़े पाँच रखें", "रेत जाली एक दशमलव छह रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Fenugreek",
      settingsDisplay: ["V-Belt: <b>3</b>", "Cutter: <b>7.5</b>", "Sieve 2 Mesh: Upper - <b>5.5</b>, Lower - <b>5</b>", "Sieve 3 Mesh: Upper - <b>6</b>, Middle - <b>5.5</b>, Lower - <b>5</b>", "Winnowing Mesh: Upper - <b>6</b>, Lower - <b>5.5</b>", "Sand Mesh: <b>1.6</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at three", "Set the cutter at seven point five", "In sieve two mesh, keep upper at five point five and lower at five", "In sieve three mesh, keep upper at six, middle at five point five, and lower at five", "In winnowing mesh, keep upper at six and lower at five point five", "Keep sand mesh at one point six", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  },
  radish_seed: {
    gu: {
      name: "રજકો",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>3</b>", "કટર: <b>7.5</b>", "ચારણા 2 જાળી: ઉપર - <b>4</b>, નીચે - <b>3</b>", "ચારણા 3 જાળી: ઉપર - <b>4.5</b>, વચ્ચે - <b>4</b>, નીચે - <b>3</b>", "સુપડી જાળી: ઉપર - <b>4</b>, નીચે - <b>3</b>", "રેત જાળી: <b>1.6</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ ત્રણ રાખો", "કટર સાત દશાંશ પાંચ રાખો", "ચારણા બે ની જાળી માં ઉપર ચાર અને નીચે ત્રણ રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર ચાર દશાંશ પાંચ, વચ્ચે ચાર અને નીચે ત્રણ રાખો", "સુપડી જાળી માં ઉપર ચાર અને નીચે ત્રણ રાખો", "રેત જાળી એક દશાંશ છ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "रजका",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>3</b>", "कटर: <b>7.5</b>", "छलना 2 जाली: ऊपर - <b>4</b>, नीचे - <b>3</b>", "छलना 3 जाली: ऊपर - <b>4.5</b>, बीच में - <b>4</b>, नीचे - <b>3</b>", "सुपड़ी जाली: ऊपर - <b>4</b>, नीचे - <b>3</b>", "रेत जाली: <b>1.6</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: ["वी बेल्ट तीन रखें", "कटर सात दशमलव पाँच रखें", "छलना दो की जाली में ऊपर चार और नीचे तीन रखें", "छलना तीन की जाली में ऊपर साढ़े चार, बीच में चार और नीचे तीन रखें", "सुपड़ी जाली में ऊपर चार और नीचे तीन रखें", "रेत जाली एक दशमलव छह रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Radish Seed",
      settingsDisplay: ["V-Belt: <b>3</b>", "Cutter: <b>7.5</b>", "Sieve 2 Mesh: Upper - <b>4</b>, Lower - <b>3</b>", "Sieve 3 Mesh: Upper - <b>4.5</b>, Middle - <b>4</b>, Lower - <b>3</b>", "Winnowing Mesh: Upper - <b>4</b>, Lower - <b>3</b>", "Sand Mesh: <b>1.6</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at three", "Set the cutter at seven point five", "In sieve two mesh, keep upper at four and lower at three", "In sieve three mesh, keep upper at four point five, middle at four, and lower at three", "In winnowing mesh, keep upper at four and lower at three", "Keep sand mesh at one point six", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  },
  chicory: {
    gu: {
      name: "ચીકોરી",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>3</b>", "કટર: <b>7.5</b>", "ચારણા 2 જાળી: ઉપર - <b>4</b>, નીચે - <b>3</b>", "ચારણા 3 જાળી: ઉપર - <b>4.5</b>, વચ્ચે - <b>4</b>, નીચે - <b>3</b>", "સુપડી જાળી: ઉપર - <b>4</b>, નીચે - <b>3</b>", "રેત જાળી: <b>1.6</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ ત્રણ રાખો", "કટર સાત દશાંશ પાંચ રાખો", "ચારણા બે ની જાળી માં ઉપર ચાર અને નીચે ત્રણ રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર ચાર દશાંશ પાંચ, વચ્ચે ચાર અને નીચે ત્રણ રાખો", "સુપડી જાળી માં ઉપર ચાર અને નીચે ત્રણ રાખો", "રેત જાળી એક દશાંશ છ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "चिकोरी",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>3</b>", "कटर: <b>7.5</b>", "छलना 2 जाली: ऊपर - <b>4</b>, नीचे - <b>3</b>", "छलना 3 जाली: ऊपर - <b>4.5</b>, बीच में - <b>4</b>, नीचे - <b>3</b>", "सुपड़ी जाली: ऊपर - <b>4</b>, नीचे - <b>3</b>", "रेत जाली: <b>1.6</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: ["वी बेल्ट तीन रखें", "कटर सात दशमलव पाँच रखें", "छलना दो की जाली में ऊपर चार और नीचे तीन रखें", "छलना तीन की जाली में ऊपर साढ़े चार, बीच में चार और नीचे तीन रखें", "सुपड़ी जाली में ऊपर चार और नीचे तीन रखें", "रेत जाली एक दशमलव छह रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Chicory",
      settingsDisplay: ["V-Belt: <b>3</b>", "Cutter: <b>7.5</b>", "Sieve 2 Mesh: Upper - <b>4</b>, Lower - <b>3</b>", "Sieve 3 Mesh: Upper - <b>4.5</b>, Middle - <b>4</b>, Lower - <b>3</b>", "Winnowing Mesh: Upper - <b>4</b>, Lower - <b>3</b>", "Sand Mesh: <b>1.6</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at three", "Set the cutter at seven point five", "In sieve two mesh, keep upper at four and lower at three", "In sieve three mesh, keep upper at four point five, middle at four, and lower at three", "In winnowing mesh, keep upper at four and lower at three", "Keep sand mesh at one point six", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  },
  onion_seed: {
    gu: {
      name: "ડુંગળી નું બી",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>3</b>", "કટર: <b>7.5</b>", "ચારણા 2 જાળી: ઉપર - <b>4</b>, નીચે - <b>3</b>", "ચારણા 3 જાળી: ઉપર - <b>4.5</b>, વચ્ચે - <b>4</b>, નીચે - <b>3</b>", "સુપડી જાળી: ઉપર - <b>4</b>, નીચે - <b>3</b>", "રેત જાળી: <b>1.6</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ ત્રણ રાખો", "કટર સાડા સાત રાખો", "ચારણા બે ની જાળી માં ઉપર ચાર અને નીચે ત્રણ રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર સાડા ચાર, વચ્ચે ચાર અને નીચે ત્રણ રાખો", "સુપડી જાળી માં ઉપર ચાર અને નીચે ત્રણ રાખો", "રેત જાળી એક દશાંશ છ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "प्याज का बीज",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>3</b>", "कटर: <b>7.5</b>", "छलना 2 जाली: ऊपर - <b>4</b>, नीचे - <b>3</b>", "छलना 3 जाली: ऊपर - <b>4.5</b>, बीच में - <b>4</b>, नीचे - <b>3</b>", "सुपड़ी जाली: ऊपर - <b>4</b>, नीचे - <b>3</b>", "रेत जाली: <b>1.6</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: ["वी बेल्ट तीन रखें", "कटर साढ़े सात रखें", "छलना दो की जाली में ऊपर चार और नीचे तीन रखें", "छलना तीन की जाली में ऊपर साढ़े चार, बीच में चार और नीचे तीन रखें", "सुपड़ी जाली में ऊपर चार और नीचे तीन रखें", "रेत जाली एक दशमलव छह रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Onion Seed",
      settingsDisplay: ["V-Belt: <b>3</b>", "Cutter: <b>7.5</b>", "Sieve 2 Mesh: Upper - <b>4</b>, Lower - <b>3</b>", "Sieve 3 Mesh: Upper - <b>4.5</b>, Middle - <b>4</b>, Lower - <b>3</b>", "Winnowing Mesh: Upper - <b>4</b>, Lower - <b>3</b>", "Sand Mesh: <b>1.6</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at three", "Set the cutter at seven point five", "In sieve two mesh, keep upper at four and lower at three", "In sieve three mesh, keep upper at four point five, middle at four, and lower at three", "In winnowing mesh, keep upper at four and lower at three", "Keep sand mesh at one point six", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  },
  taramira: {
    gu: {
      name: "તારામેરા",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>3</b>", "કટર: <b>7.5</b>", "ચારણા 2 જાળી: ઉપર - <b>4</b>, નીચે - <b>3</b>", "ચારણા 3 જાળી: ઉપર - <b>4.5</b>, વચ્ચે - <b>4</b>, નીચે - <b>3</b>", "સુપડી જાળી: ઉપર - <b>4</b>, નીચે - <b>3</b>", "રેત જાળી: <b>1.6</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ ત્રણ રાખો", "કટર સાડા સાત રાખો", "ચારણા બે ની જાળી માં ઉપર ચાર અને નીચે ત્રણ રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર સાડા ચાર, વચ્ચે ચાર અને નીચે ત્રણ રાખો", "સુપડી જાળી માં ઉપર ચાર અને નીચે ત્રણ રાખો", "રેત જાળી એક દશાંશ છ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "तारामीरा",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>3</b>", "कटर: <b>7.5</b>", "छलना 2 जाली: ऊपर - <b>4</b>, नीचे - <b>3</b>", "छलना 3 जाली: ऊपर - <b>4.5</b>, बीच में - <b>4</b>, नीचे - <b>3</b>", "सुपड़ी जाली: ऊपर - <b>4</b>, नीचे - <b>3</b>", "रेत जाली: <b>1.6</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: ["वी बेल्ट तीन रखें", "कटर साढ़े सात रखें", "छलना दो की जाली में ऊपर चार और नीचे तीन रखें", "छलना तीन की जाली में ऊपर साढ़े चार, बीच में चार और नीचे तीन रखें", "सुपड़ी जाली में ऊपर चार और नीचे तीन रखें", "रेत जाली एक दशमलव छह रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Taramira",
      settingsDisplay: ["V-Belt: <b>3</b>", "Cutter: <b>7.5</b>", "Sieve 2 Mesh: Upper - <b>4</b>, Lower - <b>3</b>", "Sieve 3 Mesh: Upper - <b>4.5</b>, Middle - <b>4</b>, Lower - <b>3</b>", "Winnowing Mesh: Upper - <b>4</b>, Lower - <b>3</b>", "Sand Mesh: <b>1.6</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at three", "Set the cutter at seven point five", "In sieve two mesh, keep upper at four and lower at three", "In sieve three mesh, keep upper at four point five, middle at four, and lower at three", "In winnowing mesh, keep upper at four and lower at three", "Keep sand mesh at one point six", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  },
  linseed: {
    gu: {
      name: "અસારીયો",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>3</b>", "કટર: <b>7.5</b>", "ચારણા 2 જાળી: ઉપર - <b>4</b>, નીચે - <b>3</b>", "ચારણા 3 જાળી: ઉપર - <b>4.5</b>, વચ્ચે - <b>4</b>, નીચે - <b>3</b>", "સુપડી જાળી: ઉપર - <b>4</b>, નીચે - <b>3</b>", "રેત જાળી: <b>1.6</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ ત્રણ રાખો", "કટર સાડા સાત રાખો", "ચારણા બે ની જાળી માં ઉપર ચાર અને નીચે ત્રણ રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર સાડા ચાર, વચ્ચે ચાર અને નીચે ત્રણ રાખો", "સુપડી જાળી માં ઉપર ચાર અને નીચે ત્રણ રાખો", "રેત જાળી એક દશાંશ છ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "असारिया",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>3</b>", "कटर: <b>7.5</b>", "छलना 2 जाली: ऊपर - <b>4</b>, नीचे - <b>3</b>", "छलना 3 जाली: ऊपर - <b>4.5</b>, बीच में - <b>4</b>, नीचे - <b>3</b>", "सुपड़ी जाली: ऊपर - <b>4</b>, नीचे - <b>3</b>", "रेत जाली: <b>1.6</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: ["वी बेल्ट तीन रखें", "कटर साढ़े सात रखें", "छलना दो की जाली में ऊपर चार और नीचे तीन रखें", "छलना तीन की जाली में ऊपर साढ़े चार, बीच में चार और नीचे तीन रखें", "सुपड़ी जाली में ऊपर चार और नीचे तीन रखें", "रेत जाली एक दशमलव छह रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Linseed",
      settingsDisplay: ["V-Belt: <b>3</b>", "Cutter: <b>7.5</b>", "Sieve 2 Mesh: Upper - <b>4</b>, Lower - <b>3</b>", "Sieve 3 Mesh: Upper - <b>4.5</b>, Middle - <b>4</b>, Lower - <b>3</b>", "Winnowing Mesh: Upper - <b>4</b>, Lower - <b>3</b>", "Sand Mesh: <b>1.6</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at three", "Set the cutter at seven point five", "In sieve two mesh, keep upper at four and lower at three", "In sieve three mesh, keep upper at four point five, middle at four, and lower at three", "In winnowing mesh, keep upper at four and lower at three", "Keep sand mesh at one point six", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  },
  barley: {
    gu: {
      name: "જવ",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>3</b>", "કટર: <b>7.5</b>", "ચારણા 2 જાળી: ઉપર - <b>7</b>, નીચે - <b>6</b>", "ચારણા 3 જાળી: ઉપર - <b>8</b>, વચ્ચે - <b>7</b>, નીચે - <b>6</b>", "સુપડી જાળી: ઉપર - <b>8</b>, નીચે - <b>7</b>", "રેત જાળી: <b>1.6</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ ત્રણ રાખો", "કટર સાડા સાત રાખો", "ચારણા બે ની જાળી માં ઉપર સાત અને નીચે છ રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર આઠ, વચ્ચે સાત અને નીચે છ રાખો", "સુપડી જાળી માં ઉપર આઠ અને નીચે સાત રાખો", "રેત જાળી એક દશાંશ છ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "जव",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>3</b>", "कटर: <b>7.5</b>", "छलना 2 जाली: ऊपर - <b>7</b>, नीचे - <b>6</b>", "छलना 3 जाली: ऊपर - <b>8</b>, बीच में - <b>7</b>, नीचे - <b>6</b>", "सुपड़ी जाली: ऊपर - <b>8</b>, नीचे - <b>7</b>", "रेत जाली: <b>1.6</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: ["वी बेल्ट तीन रखें", "कटर साढ़े सात रखें", "छलना दो की जाली में ऊपर सात और नीचे छह रखें", "छलना तीन की जाली में ऊपर आठ, बीच में सात और नीचे छह रखें", "सुपड़ी जाली में ऊपर आठ और नीचे सात रखें", "रेत जाली एक दशमलव छह रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Barley",
      settingsDisplay: ["V-Belt: <b>3</b>", "Cutter: <b>7.5</b>", "Sieve 2 Mesh: Upper - <b>7</b>, Lower - <b>6</b>", "Sieve 3 Mesh: Upper - <b>8</b>, Middle - <b>7</b>, Lower - <b>6</b>", "Winnowing Mesh: Upper - <b>8</b>, Lower - <b>7</b>", "Sand Mesh: <b>1.6</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at three", "Set the cutter at seven point five", "In sieve two mesh, keep upper at seven and lower at six", "In sieve three mesh, keep upper at eight, middle at seven, and lower at six", "In winnowing mesh, keep upper at eight and lower at seven", "Keep sand mesh at one point six", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  },
  sesame: {
    gu: {
      name: "તલ",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>3</b>", "કટર: <b>7.5</b>", "ચારણા 2 જાળી: ઉપર - <b>4</b>, નીચે - <b>3</b>", "ચારણા 3 જાળી: ઉપર - <b>4.5</b>, વચ્ચે - <b>4</b>, નીચે - <b>3</b>", "સુપડી જાળી: ઉપર - <b>4</b>, નીચે - <b>3</b>", "રેત જાળી: <b>1.6</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ ત્રણ રાખો", "કટર સાડા સાત રાખો", "ચારણા બે ની જાળી માં ઉપર ચાર અને નીચે ત્રણ રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર સાડા ચાર, વચ્ચે ચાર અને નીચે ત્રણ રાખો", "સુપડી જાળી માં ઉપર ચાર અને નીચે ત્રણ રાખો", "રેત જાળી એક દશાંશ છ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "तिल",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>3</b>", "कटर: <b>7.5</b>", "छलना 2 जाली: ऊपर - <b>4</b>, नीचे - <b>3</b>", "छलना 3 जाली: ऊपर - <b>4.5</b>, बीच में - <b>4</b>, नीचे - <b>3</b>", "सुपड़ी जाली: ऊपर - <b>4</b>, नीचे - <b>3</b>", "रेत जाली: <b>1.6</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छલને की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: ["वी बेल्ट तीन रखें", "कटर साढ़े सात रखें", "छलना दो की जाली में ऊपर चार और नीचे तीन रखें", "छलना तीन की जाली में ऊपर साढ़े चार, बीच में चार और नीचे तीन रखें", "सुपड़ी जाली में ऊपर चार और नीचे तीन रखें", "रेत जाली एक दशमलव छह रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Sesame",
      settingsDisplay: ["V-Belt: <b>3</b>", "Cutter: <b>7.5</b>", "Sieve 2 Mesh: Upper - <b>4</b>, Lower - <b>3</b>", "Sieve 3 Mesh: Upper - <b>4.5</b>, Middle - <b>4</b>, Lower - <b>3</b>", "Winnowing Mesh: Upper - <b>4</b>, Lower - <b>3</b>", "Sand Mesh: <b>1.6</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at three", "Set the cutter at seven point five", "In sieve two mesh, keep upper at four and lower at three", "In sieve three mesh, keep upper at four point five, middle at four, and lower at three", "In winnowing mesh, keep upper at four and lower at three", "Keep sand mesh at one point six", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  },
  green_gram: {
    gu: {
      name: "મગ",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>5</b>", "કટર: <b>8.5</b>", "ચારણા 2 જાળી: ઉપર - <b>6</b>, નીચે - <b>5.5</b>", "ચારણા 3 જાળી: ઉપર - <b>7</b>, વચ્ચે - <b>6</b>, નીચે - <b>5.5</b>", "સુપડી જાળી: ઉપર - <b>6</b>, નીચે - <b>5.5</b>", "રેત જાળી: <b>3</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ પાંચ રાખો", "કટર સાડા આઠ રાખો", "ચારણા બે ની જાળી માં ઉપર છ અને નીચે સાડા પાંચ રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર સાત, વચ્ચે છ અને નીચે સાડા પાંચ રાખો", "સુપડી જાળી માં ઉપર છ અને નીચે સાડા પાંચ રાખો", "રેત જાળી ત્રણ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "मूंग",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>5</b>", "कटर: <b>8.5</b>", "छलना 2 जाली: ऊपर - <b>6</b>, नीचे - <b>5.5</b>", "छलना 3 जाली: ऊपर - <b>7</b>, बीच में - <b>6</b>, नीचे - <b>5.5</b>", "सुपड़ी जाली: ऊपर - <b>6</b>, नीचे - <b>5.5</b>", "रेत जाली: <b>3</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: ["वी बेल्ट पांच रखें", "कटर साढ़े आठ रखें", "छलना दो की जाली में ऊपर छह और नीचे साढ़े पांच रखें", "छलना तीन की जाली में ऊपर सात, बीच में छह और नीचे साढ़े पांच रखें", "सुपड़ी जाली में ऊपर छह और नीचे साढ़े पांच रखें", "रेत जाली तीन रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Green Gram",
      settingsDisplay: ["V-Belt: <b>5</b>", "Cutter: <b>8.5</b>", "Sieve 2 Mesh: Upper - <b>6</b>, Lower - <b>5.5</b>", "Sieve 3 Mesh: Upper - <b>7</b>, Middle - <b>6</b>, Lower - <b>5.5</b>", "Winnowing Mesh: Upper - <b>6</b>, Lower - <b>5.5</b>", "Sand Mesh: <b>3</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at five", "Set the cutter at eight point five", "In sieve two mesh, keep upper at six and lower at five point five", "In sieve three mesh, keep upper at seven, middle at six, and lower at five point five", "In winnowing mesh, keep upper at six and lower at five point five", "Keep sand mesh at three", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  },
  moth_bean: {
    gu: {
      name: "મઠ",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>5</b>", "કટર: <b>8.5</b>", "ચારણા 2 જાળી: ઉપર - <b>6</b>, નીચે - <b>5.5</b>", "ચારણા 3 જાળી: ઉપર - <b>7</b>, વચ્ચે - <b>6</b>, નીચે - <b>5.5</b>", "સુપડી જાળી: ઉપર - <b>6</b>, નીચે - <b>5.5</b>", "રેત જાળી: <b>3</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ પાંચ રાખો", "કટર સાડા આઠ રાખો", "ચારણા બે ની જાળી માં ઉપર છ અને નીચે સાડા પાંચ રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર સાત, વચ્ચે છ અને નીચે સાડા પાંચ રાખો", "સુપડી જાળી માં ઉપર છ અને નીચે સાડા પાંચ રાખો", "રેત જાળી ત્રણ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "मोठ",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>5</b>", "कटर: <b>8.5</b>", "छलना 2 जाली: ऊपर - <b>6</b>, नीचे - <b>5.5</b>", "छलना 3 जाली: ऊपर - <b>7</b>, बीच में - <b>6</b>, नीचे - <b>5.5</b>", "सुपड़ी जाली: ऊपर - <b>6</b>, नीचे - <b>5.5</b>", "रेत जाली: <b>3</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: ["वी बेल्ट पांच रखें", "कटर साढ़े आठ रखें", "छलना दो की जाली में ऊपर छह और नीचे साढ़े पांच रखें", "छलना तीन की जाली में ऊपर सात, बीच में छह और नीचे साढ़े पांच रखें", "सुपड़ी जाली में ऊपर छह और नीचे साढ़े पांच रखें", "रेत जाली तीन रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Moth Bean",
      settingsDisplay: ["V-Belt: <b>5</b>", "Cutter: <b>8.5</b>", "Sieve 2 Mesh: Upper - <b>6</b>, Lower - <b>5.5</b>", "Sieve 3 Mesh: Upper - <b>7</b>, Middle - <b>6</b>, Lower - <b>5.5</b>", "Winnowing Mesh: Upper - <b>6</b>, Lower - <b>5.5</b>", "Sand Mesh: <b>3</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at five", "Set the cutter at eight point five", "In sieve two mesh, keep upper at six and lower at five point five", "In sieve three mesh, keep upper at seven, middle at six, and lower at five point five", "In winnowing mesh, keep upper at six and lower at five point five", "Keep sand mesh at three", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  },
  black_gram: {
    gu: {
      name: "અડદ",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>5</b>", "કટર: <b>8.5</b>", "ચારણા 2 જાળી: ઉપર - <b>6</b>, નીચે - <b>5.5</b>", "ચારણા 3 જાળી: ઉપર - <b>7</b>, વચ્ચે - <b>6</b>, નીચે - <b>5.5</b>", "સુપડી જાળી: ઉપર - <b>6</b>, નીચે - <b>5.5</b>", "રેત જાળી: <b>3</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ પાંચ રાખો", "કટર સાડા આઠ રાખો", "ચારણા બે ની જાળી માં ઉપર છ અને નીચે સાડા પાંચ રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર સાત, વચ્ચે છ અને નીચે સાડા પાંચ રાખો", "સુપડી જાળી માં ઉપર છ અને નીચે સાડા પાંચ રાખો", "રેત જાળી ત્રણ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "उड़द",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>5</b>", "कटर: <b>8.5</b>", "छलना 2 जाली: ऊपर - <b>6</b>, नीचे - <b>5.5</b>", "छलना 3 जाली: ऊपर - <b>7</b>, बीच में - <b>6</b>, नीचे - <b>5.5</b>", "सुपड़ी जाली: ऊपर - <b>6</b>, नीचे - <b>5.5</b>", "रेत जाली: <b>3</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: ["वी बेल्ट पांच रखें", "कटर साढ़े आठ रखें", "छलना दो की जाली में ऊपर छह और नीचे साढ़े पांच रखें", "छलना तीन की जाली में ऊपर सात, बीच में छह और नीचे साढ़े पांच रखें", "सुपड़ी जाली में ऊपर छह और नीचे साढ़े पांच रखें", "रेत जाली तीन रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Black Gram",
      settingsDisplay: ["V-Belt: <b>5</b>", "Cutter: <b>8.5</b>", "Sieve 2 Mesh: Upper - <b>6</b>, Lower - <b>5.5</b>", "Sieve 3 Mesh: Upper - <b>7</b>, Middle - <b>6</b>, Lower - <b>5.5</b>", "Winnowing Mesh: Upper - <b>6</b>, Lower - <b>5.5</b>", "Sand Mesh: <b>3</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at five", "Set the cutter at eight point five", "In sieve two mesh, keep upper at six and lower at five point five", "In sieve three mesh, keep upper at seven, middle at six, and lower at five point five", "In winnowing mesh, keep upper at six and lower at five point five", "Keep sand mesh at three", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  },
  cowpea: {
    gu: {
      name: "ચોળી",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>5</b>", "કટર: <b>8.5</b>", "ચારણા 2 જાળી: ઉપર - <b>7</b>, નીચે - <b>6</b>", "ચારણા 3 જાળી: ઉપર - <b>8</b>, વચ્ચે - <b>7</b>, નીચે - <b>6</b>", "સુપડી જાળી: ઉપર - <b>8</b>, નીચે - <b>7</b>", "રેત જાળી: <b>3</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ પાંચ રાખો", "કટર સાડા આઠ રાખો", "ચારણા બે ની જાળી માં ઉપર સાત અને નીચે છ રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર આઠ, વચ્ચે સાત અને નીચે છ રાખો", "સુપડી જાળી માં ઉપર આઠ અને નીચે સાત રાખો", "રેત જાળી ત્રણ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "चोली",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>5</b>", "कटर: <b>8.5</b>", "छलना 2 जाली: ऊपर - <b>7</b>, नीचे - <b>6</b>", "छलना 3 जाली: ऊपर - <b>8</b>, बीच में - <b>7</b>, नीचे - <b>6</b>", "सुपड़ी जाली: ऊपर - <b>8</b>, नीचे - <b>7</b>", "रेत जाली: <b>3</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: ["वी बेल्ट पांच रखें", "कटर साढ़े आठ रखें", "छलना दो की जाली में ऊपर सात और नीचे छह रखें", "छलना तीन की जाली में ऊपर आठ, बीच में सात और नीचे छह रखें", "सुपड़ी जाली में ऊपर आठ और नीचे सात रखें", "रेत जाली तीन रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Cowpea",
      settingsDisplay: ["V-Belt: <b>5</b>", "Cutter: <b>8.5</b>", "Sieve 2 Mesh: Upper - <b>7</b>, Lower - <b>6</b>", "Sieve 3 Mesh: Upper - <b>8</b>, Middle - <b>7</b>, Lower - <b>6</b>", "Winnowing Mesh: Upper - <b>8</b>, Lower - <b>7</b>", "Sand Mesh: <b>3</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at five", "Set the cutter at eight point five", "In sieve two mesh, keep upper at seven and lower at six", "In sieve three mesh, keep upper at eight, middle at seven, and lower at six", "In winnowing mesh, keep upper at eight and lower at seven", "Keep sand mesh at three", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  },
  pigeon_pea: {
    gu: {
      name: "તુવેર",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>5</b>", "કટર: <b>8.5</b>", "ચારણા 2 જાળી: ઉપર - <b>10</b>, નીચે - <b>9</b>", "ચારણા 3 જાળી: ઉપર - <b>11</b>, વચ્ચે - <b>10</b>, નીચે - <b>9</b>", "સુપડી જાળી: ઉપર - <b>11</b>, નીચે - <b>10</b>", "રેત જાળી: <b>5</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ પાંચ રાખો", "કટર સાડા આઠ રાખો", "ચારણા બે ની જાળી માં ઉપર દસ અને નીચે નવ રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર અગિયાર, વચ્ચે દસ અને નીચે નવ રાખો", "સુપડી જાળી માં ઉપર અગિયાર અને નીચે દસ રાખો", "રેત જાળી પાંચ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "तुअर",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>5</b>", "कटर: <b>8.5</b>", "छलना 2 जाली: ऊपर - <b>10</b>, नीचे - <b>9</b>", "छलना 3 जाली: ऊपर - <b>11</b>, बीच में - <b>10</b>, नीचे - <b>9</b>", "सुपड़ी जाली: ऊपर - <b>11</b>, नीचे - <b>10</b>", "रेत जाली: <b>5</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: ["वी बेल्ट पांच रखें", "कटर साढ़े आठ रखें", "छलना दो की जाली में ऊपर दस और नीचे नौ रखें", "छलना तीन की जाली में ऊपर ग्यारह, बीच में दस और नीचे नौ रखें", "सुपड़ी जाली में ऊपर ग्यारह और नीचे दस रखें", "रेत जाली पांच रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Pigeon Pea",
      settingsDisplay: ["V-Belt: <b>5</b>", "Cutter: <b>8.5</b>", "Sieve 2 Mesh: Upper - <b>10</b>, Lower - <b>9</b>", "Sieve 3 Mesh: Upper - <b>11</b>, Middle - <b>10</b>, Lower - <b>9</b>", "Winnowing Mesh: Upper - <b>11</b>, Lower - <b>10</b>", "Sand Mesh: <b>5</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at five", "Set the cutter at eight point five", "In sieve two mesh, keep upper at ten and lower at nine", "In sieve three mesh, keep upper at eleven, middle at ten, and lower at nine", "In winnowing mesh, keep upper at eleven and lower at ten", "Keep sand mesh at five", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  },
  chickpea_desi: {
    gu: {
      name: "ચણા (દેશી)",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>5</b>", "કટર: <b>8.5</b>", "ચારણા 2 જાળી: ઉપર - <b>10</b>, નીચે - <b>9</b>", "ચારણા 3 જાળી: ઉપર - <b>11</b>, વચ્ચે - <b>10</b>, નીચે - <b>9</b>", "સુપડી જાળી: ઉપર - <b>11</b>, નીચે - <b>10</b>", "રેત જાળી: <b>5</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ પાંચ રાખો", "કટર સાડા આઠ રાખો", "ચારણા બે ની જાળી માં ઉપર દસ અને નીચે નવ રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર અગિયાર, વચ્ચે દસ અને નીચે નવ રાખો", "સુપડી જાળી માં ઉપર અગિયાર અને નીચે દસ રાખો", "રેત જાળી પાંચ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "चना (देशी)",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>5</b>", "कटर: <b>8.5</b>", "छलना 2 जाली: ऊपर - <b>10</b>, नीचे - <b>9</b>", "छलना 3 जाली: ऊपर - <b>11</b>, बीच में - <b>10</b>, नीचे - <b>9</b>", "सुपड़ी जाली: ऊपर - <b>11</b>, नीचे - <b>10</b>", "रेत जाली: <b>5</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: ["वी बेल्ट पांच रखें", "कटर साढ़े आठ रखें", "छलना दो की जाली में ऊपर दस और नीचे नौ रखें", "छलना तीन की जाली में ऊपर ग्यारह, बीच में दस और नीचे नौ रखें", "सुपड़ी जाली में ऊपर ग्यारह और नीचे दस रखें", "रेत जाली पांच रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Chickpea (Desi)",
      settingsDisplay: ["V-Belt: <b>5</b>", "Cutter: <b>8.5</b>", "Sieve 2 Mesh: Upper - <b>10</b>, Lower - <b>9</b>", "Sieve 3 Mesh: Upper - <b>11</b>, Middle - <b>10</b>, Lower - <b>9</b>", "Winnowing Mesh: Upper - <b>11</b>, Lower - <b>10</b>", "Sand Mesh: <b>5</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at five", "Set the cutter at eight point five", "In sieve two mesh, keep upper at ten and lower at nine", "In sieve three mesh, keep upper at eleven, middle at ten, and lower at nine", "In winnowing mesh, keep upper at eleven and lower at ten", "Keep sand mesh at five", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  },
  lentil: {
    gu: {
      name: "ચણા (કાબુલી)",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>5</b>", "કટર: <b>9.5</b>", "ચારણા 2 જાળી: ઉપર - <b>12</b>, નીચે - <b>11</b>", "ચારણા 3 જાળી: ઉપર - <b>12</b>, વચ્ચે - <b>11</b>, નીચે - <b>10</b>", "સુપડી જાળી: ઉપર - <b>12</b>, નીચે - <b>11</b>", "રેત જાળી: <b>5</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ પાંચ રાખો", "કટર સાડા નવ રાખો", "ચારણા બે ની જાળી માં ઉપર બાર અને નીચે અગિયાર રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર બાર, વચ્ચે અગિયાર અને નીચે દસ રાખો", "સુપડી જાળી માં ઉપર બાર અને નીચે અગિયાર રાખો", "રેત જાળી પાંચ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "चना (काबुली)",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>5</b>", "कटर: <b>9.5</b>", "छलना 2 जाली: ऊपर - <b>12</b>, नीचे - <b>11</b>", "छलना 3 जाली: ऊपर - <b>12</b>, बीच में - <b>11</b>, नीचे - <b>10</b>", "सुपड़ी जाली: ऊपर - <b>12</b>, नीचे - <b>11</b>", "रेत जाली: <b>5</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: ["वी बेल्ट पांच रखें", "कटर साढ़े नौ रखें", "छलना दो की जाली में ऊपर बारह और नीचे ग्यारह रखें", "छलना तीन की जाली में ऊपर बारह, बीच में ग्यारह और नीचे दस रखें", "सुपड़ी जाली में ऊपर बारह और नीचे ग्यारह रखें", "रेत जाली पांच रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Chickpea (Kabuli)",
      settingsDisplay: ["V-Belt: <b>5</b>", "Cutter: <b>9.5</b>", "Sieve 2 Mesh: Upper - <b>12</b>, Lower - <b>11</b>", "Sieve 3 Mesh: Upper - <b>12</b>, Middle - <b>11</b>, Lower - <b>10</b>", "Winnowing Mesh: Upper - <b>12</b>, Lower - <b>11</b>", "Sand Mesh: <b>5</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at five", "Set the cutter at nine point five", "In sieve two mesh, keep upper at twelve and lower at eleven", "In sieve three mesh, keep upper at twelve, middle at eleven, and lower at ten", "In winnowing mesh, keep upper at twelve and lower at eleven", "Keep sand mesh at five", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  },
  soyabean: {
    gu: {
      name: "સોયાબીન",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>5</b>", "કટર: <b>8.5</b>", "ચારણા 2 જાળી: ઉપર - <b>10</b>, નીચે - <b>9</b>", "ચારણા 3 જાળી: ઉપર - <b>11</b>, વચ્ચે - <b>10</b>, નીચે - <b>9</b>", "સુપડી જાળી: ઉપર - <b>11</b>, નીચે - <b>10</b>", "રેત જાળી: <b>5</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ પાંચ રાખો", "કટર સાડા આઠ રાખો", "ચારણા બે ની જાળી માં ઉપર દસ અને નીચે નવ રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર અગિયાર, વચ્ચે દસ અને નીચે નવ રાખો", "સુપડી જાળી માં ઉપર અગિયાર અને નીચે દસ રાખો", "રેત જાળી પાંચ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "सोयाबीन",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>5</b>", "कटर: <b>8.5</b>", "छलना 2 जाली: ऊपर - <b>10</b>, नीचे - <b>9</b>", "छलना 3 जाली: ऊपर - <b>11</b>, बीच में - <b>10</b>, नीचे - <b>9</b>", "सुपड़ी जाली: ऊपर - <b>11</b>, नीचे - <b>10</b>", "रेत जाली: <b>5</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: ["वी बेल्ट पांच रखें", "कटर साढ़े आठ रखें", "छलना दो की जाली में ऊपर दस और नीचे नौ रखें", "छलना तीन की जाली में ऊपर ग्यारह, बीच में दस और नीचे नौ रखें", "सुपड़ी जाली में ऊपर ग्यारह और नीचे दस रखें", "रेत जाली पांच रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Soyabean",
      settingsDisplay: ["V-Belt: <b>5</b>", "Cutter: <b>8.5</b>", "Sieve 2 Mesh: Upper - <b>10</b>, Lower - <b>9</b>", "Sieve 3 Mesh: Upper - <b>11</b>, Middle - <b>10</b>, Lower - <b>9</b>", "Winnowing Mesh: Upper - <b>11</b>, Lower - <b>10</b>", "Sand Mesh: <b>5</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at five", "Set the cutter at eight point five", "In sieve two mesh, keep upper at ten and lower at nine", "In sieve three mesh, keep upper at eleven, middle at ten, and lower at nine", "In winnowing mesh, keep upper at eleven and lower at ten", "Keep sand mesh at five", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  },
  vaal: {
    gu: {
      name: "વાલ",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>5</b>", "કટર: <b>9.5</b>", "ચારણા 2 જાળી: ઉપર - <b>12</b>, નીચે - <b>11</b>", "ચારણા 3 જાળી: ઉપર - <b>12</b>, વચ્ચે - <b>11</b>, નીચે - <b>10</b>", "સુપડી જાળી: ઉપર - <b>12</b>, નીચે - <b>11</b>", "રેત જાળી: <b>5</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ પાંચ રાખો", "કટર સાડા નવ રાખો", "ચારણા બે ની જાળી માં ઉપર બાર અને નીચે અગિયાર રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર બાર, વચ્ચે અગિયાર અને નીચે દસ રાખો", "સુપડી જાળી માં ઉપર બાર અને નીચે અગિયાર રાખો", "રેત જાળી પાંચ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "वाल",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>5</b>", "कटर: <b>9.5</b>", "छलना 2 जाली: ऊपर - <b>12</b>, नीचे - <b>11</b>", "छलना 3 जाली: ऊपर - <b>12</b>, बीच में - <b>11</b>, नीचे - <b>10</b>", "सुपड़ी जाली: ऊपर - <b>12</b>, नीचे - <b>11</b>", "रेत जाली: <b>5</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊપર</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: ["वी बेल्ट पांच रखें", "कटर साढ़े नौ रखें", "छलना दो की जाली में ऊपर बारह और नीचे ग्यारह रखें", "छलना तीन की जाली में ऊपर बारह, बीच में ग्यारह और नीचे दस रखें", "सुपड़ी जाली में ऊपर बारह और नीचे ग्यारह रखें", "रेत जाली पांच रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Hyacinth Bean",
      settingsDisplay: ["V-Belt: <b>5</b>", "Cutter: <b>9.5</b>", "Sieve 2 Mesh: Upper - <b>12</b>, Lower - <b>11</b>", "Sieve 3 Mesh: Upper - <b>12</b>, Middle - <b>11</b>, Lower - <b>10</b>", "Winnowing Mesh: Upper - <b>12</b>, Lower - <b>11</b>", "Sand Mesh: <b>5</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at five", "Set the cutter at nine point five", "In sieve two mesh, keep upper at twelve and lower at eleven", "In sieve three mesh, keep upper at twelve, middle at eleven, and lower at ten", "In winnowing mesh, keep upper at twelve and lower at eleven", "Keep sand mesh at five", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  },
  coriander: {
    gu: {
      name: "ધાણા",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>5</b>", "કટર: <b>8.5</b>", "ચારણા 2 જાળી: ઉપર - <b>8</b>, નીચે - <b>7</b>", "ચારણા 3 જાળી: ઉપર - <b>9</b>, વચ્ચે - <b>8</b>, નીચે - <b>7</b>", "સુપડી જાળી: ઉપર - <b>8</b>, નીચે - <b>7</b>", "રેત જાળી: <b>3</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>10</b>"],
      settingsSpeech: ["વી બેલ્ટ પાંચ રાખો", "કટર સાડા આઠ રાખો", "ચારણા બે ની જાળી માં ઉપર આઠ અને નીચે સાત રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર નવ, વચ્ચે આઠ અને નીચે સાત રાખો", "સુપડી જાળી માં ઉપર આઠ અને નીચે સાત રાખો", "રેત જાળી ત્રણ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ દસ રાખો"]
    },
    hi: {
      name: "धनिया",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>5</b>", "कटर: <b>8.5</b>", "छलना 2 जाली: ऊपर - <b>8</b>, नीचे - <b>7</b>", "छलना 3 जाली: ऊपर - <b>9</b>, बीच में - <b>8</b>, नीचे - <b>7</b>", "सुपड़ी जाली: ऊपर - <b>8</b>, नीचे - <b>7</b>", "रेत जाली: <b>3</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>10</b>"],
      settingsSpeech: ["वी बेल्ट पांच रखें", "कटर साढ़े आठ रखें", "छलना दो की जाली में ऊपर आठ और नीचे सात रखें", "छलना तीन की जाली में ऊपर नौ, बीच में आठ और नीचे सात रखें", "सुपड़ी जाली में ऊपर आठ और नीचे सात रखें", "रेत जाली तीन रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस दस रखें"]
    },
    en: {
      name: "Coriander",
      settingsDisplay: ["V-Belt: <b>5</b>", "Cutter: <b>8.5</b>", "Sieve 2 Mesh: Upper - <b>8</b>, Lower - <b>7</b>", "Sieve 3 Mesh: Upper - <b>9</b>, Middle - <b>8</b>, Lower - <b>7</b>", "Winnowing Mesh: Upper - <b>8</b>, Lower - <b>7</b>", "Sand Mesh: <b>3</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>10</b>"],
      settingsSpeech: ["Keep the V belt at five", "Set the cutter at eight point five", "In sieve two mesh, keep upper at eight and lower at seven", "In sieve three mesh, keep upper at nine, middle at eight, and lower at seven", "In winnowing mesh, keep upper at eight and lower at seven", "Keep sand mesh at three", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at ten"]
    }
  },
  castor_small: {
    gu: {
      name: "એરંડા (નાના)",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>5</b>", "કટર: <b>7</b>", "ચારણા 2 જાળી: ઉપર - <b>11</b>, નીચે - <b>9</b>", "ચારણા 3 જાળી: ઉપર - <b>11</b>, વચ્ચે - <b>10</b>, નીચે - <b>9</b>", "સુપડી જાળી: ઉપર - <b>11</b>, નીચે - <b>10</b>", "રેત જાળી: <b>5</b>", "હવાનું હૅન્ડલ: આગળનું - <b>ઉપર</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>10</b>"],
      settingsSpeech: ["વી બેલ્ટ પાંચ રાખો", "કટર સાત રાખો", "ચારણા બે ની જાળી માં ઉપર અગિયાર અને નીચે નવ રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર અગિયાર, વચ્ચે દસ અને નીચે નવ રાખો", "સુપડી જાળી માં ઉપર અગિયાર અને નીચે દસ રાખો", "રેત જાળી પાંચ રાખો", "હવાનું હેન્ડલ માં આગળનું ઉપર અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ દસ રાખો"]
    },
    hi: {
      name: "अरंडी (छोटी)",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>5</b>", "कटर: <b>7</b>", "छलना 2 जाली: ऊपर - <b>11</b>, नीचे - <b>9</b>", "छलना 3 जाली: ऊपर - <b>11</b>, बीच में - <b>10</b>, नीचे - <b>9</b>", "सुपड़ी जाली: ऊपर - <b>11</b>, नीचे - <b>10</b>", "रेत जाली: <b>5</b>", "हवा का हैंडल: आगे का - <b>ऊपर</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>10</b>"],
      settingsSpeech: ["वी बेल्ट पांच रखें", "कटर सात रखें", "छलना दो की जाली में ऊपर ग्यारह और नीचे नौ रखें", "छलना तीन की जाली में ऊपर ग्यारह, बीच में दस और नीचे नौ रखें", "सुपड़ी जाली में ऊपर ग्यारह और नीचे दस रखें", "रेत जाली पांच रखें", "हवा के हैंडल में आगे वाला ऊपर और पीछे वाला भी ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस दस रखें"]
    },
    en: {
      name: "Castor (Small)",
      settingsDisplay: ["V-Belt: <b>5</b>", "Cutter: <b>7</b>", "Sieve 2 Mesh: Upper - <b>11</b>, Lower - <b>9</b>", "Sieve 3 Mesh: Upper - <b>11</b>, Middle - <b>10</b>, Lower - <b>9</b>", "Winnowing Mesh: Upper - <b>11</b>, Lower - <b>10</b>", "Sand Mesh: <b>5</b>", "Air Handle: Front - <b>Up</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>10</b>"],
      settingsSpeech: ["Keep the V belt at five", "Set the cutter at seven", "In sieve two mesh, keep upper at eleven and lower at nine", "In sieve three mesh, keep upper at eleven, middle at ten, and lower at nine", "In winnowing mesh, keep upper at eleven and lower at ten", "Keep sand mesh at five", "Set both front and rear air handles to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at ten"]
    }
  },
  castor_large: {
    gu: {
      name: "એરંડા (મોટા)",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>5</b>", "કટર: <b>7.5</b>", "ચારણા 2 જાળી: ઉપર - <b>11</b>, નીચે - <b>10</b>", "ચારણા 3 જાળી: ઉપર - <b>12</b>, વચ્ચે - <b>11</b>, નીચે - <b>10</b>", "સુપડી જાળી: ઉપર - <b>12</b>, નીચે - <b>11</b>", "રેત જાળી: <b>5</b>", "હવાનું હૅન્ડલ: આગળનું - <b>ઉપર</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>10</b>"],
      settingsSpeech: ["વી બેલ્ટ પાંચ રાખો", "કટર સાડા સાત રાખો", "ચારણા બે ની જાળી માં ઉપર અગિયાર અને નીચે દસ રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર બાર, વચ્ચે અગિયાર અને નીચે દસ રાખો", "સુપડી જાળી માં ઉપર બાર અને નીચે અગિયાર રાખો", "રેત જાળી પાંચ રાખો", "હવાનું હેન્ડલ માં આગળનું ઉપર અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ દસ રાખો"]
    },
    hi: {
      name: "अरंडी (बड़ी)",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>5</b>", "कटर: <b>7.5</b>", "छलना 2 जाली: ऊपर - <b>11</b>, नीचे - <b>10</b>", "छलना 3 जाली: ऊपर - <b>12</b>, बीच में - <b>11</b>, नीचे - <b>10</b>", "सुपड़ी जाली: ऊपर - <b>12</b>, नीचे - <b>11</b>", "रेत जाली: <b>5</b>", "हवा का हैंडल: आगे का - <b>ऊपर</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>10</b>"],
      settingsSpeech: ["वी बेल्ट पांच रखें", "कटर साढ़े सात रखें", "छलना दो की जाली में ऊपर ग्यारह और नीचे दस रखें", "छलना तीन की जाली में ऊपर बारह, बीच में ग्यारह और नीचे दस रखें", "सुपड़ी जाली में ऊपर बारह और नीचे ग्यारह रखें", "रेत जाली पांच रखें", "हवा के हैंडल में आगे वाला ऊपर और पीछे वाला भी ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस दस रखें"]
    },
    en: {
      name: "Castor (Large)",
      settingsDisplay: ["V-Belt: <b>5</b>", "Cutter: <b>7.5</b>", "Sieve 2 Mesh: Upper - <b>11</b>, Lower - <b>10</b>", "Sieve 3 Mesh: Upper - <b>12</b>, Middle - <b>11</b>, Lower - <b>10</b>", "Winnowing Mesh: Upper - <b>12</b>, Lower - <b>11</b>", "Sand Mesh: <b>5</b>", "Air Handle: Front - <b>Up</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>10</b>"],
      settingsSpeech: ["Keep the V belt at five", "Set the cutter at seven point five", "In sieve two mesh, keep upper at eleven and lower at ten", "In sieve three mesh, keep upper at twelve, middle at eleven, and lower at ten", "In winnowing mesh, keep upper at twelve and lower at eleven", "Keep sand mesh at five", "Set both front and rear air handles to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at ten"]
    }
  },
  maize: {
    gu: {
      name: "મકાઈ",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>5/3</b>", "કટર: <b>32</b>", "ચારણા 2 જાળી: ઉપર - <b>11</b>, નીચે - <b>10</b>", "ચારણા 3 જાળી: ઉપર - <b>12</b>, વચ્ચે - <b>11</b>, નીચે - <b>10</b>", "સુપડી જાળી: ઉપર - <b>12</b>, નીચે - <b>11</b>", "રેત જાળી: <b>5</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>10/12</b>"],
      settingsSpeech: ["વી બેલ્ટ પાંચ અથવા ત્રણ રાખો", "કટર બત્રીસ રાખો", "ચારણા બે ની જાળી માં ઉપર અગિયાર અને નીચે દસ રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર બાર, વચ્ચે અગિયાર અને નીચે દસ રાખો", "સુપડી જાળી માં ઉપર બાર અને નીચે અગિયાર રાખો", "રેત જાળી પાંચ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ દસ અથવા બાર રાખો"]
    },
    hi: {
      name: "मक्का",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>5/3</b>", "कटर: <b>32</b>", "छलना 2 जाली: ऊपर - <b>11</b>, नीचे - <b>10</b>", "छलना 3 जाली: ऊपर - <b>12</b>, बीच में - <b>11</b>, नीचे - <b>10</b>", "सुपड़ी जाली: ऊपर - <b>12</b>, नीचे - <b>11</b>", "रेत जाली: <b>5</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>10/12</b>"],
      settingsSpeech: ["वी बेल्ट पांच या तीन रखें", "कटर बत्तीस रखें", "छलना दो की जाली में ऊपर ग्यारह और नीचे दस रखें", "छलना तीन की जाली में ऊपर बारह, बीच में ग्यारह और नीचे दस रखें", "सुपड़ी जाली में ऊपर बारह और नीचे ग्यारह रखें", "रेत जाली पांच रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस दस या बारह रखें"]
    },
    en: {
      name: "Maize",
      settingsDisplay: ["V-Belt: <b>5/3</b>", "Cutter: <b>32</b>", "Sieve 2 Mesh: Upper - <b>11</b>, Lower - <b>10</b>", "Sieve 3 Mesh: Upper - <b>12</b>, Middle - <b>11</b>, Lower - <b>10</b>", "Winnowing Mesh: Upper - <b>12</b>, Lower - <b>11</b>", "Sand Mesh: <b>5</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>10/12</b>"],
      settingsSpeech: ["Set the V belt at five or three", "Set the cutter at thirty two", "In sieve two mesh, keep upper at eleven and lower at ten", "In sieve three mesh, keep upper at twelve, middle at eleven, and lower at ten", "In winnowing mesh, keep upper at twelve and lower at eleven", "Keep sand mesh at five", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at ten or twelve"]
    }
  },
  paddy: {
    gu: {
      name: "ડાંગર",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>5</b>", "કટર: <b>7.5</b>", "ચારણા 2 જાળી: ઉપર - <b>8</b>, નીચે - <b>7</b>", "ચારણા 3 જાળી: ઉપર - <b>9</b>, વચ્ચે - <b>8</b>, નીચે - <b>7</b>", "સુપડી જાળી: ઉપર - <b>9</b>, નીચે - <b>8</b>", "રેત જાળી: <b>1.6</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ પાંચ રાખો", "કટર સાડા સાત રાખો", "ચારણા બે ની જાળી માં ઉપર આઠ અને નીચે સાત રાખો", "ચારણા ત્રણ ની જાળી માં ઉપર નવ, વચ્ચે આઠ અને નીચે સાત રાખો", "સુપડી જાળી માં ઉપર નવ અને નીચે આઠ રાખો", "રેત જાળી એક દશાંશ છ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "डांगर",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>5</b>", "कटर: <b>7.5</b>", "छलना 2 जाली: ऊपर - <b>8</b>, नीचे - <b>7</b>", "छलना 3 जाली: ऊपर - <b>9</b>, बीच में - <b>8</b>, नीचे - <b>7</b>", "सुपड़ी जाલી: ઉપર - <b>9</b>, નીચે - <b>8</b>", "રેત જાળી: <b>1.6</b>", "હવા કા હેન્ડલ: આગે કા - <b>બીચ મેં</b>, પીછે કા - <b>ઉપર</b>", "ચૈમ્બર (કોઠી) કે પડદે: સાઇડ કા - <b>નીચે</b>, પીછે કા - <b>બીચ મેં</b>", "છલને કી ચાલ: <b>લંબી</b>", "ટ્રેક્ટર કા રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ પાંચ રખેં", "કટર સાઢે સાત રખેં", "છલના દો કી જાલી મેં ઉપર આઠ ઔર નીચે સાત રખેં", "છલના તીન કી જાલી મેં ઉપર નૌ, બીચ મેં આઠ ઔર નીચે સાત રખેં", "સુપડી જાલી મેં ઉપર નૌ ઔર નીચે આઠ રખેં", "રેત જાલી એક દશમલવ છ રખેં", "હવા કે હેન્ડલ મેં આગે વાલા બીચ મેં ઔર પીછે વાલા ઉપર રખેં", "ચૈમ્બર કે પર્દોં મેં સાઈડ વાલા નીચે ઔર પીછે વાલા બીચ મેં રખેં", "છલને કી ચાલ લંબી રખેં", "ટ્રેક્ટર કા રેસ બાર રખેં"]
    },
    en: {
      name: "Paddy",
      settingsDisplay: ["V-Belt: <b>5</b>", "Cutter: <b>7.5</b>", "Sieve 2 Mesh: Upper - <b>8</b>, Lower - <b>7</b>", "Sieve 3 Mesh: Upper - <b>9</b>, Middle - <b>8</b>, Lower - <b>7</b>", "Winnowing Mesh: Upper - <b>9</b>, Lower - <b>8</b>", "Sand Mesh: <b>1.6</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at five", "Set the cutter at seven point five", "In sieve two mesh, keep upper at eight and lower at seven", "In sieve three mesh, keep upper at nine, middle at eight, and lower at seven", "In winnowing mesh, keep upper at nine and lower at eight", "Keep sand mesh at one point six", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  },
  groundnut: {
    gu: {
      name: "મગફળી",
      settingsDisplay: ["વી બેલ્ટ (પટ્ટા): <b>5</b>", "કટર: <b>32</b>", "ચારણા 2 જાળી: ઉપર - <b>22</b>, નીચે - <b>18</b>", "સુપડી જાળી: ઉપર - <b>22</b>, નીચે - <b>18</b>", "રેત જાળી: <b>8</b>", "હવાનું હૅન્ડલ: આગળનું - <b>વચ્ચે</b>, પાછળનું - <b>ઉપર</b>", "ચેમ્બર (કોઠી) પડદા: સાઇડના - <b>નીચા</b>, પાછળનો - <b>મધ્યમ</b>", "ચારણાની ચાલ: <b>લાંબી</b>", "ટ્રેક્ટરનો રેસ: <b>12</b>"],
      settingsSpeech: ["વી બેલ્ટ પાંચ રાખો", "કટર બત્રીસ રાખો", "ચારણા બે ની જાળી માં ઉપર બાવીસ અને નીચે અઢાર રાખો", "સુપડી જાળી માં ઉપર બાવીસ અને નીચે અઢાર રાખો", "રેત જાળી આઠ રાખો", "હવાનું હેન્ડલ માં આગળનું વચ્ચે અને પાછળનું ઉપર રાખો", "ચેમ્બર ના પડદા માં સાઈડના નીચા અને પાછળનો મધ્યમ રાખો", "ચારણાની ચાલ લાંબી રાખો", "ટ્રેક્ટરનો રેસ બાર રાખો"]
    },
    hi: {
      name: "मूंगफली",
      settingsDisplay: ["वी-बेल्ट (पट्टा): <b>5</b>", "कटर: <b>32</b>", "छलना 2 जाली: ऊपर - <b>22</b>, नीचे - <b>18</b>", "सुपड़ी जाली: ऊपर - <b>22</b>, नीचे - <b>18</b>", "रेत जाली: <b>8</b>", "हवा का हैंडल: आगे का - <b>बीच में</b>, पीछे का - <b>ऊपर</b>", "चैम्बर (कोठी) के पड़दे: साइड का - <b>नीचे</b>, पीछे का - <b>बीच में</b>", "छलने की चाल: <b>लंबी</b>", "ट्रैक्टर का रेस: <b>12</b>"],
      settingsSpeech: ["वी बेल्ट पांच रखें", "कटर बत्तीस रखें", "छलना दो की जाली में ऊपर बाईस और नीचे अठारह रखें", "सुपड़ी जाली में ऊपर बाईस और नीचे अठारह रखें", "रेत जाली आठ रखें", "हवा के हैंडल में आगे वाला बीच में और पीछे वाला ऊपर रखें", "चैम्बर के पर्दों में साइड वाला नीचे और पीछे वाला बीच में रखें", "छलने की चाल लंबी रखें", "ट्रैक्टर का रेस बारह रखें"]
    },
    en: {
      name: "Groundnut",
      settingsDisplay: ["V-Belt: <b>5</b>", "Cutter: <b>32</b>", "Sieve 2 Mesh: Upper - <b>22</b>, Lower - <b>18</b>", "Winnowing Mesh: Upper - <b>22</b>, Lower - <b>18</b>", "Sand Mesh: <b>8</b>", "Air Handle: Front - <b>Middle</b>, Rear - <b>Up</b>", "Chamber Curtain: Side - <b>Down</b>, Rear - <b>Medium</b>", "Sieve Movement: <b>Long</b>", "Tractor Race: <b>12</b>"],
      settingsSpeech: ["Keep the V belt at five", "Set the cutter at thirty two", "In sieve two mesh, keep upper at twenty two and lower at eighteen", "In winnowing mesh, keep upper at twenty two and lower at eighteen", "Keep sand mesh at eight", "Set air handle front to middle and rear to up", "Set chamber curtains side down and rear to medium", "Keep sieve movement long", "Keep tractor RPM at twelve"]
    }
  }

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


