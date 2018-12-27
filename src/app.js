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
import Toast from './toast'
import toastPlugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsBody from './tabs-body'
import TabsPane from './tabs-pane'

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
Vue.component('x-toast', Toast)
Vue.use(toastPlugin)
Vue.component('x-tabs', Tabs)
Vue.component('x-tabs-head', TabsHead)
Vue.component('x-tabs-item', TabsItem)
Vue.component('x-tabs-body', TabsBody)
Vue.component('x-tabs-pane', TabsPane)

new Vue({
    el:'#app',
    data:{
        isLoading:false,
        selectTab: 'tab1'
    },
    created() {
        //this.$toast()
    },
    methods: {
        showToast() {
            this.$toast('没有更多数据了', {
                position: 'middle'
            })
        },
        showToastCanClose() {
            this.$toast('没有更多数据了', {
                closeButton: {
                    text: '关闭',
                    callback() {alert('成功关闭')}
                }
            })
        },
        showToastTop() {
            this.$toast('top出现', {
                position: 'top'
            })
        },
        showToastMiddle() {
            this.$toast('middle出现', {
                position: 'middle'
            })
        },
        showToastBottom() {
            this.$toast('bottom出现', {
                position: 'bottom'
            })
        }
    }
})