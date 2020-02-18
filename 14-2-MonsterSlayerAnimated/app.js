new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        isGameInProgress: false,
        logs: []
    },
    methods: {
        startGame: function () {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.isGameInProgress = true;
            this.logs = [];
        },
        attack: function () {

            let damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;

            this.logs.unshift({
                isPlayer: true,
                text: 'Player hits monster for ' + damage
            });

            if (this.isGameOver())
                return;

            this.monsterAttacks();

        },
        specialAttack: function () {

            let damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;

            this.logs.unshift({
                isPlayer: true,
                text: 'Player hits monster hard for ' + damage
            });

            if (this.isGameOver())
                return;

            this.monsterAttacks();
        },
        heal: function () {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10;
            } else {
                this.playerHealth = 100;
            }

            this.logs.unshift({
                isPlayer: true,
                text: 'Player heals for 10'
            });

            this.monsterAttacks();
        },
        giveUp: function () {
            this.isGameInProgress = false;
        },
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        monsterAttacks: function () {

            let damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;

            this.logs.unshift({
                isPlayer: false,
                text: 'Monster hits player for ' + damage
            });
            this.isGameOver();
        },
        isGameOver: function () {
            if (this.monsterHealth <= 0) {
                if (confirm('You killed the monster! Start a new game?')) {
                    this.startGame();
                }
                else {
                    this.isGameInProgress = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm('You died to the monster! Start a new game?')) {
                    this.startGame();
                }
                else {
                    this.isGameInProgress = false;
                }
                return true;
            }
            return false;
        }
    },
    computed: {

    },
    watch: {

    }
});