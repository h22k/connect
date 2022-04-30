<template>
  <div class="item">
    <div class="photo">
    </div>

    <div class="content">
      <div class="text">
        <div class="title">{{item.name}}</div>
        <div class="rel-date">Release Date: {{new Date(item.first_release_date).toLocaleDateString("en-US")}}</div>

        <span class="summary">
            {{item.summary | limit}}
          </span>
      </div>
      <span class="score">{{parseInt(item.rating)}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: {
      required: true,
      type: Object
    }
  }
}
</script>

<style scoped>

.item {
  display: flex;
  margin-bottom: 5vh;
  background: var(--card-and-panel-background);
}

.photo {
  width: 25%;
  background: black;
  min-width: 25%;
}

.content {
  flex: auto;
  height: 150px;
  display: flex;
  align-items: center;
  margin-left: 1vw;
  gap: 2vw;
  padding-right: 10px;
}

.text {
  width: 90%;
  overflow: hidden;
}

.score {
  background: var(--buttons-color);
  border-radius: 50%;
  justify-self: right;
  width: 36px;
  line-height: 36px;
  text-align: center;
}

.title {
  font-size: 1.8rem;
  color: var(--button-text-color);
}

.rel-date {
  margin-bottom: 2vh;
  margin-top: .5vh;
  font-size: .9rem;
  color: var(--primary-text-color);
}

.summary {
  color: var(--primary-text-color);
}

@media (max-width: 1025px) {
  .item {
    flex-direction: column;
    position: relative;
  }
  .photo {
    min-height: 15vh;
    width: 100%;
  }
  .score {
    position: absolute;
    top: 2vh;
    right: 2vh;
  }
  .content {
    padding-left: 2vw;
  }
  .text {
    width: 100%;
  }
}
</style>