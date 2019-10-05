<template>
    <div>
        <!-- 设计师 页面 -->
        <div>


        <mt-navbar v-model="selected">
            <mt-tab-item id="1">行业</mt-tab-item>
            <mt-tab-item id="2">风格</mt-tab-item>
        </mt-navbar>

         <mt-tab-container v-model="selected">

          <mt-tab-container-item id="1">
             <div class="">  
               <img src="" alt="">
             </div>
          </mt-tab-container-item>

          <mt-tab-container-item id="2">
            <div class="">  
               <img src="" alt="">
             </div>
          </mt-tab-container-item>

         
        </mt-tab-container>
        </div>
    </div>
</template>

<script>        
export default {
    data(){
        return{

            selected:'1',
        }
    }
}
</script>

<style scoped>
      /* 顶部navbar选中样式重写 */
      .mint-navbar .mint-tab-item.is-selected {
    border-bottom: 3px solid #CE9E20 !important;
    color: #CE9E20 !important;
    margin-bottom: 5px;
}
</style>