const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/popover'

Vue.component('x-popover', Popover)

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Popover', () => {
    it('存在', () => {
        expect(Popover).to.be.ok
    })
    it('可以设置position', (done) => {
        Vue.component('x-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <x-popover position="bottom" ref="xx">
            <template slot="content">
            弹出内容
            </template>
            <button>点击</button>
        </x-popover>
        `
        const vm = new Vue({
            el: div
        })
        vm.$el.querySelector('button').click()
        setTimeout(() => {
            const {contentWrapper} = vm.$refs.xx.$refs
            expect(contentWrapper.classList.contains('position-bottom')).to.be.true
            done()
        }, 200)
    })
    it('可以设置position', (done) => {
        Vue.component('x-popover', Popover)
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <x-popover event-mode="hover" ref="xx">
            <template slot="content">
            弹出内容
            </template>
            <button>点击</button>
        </x-popover>
        `
        const vm = new Vue({
            el: div
        })
        vm.$el.querySelector('button')
    })
})