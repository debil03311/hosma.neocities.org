const GAME_VERSION = '0.1'
const LOCALSTORAGE_SAVE_KEY = 'officeClickerSave'

const ICONS = {
  save: '💾',
  delete: '🗑️',
  cps: '🕒',
  clickPower: '🖱️',
}

const SHOP_ITEMS_META = {
  0: {
    name: 'Spreadsheet Entry',
    description: 'Sorry not sorry',
  },
  1: {
    name: 'Council Tax Letter',
    description: 'A classic!',
  },
  2: {
    name: 'Student Status Letter',
    description: `Spicier CTL`,
  },
  3: {
    name: 'Bank Letter',
    description: `Some deny its existence`,
  },
  4: {
    name: 'Proof of Address',
    description: `How else are we supposed to know?`,
  },
  5: {
    name: 'Manual Attendance List',
    description: `They'll fix Tribal one day`,
  },
}

const SHOP_ITEMS = [
  {
    id: 0,
    owned: 0,
    price: 10,
    clickPower: 1,
    cps: 1,
  },
  {
    id: 1,
    owned: 0,
    price: 100,
    clickPower: 5,
    cps: 10,
  },
  {
    id: 2,
    owned: 0,
    price: 1000,
    clickPower: 10,
    cps: 20,
  },
  {
    id: 3,
    owned: 0,
    price: 15000,
    clickPower: 50,
    cps: 50,
  },
  {
    id: 4,
    owned: 0,
    price: 50000,
    clickPower: 80,
    cps: 100,
  },
  {
    id: 5,
    owned: 0,
    price: 100000,
    clickPower: 150,
    cps: 200,
  },
]