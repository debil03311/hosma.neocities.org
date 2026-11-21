const toCurrency = Intl.NumberFormat('en-gb', {
  style: 'currency',
  currency: 'gbp',
  trailingZeroDisplay: 'stripIfInteger',
}).format

function loadState() {
  try {
    const lastState = JSON.parse(localStorage[LOCALSTORAGE_SAVE_KEY])

    if (lastState.gameVersion !== GAME_VERSION) {
      const input = prompt(`The current game version (${GAME_VERSION}) is different from your save's (${lastState.gameVersion}), type WIPE to start a new game.`)

      if (input === 'WIPE')
        throw new Error('Version Mismatch')
    }

    return lastState
  }

  catch (error) {
    console.warn(error)

    return {
      gameVersion: GAME_VERSION,
      score: 0,
      clickPower: 1,
      cps: 1,
      shop: SHOP_ITEMS,
    }
  }
}

function deleteSave() {
  const input = prompt('Type DELETE to delete the current save and start over:')

  if (!input)
    return

  const isDelete = (input === 'DELETE')

  const alertMessage = isDelete
    ? 'Current save has been deleted.'
    : 'Input does not match, save has not been deleted.'

  if (isDelete)
    delete localStorage[LOCALSTORAGE_SAVE_KEY]

  alert(alertMessage)
}

async function saveState() {}

function hexify(number) {
  return (number > 0xffffff)
    ? 'ffffff'
    : number
        .toString(16)
        .padStart(6, '0')
}

function isBrightHex(number) {
  const hex = hexify(number)
  const importantDigitValue = parseInt(hex[2], 16)

  return importantDigitValue > 0xd
}