<template>
    <div id="aboutUS">
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
            <el-col :span="18" :offset="3" style="font-size:20px;">
                 <el-card :body-style="{ padding: '0px' }">
                    <el-image :src="src1" style="height:500px;width:100%" class="image"  :preview-src-list="srcList"></el-image>
                    <div style="padding: 14px;">
                        <span style="font-weight:bold;font-size:15px;">关于我们</span>
                        <div class="bottom clearfix" style="padding-top:10px;color:black;text-align:left;">
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<router-link to="/home" style="color:black;">&nbsp;Sealotus Technology Limited</router-link>提供定制化软件开发服务，针对客户对资讯系统的需求，量身打造软件系统。主营服务器架设/软硬件开发/CRM开发/服务器维护/网站制作， 以及软硬件系统培训/商务获客系统培训/市场方案智能分析。
                        </div>
                    </div>
                    <el-col :span="24" >
                        <el-col :span="12">
                            <el-image :src="src2" style="height:400px;width:100%;float:left;" class="image"  :preview-src-list="srcList"></el-image>
                        </el-col>
                        <el-col :span="12">
                            <div style="float:left;text-align:left;padding-top:5%;">
                                &nbsp;&nbsp; <router-link to="/home" style="color:black;">Sealotus Technology Limited</router-link>，专业从事货物及技术的进出口业务服务：
                                <ul>
                                    <li> 1.	CRM系统、OA系统等开发</li>
                                    <li> 2.	服务器维护</li>
                                    <li> 3.	软硬件系统培训/商务获客系统培训/市场方案智能分析</li>
                                    <li> 4.	企业管理咨询、企业形象策划、商务咨询</li>
                                </ul>
                            </div>
                        </el-col>
                    </el-col>
                    <el-col :span="24" style="padding: 14px;">
                        <span style="font-weight:bold;font-size:15px;"> 我们的理念</span>
                    </el-col>
                    <el-col :span="24" style="text-align:left;">
                       &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp; 一个成功的企业系统建置的关键因素并不仅只靠技术，而在于对客户需求的掌握，专案的规划与管理，与良好的执行能力。
                        专注创新与对细节的坚持，具备与世界接轨的技术及设计理念，强化社群工具对接及新媒体服务是我们的优势。
                        我们企业态度可以简单地表示为“围绕管理”。 我们认为平面管理结构，直接沟通和开放的建议，无论是在公司内部还是在公司外，都是确定成功的关键，这始终能帮助我们做得更好。
                        客户服务满意度是我们的终极追求目标，用我们的专业服务，来达到共赢是我们的运营宗旨。
                        尽心完成客户托付的任务，这是对客户的承诺也是对自我的要求。我们也很积极地开发自有的产品，期待给客户多样化的选择，我们相信能传达出制作者与使用者彼此信念的王道，我们期许用努力设计让各产业能迈向永续发展的道路以及供给更多的美好能量。

                    </el-col>
                     <el-col :span="24"  style="padding: 14px;" >
                        <el-image :src="src3" style="height:600px;width:100%" class="image"  :preview-src-list="srcList"></el-image>
                     </el-col>
                </el-card>
            </el-col>
            <!-- <el-col :span="6" >
                <el-card :body-style="{ padding: '0px' }">
                    <el-image :src="src2" style="height:400px;" class="image" :preview-src-list="srcList"></el-image>
                    <div style="padding: 14px;">
                        <span>智能OA</span>
                        <div class="bottom clearfix"></div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6" >
                <el-card :body-style="{ padding: '0px' }">
                    <el-image :src="src3" style="height:400px;" class="image" :preview-src-list="srcList"></el-image>
                    <div style="padding: 14px;">
                        <span>人工智能</span>
                        <div class="bottom clearfix"></div>
                    </div>
                </el-card>
            </el-col> -->
        </el-row>
        <!-- <el-row :gutter="20">
            <el-col :span="6" :offset="3">
                <el-card :body-style="{ padding: '0px' }">
                    <el-image :src="src4" style="height:400px;" class="image"></el-image>
                    <div style="padding: 14px;">
                        <span>客户沟通</span>
                        <div class="bottom clearfix"></div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6" >
                <el-card :body-style="{ padding: '0px' }">
                    <el-image :src="src5" style="height:400px;" class="image"></el-image>
                    <div style="padding: 14px;">
                        <span>内部讨论</span>
                        <div class="bottom clearfix"></div>
                    </div>
                </el-card>
            </el-col>
            <el-col :span="6" >
                <el-card :body-style="{ padding: '0px' }">
                    <el-image :src="src6" style="height:400px;" class="image"></el-image>
                    <div style="padding: 14px;">
                        <span>跨平台</span>
                        <div class="bottom clearfix"></div>
                    </div>
                </el-card>
            </el-col>
        </el-row> -->
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
     name: 'About',
    data () {
        return {
            toTopHeight:200,
            src1:require('../assets/images/aboutUS/a.jpg'),
            src2:require('../assets/images/aboutUS/b.jpg'),
            src3:require('../assets/images/aboutUS/c.jpg'),
            srcList: [require('../assets/images/aboutUS/a.jpg'),require('../assets/images/aboutUS/b.jpg'),require('../assets/images/aboutUS/c.jpg')]
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
ul li{
    list-style: none;
    margin:20px 0px;
}

</style>