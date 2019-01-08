<template>
    <div class="popover" @click.stop="closePopover">
        <div class="content-wrapper" v-show="showContent" @click.stop>
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
    },
    methods: {
        closePopover() {
            this.showContent = !this.showContent
            if (this.showContent === true) {
                this.$nextTick(() => {
                    let documentClose = () => {
                        this.showContent = false
                        document.removeEventListener('click', documentClose)
                    }
                    document.addEventListener('click', documentClose)
                })
            }
        }
    },
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
