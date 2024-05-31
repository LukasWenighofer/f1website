var frage;


var frage1 = [{
    "frag": "Welcher Fahrer war in den 1970er Jahren sehr berühmt.",
    "antwort": "Niki Lauda"
}, {"frag": "Welche Fahrer haben die meisten Meistertitel.", "antwort": "Hamilton und Schumacher"},
    {
        "frag": "Wann gewann Michael Schumacher seinen ersten Titel",
        "antwort": "1994"
    }, {
        "frag": "Mit wie vielen Jahren hatte Max Verstappen sein F1-Debut.",
        "antwort": "17"
    }, {"frag": "Wer war der erste F1-Weltmeister.", "antwort": "Farina"},
    {
        "frag": "Welche Fahrer hatten über mehrere Jahre spannende Battle nachdem ihr Team 2014 dominant wurde.",
        "antwort": "Hamilton und Rosberg"
    }, {"frag": "Größter Abstand(erster-zweiter)", "antwort": "5min 12s"},
    {
        "frag": "Welcher Fahrer konnte fünf WM-Titel in Folge holen",
        "antwort": "Schumacher"
    }, {"frag": "Welcher talentierter Fahrer verlor 1994 sein Leben beim San Marino GP.", "antwort": "Senna"},
    {"frag": "Welcher Fahrer dominierte die 1950er Jahre.", "antwort": "Fangio"}];


var falsch1 = [{"eins": "Niki Lauda", "zwei": "James Hunt", "drei": "Clay Regazzioni", "vier": "Emerson Fittipaldi"},
    {
        "eins": "Vettel und Alonso",
        "zwei": "Vettel und Hamilton",
        "drei": "Hamilton und Schumacher",
        "vier": "Schumacher und Verstappen"
    },
    {"eins": "1993", "zwei": "1994", "drei": "1995", "vier": "2001"}, {
        "eins": "16",
        "zwei": "20",
        "drei": "18",
        "vier": "17"
    }, {"eins": "Farina", "zwei": "Fangio", "drei": "Ascari", "vier": "Rindt"},
    {
        "eins": "Vettel und Hamilton",
        "zwei": "Vettel und Rosberg",
        "drei": "Raikönen und Vettel",
        "vier": "Hamilton und Rosberg"
    },
    {"eins": "5min 12s", "zwei": "10s", "drei": "45s", "vier": "2 min 34s"}, {
        "eins": "Hamilton",
        "zwei": "Vettel",
        "drei": "Fangio",
        "vier": "Schumacher"
    }, {"eins": "Hill", "zwei": "Senna", "drei": "Mansell", "vier": "Prost"},
    {"eins": "Fangio", "zwei": "Farina", "drei": "Ascari", "vier": "Schumacher"}];


var frage2 = [{"frag": "Was ist DRS.", "antwort": "Drag Reduction System"}, {
    "frag": "Was ist ERS.",
    "antwort": "Energy Recovery System"
}, {"frag": "Wann wurden V6 Motoren eingeführt", "antwort": "2014"},
    {"frag": "Wann wurden V10 Motoren Pflicht", "antwort": "1995"},
    {"frag": "Welche Technologie wurde 2009 eingeführt.", "antwort": "KERS"}, {
        "frag": "Wann wurden Turbos gebannt",
        "antwort": "1989"
    }, {
        "frag": "Welche Technologie wurde in der Vergangenheit verboten, 2022 aber wieder eingeführt.",
        "antwort": "Ground Effect"
    },
    {
        "frag": "Wann wird die nächste Änderung in Bezug auf die Autos durchgeführt.",
        "antwort": "2026"
    }, {"frag": "Wann wurden V10 Motoren mit V8 Motoren ersetzt.", "antwort": "2006"},
    {
        "frag": "Wie kann die Batterie in aktuellen Formel-1 Boliden aufgeladen werden.",
        "antwort": "Abgase und Generator"
    }];


