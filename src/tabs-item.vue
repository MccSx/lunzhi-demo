<template>
    <div class="tabs-item" @click="itemClick">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'x_tabs_item',
    inject: ['eventHub'],
    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        name: {
            type: String,
            required: true
        }
    },
    created() {
        this.eventHub.$on('update:selected', (name) => {
            console.log(name)
        })
    },
    methods: {
        itemClick() {
            this.eventHub.$emit('update:selected', this.name)
        }
    },
}
</script>

<style lang="scss" scoped>
.tabs-item{}
</style>
