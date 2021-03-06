<template>
    <div class="popover" ref="popover">
        <div ref="contentWrapper" class="content-wrapper" v-show="showContent"
            :class="{[`position-${position}`]:true}"
        >
            <slot name="content" :close="close"></slot>            
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
    props: {
        position: {
            type: String,
            default: 'top',
            validator(value) {
                return ['top','bottom','left','right'].indexOf(value) !== -1
            }
        },
        eventMode: {
            type: String,
            default: 'click',
            validator(value) {
                return ['click','hover'].indexOf(value) !== -1
            }
        }
    },
    mounted() {
        if (this.$refs.popover) {
            if(this.eventMode === 'click') {
                this.$refs.popover.addEventListener('click', this.closePopover)
            } else {
                this.$refs.popover.addEventListener('mouseenter', this.open)
                this.$refs.popover.addEventListener('mouseleave', this.close)
            }
        }
    },
    destroyed() {
        if (this.$refs.popover) {
            if(this.eventMode === 'click') {
                this.$refs.popover.removeEventListener('click', this.closePopover)
            } else {
                this.$refs.popover.removeEventListener('mouseenter', this.open)
                this.$refs.popover.removeEventListener('mouseleave', this.close)
            }
        }
    },
    methods: {
        positionContent() {
            const {contentWrapper, triggerWrapper} = this.$refs
            document.body.appendChild(contentWrapper)
            const {width, height, top, left} = triggerWrapper.getBoundingClientRect()
            const {height: height2} = contentWrapper.getBoundingClientRect()
            let positions = {
                top: {left: left + window.scrollX, top: top + window.scrollY - 5},
                bottom: {left: left + window.scrollX, top: top + window.scrollY + height + 5},
                left: {left: left + window.scrollX - 5, top: top + window.scrollY + (height - height2)/2},
                right: {left: left + window.scrollX + width + 5, top: top + window.scrollY + (height - height2)/2}
            }
            contentWrapper.style.left = positions[this.position].left + 'px'
            contentWrapper.style.top = positions[this.position].top + 'px'
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
        border: 5px solid transparent;
    }
}
.content-wrapper.position-top{
    transform: translateY(-100%);
    &::before,&::after{
        left: 10%;
        border-bottom: none;
    }
    &::before{
        border-top-color: #999;
        top: 100%;
    }
    &::after{
        border-top-color: #fff;
        top: calc(100% - 1px);
    }
}
.content-wrapper.position-bottom{
    &::before,&::after{
        left: 10%;
        border-top: none;
    }
    &::before{
        border-bottom-color: #999;
        top: -5px;
    }
    &::after{
        border-bottom-color: #fff;
        top: -4px;
    }
}
.content-wrapper.position-left{
    transform: translateX(-100%);
    &::before,&::after{
        top: 50%;
        transform: translateY(-50%);
        border-right: none;
    }
    &::before{
        border-left-color: #999;
        left: 100%;
    }
    &::after{
        border-left-color: #fff;
        left: calc(100% - 1px);
    }
}
.content-wrapper.position-right{
    &::before,&::after{
        top: 50%;
        transform: translateY(-50%);
        border-left: none;
    }
    &::before{
        border-right-color: #999;
        left: -5px;
    }
    &::after{
        border-right-color: #fff;
        left: -4px;
    }
}
</style>
