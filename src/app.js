import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('s-button', Button)
Vue.component('s-icon', Icon)
Vue.component('s-button-group', ButtonGroup)

new Vue({
    el:'#app',
    data:{
        isLoading:false
    }
})

import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect
//单元测试
{
    const Constructor = Vue.extend(Button)
    let vm = new Constructor({
        propsData: {
            icon: 'settings'
        }
    })
    vm.$mount('#test')
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')
    vm.$el.remove()
    vm.$destroy()
}
{
    const Constructor = Vue.extend(Button)
    let vm = new Constructor({
        propsData:{
            icon:'settings'
        }
    })
    vm.$mount()
    let spy = chai.spy(function () {})
    vm.$on('click', spy)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()
}