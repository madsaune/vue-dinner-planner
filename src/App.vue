<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header';

export default {
  name: 'App',
  components: { Header },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
  display: block;
  text-align: left;
  padding: 1rem;
  border: 1px solid rgb(0 0 0 / 25%);
  border-radius: 8px;
  cursor: pointer;
}

.recipe-ingredients {
  font-size: 0.9rem;
}

.recipe-duration {
  font-size: 0.8rem;
  font-style: italic;
  color: rgba(0 0 0 / 25%);
}
</style>
