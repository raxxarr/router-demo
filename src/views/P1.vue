<template>
    <div>
        This is Page 1.
        <button @click="jump">jump to page 2</button>
    </div>
</template>
<script>
    export default {
        name: 'p1',
        methods: {
            jump () {
                this.$router.push('/p2')
            }
        }
    }
</script>