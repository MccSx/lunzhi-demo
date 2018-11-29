<template>
    <div class="wrapper">
        <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
          @change="$emit('change', $event.target.value)"
          @input="$emit('input', $event.target.value)"
          @focus="$emit('focus', $event.target.value)"
          @blur="$emit('blur', $event.target.value)"
        >
        <template v-if="errorMsg">
            <Icon icon-name="error" class="icon-error"></Icon>
            <span class="error">{{errorMsg}}</span>
        </template>
    </div>
</template>

<script>
import Icon from './icon'

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
            },
            errorMsg: {
                type: String
            }
        },
        components: {Icon}
    }
</script>

<style lang="scss" scoped>
$border-color: #999;
$word-color: #333;
$border-color-hover: #666;
$color-disabled: #bbb;
$error-color: #F1453D;
$font-size: 12px;

.wrapper{
    font-size: $font-size;
    display: inline-flex;
    align-items: center;
    :not(:last-child){margin-right: 0.5em;}
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
    > .icon-error{fill: $error-color;}
    > .error{color: $error-color;}
}
</style>
