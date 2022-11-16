<template>
  <div>
    <span>제목 : {{ movie.title }}</span><br>
    <span>내용 : {{ movie.content }}</span>
  </div>
</template>

<script>
export default {
  name: "MovieListItem",
  props: {
    movie: Object,
  }
}
</script>

<style>

</style>