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
})