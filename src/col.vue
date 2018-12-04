<template>
    <div class="col" :class="colClass"
        :style="colStyle"
    >
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'x_col',
        props: {
            dataSpan: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            }
        },
        computed: {
            colClass() {
                let {dataSpan, offset} = this
                return [
                    dataSpan && `col-${dataSpan}`,
                    offset && `offset-${offset}`
                ]
            },
            colStyle() {
                return {
                    paddingLeft: this.gutter/2+'px',
                    paddingRight: this.gutter/2+'px'
                }
            }
        },
        data() {
            return {
                gutter: 0
            }
        }
    }
</script>

<style lang="scss" scoped>
.col{
    height: 40px;
    width: 50%;
    @for $n from 1 through 24{
        &.col-#{$n} {width: $n/24*100%;}
    }
    @for $n from 1 through 24{
        &.offset-#{$n} {margin-left: $n/24*100%;}
    }
    div{
        height: 100%;
        border: 1px solid red;
        background: #ccc;
    }
}
</style>
