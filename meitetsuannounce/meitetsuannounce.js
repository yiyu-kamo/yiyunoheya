function main()
{
}

function setSoundParts1() {
    var id = "partsListSelect1";
    var selectElement = document.getElementById(id);

    if (selectElement) {
        var index = selectElement.selectedIndex;
        var addText = soundDataMuon[index][1];

        var textareaId = "inputTextarea";
        var text = document.getElementById(textareaId).value;

        if (text !== "" && text.slice(-1) !== "\n") {
            text += "\n";
        }

        text += addText;
        document.getElementById(textareaId).value = text;
    } else {
        console.error("Element with ID 'partsListSelect1' not found");
    }
}

function setSoundParts2() {
    var id = "partsListSelect2";
    var selectElement = document.getElementById(id);

    if (selectElement) {
        var index = selectElement.selectedIndex;
        var addText = soundDataChime[index][1];

        var textareaId = "inputTextarea";
        var text = document.getElementById(textareaId).value;

        if (text !== "" && text.slice(-1) !== "\n") {
            text += "\n";
        }

        text += addText;
        document.getElementById(textareaId).value = text;
    } else {
        console.error("Element with ID 'partsListSelect2' not found");
    }
}

function setSoundParts3() {
    var id = "partsListSelect3";
    var selectElement = document.getElementById(id);

    if (selectElement) {
        var index = selectElement.selectedIndex;
        var addText = soundDataJPN[index][1];

        var textareaId = "inputTextarea";
        var text = document.getElementById(textareaId).value;

        if (text !== "" && text.slice(-1) !== "\n") {
            text += "\n";
        }

        text += addText;
        document.getElementById(textareaId).value = text;
    } else {
        console.error("Element with ID 'partsListSelect3' not found");
    }
}

function setSoundParts4() {
    var id = "partsListSelect4";
    var selectElement = document.getElementById(id);

    if (selectElement) {
        var index = selectElement.selectedIndex;
        var addText = soundDataENG[index][1];

        var textareaId = "inputTextarea";
        var text = document.getElementById(textareaId).value;

        if (text !== "" && text.slice(-1) !== "\n") {
            text += "\n";
        }

        text += addText;
        document.getElementById(textareaId).value = text;
    } else {
        console.error("Element with ID 'partsListSelect4' not found");
    }
}

function setSoundParts5one() {
    var id = "partsListSelect5one";
    var selectElement = document.getElementById(id);

    if (selectElement) {
        var index = selectElement.selectedIndex;
        var addText = soundDataEkimeiJPN[index][1];

        var textareaId = "inputTextarea";
        var text = document.getElementById(textareaId).value;

        if (text !== "" && text.slice(-1) !== "\n") {
            text += "\n";
        }

        text += addText;
        document.getElementById(textareaId).value = text;
    } else {
        console.error("Element with ID 'partsListSelect5one' not found");
    }
}

function setSoundParts5two() {
    var id = "partsListSelect5two";
    var selectElement = document.getElementById(id);

    if (selectElement) {
        var index = selectElement.selectedIndex;
        var addText = soundDataEkimeiENG[index][1];

        var textareaId = "inputTextarea";
        var text = document.getElementById(textareaId).value;

        if (text !== "" && text.slice(-1) !== "\n") {
            text += "\n";
        }

        text += addText;
        document.getElementById(textareaId).value = text;
    } else {
        console.error("Element with ID 'partsListSelect5two' not found");
    }
}

function setSoundParts6() {
    var id = "partsListSelect6";
    var selectElement = document.getElementById(id);

    if (selectElement) {
        var index = selectElement.selectedIndex;
        var addText = soundDataEkimeiDesu[index][1];

        var textareaId = "inputTextarea";
        var text = document.getElementById(textareaId).value;

        if (text !== "" && text.slice(-1) !== "\n") {
            text += "\n";
        }

        text += addText;
        document.getElementById(textareaId).value = text;
    } else {
        console.error("Element with ID 'partsListSelect6' not found");
    }
}

