<template>
    <div class="popover" @click="closePopover">
        <div ref="contentWrapper" class="content-wrapper" v-show="showContent">
            <slot name="content"></slot>            
        </div>
        <span ref="triggerWrapper">
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
        closePopover(e) {
            if (this.$refs.triggerWrapper.contains(e.target)) {
                this.showContent = !this.showContent
                if (this.showContent === true) {
                    this.$nextTick(() => {
                        document.body.appendChild(this.$refs.contentWrapper)
                        let {width, height, top, left} = this.$refs.triggerWrapper.getBoundingClientRect()
                        this.$refs.contentWrapper.style.left = left + window.scrollX + 'px'
                        this.$refs.contentWrapper.style.top = top + window.scrollY - height + 'px'
                        let documentClose = (e) => {
                            if (!this.$refs.contentWrapper.contains(e.target)) {
                                this.showContent = false
                            }
                            document.removeEventListener('click', documentClose)
                        }
                        document.addEventListener('click', documentClose)
                    })
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
    border: 1px solid green;
}
</style>
