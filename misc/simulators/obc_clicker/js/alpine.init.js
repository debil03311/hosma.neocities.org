document.addEventListener('alpine:init', ()=> {
  Alpine.store('state', loadState())
  gameState = Alpine.store('state')

  for (const item of gameState.shop) {
    const meta = SHOP_ITEMS_META[item.id]

    if (!meta)
      return

    for (const metaKey in meta) {
      item[metaKey] = meta[metaKey]
    }
  }

  saveState = async function () {
    const stateString = JSON.stringify(gameState)
    localStorage[LOCALSTORAGE_SAVE_KEY] = stateString
    // return alert('The current game state has been saved.')
  }

  setInterval(saveState, 5 * 60 * 1000)

  setInterval(()=> {
    gameState.score += gameState.cps
  }, 1000)

  Alpine.data('shop', ()=> ({
    items: gameState.shop,

    buy(index) {
      const item = this.items[index]

      if (gameState.score >= item.price) {
        gameState.score -= item.price

        ++item.owned
        item.price += Math.round(item.price / 4)

        gameState.clickPower += item.clickPower
        gameState.cps += item.cps
      }
    },
  }))
})