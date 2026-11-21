document.addEventListener('alpine:init', ()=> {
  const e_history = document.getElementById('history')

  Alpine.data('body', ()=> ({
    input: '',
    history: [],

    async send() {
      if (!this.input.trim())
        return

      this.history.push({
        username: 'pablito',
        pfpPath: `${PATHS.media}/pablito.png`,
        text: this.input,
        timestamp: timestamp(),
      })

      await asleep()
      e_history.scrollTop = e_history.scrollHeight * 2

      this.input = ''
      await this.reply()
    },

    async reply() {
      /**
       * @type {User}
       */
      const user = Random.fromArray(USERS)

      /**
       * @type {Reply}
       */
      const reply = Random.fromArray(user.replies)

      await asleep(Random.upTo(2 * 1000))

      this.history.push({
        username: user.username,
        pfpPath: user.pfpPath,
        ...reply,
        timestamp: timestamp(),
      })

      await asleep()
      e_history.scrollTop = e_history.scrollHeight * 2
    },
  }))
})