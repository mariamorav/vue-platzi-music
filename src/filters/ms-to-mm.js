function convertMsToMm (ms) {
  const min = Math.floor(ms / 60000)
  const sec = ((ms % 60000) / 1000).toFixed(0)

  return `${min}:${sec}`
}

module.exports = {
  install: Vue => {
    Vue.filter('ms-to-mm', val => convertMsToMm(val))
  }
}
