// Star Wars RPG

// Variables

// Objects

var game = {
  obi: {
    hp: 120,
    ap: 6,
    cap: 15
  },
  luke: {
    hp: 100,
    ap: 6,
    cap: 15
  },
  sidious: {
    hp: 150,
    ap: 6,
    cap: 15
  },
  maul: {
    hp: 180,
    ap: 6,
    cap: 15
  },
  isCharacterChosen: false,
  isDefenderChosen: false,
  resetGame: function() {
    this.isCharacterChosen = false;
    this.isDefenderChosen = false;
    this.obi.hp = 120;
    this.obi.ap = 6;
    this.obi.cap = 15;
    //Finish this for every character
    //Then move every one to the top row
  },
  attack: function() {},
  checkScore: function() {},
  updateScreen: function() {},
  chooseCharacter: function() {}
};

$(".frame").on("click", function() {
  chooseCharacter();
});

$(".attack").on("click", function() {
  game.attack();
  game.checkScore();
  game.updateScreen();
});
