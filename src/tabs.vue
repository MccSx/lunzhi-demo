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
        }
    }
}
</script>

<style lang="scss" scoped>
.tabs{}
</style>
