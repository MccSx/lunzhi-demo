<template>
    <div class="popover" @click="closePopover" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-show="showContent">
            <slot name="content"></slot>            
        </div>
        <span ref="triggerWrapper" style="display:inline-block;">
            <slot></slot>
        </span>
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
        positionContent() {
            document.body.appendChild(this.$refs.contentWrapper)
            let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
            this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
            this.$refs.contentWrapper.style.top = top + window.scrollY - 5 + 'px'
        },
        documentClose(e) {
            if (this.$refs.popover === e.target || this.$refs.popover.contains(e.target)) {
                return
            }
            if (this.$refs.contentWrapper === e.target || this.$refs.contentWrapper.contains(e.target)) {
                return
            }
            this.close()
        },
        close() {
            this.showContent = false
            document.removeEventListener('click', this.documentClose)
        },
        open() {
            this.showContent = true
            this.$nextTick(() => {
                this.positionContent()
                document.addEventListener('click', this.documentClose)
            })
        },
        closePopover(e) {
            if (this.$refs.triggerWrapper.contains(e.target)) {
                // this.showContent = !this.showContent
                if (this.showContent === true) {
                    this.close()
                }else {
                    this.open()
                }
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
}
.content-wrapper{
    position: absolute;
    z-index: 999;
    border: 1px solid #999;
    transform: translateY(-100%);
    border-radius: 6px;
    padding: 10px;
    // box-shadow: 0 0 4px #999;
    filter: drop-shadow(0 1px 1px #999);
    background: #fff;
    max-width: 20em;
    word-break: break-all;
    &::before,&::after{
        content: '';
        width: 0;
        height: 0;
        display: block;
        position: absolute;
        left: 10%;
    }
    &::before{
        border: 5px solid transparent;
        border-top-color: #999;
        top: 100%;
    }
    &::after{
        border: 5px solid transparent;
        border-top-color: #fff;
        top: calc(100% - 2px);
    }
}
</style>
