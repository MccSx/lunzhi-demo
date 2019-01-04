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
        this.eventHub.$on('update:selected', (name, width) => {
            if (name === this.name) {
                this.active = true
            } else {
                this.active = false                
            }
        })
    },
    methods: {
        itemClick() {
            let {width, left} = this.$el.getBoundingClientRect()
            this.eventHub.$emit('update:selected', this.name, width, left)
        }
    },
}
</script>

<style lang="scss" scoped>
.tabs-item{
    padding: 0 1em;
    cursor: pointer;
    line-height: 40px;
    &.active{
        color: #409EFF;
    }
}
</style>
