<template>
  <div class="index">
   <headers></headers>
  </div>
</template>

<script>
import headers from './headers.vue'
import {mapState} from 'vuex'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  components:{
    headers:headers
  },
  computed:{
    ...mapState([
      'navData',
      'articalData'
    ])
  },
  created(){
    // console.log(this.navData)
    if(!this.navData){
      this.$router.push({path:'/loading'})
    }
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
