<template>
  <div>
    <img
      src="../assets/resultBack.jpg"
      style="
        position: absolute;
        z-index: -100;
        top: 0px;
        left: 0px;
        width: 100vw;
      "
    />
    <div style="margin-top: 50px">
      <h2>준용쿠키가 발송되었습니다.</h2>
      <p>이메일을 확인해보세요</p>

      <a id="kakaotalk-sharing-btn" @click="kakaoLink" href="javascript:;">
        <img
          src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
          alt="카카오톡 공유 보내기 버튼"
        />
      </a>
      <div>카카오톡으로 공유도 할 수 있어요</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContentResult",
  props: {
    message: {
      type: String,
      default: "",
    },
  },
  methods: {
    kakaoLink() {
      window.Kakao.Link.sendDefault({
        objectType: "text",
        text: this.$route.params.message,
        link: {
          mobileWebUrl: "https://developers.kakao.com",
          webUrl: "https://developers.kakao.com",
        },
      });
    },
  },
};
</script>

<style scoped>
* {
  color: white;
}
</style>
