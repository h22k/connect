<template>
  <div id="app">
    <HeaderSection :links="links"/>
    <router-view/>
  </div>
</template>

<style>
@import "./assets/main.css";
</style>
<script>
import HeaderSection from "@/components/HeaderSection";
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