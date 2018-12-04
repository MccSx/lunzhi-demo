<template>
    <div class="col" :class="`col-${dataSpan}`"></div>
</template>

<script>
    export default {
        name: 'x_col',
        props: {
            dataSpan: {
                type: Number,
                default() {
                    return 0
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
.col{
    height: 40px;
    width: 50%;
    background: #ccc;
    border: 1px solid red;
    @for $n from 1 through 24{
        &.col-#{$n} {width: $n/24*100%;}
    }

}
</style>
