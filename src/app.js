import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Footer from './footer'
import Content from './content'
import Sider from './sider'

Vue.component('x-button', Button)
Vue.component('x-icon', Icon)
Vue.component('x-button-group', ButtonGroup)
Vue.component('x-input', Input)
Vue.component('x-row', Row)
Vue.component('x-col', Col)
Vue.component('x-layout', Layout)
Vue.component('x-header', Header)
Vue.component('x-footer', Footer)
Vue.component('x-content', Content)
Vue.component('x-sider', Sider)

new Vue({
    el:'#app',
    data:{
        isLoading:false
    }
})