function setSoundParts7() {
    var id = "partsListSelect7";
    var selectElement = document.getElementById(id);

    if (selectElement) {
        var index = selectElement.selectedIndex;
        var addText = soundDataEkimeiNi[index][1];

        var textareaId = "inputTextarea";
        var text = document.getElementById(textareaId).value;

        if (text !== "" && text.slice(-1) !== "\n") {
            text += "\n";
        }

        text += addText;
        document.getElementById(textareaId).value = text;
    } else {
        console.error("Element with ID 'partsListSelect7' not found");
    }
}

function setSoundParts8() {
    var id = "partsListSelect8";
    var selectElement = document.getElementById(id);

    if (selectElement) {
        var index = selectElement.selectedIndex;
        var addText = soundDataEkimeiWoDemasuto[index][1];

        var textareaId = "inputTextarea";
        var text = document.getElementById(textareaId).value;

        if (text !== "" && text.slice(-1) !== "\n") {
            text += "\n";
        }

        text += addText;
        document.getElementById(textareaId).value = text;
    } else {
        console.error("Element with ID 'partsListSelect8' not found");
    }
}

function setSoundParts9() {
    var id = "partsListSelect9";
    var selectElement = document.getElementById(id);

    if (selectElement) {
        var index = selectElement.selectedIndex;
        var addText = soundDataEkimeiYukiDesu[index][1];

        var textareaId = "inputTextarea";
        var text = document.getElementById(textareaId).value;

        if (text !== "" && text.slice(-1) !== "\n") {
            text += "\n";
        }

        text += addText;
        document.getElementById(textareaId).value = text;
    } else {
        console.error("Element with ID 'partsListSelect9' not found");
    }
}

function setSoundParts10one() {
    var id = "partsListSelect10one";
    var selectElement = document.getElementById(id);

    if (selectElement) {
        var index = selectElement.selectedIndex;
        var addText = soundDataNorikaeAnnaiJPN[index][1];

        var textareaId = "inputTextarea";
        var text = document.getElementById(textareaId).value;

        if (text !== "" && text.slice(-1) !== "\n") {
            text += "\n";
        }

        text += addText;
        document.getElementById(textareaId).value = text;
    } else {
        console.error("Element with ID 'partsListSelect10one' not found");
    }
}

function setSoundParts10two() {
    var id = "partsListSelect10two";
    var selectElement = document.getElementById(id);

    if (selectElement) {
        var index = selectElement.selectedIndex;
        var addText = soundDataNorikaeAnnaiENG[index][1];

        var textareaId = "inputTextarea";
        var text = document.getElementById(textareaId).value;

        if (text !== "" && text.slice(-1) !== "\n") {
            text += "\n";
        }

        text += addText;
        document.getElementById(textareaId).value = text;
    } else {
        console.error("Element with ID 'partsListSelect10two' not found");
    }
}

function setSoundParts11() {
    var id = "partsListSelect11";
    var selectElement = document.getElementById(id);

    if (selectElement) {
        var index = selectElement.selectedIndex;
        var addText = soundDataShubetsu[index][1];

        var textareaId = "inputTextarea";
        var text = document.getElementById(textareaId).value;

        if (text !== "" && text.slice(-1) !== "\n") {
            text += "\n";
        }

        text += addText;
        document.getElementById(textareaId).value = text;
    } else {
        console.error("Element with ID 'partsListSelect11' not found");
    }
}

function setSoundParts12() {
    var id = "partsListSelect12";
    var selectElement = document.getElementById(id);

    if (selectElement) {
        var index = selectElement.selectedIndex;
        var addText = soundDataTokubetsuSha[index][1];

        var textareaId = "inputTextarea";
        var text = document.getElementById(textareaId).value;

        if (text !== "" && text.slice(-1) !== "\n") {
            text += "\n";
        }

        text += addText;
        document.getElementById(textareaId).value = text;
    } else {
        console.error("Element with ID 'partsListSelect12' not found");
    }
}

