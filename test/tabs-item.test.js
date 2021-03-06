const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs'
import TabsHead from '../src/tabs-head'
import TabsItem from '../src/tabs-item'
import TabsBody from '../src/tabs-body'
import TabsPane from '../src/tabs-pane'

Vue.component('x-tabs', Tabs)
Vue.component('x-tabs-head', TabsHead)
Vue.component('x-tabs-item', TabsItem)
Vue.component('x-tabs-body', TabsBody)
Vue.component('x-tabs-pane', TabsPane)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('TabsItem', (done) => {
    it('存在', () => {
        expect(TabsItem).to.be.ok
    })
    it('接受 name 属性', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                name: 'aaa'
            }
        }).$mount()
        expect(vm.$el.getAttribute('data-name')).to.eq('aaa')
    })
    it('接受 disabled 属性', () => {
        const Constructor = Vue.extend(TabsItem)
        const vm = new Constructor({
            propsData: {
                disabled: true
            }
        }).$mount()
        expect(vm.$el.classList.contains('dis')).to.be.true
        const callback = sinon.fake()
        vm.$on('click', callback)
        vm.$el.click()
        expect(callback).to.have.not.been.called
    })
})