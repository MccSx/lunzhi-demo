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
            default: ''
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
    created() {
        // this.$emit('update:selected', 'xxxx')
    },
}
</script>

<style lang="scss" scoped>
.tabs{}
</style>
