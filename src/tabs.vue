<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'x_tabs',
    props: {
        selected: {
            type: String,
            default: ''
        },
        direction: {
            type: Boolean,
            default: 'transverse',
            validator() {
                ['transverse', 'vertical'].indexOf(value) > 0
            }
        }
    },
    created() {
        // this.$emit('update:selected', 'xxxx')
    },
}
</script>

<style lang="scss" scoped>
.tabs{}
</style>
