<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item >1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
        <ul class="mui-row">
          <li class="mui-col-sm-4 mui-col-xs-4">
            <a href="#">
              <img src="../../images/callme.png" alt="">
              <p>联系我们</p>
            </a>
          </li>
          <li class="mui-col-sm-4 mui-col-xs-4">
            <a href="#">
              <img src="../../images/feedback.png" alt="">
              <p>手机充值</p>
            </a>
          </li>
          <li class="mui-col-sm-4 mui-col-xs-4">
            <a href="#">
              <img src="../../images/goodShow.png" alt="">
              <p>购物</p>
            </a>
          </li>
          <li class="mui-col-sm-4 mui-col-xs-4">
            <a href="#">
              <img src="../../images/news.png" alt="">
              <p>新闻资讯</p>
            </a>
          </li>
          <li class="mui-col-sm-4 mui-col-xs-4">
            <a href="#">
              <img src="../../images/picShare.png" alt="">
              <p>图片分享</p>
            </a>
          </li>
          <li class="mui-col-sm-4 mui-col-xs-4">
            <a href="#">
              <img src="../../images/search.png" alt="">
              <p>视频专区</p>
            </a>
          </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style lang="less" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }
    &:nth-child(2) {
      background-color: yellow;
    }
    &:nth-child(3) {
      background-color: blue;
    }
  }
}
ul {
  list-style: none;
  padding: 0;
  background-color: #fff;
  

  li {
    a {
      display: block;
      border-radius: 50%;
      margin-bottom: 30px;
      img {
        width: 60px;
        height: 60px;
        margin: 0 auto; 
        display: block;
        margin-bottom: 10px;
      }
      p {
        text-align: center;
        margin: 0;
      }
    }
  }
}
</style>

