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
             <div class="hangye">  
                <ul class="img-list">
                  <li class="">
                      <img src="../assets/sjs/1.jpg" 
                       style="padding-right:4px"
                      alt="">
                      <img src="../assets/sjs/2.jpg" alt="">
                </li>
                  <li>
                      <img src="../assets/sjs/3.jpg"  
                      style="padding-right:4px"  
                      alt="">
                      <img src="../assets/sjs/4.jpg" alt="">
                </li>
                  <li>
                      <img src="../assets/sjs/5.jpg" 
                      style="padding-right:4px" 
                       alt="">
                      <img src="../assets/sjs/6.jpg" alt="">
                </li>
              </ul>
             </div>
          </mt-tab-container-item>

          <mt-tab-container-item id="2">
            <div class="fenge">  
                 <ul class="img-list">
                  <li class="">
                      <img src="../assets/sjs/01.jpg" 
                       style="padding-right:2px"
                      alt="">
                      <img src="../assets/sjs/02.jpg" alt="">
                </li>
                  <li>
                      <img src="../assets/sjs/03.jpg"  
                      style="padding-right:4px"  
                      alt="">
                      <img src="../assets/sjs/04.jpg" alt="">
                </li>
                  <li>
                      <img src="../assets/sjs/05.jpg" 
                      style="padding-right:4px" 
                       alt="">
                      <img src="../assets/sjs/06.jpg" alt="">
                </li>
              </ul>
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
  .img-list {
     width: 100%;
 }
  .img-list li{
     width: 100%;
     box-sizing: border-box;
 }
  .img-list li img{
     width: 49%;
     margin-bottom: 5px;

 }
</style>