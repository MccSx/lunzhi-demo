<template>
    <svg class="icon" aria-hidden="true">
        <use :xlink:href="`#i-${iconName}`"></use>
    </svg>
</template>

<script>
    export default {
        props:['iconName']
    }
</script>

<style lang="scss" scoped>

</style>
