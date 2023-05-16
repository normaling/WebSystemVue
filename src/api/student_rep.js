import request from '@/utils/request'
export function find(name, gender, begin, end, page) {
  return request({
    url: '/student_rep?name=' + name + '&gender=' + gender + '&begin=' + begin + '&end=' + end,
    // url: 'http://yapi.smart-xwork.cn/mock/245688/emp_rep',
    method: 'get'
  })
}
