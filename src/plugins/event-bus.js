const eventBus = {}

eventBus.install = function (Vue) {
  Vue.prototype.$bus = new Vue()
} // Vue utiliza esta funcion para declararlo e inyectarlo en todos los componentes, recibe la instancia de Vue

export default eventBus
