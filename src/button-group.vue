<template>
    <span class="button-group">
        <slot></slot>
    </span>
</template>

<script>
    export default {
        mounted() {
            for (let node of this.$el.children) {
                let name = node.nodeName.toLowerCase()
                if (name !== 'button') {
                    console.warn(`s-button-group组件的子元素应该全是s-button，但你写的是${name}`)
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.button-group{
    vertical-align: middle;
    display: inline-flex;
    button:first-child{
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }
    button:last-child{
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        margin-left: -1px;
    }
    button:hover{
        position: relative;
        z-index: 1;
    }
}
</style>
