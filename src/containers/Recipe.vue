<template>
  <div>
    <h1>{{ recipe.name }}</h1>
    <img :src="recipe.img" :alt="recipe.name" />
    <p>Duration: {{ recipe.duration }} mins</p>
    <h2>Ingredients</h2>
    <ul>
      <li v-for="ingredient in recipe.ingredients" :key="ingredient.name">
        {{ ingredient.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recipe',
  data() {
    return {
      recipe: this.$store.state.recipes[this.$route.params.id - 1],
    };
  },
};
</script>

<style scoped>
img {
  max-height: 300px;
}
</style>
