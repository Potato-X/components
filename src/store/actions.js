import { getAppName } from '@/api/app.js'

const actions = {
  updateAppName: async (context) => {
    try {
      let res = await getAppName();
      if(res.code === 200 && res.info && res.info.appName){
        context.commit('SET_APP_NAME', res.info.appName)
      }
    } catch (error) {
      console.log(error)
    }

    // getAppName().then(res => {
    //   if(res.code === 200 && res.info && res.info.appName){
    //     context.commit('SET_APP_NAME', res.info.appName)
    //   }
    // })
  }
}
export default actions
