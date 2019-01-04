<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'x_tabs',
    props: {
        selected: {
            type: String,
            required: true
        },
        direction: {
            type: String,
            default: 'transverse',
            validator(item) {
               return ['transverse', 'vertical'].indexOf(item) >= 0
            }
        }
    },
    data() {
        return {
            eventHub: new Vue()
        }
    },
    provide() {
        return {
            eventHub: this.eventHub
        }
    },
    mounted() {
        this.$children.forEach((vm) => {
            if(vm.$options.name === 'x_tabs_head') {
                vm.$children.forEach((vmChild) => {
                    if(vmChild.$options.name === 'x_tabs_item' && vmChild.name === this.selected) {
                        let {width,left} = vmChild.$el.getBoundingClientRect()
                        this.eventHub.$emit('update:selected', this.selected, width, left)                       
                    }
                })
            }
        })
    }
}
</script>

<style lang="scss" scoped>
.tabs{
    
}
</style>
