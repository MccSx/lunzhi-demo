<template>
    <div class="toast">
        <slot></slot>
        <div class="line" v-if="closeButton.text"></div>
        <span class="close" v-if="closeButton.text" @click="userClose">{{closeButton.text}}</span>
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
                default: 3000
            },
            closeButton: {
                type: Object,
                default() {
                    return {
                        text: '',
                        callback: undefined
                    }
                }
            }
        },
        mounted() {
            // setTimeout(() => {
            //     if (this.autoClose) {
            //         this.close()
            //     }
            // }, this.time);
        },
        methods: {
            close() {
                this.$el.remove()
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
.toast{
    font-size: 14px;
    text-align: center;
    line-height: 2.2;
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 0 10px;
    border-radius: 10px;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    .line{
        border-left: 1px solid red;
        margin: 0 10px;
    }
    .close{
        flex-shrink: 0;
        cursor: pointer;
    }
}
</style>
