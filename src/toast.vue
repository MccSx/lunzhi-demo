<template>
    <div class="toast">
        <slot></slot>
    </div>    
</template>

<script>
    export default {
        name: 'x_toast'
    }
</script>

<style lang="scss" scoped>
.toast{
    background: rgba(0, 0, 0, 0.5);
    color: #fff;
    padding: 10px 20px;
    border-radius: 10px;
}
</style>
