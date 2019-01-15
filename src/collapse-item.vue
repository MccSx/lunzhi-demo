<template>
    <div class="collapse-item">
        <div class="title" :class="isOpen ? '': 'open'">
            {{title}}
        </div>
        <div class="content" v-show="isOpen" :class="isOpen ? 'open' : ''">
            <slot></slot>
        </div>
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
    },
    data() {
        return {
            isOpen: true
        }
    }
}
</script>

<style lang="scss" scoped>
.collapse-item{
    .title{
        border-bottom: 1px solid #ccc;
        padding: 10px 10px;
    }
    .content{
        border-bottom: 1px solid #ccc;
        padding: 10px 10px;
    }
    &:last-child{
        .title.open{
            border-bottom: none;
        }
        .content.open{
            border-bottom: none;
        }
    }
}
</style>