new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isGameRunning: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.isGameRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        stopGame: function() {
            this.isGameRunning = false;
        },
        calculateDamage: function(min, max){
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        monsterAttacks: function(){
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: 'Monster hits player for ' + damage
            });
        },
        checkWin: function() {
            if (this.monsterHealth <= 0){
                if (confirm('You won! New game?')){
                    this.startGame();
                } else{
                    this.gameIsRunning = false;
                }
                return true;
            }
            else if(this.playerHealth <= 0){
                if(confirm('You lose! New game?')){
                    this.startGame();
                } else{
                    this.gameIsRunning = false;
                }
            }
            return false;
        },
        attack: function() {
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;

            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster hard for ' + damage
            });

            if (this.checkWin()){
                return;
            }     

            this.monsterAttacks();

            this.checkWin();          
        },
        specialAttack: function() {
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;

            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage
            });

            if (this.checkWin()){
                return;
            }

           this.monsterAttacks();
           this.checkWin();
        },
        heal: function() {
            damageHealed = 0;

            if (this.playerHealth <= 90){
                damageHealed = 10;
            } else {
                damageHealed = 100 - this.playerHealth;
            }

            this.playerHealth  += damageHealed;

            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for ' + damageHealed
            });

            this.monsterAttacks();  
            this.checkWin();
        }
    }
});
