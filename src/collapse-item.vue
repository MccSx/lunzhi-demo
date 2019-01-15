<template>
    <div class="collapse-item">
        <div class="title">
            {{title}}
        </div>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'x_collapse_item',
    props: {
        title: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.collapse-item{
    
}
</style>