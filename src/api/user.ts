import service from '@/utils/requset'

// json形式
const options = {
  header: { contentType: 'application/json' },
}

/**
 * @method 测试接口
 */
export function testGet() {
  return service.get('/api/services/app/PlatformEdition/GetAll')
}

export function testPost(data: any) {
  return service.post('/testPost', data, options)
}

export function testPut(data: any) {
  return service.post('/testPut', data)
}

export function testDelete(data: any) {
  return service.delete('/testDelete', data)
}
