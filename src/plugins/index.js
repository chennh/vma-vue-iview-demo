import vmaAssistPlugin from './src/vmaAssist'
import vmaIviewPlugin from './src/vmaIview'

export default {
  install(Vue) {
    Vue.use(vmaAssistPlugin)
    Vue.use(vmaIviewPlugin)
  }
}
