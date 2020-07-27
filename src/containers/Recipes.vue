<template>
  <div>
    <h1>📃 Recipes</h1>

    <ul class="recipe-list">
      <li
        class="recipe-card"
        v-for="recipe in this.$store.state.recipes"
        :key="recipe.id"
        @click="goToSingleRecipe(recipe.id)"
      >
        <div class="recipe-image">
          <img :src="recipe.img" :alt="recipe.name" />
        </div>
        <div class="recipe-body">
          <h2 class="recipe-title">{{ recipe.name }}</h2>
          <p class="recipe-description">
            {{ recipe.description }}
          </p>
          <p class="recipe-duration">
            <span>🕒</span>
            ~ {{ recipe.duration + ' mins' }}
          </p>
        </div>
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
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-column-gap: 1rem;
  text-align: left;
  padding: 1rem;
  border: 1px solid rgb(0 0 0 / 25%);
  border-radius: 8px;
  cursor: pointer;
}

.recipe-image img {
  width: 200px;
}

.recipe-title {
  margin-top: 0;
}
</style>