function setSoundParts13() {
    var id = "partsListSelect13";
    var selectElement = document.getElementById(id);

    if (selectElement) {
        var index = selectElement.selectedIndex;
        var addText = soundDataTomarimasu[index][1];

        var textareaId = "inputTextarea";
        var text = document.getElementById(textareaId).value;

        if (text !== "" && text.slice(-1) !== "\n") {
            text += "\n";
        }

        text += addText;
        document.getElementById(textareaId).value = text;
    } else {
        console.error("Element with ID 'partsListSelect13' not found");
    }
}

function resetInput()
{
	var id = "inputTextarea";
	document.getElementById(id).value = "";
}

var inputTextSplit;

function checkInput() {
    var id = "inputTextarea";
    var inputText = document.getElementById(id).value;
    inputTextSplit = inputText.split("\n");

    var judgeFlag = true;
    var NGText = "";

    for (i = 0; i < inputTextSplit.length; i++) {
        var innerFlag = false;
        var textBuff = inputTextSplit[i];

        for (j = 0; j < soundDataMuon.length; j++) {
            if (textBuff === soundDataMuon[j][1]) {
                innerFlag = true;
                break;
            }
        }

        if (!innerFlag) {
            for (j = 0; j < soundDataChime.length; j++) {
                if (textBuff === soundDataChime[j][1]) {
                    innerFlag = true;
                    break;
                }
            }
        }

        if (!innerFlag) {
            for (j = 0; j < soundDataJPN.length; j++) {
                if (textBuff === soundDataJPN[j][1]) {
                    innerFlag = true;
                    break;
                }
            }
        }

        if (!innerFlag) {
            for (j = 0; j < soundDataENG.length; j++) {
                if (textBuff === soundDataENG[j][1]) {
                    innerFlag = true;
                    break;
                }
            }
        }

        if (!innerFlag) {
            for (j = 0; j < soundDataEkimeiJPN.length; j++) {
                if (textBuff === soundDataEkimeiJPN[j][1]) {
                    innerFlag = true;
                    break;
                }
            }
        }

        if (!innerFlag) {
            for (j = 0; j < soundDataEkimeiENG.length; j++) {
                if (textBuff === soundDataEkimeiENG[j][1]) {
                    innerFlag = true;
                    break;
                }
            }
        }

        if (!innerFlag) {
            for (j = 0; j < soundDataEkimeiDesu.length; j++) {
                if (textBuff === soundDataEkimeiDesu[j][1]) {
                    innerFlag = true;
                    break;
                }
            }
        }

        if (!innerFlag) {
            for (j = 0; j < soundDataEkimeiNi.length; j++) {
                if (textBuff === soundDataEkimeiNi[j][1]) {
                    innerFlag = true;
                    break;
                }
            }
        }

        if (!innerFlag) {
            for (j = 0; j < soundDataEkimeiWoDemasuto.length; j++) {
                if (textBuff === soundDataEkimeiWoDemasuto[j][1]) {
                    innerFlag = true;
                    break;
                }
            }
        }

        if (!innerFlag) {
            for (j = 0; j < soundDataEkimeiYukiDesu.length; j++) {
                if (textBuff === soundDataEkimeiYukiDesu[j][1]) {
                    innerFlag = true;
                    break;
                }
            }
        }

        if (!innerFlag) {
            for (j = 0; j < soundDataNorikaeAnnaiJPN.length; j++) {
                if (textBuff === soundDataNorikaeAnnaiJPN[j][1]) {
                    innerFlag = true;
                    break;
                }
            }
        }

        if (!innerFlag) {
            for (j = 0; j < soundDataNorikaeAnnaiENG.length; j++) {
                if (textBuff === soundDataNorikaeAnnaiENG[j][1]) {
                    innerFlag = true;
                    break;
                }
            }
        }

        if (!innerFlag) {
            for (j = 0; j < soundDataShubetsu.length; j++) {
                if (textBuff === soundDataShubetsu[j][1]) {
                    innerFlag = true;
                    break;
                }
            }
        }

        if (!innerFlag) {
            for (j = 0; j < soundDataTokubetsuSha.length; j++) {
                if (textBuff === soundDataTokubetsuSha[j][1]) {
                    innerFlag = true;
                    break;
                }
            }
        }

        if (!innerFlag) {
            for (j = 0; j < soundDataTomarimasu.length; j++) {
                if (textBuff === soundDataTomarimasu[j][1]) {
                    innerFlag = true;
                    break;
                }
            }
        }

        if (!innerFlag) {
            judgeFlag = false;
            NGText += "\n" + textBuff;
        }
    }

    if (judgeFlag) {
        console.log("All phrases recognized.");
    } else {
        alert("【エラー】以下の文節が認識できませんでした。登録済みの文節を使用してください。\n" + NGText);
        console.error("Unrecognized phrases: " + NGText);
        return;
    }

    soundStop();

    for (i = 0; i < preLoad; i++) {
        if (i >= inputTextSplit.length) break;

        var phrase = inputTextSplit[i];
        var fileName = getFileName(phrase);
        console.log("Loading sound file: " + fileName);

        loadSoundFile(fileName);
    }

    nowSoundNum = 0;
    setTimeout("soundStart()", 2000);
}

