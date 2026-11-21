class Random {
  /**
   * @param {Array} array 
   * @returns 
   */
  static fromArray(array) {
    const index = Math.floor(Math.random() * array.length)
    return array[index]
  }
}

function percentageOf(whole, part, modifier) {
  const raw = part * (100 / whole)
  const final = modifier ? modifier(raw) : raw

  return final || 0
}

document.addEventListener('alpine:init', ()=> {
  Alpine.data('body', ()=> ({
    set: [],
    stats: {
      passed: 0,
      failed: 0,
    },

    current: [],
    showDetails: false,
    isFinished: false,

    init() {
      if (!localStorage.set)
        localStorage.set = JSON.stringify(ZYOUYOU_KANZI)
      if (!localStorage.stats)
        localStorage.stats = JSON.stringify({passed: 0, failed: 0})

      this.load()
      this.next()
    },

    load() {
      this.set = JSON.parse(localStorage.set)
      this.stats = JSON.parse(localStorage.stats)
    },

    save() {
      localStorage.set = JSON.stringify(this.set)
      localStorage.stats = JSON.stringify(this.stats)
    },

    reset() {
      const input = prompt('リセットするにはRESETを入力してください')

      if (input !== 'RESET')
        return
      
      localStorage.set = JSON.stringify(ZYOUYOU_KANZI)
      localStorage.stats = JSON.stringify({passed: 0, failed: 0})

      this.isFinished = false

      alert('リセット完了')
      this.init()
    },

    mark(kanji, isPassed) {
      const kanjiIndex = this.set
        .findIndex((item)=> item[0] == kanji)

      this.set.splice(kanjiIndex, 1)
      ++this.stats[isPassed ? 'passed' : 'failed']

      this.save()
      this.next()
    },

    next() {
      if (!this.set.length)
        return (this.isFinished = true)

      this.current = Random.fromArray(this.set)
      this.showDetails = false
    },
  }))
})