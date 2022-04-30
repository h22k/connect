<template>
  <div class="home">
    <FilterArea />
    <List/>
  </div>
</template>

<script>
// @ is an alias to /src

import List from "@/components/List"
import FilterArea from "@/components/FilterArea"

export default {
  name: 'HomeView',
  components: {
    FilterArea,
    List,
  },
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 100%;
  padding: 5vh var(--margin-x-spacing);
  padding-right: calc(var(--margin-x-spacing) / 2);
  background: linear-gradient(to right, var(--body-background-from), var(--body-background-to));
  color: var(--primary-text-color);
  gap: 10vw;
  font-family: 'Montserrat', sans-serif;
  min-height: calc(100vh - 200px);
  height: 100%;
  overflow: visible;
}
@media (max-width: 1025px) {
  .home {
    flex-direction: column;
  }
}
</style>