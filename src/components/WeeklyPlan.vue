<template>
  <div class="week-container">
    <div
      class="day-container"
      v-for="(recipe, idx) in recipes"
      :key="recipe.id"
    >
      <span class="day-title">{{ days[idx] }}</span>
      <div class="recipe-card" @click="goToSingleRecipe(recipe.id)">
        <div class="recipe-image">
          <img :src="recipe.img" :alt="recipe.name" />
        </div>
        <div class="recipe-body">
          <h2 class="recipe-title">
            {{ recipe.name }}
          </h2>
          <p class="recipe-description">
            {{ recipe.description }}
          </p>

          <p class="recipe-duration">
            <span>🕒</span> ~ {{ recipe.duration }} mins
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WeeklyPlan',
  data() {
    return {
      days: ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'],
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
.week-container {
  margin: 0 auto;
  max-width: 800px;
}

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

.recipe-description {
  font-size: 0.9rem;
  margin-top: 0;
}

.recipe-duration {
  font-size: 0.8rem;
  font-style: italic;
}

.recipe-duration span {
  font-style: normal;
}

.recipe-image img {
  width: 200px;
  display: block;
}

.recipe-title {
  margin-top: 0;
  margin-bottom: 0.5rem;
}
</style>
