import {
  Message as iviewMessage,
  Notice as iviewNotice
} from 'iview'

const Message = function(opts) {
  iviewMessage.message(opts.type, {
    content: opts.message,
    duration: opts.duration,
    closable: true
  })
}

const MessageBox = function(opts) {
  iviewNotice.error({
    title: '系统提示',
    desc: opts.message,
    duration: opts.duration,
    closable: true
  })
}

function handleError(data) {
  Message({
    // 格式待定
    message: data.errMsg,
    type: 'warning',
    duration: 10
  })
}

function handleException({
  status,
  message,
  stack
}) {
  MessageBox({
    title: message || '系统提示',
    message: `<div style='max-height: 250px; overflow: auto;'>${stack}</div>`,
    type: 'error',
    showClose: true,
    dangerouslyUseHTMLString: true,
    duration: 15,
    callback(action, instance) {}
  })
}

const redirectToLoign = () => {}

export default error => {
  if (error.response == null) {
    handleException({
      status: 500,
      message: error.message,
      stack: error.stack
    })
  } else {
    if (error.response.status === 401) {
      // 未登录/登录授权过期
      redirectToLoign()
    } else if (error.response.data == null || typeof error.response.data !== 'object') {
      handleException({
        status: error.response.status,
        message: error.message,
        stack: error.stack
      })
    } else if (error.config.handleError !== false) {
      handleError(error.response.data)
    }
  }
}
