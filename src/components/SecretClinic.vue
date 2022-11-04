<template>
  <div class="vh-100">
    <div
      id="main"
      :style="{
        backgroundImage: 'url(' + require('@/assets/SC_bg.png') + ')',
      }"
      class="vh-100"
    >
      <h2 class="py-5">이해건의 은밀한 상담소</h2>
      <div class="d-flex justify-content-center">
        <form @submit="send_SecretClinic" id="contact-form" class="col-4">
          <div class="mb-3">
            <label for="name" class="form-label">방황하는 어린 양</label>
            <input type="text" class="form-control" name="name" />
          </div>
          <input type="hidden" name="contentName" value="은밀한 상담소" />
          <input type="hidden" name="writer" value="이해건" />
          <div class="mb-3">
            <label for="email" class="form-label">email</label>
            <input type="email" class="form-control" name="email" />
          </div>
          <div class="mb-3">
            <label for="consultation" class="form-label">상담 내용</label>
            <textarea class="form-control" name="consultation"></textarea>
          </div>
          <input type="hidden" name="message" /> <br />
          <br />
          <button type="button" class="btn btn-secondary">전송</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
#main {
  background-size: cover;
}
</style>

<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
></script>

<script>
export default {
  name: "SecretClinic",
  methods: {
    send_SecretClinic(event) {
      const randomMessage =
        this.messages[Math.floor(Math.random() * this.messages.length)];
      event.target.message.value = randomMessage;

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
      this.$router.push({
        name: "ContentResult",
        params: { message: randomMessage },
      });
    },
  },
  data() {
    return {
      bgImg: "../assets/SC_bg.png",
      name: "",
      email: "",
      messages: [
        "그런 고민을 하고있다는 점에서 이미 잘하고 있으십니다.",
        "시간을 가지면 자연스럽게 해결되는 경우도 많습니다.",
        "혼자서 힘들다면 주변 사람에게 도움을 구해보세요.",
      ],
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
