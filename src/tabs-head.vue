<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="action-wrapper">
           <slot name="action"></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'x_tabs_head'
}
</script>

<style lang="scss" scoped>
.tabs-head{
    height: 40px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid #ddd;
    .action-wrapper{
        margin-left: auto;
    }
}
</style>
