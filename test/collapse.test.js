const expect = chai.expect;
import Vue from 'vue'
import Collapse from '../src/collapse'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Collapse', () => {
    it('存在.', () => {
        expect(Collapse).to.be.ok
    })
})