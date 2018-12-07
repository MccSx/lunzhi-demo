<template>
    <div class="content">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'x_content'
}
</script>

<style lang="scss" scoped>
.content{
    flex-grow: 1;
    background: #ccc;
}
</style>