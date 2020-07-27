<template>
  <div>
    <div
      class="day-container"
      v-for="(recipe, idx) in recipes"
      :key="recipe.id"
      @click="goToSingleRecipe(recipe.id)"
    >
      <span class="day-title">{{ days[idx] }}</span>
      <div class="recipe-card">
        <h2 class="recipe-title">
          {{ recipe.name }}
        </h2>
        <p class="recipe-ingredients">
          {{ recipe.ingredients.map(x => x.name).join(', ') }}
        </p>

        <p class="recipe-duration">~ {{ recipe.duration }} mins</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeeklyPlan',
  data() {
    return {
      days: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      recipes: [],
    };
  },
  methods: {
    goToSingleRecipe: function(id) {
      this.$router.push({
        name: 'singleRecipe',
        params: { id: id },
      });
    },
  },
  mounted: function() {
    const recipeLength = this.$store.state.recipes.length;

    for (let i = 0; i < 7; i += 1) {
      const id = Math.floor(Math.random() * (recipeLength - 0)) + 0;
      this.recipes.push(this.$store.state.recipes[id]);
    }
  },
};
</script>

<style scoped>
.day-container {
  display: grid;
  grid-template-columns: 1fr 3fr;
  align-items: center;
  padding: 1rem;
}

.day-title {
  display: block;
  font-size: 1.5rem;
  font-weight: bold;
  color: rgba(0 0 0 / 40%);
}
</style>
