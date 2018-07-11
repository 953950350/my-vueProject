<template>
    <div class="comment-container">
        <h3>发表评论</h3>
        <hr>
        <textarea maxlength="120" rows="6" placeholder="评论最多120个字"></textarea>
        <mt-button type="primary" size="large">发表</mt-button>
        <ul class="comment-item">
            <li>
                <div class="comment-item-img">
                    <img src="../../images/comment.jpg" alt="">
                </div>
                <div class="comment-item-content">
                    <div class="comment-item-author">乌姆蒂蒂</div>
                    <p>本来对法国没什么感觉，但是这姆巴佩小小年纪………，品行太差，转黑，有同感的吗</p>
                    <span>9小时前</span>
                </div>
            </li>
            <li>
                <div class="comment-item-img">
                    <img src="../../images/comment.jpg" alt="">
                </div>
                <div class="comment-item-content">
                    <div class="comment-item-author">乌姆蒂蒂</div>
                    <p>本来对法国没什么感觉，但是这姆巴佩小小年纪………，品行太差，转黑，有同感的吗</p>
                    <span>9小时前</span>
                </div>
            </li>
            <li>
                <div class="comment-item-img">
                    <img src="../../images/comment.jpg" alt="">
                </div>
                <div class="comment-item-content">
                    <div class="comment-item-author">乌姆蒂蒂</div>
                    <p>本来对法国没什么感觉，但是这姆巴佩小小年纪………，品行太差，转黑，有同感的吗</p>
                    <span>9小时前</span>
                </div>
            </li>
            <li>
                <div class="comment-item-img">
                    <img src="../../images/comment.jpg" alt="">
                </div>
                <div class="comment-item-content">
                    <div class="comment-item-author">乌姆蒂蒂</div>
                    <p>本来对法国没什么感觉，但是这姆巴佩小小年纪………，品行太差，转黑，有同感的吗</p>
                    <span>9小时前</span>
                </div>
            </li>
        </ul>
        <mt-button type="primary" size="large" plain>打开超级App,查看899条精彩评论</mt-button>
    </div>
</template>

<script>
    
</script>
<style lang="less" scoped>
.comment-container {
    padding: 0 17px;
    .comment-item {
        padding-bottom: 20px;
        li {
            padding-top: 20px;
            overflow: hidden;
            display: flex;
            .comment-item-img {
                padding-right: 10px;
                img {
                    width: 34.5px;
                    height: 34.5px;
                    display: block;
                    border-radius: 50%;
                }
            }
            .comment-item-content {
                .comment-item-author {
                    width: 100%;
                    font-size: 15px;
                    color: #405b95;
                    padding-bottom: 5px;
                }
                p {
                    font-size: 20px;
                    color: #000;
                }
                span {
                    color: #999;
                    font-size: 12px;
                }
            }

        }
    }
}
</style>

