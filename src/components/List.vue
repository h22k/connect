<template>
  <div class="list" v-if="movies.length > 0 && isLoaded">
    <Item :key="item.id" v-for="item in movies" :item="item"/>
  </div>
  <div class="list" v-else-if="movies.length === 0 && isLoaded">
    No result
  </div>
  <div class="list" v-else>
    Loading...
  </div>
</template>

<script>
import Item from "@/components/Item"
import {mapGetters} from 'vuex'

export default {
  name: "List",
  components: {
    Item
  },
  created() {
    if (! this.isLoaded) {
      this.$store.dispatch('getAndSetMovies')
    }
  },
  computed: {
    ...mapGetters(['movies', 'isLoaded'])
  }
}
</script>

<style scoped>
.list {
  flex: 2;
  align-self: flex-start;
  justify-content: space-between;
  height: auto;
  overflow-y: auto;
  width: 100%;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.list::-webkit-scrollbar {
  display: none;
}
</style>