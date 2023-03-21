// ----- REMOVE DEFAULT TEXT -----

var parOne = document.getElementById('ptOne');

function peace() {
    parOne.style.display= 'none';
}

document.getElementById('theProjects').addEventListener("mouseover", peace);



// ----- REMOVE DEFAULT IMAGE -----

var firstImg = document.getElementById('splashImg');

function bye() {
    firstImg.style.display= 'none';
}

document.getElementById('theProjects').addEventListener("mouseover", bye);


// ----- PROJECT ONE (CALLED 'TWO') SCRIPTS -----

// ----- TITLE ONE -----

var titleOne = document.getElementById('htOne');

function showTitleOne() {
    titleOne.style.display= 'inherit';
}

document.getElementById('firstProject').addEventListener("mouseover", showTitleOne);

function hideTitleOne() {
    titleOne.style.display= '';
}

document.getElementById('secondProject').addEventListener("mouseover", hideTitleOne);
document.getElementById('thirdProject').addEventListener("mouseover", hideTitleOne);

// ----- TAG ONE -----

var tagTwo = document.getElementById('dtTwo');

function showIt() {
    tagTwo.style.display= 'inherit';
}

document.getElementById('firstProject').addEventListener("mouseover", showIt);


function bushel() {
    tagTwo.style.display= 'none';
}

document.getElementById('secondProject').addEventListener("mouseover", bushel);
document.getElementById('thirdProject').addEventListener("mouseover", bushel);

// ----- PARAGRAPH ONE -----

var parTwo = document.getElementById('ptTwo');

function peepIt() {
    parTwo.style.display= 'inherit';
}

document.getElementById('firstProject').addEventListener("mouseover", peepIt);

function flameout() {
    parTwo.style.display= 'none';
}


document.getElementById('secondProject').addEventListener("mouseover", flameout);
document.getElementById('thirdProject').addEventListener("mouseover", flameout);

// ----- LINK ONE -----

var linkOne = document.getElementById('slOne');

function seeLinkOne() {
    linkOne.style.display= 'inherit';
}

document.getElementById('firstProject').addEventListener("mouseover", seeLinkOne);

function hideLinkOne() {
    linkOne.style.display= 'none';
}

document.getElementById('secondProject').addEventListener("mouseover", hideLinkOne);
document.getElementById('thirdProject').addEventListener("mouseover", hideLinkOne);


// ----- PROJECT TWO (CALLED 'THREE' SCRIPTS -----

// ----- TITLE TWO -----

var titleTwo = document.getElementById('htTwo');

function showTitleTwo() {
    titleTwo.style.display= 'inherit';
}

document.getElementById('secondProject').addEventListener("mouseover", showTitleTwo);

function hideTitleTwo() {
    titleTwo.style.display= '';
}

document.getElementById('firstProject').addEventListener("mouseover", hideTitleTwo);
document.getElementById('thirdProject').addEventListener("mouseover", hideTitleTwo);

// ----- TAG TWO -----

var tagThree = document.getElementById('dtThree');

function seeIt() {
    tagThree.style.display= 'inherit';
}

document.getElementById('secondProject').addEventListener("mouseover", seeIt);

function hideIt() {
    tagThree.style.display= 'none';
}


document.getElementById('firstProject').addEventListener("mouseover", hideIt);
document.getElementById('thirdProject').addEventListener("mouseover", hideIt);

// ----- PARAGRAPH TWO

var parThree = document.getElementById('ptThree');

function lookIt() {
    parThree.style.display= 'inherit';
}

document.getElementById('secondProject').addEventListener("mouseover", lookIt);

function noLook() {
    parThree.style.display= 'none';
}


document.getElementById('firstProject').addEventListener("mouseover", noLook);
document.getElementById('thirdProject').addEventListener("mouseover", noLook);

// ----- LINK TWO -----

var linkTwo = document.getElementById('slTwo');

function seeLinkTwo() {
    linkTwo.style.display= 'inherit';
}

