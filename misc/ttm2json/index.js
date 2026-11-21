document.addEventListener('alpine:init', ()=> {
  Alpine.data('body', ()=> ({
    json: {},
    isSaving: false,

    triggers: [
      'sunrise', 
      'sunset', 
      'day', 
      'night', 
      'snow', 
      'mountain', 
      'jungle', 
      'swamp', 
      'hot', 
      'ocean', 
      'underground', 
      'intense', 
      'village', 
      'nether', 
      'end', 
      'fortress', 
      'boss', 
      'death',
      'rain',
    ],

    init() {
      try {
        const savedJson = JSON.parse(localStorage.save)
        this.json = savedJson
      }
      
      catch (error) {
        console.error(error)
        this.clear()
        this.save()
      }
    },

    clear() {
      this.json = {}

      for (const trigger of this.triggers) {
        this.json[`ttm.${trigger}`] = {
          sounds: []
        }
      }
    },

    save() {
      localStorage.save = JSON.stringify(this.json)
    },

    addSound(targetObject) {
      targetObject.push({
        name: '',
        stream: true,
        weight: 1,
      })
    },

    removeSound(targetObject, index) {
      targetObject.splice(index, 1)
    },
  }))
})