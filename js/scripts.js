new Vue({

  el: '#app',

  data() {
    return {
      gameStopped: true,
      playerLife: 100,
      monsterLife: 100,
      logs: [],
      names: {
        player: 'Jogador',
        monster: 'Monstro',
      },
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
    gameOver(value) {
      this.gameStopped = value
    },
    playerLife(value) {
      if (value  <= 0) {
        value = 0
      } else if (value > 100) {
        value = 100
      }
      this.playerLife = value
    },
    monsterLife(value) {
      if (value  < 0) {
        value = 0
      } else if (value > 100) {
        value = 100
      }
      this.monsterLife = value
    },
  },

  methods: {
    start() {
      this.logs = []
      this.playerLife = 100
      this.monsterLife = 100
      this.gameStopped = false
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
    log(who, type, hit) {
      const enemy = Object.keys(this.names).filter(k => k !== who)[0]
      this.logs.push({
        class: who,
        text: type === 'heal'
          ? `O ${this.names[who]} recuperou ${hit}`
          : `O ${this.names[who]} atingiu o ${this.names[enemy]} com ${hit}`
      })
    },
    mosnterAttack() {
      if (this.monsterLife) {
        const playerLife = this.playerLife
        this.playerLife -= this.monsterHit()
        this.log('monster', 'hurt', playerLife - this.playerLife)
      }
    },
    attack(especial = false) {
      const monsterLife = this.monsterLife
      this.monsterLife -= especial ? this.especialHit() : this.hit()
      this.log('player', 'hurt', monsterLife - this.monsterLife)
      this.mosnterAttack()
    },
    heal() {
      const playerLife = this.playerLife
      this.playerLife += this.health()
      this.log('player', 'heal', this.playerLife - playerLife)
      this.mosnterAttack()
    },
    giveup() {
      this.gameStopped = true
    },
  },
})
