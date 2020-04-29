<!--服务浏览-->
<template>
    <div id="serviceView">
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
                            <router-link to="/serviceView"><el-link type="warning" :underline="false" style="font-weight:bolder;"><i class="el-icon-view el-icon--right"></i>服务概览</el-link></router-link>&nbsp;
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
                    <el-col :span="6" :offset="3">
                        <el-card :body-style="{ padding: '0px' }">
                            <el-image :src="src1" style="height:400px;" class="image"></el-image>
                            <div style="padding: 14px;">
                                <span>软硬件开发</span>
                                <div class="bottom clearfix">提供软件研发，涵盖企业内部各种软件，并提供硬件支持。</div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6" >
                        <el-card :body-style="{ padding: '0px' }">
                            <el-image :src="src2" style="height:400px;" class="image"></el-image>
                            <div style="padding: 14px;">
                                <span>CRM系统开发</span>
                                <div class="bottom clearfix">提供软件研发，涵盖企业内部各种软件，并提供硬件支持。</div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6" >
                        <el-card :body-style="{ padding: '0px' }">
                            <el-image :src="src3" style="height:400px;" class="image"></el-image>
                            <div style="padding: 14px;">
                                <span>人工智能</span>
                                <div class="bottom clearfix">分析新建系统与既有系統之角色分工</div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="6" :offset="3">
                        <el-card :body-style="{ padding: '0px' }">
                            <el-image :src="src4" style="height:400px;" class="image"></el-image>
                            <div style="padding: 14px;">
                                <span>商务咨询</span>
                                <div class="bottom clearfix"> 针对未来和未来发展所做的当前决策,能有效地预测和指导未来工作的开展 </div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6" >
                        <el-card :body-style="{ padding: '0px' }">
                            <el-image :src="src5" style="height:400px;" class="image"></el-image>
                            <div style="padding: 14px;">
                                <span>方案定制</span>
                                <div class="bottom clearfix">我们提供专业人员为您的企业制定高质量的方案，并协助分析各项工作。</div>
                            </div>
                        </el-card>
                    </el-col>
                    <el-col :span="6" >
                        <el-card :body-style="{ padding: '0px' }">
                            <el-image :src="src6" style="height:400px;" class="image"></el-image>
                            <div style="padding: 14px;">
                                <span>获客分析</span>
                                <div class="bottom clearfix">为您的企业获得优质客源，带来丰厚的利润。</div>
                            </div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="18" :offset="3">
                         <el-card :body-style="{ padding: '0px' }">
                            <el-image :src="src7" style="height:600px;width:100%" class="image"></el-image>
                            <div style="padding: 14px;">
                                <span>合作双赢</span>
                                <!-- <div class="bottom clearfix">为您的企业获得优质客源，带来丰厚的利润。</div> -->
                            </div>
                        </el-card>
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



<script>
export default {
    name: 'Business',
    data () {
        return {
        src1:require('../assets/images/business/1.jpg'),
        src2:require('../assets/images/business/2.jpg'),
        src3:require('../assets/images/business/3.jpg'),
        src4:require('../assets/images/business/4.jpg'),
        src5:require('../assets/images/business/5.jpg'),
        src6:require('../assets/images/business/6.jpg'),
        src7:require('../assets/images/aboutUS/c.jpg'),
        }
    },
    watch:{
      '$route':function(to,from){
          this.currentRouter=to.path;
      }
    },
    beforeMount(){
        this.currentRouter=this.$route.path;
    }
}
</script>

<style scoped>
.el-card span{
    font-weight: bold;
}
.el-card {
    margin:10px 0px;
}
</style>