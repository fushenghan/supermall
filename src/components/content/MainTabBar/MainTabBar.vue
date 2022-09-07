<template>
  <TabBar>
      <TabBarItems path="/home" activecolor="red">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </TabBarItems>
      <TabBarItems path="/category" >
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </TabBarItems>
      <TabBarItems path="/cart" >
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </TabBarItems>
      <TabBarItems path="/profile" >
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-active" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </TabBarItems>
    </TabBar>
</template>

<script>
import TabBar from '../../common/TabBar/TabBar.vue'
import TabBarItems from '../../common/TabBar/TabBarItems.vue'

export default {
    components: {
        TabBar,
        TabBarItems,
    }

}
</script>

<style>

</style>