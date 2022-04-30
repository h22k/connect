<template>
  <div id="app">
    <HeaderSection :links="links"/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<style>
@import "./assets/main.css";
.container {
  background: linear-gradient(to right, var(--body-background-from), var(--body-background-to));
  padding-bottom: 10vh;
}
</style>
<script>
import HeaderSection from "@/components/HeaderSection"
export default {
  components: {HeaderSection},
  data: () => {
    return {
      links: [
        {
          to: '/',
          text: 'Video Games',
          content: 'Video',
          id: 1,
          left: '1vw',
          top: '3vh'
        },
        {
          to: '/contact',
          text: 'Contact',
          content: 'Contact',
          id: 2,
          left: '3vw',
          top: '3vh'
        }
      ]
    }
  }
}
</script>