import request from '@/utils/request'

export function page(name,gender,begin,end,page,pageSize) {
  return request({
    url: '/students?name='+name+'&gender='+gender+'&begin='+begin+'&end='+end+'&page='+page+'&pageSize='+pageSize,
    method: 'get'
  })
}

export function add(emp) {
  return request({
    url: '/students',
    method: 'post',
    data: emp
  })
}

export function update(dept) {
  return request({
    url: '/students',
    method: 'put',
    data: dept
  })
}


export function deleteById(id) {
  return request({
    url: '/students/'+id,
    method: 'delete',
  })
}


export function selectById(id) {
  return request({
    url: '/students/'+id,
    method: 'get',
  })
}

