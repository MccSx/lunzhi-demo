<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="`#i-${iconName}`"></use>
    </svg>
</template>

<script>
import  './svg'
    export default {
        name:'x_icon',
        props:['iconName']
    }
</script>

<style lang="scss" scoped>

</style>
