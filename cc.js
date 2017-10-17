
var $ = require('jquery');
var Color = require("color");

var csse = require("./css.color.vim.eclipse.js");

const BLACK = '#000000';
const WHITE = '#FFFFFF';

window.Color = Color;

function colorDefault(scheme){
    fbeach('body',  BLACK, WHITE);
    fbeach('.logo', csse['h5']['color'], csse['h5']['background-color']);
    fbeach('h1',    csse['h1']['color'], csse['h1']['background-color']);
    fbeach('h2',    csse['h2']['color'], csse['h2']['background-color']);
    fbeach('h3',    csse['h3']['color'], csse['h3']['background-color']);
    fbeach('i',     csse['i']['color'], csse['i']['background-color']);
    fbeach('u',     csse['u']['color'], csse['u']['background-color']);
    fbeach('b',     csse['u']['color'], csse['u']['background-color']);

    fbeach('p',     '#ffffff', '#000000');
    fbeach('i',     '#9E5A77', '#AFAFD4');
    fbeach('pre',   '#ffffff', '#000000');
}

function color_one(scheme){
    fbeach('body',  WHITE, BLACK);
    fbeach('.logo', '#348686', '#424242');
    fbeach('i',     '#9E5A77', '#AFAFD4');
    fbeach('b',     '#191919', '#735b9c');
    fbeach('p',     '#ffffff', '#000000');
    fbeach('pre',   '#ffffff', '#000000');
    fbeach('div',   '#ffffff', '#000000');

    fbeach('fa',    'green', '#000000');
}



/*
 * foreground background color for each by selector
 */
function fbeach(selector, foreground, background){
    $(selector).each(function(){$(this).css('color', foreground);});
    $(selector).each(function(){$(this).css('background-color', background);});
}


/*
 * foreground background color for the selected by tag id
 */
function fbid(idSelector, foreground, background){
    $(idSelector).css('color', foreground);
    $(idSelector).css('background-color', background);
}



// 2017 1016


function redoColor(scheme){
    randomBodyColor();

    var foregroundColor = BLACK;
    var backgroundColor = WHITE;


    [foregroundColor, backgroundColor] = randomHexColorPair();
    fbeach('.logo', foregroundColor, backgroundColor);
    [foregroundColor, backgroundColor] = randomHexColorPair();
    fbeach('h1',    foregroundColor, backgroundColor);
    [foregroundColor, backgroundColor] = randomHexColorPair();
    fbeach('h2',    foregroundColor, backgroundColor);
    [foregroundColor, backgroundColor] = randomHexColorPair();
    fbeach('h3',    foregroundColor, backgroundColor);
    fbeach('i',     foregroundColor, backgroundColor);
    fbeach('u',     foregroundColor, backgroundColor);
    fbeach('b',     foregroundColor, backgroundColor);
    [foregroundColor, backgroundColor] = randomHexColorPair();
    fbeach('p',     foregroundColor, backgroundColor);
    fbeach('i',     foregroundColor, backgroundColor);
    fbeach('pre',   foregroundColor, backgroundColor);
}

function bodyColor(foreground,background){
    foreground = foreground || BLACK;
    background = background || WHITE;

    document.body.style.color = foreground;
    document.body.style.backgroundColor = background;
}


function randomColor(){
    return Color.rgb(
        parseInt(Math.random()*256),
        parseInt(Math.random()*256),
        parseInt(Math.random()*256)
        );
}

function randomHexColorPair(r=4.5){
    var fore = randomColor();
    var back = randomColor();
    //console.log(fore.toString(), back.toString(), 'hex: ', fore.hex(), back.hex());

    //window.fore = fore;

    while(fore.contrast(back) < r){
        back = randomColor();

        //window.back = back;
        //console.log(fore.toString(), back.toString(), 'hex: ', fore.hex(), back.hex());
    }

    var fHex = typeof fore === 'string' ? fore:fore.hex();
    var bHex = typeof back === 'string' ? back:back.hex();

    return [fHex, bHex];
}

function randomBodyColor(r=4.5){
    [fore, back] = randomHexColorPair(r);
    //console.log(fore.toString(), back.toString(), 'hex: ', fore.hex(), back.hex());
    console.log(fore.toString(), back.toString(), );

    bodyColor(fore, back);
}

function rollBodyForeground(color=BLACK, r=4.5){
    //var fore = document.body.style.color;
    var back = document.body.style.backgroundColor;

    var f = randomColor(), b = Color(back);

    while(f.contrast(b) < r){
        f = randomColor();
    }

    console.log(f.hex(), b.hex());

    document.body.style.color = f.hex();
    document.body.style.backgroundColor = b.hex();
}

document.getElementById('randombodycolor').onclick = randomBodyColor;
document.getElementById('redoColor').onclick = redoColor;
document.getElementById('rollBodyForeground').onclick = rollBodyForeground;


window.randomHexColorPair = randomHexColorPair;
window.randomColor = randomColor;
window.randomBodyColor = randomBodyColor;


//colorDefault();
