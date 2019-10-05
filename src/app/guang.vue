<template>
    <div>
        <!-- 逛页面 -->
        <!-- 顶部搜索框 -->
        <div class="g-top">
          <input type="text" >
          <img  src="../assets/me/x.png" alt="">
       </div>
        <!--头部分类  -->
       <div class="topbar">    
         <ul class="topbar-info">
             <li class="t-i-1">
                 <img src="../assets/guang/nv.png" alt="">
                 <p>女人</p>
             </li>
             <li>
                 <img src="../assets/guang/nr.png" alt="">
                 <p>男人</p>
             </li>
             <li>
                 <img src="../assets/guang/sp.png" alt="">
                 <p>饰品</p>
             </li>
             <li>
                 <img src="../assets/guang/xb.png" alt="">
                 <p>箱包</p>
             </li>
         </ul>

         <ul class="topbar-info">
             <li class="t-i-1">
                 <img src="../assets/guang/pj.png" alt="">
                 <p>配件</p>
             </li>
             <li>
                 <img src="../assets/guang/shjj.png" alt="">
                 <p>生活家居</p>
             </li>
             <li>
                 <img src="../assets/guang/hcd.png" alt="">
                 <p>好吃的</p>
             </li>
             <li>
                 <img src="../assets/guang/lw.png" alt="">
                 <p>礼物</p>
             </li>
         </ul>
       </div>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
        }
    }
}
</script>

<style scopend>
*{
    margin: 0;
    padding: 0;
}
/* 顶部搜索 */
.g-top{
    background: #212121;
    width: 100%;
}
.g-top input{
    background: #3c3b3b;
    border: 0;
    width: 80%;
    height: 25px;
    margin-top: 10px;
    margin-bottom: 10px;
}
.g-top img{
    width: 25px;
    margin-top:10px;
}
/* 顶部分类 */
   .topbar-info{
       background: #fff;
   }
    .topbar-info{
        width: 100%;
        display: flex;
        justify-content: space-around;
    }
    .topbar-info ul{
        
        margin-bottom: 10px;
    }
    .topbar-info li{
        width:25%;
        text-align: center;
    }
    .topbar-info li img{
        width: 25px;
        height: 25px;
    }

</style>