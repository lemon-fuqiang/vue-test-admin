export default{
    state:{
        iscollapse:false,
    },
    mutations:{
        collapseMenu(state){
            state.iscollapse=!state.iscollapse;
        }
    }
}