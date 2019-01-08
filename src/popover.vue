<template>
    <div class="popover" @click="showContent = !showContent">
        <div class="content-wrapper" v-show="showContent">
            <slot name="content"></slot>            
        </div>
        <slot></slot>
    </div>    
</template>

<script>
export default {
    name: 'x_popover',
    data() {
        return {
            showContent: false
        }
    }
}
</script>

<style lang="scss" scoped>
.popover{
    display: inline-block;
    vertical-align: top;
    position: relative;
    .content-wrapper{
        position: absolute;
        bottom: 100%;
        left: 0;
        z-index: 999;
    }
}
</style>
