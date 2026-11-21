/**
 * @typedef {{
 *   sitename: String,
 *   views: Number,
 *   hits: Number,
 *   created_at: String,
 *   last_updated: String,
 *   domain?: String,
 *   tags: String[],
 *   latest_ipfs_hash: String?,
 * }} SiteData
 */

const ORIGINS = {
  site: 'https://neocities.org/site'
}

document.addEventListener('alpine:init', ()=> {
  Alpine.data('body', ()=> ({
    input: '',

    /** @type {SiteData[]} */
    sites: NEOCITIES_WEBSITES.slice(0, 32),

    async filterSites() {
      if (this.input.length < 3) {
        if (this.input.length) {
          return
        }
        else {
          const promptAnswer = prompt(`Are you really REALLY sure that you want to see ALL ${NEOCITIES_WEBSITES.length} websites?`)
          
          if (typeof promptAnswer === 'string')
            this.sites = NEOCITIES_WEBSITES
          else return
       }
      }

      this.sites = NEOCITIES_WEBSITES.filter((site)=> {
        const searchString = [
          site.sitename,
          site.domain,
          site.tags,
        ].flat().join(' ')

        return searchString.includes(this.input)
      })
    },
  }))
})