document.getElementById('secondProject').addEventListener("mouseover", seeLinkTwo);

function hideLinkTwo() {
    linkTwo.style.display= 'none';
}

document.getElementById('firstProject').addEventListener("mouseover", hideLinkTwo);
document.getElementById('thirdProject').addEventListener("mouseover", hideLinkTwo);


// ----- PROJECT THREE (CALLED 'FOUR') SCRIPTS -----

// ----- TITLE THREE SCRIPTS -----

var titleThree = document.getElementById('htThree');

function showTitleThree() {
    titleThree.style.display= 'inherit';
}

document.getElementById('thirdProject').addEventListener("mouseover", showTitleThree);

function hideTitleThree() {
    titleThree.style.display= '';
}


document.getElementById('firstProject').addEventListener("mouseover", hideTitleThree);
document.getElementById('secondProject').addEventListener("mouseover", hideTitleThree);

// ----- TAG THREE -----

var tagFour = document.getElementById('dtFour');

function show() {
    tagFour.style.display= 'inherit';
}

document.getElementById('thirdProject').addEventListener("mouseover", show);

function hide() {
    tagFour.style.display= 'none';
}

document.getElementById('firstProject').addEventListener("mouseover", hide);
document.getElementById('secondProject').addEventListener("mouseover", hide);

// ----- PARAGRAPH THREE -----

var parFour = document.getElementById('ptFour');

function see() {
    parFour.style.display= 'inherit';
}

document.getElementById('thirdProject').addEventListener("mouseover", see);

function noSee() {
    parFour.style.display= 'none';
}


document.getElementById('firstProject').addEventListener("mouseover", noSee);
document.getElementById('secondProject').addEventListener("mouseover", noSee);

// ----- LINK THREE -----

var linkThree = document.getElementById('slThree');

function seeLinkThree() {
    linkThree.style.display= 'inherit';
}

document.getElementById('thirdProject').addEventListener("mouseover", seeLinkThree);

function hideLinkThree() {
    linkThree.style.display= 'none';
}

document.getElementById('secondProject').addEventListener("mouseover", hideLinkThree);
document.getElementById('firstProject').addEventListener("mouseover", hideLinkThree);


// ----- DISPLAY WINDOW SIZE SCRIPT -----

var dWin = document.getElementById('dWindow');

function shrink() {
    dWin.style.height= '30vh';
}

document.getElementById('theProjects').addEventListener("mouseover", shrink);

function grow() {
    dWin.style.height= '';
}


// ----- TOGGLE BG IMAGES & COLOR -----

// ----- IMAGE ONE -----

function dOne() {
    dWin.style.backgroundImage= "url('./images/signup.svg'), linear-gradient(201.6deg, #FCD4D4 11.09%, #FFB7B7 116.27%)";
    dWin.style.backgroundRepeat= 'no-repeat';
    dWin.style.backgroundPosition= '50%, -30%';
    dWin.style.backgroundSize= 'contain';
}

document.getElementById('firstProject').addEventListener("mouseover", dOne);



// ----- IMAGE TWO -----

function dTwo() {
    dWin.style.backgroundImage= "url('./images/bnp.jpg')";
    dWin.style.backgroundRepeat= 'no-repeat';
    dWin.style.backgroundPosition= '50%, -30%';
    dWin.style.backgroundSize= 'cover';
}

document.getElementById('secondProject').addEventListener("mouseover", dTwo);


// ----- IMAGE THREE -----

function dThree() {
    dWin.style.backgroundImage= "url('./images/design-system.svg')";
    dWin.style.backgroundRepeat= 'no-repeat';
    dWin.style.backgroundPosition= '50%, -30%';
    dWin.style.backgroundSize= 'cover';
}

document.getElementById('thirdProject').addEventListener("mouseover", dThree);



// ----- ANIMATION DELAY

function classRemove() {
    document.body.classList.remove('preload');
}

document.getElementById('br').addEventListener("mouseover", classRemove);