<template>
  <div>
    <h1>Welcome, here's your week!</h1>
    <p>Week {{ weekNumber }}</p>
    <WeeklyPlan />
  </div>
</template>

<script>
import WeeklyPlan from './../components/WeeklyPlan';

export default {
  name: 'Home',
  components: {
    WeeklyPlan,
  },
  computed: {
    weekNumber: function() {
      const startOfYear = new Date(new Date().getFullYear(), 0, 1);
      return Math.ceil(
        ((new Date() - startOfYear) / 86400000 + startOfYear.getDay() + 1) / 7
      );
    },
  },
};
</script>

<style></style>
