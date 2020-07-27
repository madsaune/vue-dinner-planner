<template>
  <header>
    <h1>Dinner Planner</h1>

    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/recipes">Recipes</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
header {
  background: #000;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 1rem;
  margin-bottom: 4rem;
}

header h1 {
  margin: 0;
  color: #fff;
}

header nav {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}

header nav a {
  color: #fff;
}
</style>
