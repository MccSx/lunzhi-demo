<template>
    <div class="tabs-pane">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'x-tabs-pane',
    inject: ['eventHub'],
    props: {
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
}
</script>

<style lang="scss" scoped>
.tabs-pane{}
</style>
