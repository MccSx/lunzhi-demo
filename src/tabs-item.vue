<template>
    <div class="tabs-item" @click="itemClick" :class="active ? 'active' : ''">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'x_tabs_item',
    inject: ['eventHub'],
    data() {
        return {
            active: false
        }
    },
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
            if (name === this.name) {
                this.active = true
            } else {
                this.active = false                
            }
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
.tabs-item{
    padding: 0 1em;
    &.active{
        background: green;
    }
}
</style>
