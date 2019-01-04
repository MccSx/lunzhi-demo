<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="action-wrapper">
           <slot name="action"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'x_tabs_head',
    inject: ['eventHub'],
    mounted() {
        this.eventHub.$on('update:selected', (name, width, left) => {
            // console.log(left)
            this.$refs.line.style.width = width + 'px'
            this.$refs.line.style.left =  left + 'px'
        })  
    },
}
</script>

<style lang="scss" scoped>
.tabs-head{
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #ddd;
    position: relative;
    .line{
        position: absolute;
        bottom: 0;
        border-bottom: 2px solid #409EFF;
        transition: all 350ms;
    }
    .action-wrapper{
        margin-left: auto;
    }
}
</style>
