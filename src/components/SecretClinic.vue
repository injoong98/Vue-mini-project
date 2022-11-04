<template>
  <div>
    <h2>이해건의 은밀한 상담소</h2>
    <div></div>
    <form id="contact-form" class="col-6">
      <div class="mb-3">
        <label for="name" class="form-label">name</label>
        <input type="text" class="form-control" id="name" />
      </div>
      <input type="hidden" name="contentName" value="은밀한 상담소" />
      <input type="hidden" name="writer" value="이해건" />
      <div class="mb-3">
        <label for="user_email" class="form-label">email</label>
        <input type="email" class="form-control" id="user_email" />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">message</label>
        <input type="text" class="form-control" id="message" />
      </div>
      <br />
      <input type="submit" />
    </form>
  </div>
</template>

<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
></script>

<script>
export default {
  name: "SecretClinic",
  methods: {
    todaysFortune(event) {
      emailjs
        .sendForm("service_o9tqcal", "template_5anbvxn", event.target)
        .then(
          function () {
            console.log("SUCCESS!");
          },
          function (error) {
            console.log("FAILED...", error);
          }
        );
    },
  },
  data() {
    return {
      name: "",
      email: "",
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
