<template>
    <button class="s-button" :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')">
        <s-icon class="i" v-if="icon && !isLoading" :icon-name="icon"></s-icon>
        <s-icon class="i icon-loading" v-if="isLoading" icon-name="loading"></s-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
import Vue from 'vue'
import Icon from './icon'
Vue.component('s-icon', Icon)

    export default {
        // props:['icon','iconPosition']
        props: {
            icon: {},
            isLoading:{
                type:Boolean,
                default:false
            },
            iconPosition: {
                type: String,
                default: 'left',
                validator(value) {
                    return !(value !== 'left' && value !== 'right')
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
@keyframes spin {
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
}
.s-button{
    font-size: var(--font-size);
    height: var(--button-height);
    padding: 0 1em;
    border-radius: var(--button-radius);
    border: 1px solid var(--border-color);
    background: var(--button-bg);
    display: inline-flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    &:hover{
        border-color: var(--border-color-hover);
    }
    &:active{
        background: var(--button-active-bg);
    }
    &:focus{
        outline: none;
    }
    > .i{order: 1; margin-right: 0.3em;}
    > .content{order: 2;}
    &.icon-right{
        > .i{order:2; margin-right: 0; margin-left: 0.3em;}
        > .content{order: 1;}
    }
    .icon-loading{animation: spin 1s infinite linear;}
}
</style>
