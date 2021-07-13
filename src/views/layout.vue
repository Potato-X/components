<template>
  <div class="box">
    <div class="layout-box">
      <layout-wrapper hassider="row">
        <aside-bar></aside-bar>
        <layout-wrapper>
          <header-bar></header-bar>
          <content-bar></content-bar>
          <footer-bar></footer-bar>
        </layout-wrapper>
      </layout-wrapper>
    </div>
    <hr />
    <div class="layout-box">
      <layout-wrapper hassider="col">
        <header-bar></header-bar>
        <content-bar></content-bar>
        <footer-bar></footer-bar>
      </layout-wrapper>
    </div>
    <hr>
    <div class="layout-box">
      <layout-wrapper hassider="col">
        <header-bar></header-bar>
        <layout-wrapper hassider="row">
          <aside-bar></aside-bar>
          <content-bar></content-bar>
        </layout-wrapper>
        <footer-bar></footer-bar>
      </layout-wrapper>
    </div>
    <hr>
    <div class="layout-box">
      <layout-wrapper hassider="col">
        <header-bar></header-bar>
        <layout-wrapper hassider="row">
          <content-bar></content-bar>
          <aside-bar></aside-bar>
        </layout-wrapper>
        <footer-bar></footer-bar>
      </layout-wrapper>
    </div>
  </div>
</template>
<script>
import AsideBar from "../components/Layout/AsideBar.vue";
import HeaderBar from "../components/Layout/HeaderBar.vue";
import Content from "../components/Layout/Content.vue";
import FooterBar from "../components/Layout/FooterBar.vue";
import LayoutWrapper from "../components/Layout/LayoutWrapper.vue";
export default {
  components: {
    LayoutWrapper,
    AsideBar,
    HeaderBar,
    "content-bar": Content,
    FooterBar
  }
};
</script>
<style lang="scss">
.layout-box {
  position: relative;
  height: 600px;
}
.box {
  position: relative;
  height: 2700px;
}
</style>
