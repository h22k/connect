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
          <ContactInput v-for="(input, key) in inputs" :key="key" :inf="input" />
        </div>
        <div class="submit w-92">
          <Btn text="Send" dispacth-msg="nll" />
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import ContactInput from "@/components/ContactInput";
import Btn from "@/components/Btn";
export default {
  name: "Contact",
  components: {Btn, ContactInput},
  data: () => {
    return {
      inputs: [
        {
          label: 'Name',
          isRequired: true,
          isFullWidth: false
        },
        {
          label: 'Email Address',
          isRequired: true,
          isFullWidth: false
        },
        {
          label: 'Message',
          isRequired: true,
          isFullWidth: true
        }
      ]
    }
  }
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
}
.contact-form {
  margin: 1.5rem;
}
.form-title {
  color: var(--primary-text-color);
  font-size: 1.4rem;
}
.inputs {
  display: flex;
  width: 100%;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 3vh;
  height: auto;
}
.submit {
  text-align: right;
  margin-top: 2vh;
  width: 93%;
}
@media (max-width: 1025px) {
  .get-in-touch {
    margin-top: 5vh;
    max-width: 95%;
  }
  .contact {
    height: auto;
  }
  .form {
    width: 95%;
  }
}
</style>