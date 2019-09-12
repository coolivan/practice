<template>
    <div>
        BookBoy
    </div>
</template>
<script>
export default {
    name: 'BookBoy',
    created() {
        localStorage.setItem('book-type', 'book-boy');
    }
}
</script>