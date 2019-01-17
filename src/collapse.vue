<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
export default {
    name: 'x_collapse',
    data() {
        return {
            eventHub: new Vue()
        }
    },
    props: {
        single: {
            type: Boolean,
            default: false
        }
    },
    provide() {
        return {
            eventHub: this.eventHub
        }
    },
    mounted() {
        this.eventHub.$emit('single', this.single)  
    },
}
</script>

<style lang="scss" scoped>
.collapse{
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>
