<template>
    <div class="app-container">
        <!-- 顶部header区域 -->
        <mt-header fixed title="超级无敌厉害的项目"></mt-header>


        <!-- 中间content区域 -->
        <transition name="content">
            <router-view></router-view>
        </transition>

        <!-- 底部tabbar区域 -->
        <nav class="mui-bar mui-bar-tab">
			  <router-link class="mui-tab-item" to="/home">
				    <span class="mui-icon mui-icon-home"></span>
				    <span class="mui-tab-label">首页</span>
			  </router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/search">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
    </div>
</template>

<script>

</script>

<style lang="less" scoped>

.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}
.content-enter {
  opacity: 0;
  transform: translateX(100%);
}
.content-leave-to {
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
}
.content-enter-active,
.content-leave-active {
  transition: all 0.5s ease;
}
</style>
