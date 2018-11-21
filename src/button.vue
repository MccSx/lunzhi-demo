<template>
    <button class="s-button" :class="{[`icon-${iconPosition}`]:true}">
        <!-- <svg v-if="icon" class="icon" aria-hidden="true">
            <use :xlink:href="`#i-${icon}`"></use>
        </svg> -->
        <s-icon class="i" :icon-name="icon"></s-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        // props:['icon','iconPosition']
        props: {
            icon: {},
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
}
</style>
