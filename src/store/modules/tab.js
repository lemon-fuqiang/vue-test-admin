const state={
    iscollapse:false
}

const getters={

}

const mutations={
    changeMenu(state){
        state.iscollapse=!state.iscollapse
    }
}   

export default {
    namespaced: true,
    state,
    getters,
    mutations
  }