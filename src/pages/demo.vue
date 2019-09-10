<template>
  <div>
    <p>{{date | date}}</p>
    <p>{{fmt.date(date)}}</p>
    <vma-image-upload v-model="urlList" />
  </div>
</template>

<script>
// import { demoApi } from '@/api'
import { demoLocal, demoSession } from '@/storage'

export default {
  data() {
    return {
      urlList: [],
      date: new Date()
    }
  },
  created() {
    console.log(demoLocal.get())
    console.log(demoSession.get())
    demoLocal.set('demoLocal-value')
    demoSession.set('demoSession-value')

    // demoApi.list().then(data => {
    //   this.success('success')
    // }, err => {
    //   this.error('error')
    //   Promise.reject(err)
    // })
  }
}
</script>
