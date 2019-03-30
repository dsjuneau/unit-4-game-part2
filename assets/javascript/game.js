// Star Wars RPG

// Variables

// Game Object

var game = {
  characterList: ["obi", "luke", "sidious", "maul"],
  attacker: "",
  attackerInc: 0,
  defender: "",
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
  isGameOver: false,
  resetGame: function() {
    location.reload();
  },
  attack: function() {
    if (this.isDefenderChosen && !this.isGameOver) {
      this.defender.hp = this.defender.hp - this.attacker.ap;
      $(".hp-" + this.defenderName).text(this.defender.hp);
      this.attacker.ap += this.attackerInc;
      if (this.defender.hp <= 0) {
        this.isDefenderChosen = false;
        $('[value="' + this.defenderName + '"]').detach();
        if (this.characterList.length === 0) {
          this.isGameOver = true;
          var gameOver = $(".center-row").text("Winner!");
          gameOver.css("fontSize", "200px");
          gameOver.css("color", "white");
          $("#reset").css("display", "inline");
        }
      } else {
        this.attacker.hp = this.attacker.hp - this.defender.cap;
        $(".hp-" + this.attackerName).text(this.attacker.hp);
      }
      var attackMsg = this.attacker.ap - this.attackerInc;
      $("#dmgMessage").text(
        "Attacker did " +
          attackMsg +
          " damage. Defender did " +
          this.defender.cap +
          " damage."
      );
      if (this.attacker.hp <= 0) {
        this.isGameOver = true;
        var gameOver = $(".center-row").text("Game Over");
        gameOver.css("fontSize", "200px");
        gameOver.css("color", "white");
        $("#reset").css("display", "inline");
      }
    }
  },
  chooseCharacter: function(image) {
    if (this.characterList.indexOf(image) !== -1) {
      if (!this.isCharacterChosen) {
        this.attackerName = image;
        this.attacker = this[image];
        this.attackerInc = this.attacker.ap;
        this.characterList.splice(this.characterList.indexOf(image), 1);
        this.isCharacterChosen = true;
        for (var i = 0; i < this.characterList.length; i++) {
          var imageSelector = '[value="' + this.characterList[i] + '"]';
          var imageToMove;
          imageToMove = $(imageSelector).detach();
          imageToMove.appendTo(".center-row");
          imageToMove.children().css("backgroundColor", "red");
        }
      } else if (!this.isDefenderChosen) {
        this.isDefenderChosen = true;
        var imageSelector =
          '[value="' +
          this.characterList[this.characterList.indexOf(image)] +
          '"]';
        var imageToMove;
        imageToMove = $(imageSelector).detach();
        imageToMove.appendTo(".bottom-row");
        imageToMove.children().css("backgroundColor", "lightgray");
        this.defenderName = image;
        this.defender = this[image];
        this.characterList.splice(this.characterList.indexOf(image), 1);
      }
    }
  }
};

//Process event of user clicking on image

$(".frame").on("click", function() {
  game.chooseCharacter($(this).attr("value"));
});

//Process event of user clicking attack button

$(".attack").on("click", function() {
  game.attack();
});

//Process reset button
$("#reset").on("click", function() {
  game.resetGame();
});
