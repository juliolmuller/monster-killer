new Vue({

  el: '#app',

  data() {
    return {
      gameStopped: true,
      gameOver: false,
      won: false,
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
