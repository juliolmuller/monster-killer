new Vue({

  el: '#app',

  data() {
    return {
      gameStopped: true,
      playerLife: 100,
      monsterLife: 100,
      logs: [],
    }
  },

  computed: {
    gameOver() {
      return !this.playerLife || !this.monsterLife
    },
    won() {
      return !this.monsterLife
    },
  },

  watch: {
    playerLife(value) {
      if (value  <= 0) {
        this.playerLife = 0
        this.gameStopped = true
      } else if (value > 100) {
        this.playerLife = 100
      }
    },
    monsterLife(value) {
      if (value  <= 0) {
        this.monsterLife = 0
        this.gameStopped = true
      }else if (value > 100) {
        this.monsterLife = 100
      }
    },
  },

  methods: {
    start() {
      this.gameStopped = false
      this.playerLife = 100
      this.monsterLife = 100
    },
    getRandom(min, max) {
      return Math.floor(Math.random() * (max - min)) + min
    },
    hit() {
      return this.getRandom(1, 6)
    },
    especialHit() {
      return this.getRandom(5, 10)
    },
    health() {
      return this.getRandom(4, 10)
    },
    monsterHit() {
      return this.getRandom(3, 8)
    },
    mosnterAttack() {
      if (this.monsterLife) {
        this.playerLife -= this.monsterHit()
      }
    },
    attack(especial = false) {
      this.monsterLife -= especial ? this.especialHit() : this.hit()
      this.mosnterAttack()
    },
    heal() {
      this.playerLife += this.health()
      this.playerLife -= this.monsterHit()
    },
    giveup() {
      this.gameStopped = true
    },
  },
})
