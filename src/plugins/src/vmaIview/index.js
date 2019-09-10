import vmaIview from 'vma-vue-iview'
import {
  getQiniuTokenUrl
} from '@/config'

export default {
  install(Vue, opts = {}) {
    // document
    // https://coding.net/s/92a5e26c-a782-41ca-a0b2-53d644891e7b
    Vue.use(vmaIview, {
      components: {
        upload: {
          qiniu: {
            getQiniuTokenUrl
          }
        }
      }
    })
  }
}
