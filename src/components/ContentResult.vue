<template>
  <div>
    <h2>결과 입니다.</h2>

    <p>{{ $route.params.message }}</p>

    <a id="kakaotalk-sharing-btn" @click="kakaoLink" href="javascript:;">
      <img
        src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
        alt="카카오톡 공유 보내기 버튼"
      />
    </a>
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

<style></style>