var preLoad = 5;

function getFileName(phrase) {
    console.log("getFileName called with phrase:", phrase);

    for (var j = 0; j < soundDataMuon.length; j++) {
        if (phrase === soundDataMuon[j][1]) {
            console.log("Found file in soundDataMuon:", soundDataMuon[j][0]);
            return soundDataMuon[j][0];
        }
    }

    for (var j = 0; j < soundDataChime.length; j++) {
        if (phrase === soundDataChime[j][1]) {
            console.log("Found file in soundDataChime:", soundDataChime[j][0]);
            return soundDataChime[j][0];
        }
    }

    for (var j = 0; j < soundDataJPN.length; j++) {
        if (phrase === soundDataJPN[j][1]) {
            console.log("Found file in soundDataJPN:", soundDataJPN[j][0]);
            return soundDataJPN[j][0];
        }
    }

    for (var j = 0; j < soundDataENG.length; j++) {
        if (phrase === soundDataENG[j][1]) {
            console.log("Found file in soundDataENG:", soundDataENG[j][0]);
            return soundDataENG[j][0];
        }
    }

    for (var j = 0; j < soundDataEkimeiJPN.length; j++) {
        if (phrase === soundDataEkimeiJPN[j][1]) {
            console.log("Found file in soundDataEkimeiJPN:", soundDataEkimeiJPN[j][0]);
            return soundDataEkimeiJPN[j][0];
        }
    }

    for (var j = 0; j < soundDataEkimeiENG.length; j++) {
        if (phrase === soundDataEkimeiENG[j][1]) {
            console.log("Found file in soundDataEkimeiENG:", soundDataEkimeiENG[j][0]);
            return soundDataEkimeiENG[j][0];
        }
    }

    for (var j = 0; j < soundDataEkimeiDesu.length; j++) {
        if (phrase === soundDataEkimeiDesu[j][1]) {
            console.log("Found file in soundDataEkimeiDesu:", soundDataEkimeiDesu[j][0]);
            return soundDataEkimeiDesu[j][0];
        }
    }

    for (var j = 0; j < soundDataEkimeiNi.length; j++) {
        if (phrase === soundDataEkimeiNi[j][1]) {
            console.log("Found file in soundDataEkimeiNi:", soundDataEkimeiNi[j][0]);
            return soundDataEkimeiNi[j][0];
        }
    }

    for (var j = 0; j < soundDataEkimeiWoDemasuto.length; j++) {
        if (phrase === soundDataEkimeiWoDemasuto[j][1]) {
            console.log("Found file in soundDataEkimeiWoDemasuto:", soundDataEkimeiWoDemasuto[j][0]);
            return soundDataEkimeiWoDemasuto[j][0];
        }
    }

    for (var j = 0; j < soundDataEkimeiYukiDesu.length; j++) {
        if (phrase === soundDataEkimeiYukiDesu[j][1]) {
            console.log("Found file in soundDataEkimeiYukiDesu:", soundDataEkimeiYukiDesu[j][0]);
            return soundDataEkimeiYukiDesu[j][0];
        }
    }

    for (var j = 0; j < soundDataNorikaeAnnaiJPN.length; j++) {
        if (phrase === soundDataNorikaeAnnaiJPN[j][1]) {
            console.log("Found file in soundDataNorikaeAnnaiJPN:", soundDataNorikaeAnnaiJPN[j][0]);
            return soundDataNorikaeAnnaiJPN[j][0];
        }
    }

    for (var j = 0; j < soundDataNorikaeAnnaiENG.length; j++) {
        if (phrase === soundDataNorikaeAnnaiENG[j][1]) {
            console.log("Found file in soundDataNorikaeAnnaiENG:", soundDataNorikaeAnnaiENG[j][0]);
            return soundDataNorikaeAnnaiENG[j][0];
        }
    }

    for (var j = 0; j < soundDataShubetsu.length; j++) {
        if (phrase === soundDataShubetsu[j][1]) {
            console.log("Found file in soundDataShubetsu:", soundDataShubetsu[j][0]);
            return soundDataShubetsu[j][0];
        }
    }

    for (var j = 0; j < soundDataTokubetsuSha.length; j++) {
        if (phrase === soundDataTokubetsuSha[j][1]) {
            console.log("Found file in soundDataTokubetsuSha:", soundDataTokubetsuSha[j][0]);
            return soundDataTokubetsuSha[j][0];
        }
    }

    for (var j = 0; j < soundDataTomarimasu.length; j++) {
        if (phrase === soundDataTomarimasu[j][1]) {
            console.log("Found file in soundDataTomarimasu:", soundDataTomarimasu[j][0]);
            return soundDataTomarimasu[j][0];
        }
    }

    console.error("Phrase not found in any soundData array:", phrase);
    return "sound/Muon/null-250.mp3"; // デフォルトのサウンドファイル
}

