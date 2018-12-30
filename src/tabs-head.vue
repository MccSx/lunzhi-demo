<template>
    <div class="tabs-head">
        <slot></slot>
        <slot name="action"></slot>
    </div>
</template>

<script>
export default {
    name: 'x_tabs_head'
}
</script>

<style lang="scss" scoped>
.tabs-head{}
</style>
