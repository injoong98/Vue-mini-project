<template>
  <div>
    <h2>이해건의 은밀한 상담소</h2>
    <div></div>
    <form id="contact-form" class="col-6">
      <div class="mb-3">
        <label for="name" class="form-label">name</label>
        <input type="text" class="form-control" id="name" />
      </div>
      <div class="mb-3">
        <label for="user_email" class="form-label">email</label>
        <input type="email" class="form-control" id="user_email" />
      </div>
      <div class="mb-3">
        <label for="message" class="form-label">message</label>
        <input type="text" class="form-control" id="message" />
      </div>
      <br />
      <input type="submit" value="Send" />
    </form>
  </div>
</template>

<script>
export default {
  name: "SecretClinic",
  data() {
    return {};
  },
};
</script>

<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
></script>

<script type="text/javascript">
(function () {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init("swV322sV-is7R1E48");
})();
</script>
<script type="text/javascript">
window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = (Math.random() * 100000) | 0;
      // these IDs from the previous steps
      emailjs.sendForm("service_o9tqcal", "template_5anbvxn", this).then(
        function () {
          console.log("SUCCESS!");
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
    });
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
