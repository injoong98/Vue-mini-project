<template>
  <form id="contact-form">
    이름을 입력해주세요 :
    <input type="name" name="name" />
    <br />
    <label>email</label>
    <input type="email" name="user_email" />
    <input type="hidden" name="message" />
    <input type="submit" value="Send" />
  </form>
</template>

<script>
export default {
  name: "TodaysFortune",
};
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

<style></style>