var falsch2 = [{
    "eins": "Drag Reduction System",
    "zwei": "Das Renn System",
    "drei": "Different Racing System",
    "vier": "Dynamic Race System"
},
    {
        "eins": "Ergonomic Reduced Services",
        "zwei": "End Race System",
        "drei": "Extremes Renn System",
        "vier": "Energy Recovery System"
    },
    {"eins": "2010", "zwei": "2014", "drei": "2018", "vier": "2013"}, {
        "eins": "1995",
        "zwei": "1989",
        "drei": "1992",
        "vier": "1999"
    }, {"eins": "ERS", "zwei": "KERS", "drei": "DRS", "vier": "F-Duct"}, {
        "eins": "1990",
        "zwei": "2000",
        "drei": "1989",
        "vier": "1970"
    },
    {"eins": "Turbos", "zwei": "Ground Effect", "drei": "Traktionskontrolle", "vier": "Launchcontrol"}, {
        "eins": "2026",
        "zwei": "2025",
        "drei": "2030",
        "vier": "2027"
    }, {"eins": "2010", "zwei": "2008", "drei": "2003", "vier": "2006"},
    {
        "eins": "Abgase und Generator",
        "zwei": "Induktive Leiterbahnen auf der Strecke",
        "drei": "Lichtmaschine",
        "vier": "Solarstrom"
    }];


var frage3 = [{
    "frag": "Wie heißt die Rennklasse, welche die legendären 24h Renne veranstaltet",
    "antwort": "WEC"
}, {"frag": "Welche Klassen treten bei den 24h Renne an.", "antwort": "LMP2, Hypercar, LMGT3"},
    {
        "frag": "Welche ist die beliebteste Rennklasse in Amerika.",
        "antwort": "Nascar"
    }, {
        "frag": "Wie heißt die beste Motorradrennklassen.",
        "antwort": "MotoGP"
    }, {"frag": "Welches 24h Renne ist das bekannteste.", "antwort": "Le Mans"},
    {
        "frag": "Was ist die Triple Crown im Motorsport",
        "antwort": "Wenn man Monaco(F1), Le Mans(24h) und Indy500 gewinnt."
    }, {"frag": "Wer war der einzige Fahrer welcher die TripleCrown errungen hat.", "antwort": "Graham Hill"},
    {
        "frag": "Welche Rennserie besitzt den größten Topspeed.",
        "antwort": "Indycar"
    }, {"frag": "Wie viel Kubikcentimeter Hubraum besitzen aktuelle MotoGP Motorräder?", "antwort": "1000ccm"},
    {"frag": "Wie viel PS besitzen aktuelle Hypercars welche in Le mans fahren?", "antwort": "670 PS"}];


var falsch3 = [{"eins": "F1", "zwei": "WEC", "drei": "GT3", "vier": "Nascar"}, {
    "eins": "F1, F2, F3",
    "zwei": "GT2, GT3, GT4",
    "drei": "LMP2, Hypercar, LMGT3",
    "vier": "LMP1, Hypercar, GT3"
},
    {"eins": "Nascar", "zwei": "Indycar", "drei": "F1", "vier": "DTM"}, {
        "eins": "Moto2",
        "zwei": "Supermoto",
        "drei": "Moto3",
        "vier": "MotoGP"
    }, {"eins": "Le Mans", "zwei": "Nordschleife", "drei": "Bahrain", "vier": "Indy 500"},
    {
        "eins": "Wenn man 10 Meistertitel in beliebigen Rennklassen besitzt",
        "zwei": "Wenn man eine Gewisse Rundenzeit fährt",
        "drei": "Wenn man drei Fahrer gleichzeitig überholt",
        "vier": "Wenn man Monaco(F1), Le Mans(24h) und Indy500 gewinnt."
    },
    {"eins": "Graham Hill", "zwei": "Jack Brabham", "drei": "Fernando Alonso", "vier": "Lewis Hamilton"}, {
        "eins": "F1",
        "zwei": "Indycar",
        "drei": "Nascar",
        "vier": "Hypercar"
    }, {"eins": "125ccm", "zwei": "500ccm", "drei": "800ccm", "vier": "1000ccm"},
    {"eins": "520 PS", "zwei": "670 PS", "drei": "800 PS", "vier": "1850 PS"}];


