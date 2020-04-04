new Vue({

  el: '#app',

  data() {
    return {
      gameStopped: true,
      gameOver: false,
      won: false,
      playerLife: 100,
      monsterLife: 100,
      logs: [],
    }
  },

  watch: {
    gameOver(value) {
      this.gameStopped = value
    }
  },

  methods: {
    start() {
      this.gameStopped = false
      this.gameOver = false
      this.playerLife = 100
      this.monsterLife = 100
    },
    attack(especial = false) {
      console.log(`"${especial ? 'especial ' : ''}attack" triggered`)
    },
    heal() {
      console.log('"heal" triggered')
    },
    giveup() {
      this.gameStopped = true
    },
  },
})
