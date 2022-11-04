<template>
  <div>
    <h2>결과 입니다.</h2>
    <p>{{ $route.params.message }}</p>

    <a id="kakaotalk-sharing-btn" href="javascript:;">
      <img
        src="https://developers.kakao.com/assets/img/about/logos/kakaotalksharing/kakaotalk_sharing_btn_medium.png"
        alt="카카오톡 공유 보내기 버튼"
      />
    </a>
  </div>
</template>

<script>
export default {};
</script>

<script
  src="https://t1.kakaocdn.net/kakao_js_sdk/2.0.0/kakao.min.js"
  integrity="sha384-PFHeU/4gvSH8kpvhrigAPfZGBDPs372JceJq3jAXce11bVA6rMvGWzvP4fMQuBGL"
  crossorigin="anonymous"
></script>
<script>
Kakao.init("c089c8172def97eb00c07217cae17495"); // 사용하려는 앱의 JavaScript 키 입력
</script>

<script>
Kakao.Share.createDefaultButton({
  container: "#kakaotalk-sharing-btn",
  objectType: "feed",
  content: {
    title: "준용의 행운쿠키",
    description: "#오늘의행운 #포춘쿠키 #행운쿠키",
    imageUrl:
      "http://k.kakaocdn.net/dn/Q2iNx/btqgeRgV54P/VLdBs9cvyn8BJXB3o7N8UK/kakaolink40_original.png",
    link: {
      mobileWebUrl: "https://developers.kakao.com",
      webUrl: "https://developers.kakao.com",
    },
  },
  social: {
    likeCount: 286,
    commentCount: 45,
    sharedCount: 845,
  },
  buttons: [
    {
      title: "웹으로 보기",
      link: {
        mobileWebUrl: "https://developers.kakao.com",
        webUrl: "https://developers.kakao.com",
      },
    },
  ],
});
</script>

<style></style>
