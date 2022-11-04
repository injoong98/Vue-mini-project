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
  methods: {
    todayFortune() {
      document
        .getElementById("contact-form")
        .addEventListener("submit", function (event) {
          event.preventDefault();
          this.contact_number.value = (Math.random() * 100000) | 0;
          emailjs.sendForm("service_o9tqcal", "template_5anbvxn", this).then(
            function () {
              console.log("SUCCESS!");
            },
            function (error) {
              console.log("FAILED...", error);
            }
          );
        });
    },
  },
};
</script>

<style></style>
