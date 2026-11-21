// ==UserScript==
// @name         Orthographize
// @namespace    http://tampermonkey.net/
// @version      2025-11-15
// @description  try to take over the world!
// @author       hosma
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';

  const SELECTOR_BLACKLIST = [
    'textarea',
    'textarea *',
    'input',
    'input *',
    '[contenteditable]',
    '[contenteditable] *',
    'style',
    'style *',
    'script',
    'script *',
    'code',
    'code *',
    'pre',
    'pre *',
    'q',
    'q *',
    'blockquote',
    'blockquote *',
    'title',
    '.orthographized',
  ]

  function toLongS(text) {
    return text
      .replace(/s/g, 'ſ')
      .replace(/ſſ/g, 'ſs')
      .replace(/ſ([^\w]|[A-Z]|$)/g, 's$1')
      .replace(/fſ/g, 'fs')
      .replace(/ſf/g, 'sf')
  }

  function toThorn(text) {
    return text
      .replace(/T[Hh]/g, 'Þ')
      .replace(/th/g, 'þ')
  }

  function orthographize(text) {
    return toThorn(toLongS(text))
  }

  function convert() {
    const elements = [...document.querySelectorAll(`*:not(${SELECTOR_BLACKLIST.join(',')})`)]

    for (const element of elements) {
      const textNodes = [...element.childNodes]
        .filter((node) => node.nodeName === '#text')

      for (const node of textNodes) {
        node._originalText = node.textContent
        node.textContent = orthographize(node.textContent)
      }

      if (element.placeholder?.trim?.()) {
        element._originalPlaceholder = element.placeholder
        element.placeholder = orthographize(element.placeholder)
      }

      if (element.title?.trim?.()) {
        element._originalTitle = element.title
        element.title = orthographize(element.title)
      }

      element.classList.add('orthographized')
    }
  }


  class MutationReactor extends MutationObserver {
    constructor(targetElement, callback, options={childList: true, subtree: true}) {
      super(callback)

      this.targetElement = targetElement
      this.options = options
    }

    start() {
      this.observe(this.targetElement, this.options)
      return this
    }
    stop() {
      this.disconnect()
      return this
    }
    restart() {
      this.stop()
      this.start()
    }

    runCallback() {
      return this.callback?.()
    }

    setOptions(options) {
      const isObject = (options instanceof Object) && !(options instanceof Array)

      if (!isObject) {
        console.warn(`MutationReactor.setOptions: ${options} is not a valid Object, `
                   + `continuing with ${JSON.stingify(this.options)}.`)
        return this
      }

      this.options = options
      this.restart()
      return this
    }

    sneak(callback) {
      this.stop()
      const result = callback()
      this.start()
      return result
    }
  }


  window.addEventListener('load', () => {
    convert()

    const reactor = new MutationReactor(document.body, convert)
    reactor.start()
  })
})();