function quiz() {
    var frag;
    var richtig = 0;
    var grun = 0;
    frag = window.prompt("Welches Thema wollen Sie haben. (1): Formel-1 historisch  (2): Formel-1 technisch  (3): Motorsport generell");

    if (frag == '1') {
        for (var i = 0; i < 10; i++) {
            var k;
            k = parseInt(window.prompt(i + 1 + "/10  " + frage1[i].frag + "\n1)" + falsch1[i].eins + "\n2)" + falsch1[i].zwei + "\n3)" + falsch1[i].drei + "\n4)" + falsch1[i].vier));
            if (k == 1) {
                if (frage1[i].antwort == falsch1[i].eins) {
                    richtig++;
                }
            }
            if (k == 2) {
                if (frage1[i].antwort == falsch1[i].zwei) {
                    richtig++;
                }
            }
            if (k == 3) {
                if (frage1[i].antwort == falsch1[i].drei) {
                    richtig++;
                }
            }
            if (k == 4) {
                if (frage1[i].antwort == falsch1[i].vier) {
                    richtig++;
                }
            }
        }
        window.alert("Sie haben " + richtig + "/10 richtig");

    }
    if (frag == '2') {
        for (var i = 0; i < 10; i++) {
            var k;
            k = parseInt(window.prompt(i + 1 + "/10  " + frage2[i].frag + "\n1)" + falsch2[i].eins + "\n2)" + falsch2[i].zwei + "\n3)" + falsch2[i].drei + "\n4)" + falsch2[i].vier));
            if (k == 1) {
                if (frage2[i].antwort == falsch2[i].eins) {
                    richtig++;
                }
            }
            if (k == 2) {
                if (frage2[i].antwort == falsch2[i].zwei) {
                    richtig++;
                }
            }
            if (k == 3) {
                if (frage2[i].antwort == falsch2[i].drei) {
                    richtig++;
                }
            }
            if (k == 4) {
                if (frage2[i].antwort == falsch2[i].vier) {
                    richtig++;
                }
            }
        }
        window.alert("Sie haben " + richtig + "/10 richtig");

    }
    if (frag == '3') {
        for (var i = 0; i < 10; i++) {
            var k;
            k = parseInt(window.prompt(i + 1 + "/10  " + frage3[i].frag + "\n1)" + falsch3[i].eins + "\n2)" + falsch3[i].zwei + "\n3)" + falsch3[i].drei + "\n4)" + falsch3[i].vier));
            if (k == 1) {
                if (frage3[i].antwort == falsch3[i].eins) {
                    richtig++;
                }
            }
            if (k == 2) {
                if (frage3[i].antwort == falsch3[i].zwei) {
                    richtig++;
                }
            }
            if (k == 3) {
                if (frage3[i].antwort == falsch3[i].drei) {
                    richtig++;
                }
            }
            if (k == 4) {
                if (frage3[i].antwort == falsch3[i].vier) {
                    richtig++;
                }
            }
        }
        window.alert("Sie haben " + richtig + "/10 richtig");
    }
    grun = (richtig / 10) * 850;
    document.getElementById("pr").innerHTML = ` <br>
            <h1 style = "margin-top: 75px; margin-left: 50px; font-size: 35px;"> Ihr Ergebnis: ${richtig}/10</h1> 
            <div className="dia" style="width: 850px; background-color: blue; height: 150px;margin-left: 75px; margin-top: 100px;">
            </div> 
            <div id="dia2" style="width: ${grun}px; background-color: rgb(0,128,0); height: 150px;margin-left: 75px; margin-top: -150px;"> 
            <p style="margin: auto; text-align: center; vertical-align: middle; font-size: 90px">${(richtig/10)*100}%</p>
            </div> `;
}


