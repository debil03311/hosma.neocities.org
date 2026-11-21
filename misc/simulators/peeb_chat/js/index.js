class Random {
  static upTo(limit, isFloor=true) {
    const n = Math.random() * limit

    return (isFloor)
      ? Math.floor(n)
      : n
  }

  static fromArray(array) {
    const index = this.upTo(array.length, Math.floor)
    return array[index]
  }
}

const asleep = async (ms) =>
  new Promise((resolve)=> setTimeout(resolve, ms))

function timestamp() {
  return new Date().toLocaleTimeString('en-US', {
    timeStyle: 'short',
  })
}