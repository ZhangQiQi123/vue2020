<!--联系我们-->
<template>
    <div id="Contact">
        <el-container>
        <el-header>
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
        <el-row :gutter="20">
            <el-col :span="18" :offset="3">
               
                    <el-image :src="src1" style="height:500px;width:100%" class="image"></el-image>
                    <div style="padding: 14px;">
                        <span style="font-weight:bold;font-size:20px;">联系我们</span>
                        <div >我们的业务范围从科技研发到商务服务，涵盖企业活动的方方面面， 如果您对我们的业务有兴趣，欢迎和我们沟通洽谈！</div>
                    </div>
                
            </el-col>
            <!-- <el-col :span="6" >
                <el-card :body-style="{ padding: '0px' }">
                    <el-image :src="src2" style="height:400px;" class="image"></el-image>
                    <div style="padding: 14px;">
                        <span>智能OA</span>
                        <div class="bottom clearfix"></div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6" >
                <el-card :body-style="{ padding: '0px' }">
                    <el-image :src="src3" style="height:400px;" class="image"></el-image>
                    <div style="padding: 14px;">
                        <span>人工智能</span>
                        <div class="bottom clearfix"></div>
                    </div>
                </el-card>
            </el-col> -->
        </el-row>
        
        <el-row :gutter="20">
            <el-col :span="9" :offset="3">
              <!-- <el-amap vid="containerMap" style="width:100%;height:500px;" :zoom="zoom" :center="center"   :enable="resize",>
</el-amap> -->
              <!-- <div id='containerMap' name="containerMap" style="width:100%;height:500px;"></div> -->
              <div class="amap-wrapper" style="width:100%;height:500px;">
                <el-amap class="amap-box" :vid="'amap-vue'" :zoom="zoom" :center="center" ></el-amap>
              </div>
              <div class="info">
                  <h4 id='status'></h4><hr>
                  <p id='result'></p><hr>
                  <p >由于众多浏览器已不再支持非安全域的定位请求，为保位成功率和精度，请升级您的站点到HTTPS。</p>
              </div>
                 <!-- <el-image :src="src2" style="height:400px;" class="image"></el-image> -->
               
            </el-col>
            <el-col :span="9" style="padding-top:2%;">
              <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" style="margin:20px 0px;z-index:999 ">
                <el-form-item label="姓名">
                    <el-input v-model="formLabelAlign.name" placeholder="姓名"></el-input>
                  </el-form-item>
                  <el-form-item label="Email">
                     <el-input v-model="formLabelAlign.email" placeholder="Email"></el-input>
                  </el-form-item>
                  <el-form-item label="电话">
                    <el-input v-model="formLabelAlign.phone" placeholder="电话"></el-input>
                  </el-form-item>
                  <el-form-item label="内容">
                    <el-input v-model="formLabelAlign.content" placeholder="内容"></el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="onSubmit" style="width:100%;" round>发送</el-button>
                  </el-form-item>
              </el-form>
            </el-col>
        </el-row>
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

<script type="text/javascript">
// let map = new AMap.Map('containerMap', {
//         resizeEnable: true
//     });
//     AMap.plugin('AMap.Geolocation', function() {
//         var geolocation = new AMap.Geolocation({
//             enableHighAccuracy: true,//是否使用高精度定位，默认:true
//             timeout: 10000,          //超过10秒后停止定位，默认：5s
//             buttonPosition:'RB',    //定位按钮的停靠位置
//             buttonOffset: new AMap.Pixel(10, 20),//定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
//             zoomToAccuracy: true,   //定位成功后是否自动调整地图视野到定位点

//         });
//         map.addControl(geolocation);
//         geolocation.getCurrentPosition(function(status,result){
//             if(status=='complete'){
//                 onComplete(result)
//             }else{
//                 onError(result)
//             }
//         });
//     });
//     //解析定位结果
//     function onComplete(data) {
//         document.getElementById('status').innerHTML='定位成功'
//         var str = [];
//         str.push('定位结果：' + data.position);
//         str.push('定位类别：' + data.location_type);
//         if(data.accuracy){
//              str.push('精度：' + data.accuracy + ' 米');
//         }//如为IP精确定位结果则没有精度信息
//         str.push('是否经过偏移：' + (data.isConverted ? '是' : '否'));
//         document.getElementById('result').innerHTML = str.join('<br>');
// 		console.log(data);
//     }
//     //解析定位错误信息
//     function onError(data) {
//         document.getElementById('status').innerHTML='定位失败'
//         document.getElementById('result').innerHTML = '失败原因排查信息:'+data.message;
//     }
export default {
     name: 'Contact',
    data () {
      let self = this;
        return {
            src1:require('../assets/images/contactUS/2.jpg'),
            src2:require('../assets/images/contactUS/map.jpg'),
            labelPosition: 'right',
            formLabelAlign: {
              name: '',
              email: '',
              phone:'',
              content:'',
            },
            zoom:11,
            center:[121.473658,31.230378],
           
            

          
        }
    },
  mounted() {
    console.log(window.sessionStorage.id);  //可以获取到经纬度
    
  },
  methods: {
    onSubmit() {
      this.$message({
          message: 'success',
          type: 'success'
        });
    }   
  },
  

}
</script>
<style scoped>
  .info{
      width:26rem;
      top:80px;
      z-index:1;
  }
</style>