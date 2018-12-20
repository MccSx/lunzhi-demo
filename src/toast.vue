<template>
    <div class="wrapper" :class="toastClasses">
        <div class="toast" ref="toast">
            <slot></slot>
            <div class="line" ref="line" v-if="closeButton.text"></div>
            <span class="close" v-if="closeButton.text" @click="userClose">{{closeButton.text}}</span>
        </div>
    </div>    
</template>

<script>
    export default {
        name: 'x_toast',
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            time: {
                type: Number,
                default: 1000
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '',
                        callback: undefined
                    }
                }
            },
            position:{
                type: String,
                default: 'top',
                validator(value) {
                    return ['top', 'middle', 'bottom'].indexOf(value) !== -1
                }
            }
        },
        mounted() {
            setTimeout(() => {
                if (this.autoClose) {
                    this.close()
                }
            }, this.time);
            this.$nextTick(() => {
                if (this.$refs.line) {
                    this.$refs.line.style.height = this.$refs.toast.getBoundingClientRect().height + 'px'
                }
            })
        },
        computed: {
            toastClasses() {
                return { [`position-${this.position}`] : true }
            }
        },
        methods: {
            close() {
                this.$el.remove()
                this.$emit('beforeClose')
                this.$destroy()
            },
            userClose() {
                this.close()
                if (this.closeButton && typeof this.closeButton.callback === 'function') {
                    this.closeButton.callback()
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
@keyframes fadeInFromTop {
    0%{opacity: 0; transform: translateY(-100%);}
    100%{opacity: 1; transform: translateY(0);}
}
@keyframes fadeInFromMiddle {
    0%{opacity: 0;}
    100%{opacity: 1;}
}
@keyframes fadeInFromBottom {
    0%{opacity: 0; transform: translateY(100%);}
    100%{opacity: 1; transform: translateY(0);}
}
.wrapper{
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    &.position-top{
        top: 0;
        .toast{
            border-top-left-radius: 0;
            border-top-right-radius: 0;
            animation: fadeInFromTop 300ms;
        }
    }
    &.position-middle{
        top: 50%;
        transform: translateY(-50%);
        animation: fadeInFromMiddle 300ms;
    }
    &.position-bottom{
        bottom: 0;
        .toast{
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            animation: fadeInFromBottom 300ms;
        }
    }
}
.toast{
    
    font-size: 14px;
    text-align: center;
    line-height: 2.2;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 0 10px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    .line{
        border-left: 1px solid #999;
        margin: 0 10px;
    }
    .close{
        flex-shrink: 0;
        cursor: pointer;
    }
}
</style>
