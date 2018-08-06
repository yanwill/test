<template>
   <div class="msite">

   <v-header title='天下第一'>
     <span class='header_search' slot='search'>
     <i class="iconfont icon-sousuo"></i>
     </span>
      <span class='header_login'slot='login'>
          <span class="header_login_text" >登录|注册</span>
      </span>
   </v-header>

    <div class="miste-content-wrapper">
      <div class="miste-content">
        <!--首页导航-->
      <nav class="msite_nav border-1px">
          <div class="swiper-container">
            <div class="swiper-wrapper">
            
              <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
           
            </div>
            <!-- Add Pagination -->
            <div class="swiper-pagination"></div>
          </div>
        
        </nav>
        <!--首页附近商家-->
        <div class="msite_shop_list border-1px">
          <div class="shop_header">
            <i class="iconfont icon-xuanxiang"></i>
            <span class="shop_header_title">附近商家</span>
          </div>
          
          <v-shopList></v-shopList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import header from '../../components/Header/Header.vue';
import shopList from '../../components/ShopList/ShopList.vue';

import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  name: 'app',
  data () {
    return {
    
    }
  },
  components:{
    'v-header':header,
    'v-shopList':shopList
  },
  mounted:function(){

           new Swiper ('.swiper-container', {
            loop: true,
            
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            
            // 如果需要滚动条
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          })  

  }
}
</script>

<style lang='stylus' ref="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
    .msite
      width 100%
      height: 100%
      .miste-content-wrapper
        position fixed
        top: 45px
        bottom: 46px
        width: 100%
      .msite_nav
        bottom-border-1px(#e4e4e4)
        height 200px
        background #fff
        .swiper-container
          width 100%
          height 100%
          .swiper-wrapper
            width 100%
            height 100%
            .swiper-slide
              display flex
              justify-content center
              align-items flex-start
              flex-wrap wrap
              .link_to_food
                width 25%
                .food_container
                  display block
                  width 100%
                  text-align center
                  padding-bottom 10px
                  font-size 0
                  img
                    display inline-block
                    width 50px
                    height 50px
                span
                  display block
                  width 100%
                  text-align center
                  font-size 13px
                  color #666
          .swiper-pagination
            >span.swiper-pagination-bullet-active
              background #02a774
      .msite_shop_list
        top-border-1px(#e4e4e4)
        margin-top 10px
        background #fff
        .shop_header
          padding 10px 10px 0 10px
          .shop_icon
            margin-left 5px
            color #999
          .shop_header_title
            color #999
            font-size 14px
            line-height 20px

</style>



