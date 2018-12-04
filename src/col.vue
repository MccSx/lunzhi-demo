<template>
    <div class="col" :class="[dataSpan && `col-${dataSpan}`, offset && `offset-${offset}`]"
        :style="{paddingLeft:gutter/2+'px', paddingRight:gutter/2+'px'}"
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
