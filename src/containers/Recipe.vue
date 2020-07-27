<template>
  <div class="card">
    <img class="card-image" :src="recipe.img" :alt="recipe.name" />

    <div class="card-body">
      <h2 class="card-title">
        {{ recipe.name }} (~ {{ recipe.duration }} mins)
      </h2>

      <div class="card-description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est obcaecati
        iste unde quis quos exercitationem nihil rerum delectus sapiente
        officiis. Earum placeat, atque nulla corrupti iure debitis impedit
        minima harum!
      </div>
      <h3>Ingredients</h3>
      <ul>
        <li v-for="ingredient in recipe.ingredients" :key="ingredient.name">
          {{ ingredient.name }} ({{ ingredient.amount }})
        </li>
      </ul>

      <h3>Step-by-step</h3>

      <p class="step" v-for="(step, idx) in recipe.steps" :key="idx">
        {{ idx + 1 }}. {{ step }}
      </p>
    </div>
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
.card {
  margin: 0 auto;
  padding: 0;
  max-width: 800px;
  box-shadow: 1px 1px 3px rgb(0 0 0 / 25%);
  border-radius: 8px;
}

.card-image {
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.card-body {
  padding: 1rem;
  text-align: left;
}

.card-title {
  text-align: center;
}

@media only screen and (max-width: 820px) {
  .card {
    width: 100%;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    box-shadow: none;
  }

  .card-image {
    border-top-left-radius: 0px !important;
    border-top-right-radius: 0px !important;
  }
}
</style>
