//setup the controlling variable, we want games to restart after a loss or win
var game = {
    llst: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
    guesses: [],
    clp: "",
    nguess: 9,
    nwins: 0,
    nloss: 0
};
document.onkeyup = function (uguess) {
    //if first game (after a win, loss or first start) pick new letter.
    if (game.nguess === 9) {
        var cpi = Math.floor(Math.random() * (game.llst.length - 1)); // computer pick using random number generator [number between 0 and "length of list"-1]
        game.clp = game.llst[cpi];
    }
    //console.log(game.clp) // for those who wants to have special powers :)
    var gs = uguess.key; // user input    
    gs = gs.toLowerCase();
    // We want to carry on only if the user guess is a valid character and not repeated
    if ((game.llst.indexOf(gs) > -1) && (game.guesses.indexOf(gs) === -1)) { 
        game.guesses.push(gs); // add to the list
        document.getElementById("lgs").innerHTML = game.guesses; //update guesses
        //compare pick and the guess
        if (gs === game.clp) {
            //if correct increment win counter and reset guessesleft counter to 9      
            game.nwins++;
            game.nguess = 9;
            document.getElementById("nwins").innerHTML = game.nwins;
            document.getElementById("lgs").innerHTML = "...";
            game.guesses = [];
        }
        else {
            // decrement guessesleft counter
            game.nguess--;
            if (game.nguess === 0) {
                // if guessesleft counter is zero after decrment, increment loss and reset guessesleft counter to 9 and reset the guess list (var and html)
                game.nloss++;
                game.guesses = [];
                game.nguess = 9;
                document.getElementById("nloss").innerHTML = game.nloss;
                document.getElementById("lgs").innerHTML = "...";
            }
        }
        //write the new stats to html because they will be used on next round 
        // here I use the html for records keeping instead of my vars.
        document.getElementById("gleft").innerHTML = game.nguess;
    }
}