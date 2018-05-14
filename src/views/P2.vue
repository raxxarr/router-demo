<template>
    <div>
        This is Page 2.
        <button @click="jump">jump to page 1</button>
    </div>
</template>
<script>
    export default {
        name: 'p2',
        methods: {
            jump () {
                this.$router.push('/p1')
            }
        }
    }
</script>