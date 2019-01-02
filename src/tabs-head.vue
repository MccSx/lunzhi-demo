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
    border: 1px solid red;
    height: 50px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    .action-wrapper{
        margin-left: auto;
    }
}
</style>
