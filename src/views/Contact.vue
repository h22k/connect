<template>
  <div class="contact">
    <div class="get-in-touch">
      <span class="title">Get In Touch</span>
      <span class="desc">
        Lorem Ipsum
        is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer
        took a galley of type and scrambled it to make a type specimen book.
        It has survived not only five centuries,
      </span>
    </div>
    <div class="form">
      <form class="contact-form">
        <span class="form-title">Contact Form</span>
        <div class="inputs">

        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Contact"
}
</script>

<style scoped>
.contact {
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 200px);
  padding: 2vh var(--margin-x-spacing);
}
.get-in-touch {
  max-width: 60%;
  padding: 4vh 0;
}
.title {
  font-size: 2.5rem;
  color: var(--primary-text-color);
  text-transform: uppercase;
  display: inline-block;
  margin-bottom: 1.5vh;
}
.desc {
  display: inline-block;
  color: rgba(255, 255, 255, .6);
  margin-bottom: 2vh;
}
.form {
  width: 60%;
  background: var(--card-and-panel-background);
  height: 500px;
}
.contact-form {
  margin: 3rem;
}
.form-title {
  color: rgba(255, 255, 255, .6);
  font-size: 1.4rem;
}
</style>