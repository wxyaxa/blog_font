<template>
<div class='header'>
   <el-row class="block-col-2">
  <el-col :span="12">
     <span class="demonstration">个人博客</span>
    <el-dropdown v-for='i in navData'>
      <span class="el-dropdown-link">
        {{i.cnname}}<i class="el-icon-caret-bottom el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
        <el-dropdown-item>双皮奶</el-dropdown-item>
        <el-dropdown-item>蚵仔煎</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </el-col>
</el-row>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  computed:{
    ...mapState([
      'navData',
      'articalData'
    ])
  },
    mounted() {
       console.log(this.articalData)
          
      }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header{
  width:100%;
  height:50px;
  background:#8391a5;
}
.el-dropdown{
  color:#eef1f6;
}
.header span{
  padding:10px;
  padding-top:10px;
  display:inline-block;
}
</style>
