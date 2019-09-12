<template>
    <div>
        BookGirl
    </div>
</template>
<script>
export default {
    name: 'BookGirl',
    created() {
        localStorage.setItem('book-type', 'book-girl');
    }
}
</script>