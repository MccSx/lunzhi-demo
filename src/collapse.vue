<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'x_collapse'
}
</script>

<style lang="scss" scoped>
.collapse{
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>
