var messege = "Help me, Obi-Wan Kenobi. You're my only hope!";
console.log(messege);
var episode = 4;
console.log("This is episode " + 4);
episode = episode + 1;
console.log("Next episode is " + episode);
var favorateDroid;
favorateDroid = 'BB-8';
console.log("My favorite droid is " + favorateDroid);
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 11;
console.log("Is " + distance + " parsecs enough to beat Millennium Falcon? " + (isEnoughToBeatMF(distance) ? 'Yes' : 'No'));
//arrou func
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('R2');
//parametros padroes
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5,1) = " + inc(5, 1));
console.log("inc (5) = " + inc(5));
//=========CLASS ANS INTERFACES==========//
