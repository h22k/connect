<template>
  <div class="header-container">
    <header class="header">
      <div class="links">
        <router-link
            :data-content="link.content"
            v-for="link in links"
            :key="link.id"
            class="link"
            :data-left="link.left"
            :data-top="link.top"
            active-class="active-link"
            exact
            :to="link.to">
          {{ link.text }}
        </router-link>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "HeaderSection",
  props: {
    links: Array
  }
}
</script>

<style scoped>
.header-container {
  max-width: 100%;
  background: var(--card-and-panel-background);
  padding: 0 var(--margin-x-spacing);
}

.header {
  color: white;
  max-width: 100%;
  height: 200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-family: 'Montserrat', sans-serif;
}

.links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  margin-top: 3vw;
}

.link {
  text-decoration: none;
  color: var(--primary-text-color);
  font-size: 2em;
  text-transform: uppercase;
  position: relative;
  padding: 3em 5em 3em 0;
}

.link.active-link::after {
  content: attr(data-content);
  top: 4vh;
  left: 0;
  font-size: 6rem;
  position: absolute;
  user-select: none;
  color: var(--input-background);
  z-index: -1;
}

@media (max-width: 1025px) {
  .links {
    flex-direction: column;
    margin-top: 0;
  }
  .link {
    padding: 1em;
    margin-right: 25vh;
    font-size: 1.5em;
  }
  .header {
    flex-direction: column;
  }
}
</style>