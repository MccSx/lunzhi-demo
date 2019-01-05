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

describe('Tabs', () => {
    it('存在.', () => {
        expect(Tabs).to.be.ok
    })
    it('接受 selected 熟悉', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <x-tabs selected="tab1">
            <x-tabs-head>
                <x-tabs-item name="tab1">tab1</x-tabs-item>
                <x-tabs-item name="tab2">tab2</x-tabs-item>
                <x-tabs-item name="tab3">tab3</x-tabs-item>
            </x-tabs-head>
            <x-tabs-body>
                <x-tabs-pane name="tab1">tab1内容</x-tabs-pane>
                <x-tabs-pane name="tab2">tab2内容</x-tabs-pane>
                <x-tabs-pane name="tab3">tab3内容</x-tabs-pane>
            </x-tabs-body>
        </x-tabs>
        `
        let vm = new Vue({
            el: div
        })
        vm.$nextTick(() => {
            let ele = vm.$el.querySelector('.tabs-item[data-name="tab1"]')
            expect(ele.classList.contains('active')).to.be.true
            done()
        })
    })
})
