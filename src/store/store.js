import Vue from 'vue'
import Vuex from 'vuex'
var num=true
Vue.use(Vuex)
var store=new Vuex.Store({
    state:{
        navData:null,
        articalData:null,
        state:false
    },
    actions:{
        getAllData({commit}){
            var dataNav=function(){
                return new Promise((resolve,reject)=>{
                    this.axios.get('/api/front_article/getNav').then((data)=>{
                        commit('navData_m',data.data.data)
                        resolve()
                    })
                })
            }
            var dataArtical=function(){
                return new Promise((resolve,reject)=>{
                    this.axios.get('/api/front_article/getArticleAll').then((data)=>{
                        commit('articalData_m',data.data.data)
                    })
                })
            }
            return{
                axios:this.axios,
                dataNav,
                dataArtical
            }
        },
        defaultData({dispatch,commit},fn){
            commit('state_m','loading')
          dispatch('getAllData').then((data)=>{
                Promise.all([data.dataNav(),data.dataArtical()]).then(()=>{
                    if(num){
                        commit('state_m',false)
                        num=false
                    }
                   fn()
            },()=>{
                commit('state_m',false)
            })
          })
        }
    },
    mutations:{
        navData_m(state,data){
            state.navData=data
        },
        articalData_m(state,data){
            state.articalData=data
          
        },
        state_m(state,data){
            state.state=data
        }
    }
})
export default store