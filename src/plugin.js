export default {
    install(Vue, options) {
        Vue.prototype.$toast = function () {
            alert('toast组件')
        }
    }
}