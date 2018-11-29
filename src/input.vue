<template>
    <div class="wrapper">
        <input :value="value" type="text" :disabled="disabled" :readonly="readonly">
    </div>
</template>

<script>
    export default {
        name: 'x_input',
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style lang="scss" scoped>
$border-color: #999;
$word-color: #333;
$border-color-hover: #666;
$color-disabled: #bbb;

.wrapper{
    display: inline-block;
    > input{
        width: 128px;
        height: 32px;
        border: 1px solid $border-color;
        border-radius: 4px;
        font-size: 14px;
        color: $word-color;
        padding: 0 8px;
        &:focus{outline: none; box-shadow: inset 0 1px 3px rgba(0,0,0,0.5)}
        &:hover{border-color: $border-color-hover;}
        &[disabled], &[readonly]{border-color: $color-disabled; color: $color-disabled; cursor: not-allowed;}
    }
}
</style>