function loadSoundFile(fileName) {
    let audio = new Audio(fileName);

    if (isChimeFile(fileName)) {
        audio.volume = 0.2;
    } else {
        audio.volume = 1.0;
    }

    audio.load();
    return audio;
}

function isChimeFile(fileName) {
    for (let i = 0; i < soundDataChime.length; i++) {
        if (soundDataChime[i][0] === fileName) {
            return true;
        }
    }
    return false;
}

function soundStart() {
    var phrase = inputTextSplit[nowSoundNum];
    var fileName = getFileName(phrase);

    if(nowSoundNum == 0) {
        audio0 = loadSoundFile(fileName);
        audio0.play();
    } else if(nowSoundNum % 2 == 0) {
        audio0.play();
    } else {
        audio1.play();
    }

    if(nowSoundNum < inputTextSplit.length-1) {
        var phrase = inputTextSplit[nowSoundNum+1];
        var fileName = getFileName(phrase);

        if(nowSoundNum % 2 == 0) {
            audio1 = loadSoundFile(fileName);
            audio0.addEventListener('ended', nextSound, false);
        } else {
            audio0 = loadSoundFile(fileName);
            audio1.addEventListener('ended', nextSound, false);
        }
    }

    if(nowSoundNum+5 < inputTextSplit.length) {
        var phrase = inputTextSplit[nowSoundNum+5];
        var fileName = getFileName(phrase);

        loadSoundFile(fileName);
    }

    nowSoundNum++;
}

function setNextSound()
{
	var time = audio.duration*1000;
	setTimeout("soundStart()", time);
	log(time);
}

function nextSound(event)
{
	soundStart();
}

var event;



function soundStop() {
    if (typeof audio0 !== 'undefined' && audio0) {
        audio0.pause();
    }
    if (typeof audio1 !== 'undefined' && audio1) {
        audio1.pause();
    }
}

function log(text)
{
	id = "log";
	document.getElementById(id).innerHTML = document.getElementById(id).innerHTML + "<br />"+text;
}
