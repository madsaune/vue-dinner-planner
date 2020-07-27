<template>
  <div>
    <h1>Recipes</h1>

    <ul class="recipe-list">
      <li
        class="recipe-card"
        v-for="recipe in this.$store.state.recipes"
        :key="recipe.id"
        @click="goToSingleRecipe(recipe.id)"
      >
        <h2>{{ recipe.name }}</h2>
        <p class="recipe-ingredients">
          Ingredients: {{ recipe.ingredients.map(x => x.name).join(', ') }}
        </p>
        <p class="recipe-duration">~ {{ recipe.duration + ' mins' }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Recipes',
  methods: {
    goToSingleRecipe: function(id) {
      this.$router.push({
        name: 'singleRecipe',
        params: { id: id },
      });
    },
  },
};
</script>

<style>
.recipe-list {
  margin: 0 auto;
  padding: 0;
  width: 600px;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 1rem;
  list-style: none;
}

.recipe-card {
  display: block;
  text-align: left;
  padding: 1rem;
  border: 1px solid rgb(0 0 0 / 25%);
  border-radius: 8px;
  cursor: pointer;
}
</style>
