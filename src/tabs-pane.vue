<template>
    <div class="tabs-pane" :class="active ? 'active' : ''" v-show="active">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'x-tabs-pane',
    inject: ['eventHub'],
    data() {
        return {
            active: false
        }
    },
    props: {
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
}
</script>

<style lang="scss" scoped>
.tabs-pane{
    // display: none;
    &.active{
        // background: green;
    }
}
</style>
