<template>
    <div class="newsinfo-container">
        <div class="article-header">
            <h1>12年的等待！法国1:0险胜，赛后却传两大坏消息！姆巴佩引冲突</h1>
            <section class="article-author">
                <div class="author-avatar">
                    <img src="../../images/avatar.jpg" alt="">
                </div>
                <div class="author-message">
                    <h3>酷酷说球</h3>
                    <p>
                        <span>发表时间: 2015-04-16</span>
                        <span>点击: 13</span>
                    </p>
                </div>
            </section>
        </div>
        <div class="article-content">
            <p>北京时间7月11日讯。刚刚结束的世界杯半决赛的首场较量中，法国依靠乌姆蒂蒂破门，1:0险胜比利时进入决赛，本场比赛比利时开场就大打进攻，但是他们面对铁桶阵防守的法国，迟迟打不开局面，阿扎尔两次有威胁的射门都被洛里化解，比利时最后时刻发起反击，但是奈何时间不够，最终法国率先进入世界杯决赛，这是他们时隔12年再次闯入世界杯的决赛，这也是12年的等待，但是本场比赛赛后法国传两大坏消息！</p>
            <img src="../../images/test.jpg" alt="">
            <p>第一，中场的调度。本场比赛法国采用防守反击的策略，这一点就是因为法国主教练德尚对于他们后防线的信心，今天法国后防线可以说是大腿级别的表现，守门员以及进球功臣乌姆蒂蒂都是功臣，但是他们的中场的防守是个大问题，面对状态不佳的德布劳内他们多次被比利时从中路突破。</p>
            <p>第一，中场的调度。本场比赛法国采用防守反击的策略，这一点就是因为法国主教练德尚对于他们后防线的信心，今天法国后防线可以说是大腿级别的表现，守门员以及进球功臣乌姆蒂蒂都是功臣，但是他们的中场的防守是个大问题，面对状态不佳的德布劳内他们多次被比利时从中路突破。</p>
            <img src="../../images/test.jpg" alt="">
            <p>第一，中场的调度。本场比赛法国采用防守反击的策略，这一点就是因为法国主教练德尚对于他们后防线的信心，今天法国后防线可以说是大腿级别的表现，守门员以及进球功臣乌姆蒂蒂都是功臣，但是他们的中场的防守是个大问题，面对状态不佳的德布劳内他们多次被比利时从中路突破。</p>
            <img src="../../images/test.jpg" alt="">
        </div>
        <comment-box></comment-box>
    </div>
</template>
<script>
import comment from '../subcomponents/Comment.vue'
export default {
  data() {
    return {
      id: this.$route.id
    };
  },
  created() {},
  methods: {},
  components: {
      'comment-box': comment
  }
};
</script>
<style lang="less">
.newsinfo-container {
  .article-header {
    padding: 13px 17px 7px;
    h1 {
      font-size: 25px;
    }
    .article-author {
      overflow: hidden;
      display: flex;
      .author-avatar {
        flex-grow: 0;
        padding: 10px 10px 0 0;
        img {
          display: block;
          width: 34.5px;
          height: 34.5px;
          border-radius: 50%;
          border: 1px solid #ccc;
          visibility: bottom;
        }
      }
      .author-message {
        flex-grow: 1;
        padding-top: 10px;
        h3 {
          font-size: 15px;
          font-weight: normal;
        }
        p {
          font-size: 12px;
          display: flex;
          margin: 0;
          justify-content: space-between;
        }
      }
    }
  }
  .article-content {
      margin-bottom: 30px;
    p {
      padding: 0 17px;
      margin-top: 14px;
      margin-bottom: 0;
      font-size: 15px;
      color: #000;
    }
    img {
      padding: 0 17px;
      width: 100%;
      margin-top: 15px;
    }
  }
}
</style>

