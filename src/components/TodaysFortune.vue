<template>
  <div>
    <h2>행운의 준용쿠키</h2>
    <img src="../assets/fc.jpg" />
    <br />
    <br />
    <form @submit="todaysFortune" id="contact-form">
      <label for="name">name: </label>
      <input type="text" v-model="name" name="name" />
      <input type="hidden" name="contentName" value="오늘의 포춘쿠키" />
      <input type="hidden" name="writer" value="선준용" />
      <br />
      <label for="email">email: </label>
      <input type="email" name="email" />
      <input type="hidden" name="message" /> <br />
      <input type="submit" />
    </form>
  </div>
</template>

<script
  type="text/javascript"
  src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
></script>
<script type="text/javascript">
(function () {
  emailjs.init("swV322sV-is7R1E48");
})();
</script>

<script>
export default {
  name: "TodaysFortune",
  methods: {
    todaysFortune(event) {
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
      name: "",
      email: "",
      messages: [
        "슬픔에 대한 치료법은 운동입니다.",
        "생각하지 말고, 행동하세요!.",
        "누군가를 사랑한다면 늦기 전에 많이 말해주세요.",
        "꼰대가 되기 싫다면 상대를 이해하고 존중하세요. 나이의 많고 적음은 중요하지 않습니다.",
        "인생의 모든 경험은 의미가 있습니다.",
        "나이를 내세우지 말고 젊음을 자랑하지 마라. 누구나 한때는 젊었고, 누구나 곧 늙는다.",
        "인색하게 굴지말고, 베풀때에는 꼭 베푸는 자비를 보여주세요.",
        "인생에서 가장 큰 후회는 아무도 사랑해 보지 않은 것이다.",
        "아름다운 입술을 가지고 싶다면 다른 사람을 칭찬하라!",
        "운동하려고 먹습니까? 먹으려고 운동하지! 건강하고 아름다운 사람, 행복한 아름다운 사람이 되세요.",
        "사랑이라는 꽃은 꺽는 것이 아니라, 지켜주고 가꿔주는 것입니다.",
        "1%의 의심과 99%의 믿음은 그냥 의심일 뿐이다. 의심이 끼어드는 순간 믿음의 가치는 깨어지는 것이니까.",
      ],
    };
  },
};
</script>

<style></style>
