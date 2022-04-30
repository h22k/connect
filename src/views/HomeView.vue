<template>
  <div class="home">
    <div class="filter">
      <span class="title">Filter Results1</span>

      <div v-for="(input, key) in inputs" :key="key"
           class="filters">
        <FilterInput
            :commit="input.commit"
            :label="input.label"
            :type="input.type"
            :placeholder="input.placeholder"
        />
      </div>

      <SelectSection :options="options"/>

      <div class="btn-area">
        <button class="clear-btn">Clear</button>
      </div>
    </div>
    <div class="list">
      <div class="content">
        hakan
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import HeaderSection from "@/components/HeaderSection";
import FilterInput from "@/components/FilterInput";
import SelectSection from "@/components/SelectSection";

export default {
  name: 'HomeView',
  components: {
    SelectSection,
    FilterInput,
    HeaderSection
  },
  data: () => {
    return {
      inputs: [
        {
          type: 'text',
          commit: 'name',
          label: 'Name (Contains)',
          placeholder: 'Name'
        },
        {
          type: 'text',
          commit: 'min-score',
          label: 'Minimum Score',
          placeholder: '1-10'
        }
      ],
      options: [
        {
          label: 'Release Date',
          value: 'rel-date'
        },
        {
          label: 'Score',
          value: 'score'
        },
        {
          label: 'Name',
          value: 'name'
        }
      ]
    }
  }
}
</script>

<style scoped>
.btn-area {
  width: 100%;
  text-align: right;
  margin-top: 4vh;
}
.clear-btn {
  color: var(--button-text-color);
  background: var(--buttons-color);
  outline: none;
  border: none;
  margin-left: auto;
  padding: 1vh 2vw;
  cursor: pointer;

}

.filters {
  margin: 5vh 0;
}

.home {
  display: flex;
  position: relative;
  justify-content: space-between;
  max-width: 100%;
  padding: 0 var(--margin-x-spacing);
  background: linear-gradient(to right, var(--body-background-from), var(--body-background-to));
  color: var(--primary-text-color);
  gap: 10vw;
  padding-top: 5vh;
  font-family: 'Montserrat', sans-serif;
  min-height: calc(100vh - 200px);
}

.filter {
  background: var(--card-and-panel-background);
  flex: 1;
  height: 100%;
  padding: 2vh 2vw;
  font-size: 2em;
  font-weight: bold;
}

.title {
  display: inline-block;
  margin-bottom: 4vh;
}

.list {
  flex: 2;
  background: var(--card-and-panel-background);
  overflow-x: scroll;
  max-height: 500px;
}

.content {
  height: 100000px;
}
</style>