<template>
  <div id="header">
    <el-row>
        <el-col :span="12">
        <div class="grid-content bg-purple">
            <router-link to="/home"><span style="font-weight:bolder;font-size:20px;" >DIGI TECHNOLOGY LIMITED</span></router-link>
        </div></el-col>
        <el-col :span="9" style="text"> 
            <div class="grid-content bg-purple-light" style="float:right;">
            <router-link to="/business"><el-link type="primary" :underline="false" style="font-weight:bolder;"><i class="el-icon-view el-icon--right"></i>业务范围</el-link></router-link>&nbsp;
            <router-link to="/business"><el-link type="primary" :underline="false" style="font-weight:bolder;"><i class="el-icon-s-custom el-icon--right"></i>关于我们</el-link></router-link>&nbsp;
            <router-link to="/business"><el-link type="primary" :underline="false" style="font-weight:bolder;"><i class="el-icon-phone-outline el-icon--right"></i>联系我们</el-link></router-link>
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
  </div>
</template>
<script>
export default {
    
}
</script>
<style scopeda>


</style>