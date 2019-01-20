const expect = chai.expect;
import Vue from 'vue'
import CollapseItem from '../src/collapse-item'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('CollapseItem', () => {
    it('存在.', () => {
        expect(CollapseItem).to.be.ok
    })
})