<template>
    <div class="imglist-container">
        <ul>
            <li>
                <a href="#">全部</a>
            </li>
            <li>
                <a href="#">家居生活</a>
            </li>
            <li>
                <a href="#">摄影设计</a>
            </li>
            <li>
                <a href="#">明星美女</a>
            </li>
            <li>
                <a href="#">吃饭睡觉</a>
            </li>
            <li>
                <a href="#">打游戏</a>
            </li>
            <li>
                <a href="#">看党员</a>
            </li>
            <li>
                <a href="#">哈哈哈</a>
            </li>
        </ul>
    </div>
</template>

<script>
 export default {

 }
    
</script>

<style lang="less" scoped>
.imglist-container {
    ul {
        display: flex;
        padding: 10px 0 20px;
        width: 200%;
        li {
            flex-grow: 1;
            a {
                font-size: 14px;
                color: #26a2ff;
                display: block;
                width: 100%;
                text-align: center;
            }
        }
    }
}

</style>
