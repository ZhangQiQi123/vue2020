<!--首页-->
<template>
  <div id="home">
    <el-container>
      <el-header style="position:fixed;">
        <el-row>
        <el-col :span="12">
        <div class="grid-content bg-purple">
            <router-link to="/home"><span style="font-weight:bolder;font-size:20px;" >Sealotus Technology Limited</span></router-link>
        </div></el-col>
        <el-col :span="9" style="text"> 
            <div class="grid-content bg-purple-light" style="float:right;">
                <router-link to="/business"><el-link type="warning" :underline="false" style="font-weight:bolder;"><i class="el-icon-s-cooperation el-icon--right"></i>业务范围</el-link></router-link>&nbsp;
                <!-- <router-link to="/serviceView"><el-link type="warning" :underline="false" style="font-weight:bolder;"><i class="el-icon-view el-icon--right"></i>服务概览</el-link></router-link>&nbsp; -->
                <router-link to="/aboutUS"><el-link  type="warning" :underline="false" style="font-weight:bolder;"><i class="el-icon-s-custom el-icon--right"></i>关于我们</el-link></router-link>&nbsp;
                <router-link to="/contactUS"><el-link  type="warning" :underline="false" style="font-weight:bolder;"><i class="el-icon-phone-outline el-icon--right"></i>联系我们</el-link></router-link>
                <span style="color: rgb(103, 2, 43);font-weight:bolder;font-size:20px;float:left;"><i class="el-icon-phone"></i>：110</span>
            </div>
        </el-col>
        <el-col :span="3">
        <div class="grid-content bg-purple-light">
            <div style="float:right;">
                <i class="el-icon-time"></i>&nbsp;<span>9:00am</span>&nbsp;-&nbsp;<span>5:30pm</span>
            </div>
        </div>
        </el-col>
    </el-row>
      </el-header>
      <el-main>
        <el-carousel indicator-position="outside" :interval="2000" type="card"  :height="imgHeight">
          <el-carousel-item v-for="item in images" :key="item.No">
            <el-image  ref="imgHeight" style="width:100%;height:1000px;" :src="item.src" :preview-src-list="srcList" ></el-image>
          </el-carousel-item>
        </el-carousel>
      </el-main>
       <el-footer>
        <el-row :gutter="20">
          <el-col :span="12" :offset="6" style="text-align:center;">
            <span style="color: rgb(103, 2, 43);font-weight:bolder;font-size:20px;"><i class="el-icon-phone"></i>+8613605005928</span><el-divider direction="vertical"></el-divider>
            <span style="color: rgb(103, 2, 43);font-weight:bolder;font-size:20px;"><i class="el-icon-message"></i>：d123tech@gmail.com</span>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="12" :offset="6"><div class="grid-content bg-purple"> <span style="color: rgb(103, 2, 43);font-weight:bolder;">地址 ：福建省漳州市芗城区笃后路4号</span></div></el-col>
        </el-row>
        <span style="font-size:15px;">Copyright  © 2016 - 2020  ZQ</span>
        <span></span>
      </el-footer>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'Home',
 

  data () {
    return {
      imgHeight:"700px",
      srcList:[ require('../assets/images/1.jpg'), require('../assets/images/2.jpg'), require('../assets/images/3.jpg'), require('../assets/images/4.jpg')],
      images:[
        {
          No:1,
          src: require('../assets/images/1.jpg')
        },
          {
          No:2,
          src:require('../assets/images/2.jpg')
        },
          {
          No:3,
          src:require('../assets/images/3.jpg')
        },
          {
          No:4,
          src:require('../assets/images/4.jpg')
        },
      ],
    }
  },
  methods:{
   
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >

</style>
