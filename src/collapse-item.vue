<template>
    <div class="collapse-item">
        <div class="title" :class="isOpen ? '': 'open'" @click="clickItem">
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
    inject: ['eventHub'],
    props: {
        title: {
            type: String,
            required: true
        },
        name: {
            type: [String, Number],
            required: true
        }
    },
    created() {
        this.eventHub.$on('single', (bool) => {
            this.single = bool
        })
        this.eventHub.$on('select', (name) => {
            if (this.single) {
                if (name === this.name) {
                    this.isOpen = true
                } else {
                    this.isOpen = false
                }
            }
        })
    },
    data() {
        return {
            isOpen: false,
            single: false
        }
    },
    methods: {
        clickItem() {
            this.isOpen = !this.isOpen
            this.eventHub.$emit('select', this.name)
        }
    },
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