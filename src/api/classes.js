import request from '@/utils/request'

export function findAll() {
  return request({
    url: '/classes',
    method: 'get'
  })
}

export function add(dept) {
  return request({
    url: '/classes',
    method: 'post',
    data: dept
  })
}

export function update(dept) {
  return request({
    url: '/classes',
    method: 'put',
    data: dept
  })
}

export function deleteById(id) {
  return request({
    url: '/classes/' + id,
    method: 'delete'
  })
}

export function selectById(id) {
  return request({
    url: '/classes/' + id,
    method: 'get'
  })
}
