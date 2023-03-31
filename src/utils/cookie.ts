
const TokenKey = 'Abp-Token'
const TenantIdKey = 'Abp-TenantId'
const OpenIdKey = 'Abp-OpenId'
const UnionIdKey = 'Abp-UnionId'
const ClientIdKey = 'Abp-ClientId'
const MerchantIdKey = 'Abp-MerchantId'

export function getToken() {
  return uni.getStorageSync(TokenKey)
}

export function setToken(token: string) {
  return uni.setStorageSync(TokenKey, token)
}
export function removeToken() {
  return uni.removeStorageSync(TokenKey)
}

export function getTenantId() {
  return uni.getStorageSync(TenantIdKey)
}

export function setTenantId(tenantId: any) {
  return uni.setStorageSync(TenantIdKey, tenantId)
}

export function removeTenantId() {
  return uni.removeStorageSync(TenantIdKey)
}

export function getOpenId() {
  return uni.getStorageSync(OpenIdKey)
}

export function setOpenId(openId: any) {
  return uni.setStorageSync(OpenIdKey, openId)
}

export function removeOpenId() {
  return uni.removeStorageSync(OpenIdKey)
}

export function getUnionId() {
  return uni.getStorageSync(UnionIdKey)
}

export function setUnionId(unionId: any) {
  return uni.setStorageSync(UnionIdKey, unionId)
}

export function removeUnionId() {
  return uni.removeStorageSync(UnionIdKey)
}

export function getClientId() {
  return uni.getStorageSync(ClientIdKey)
}

export function setClientId(clientId: any) {
  return uni.setStorageSync(ClientIdKey, clientId)
}

export function removeClientId() {
  return uni.removeStorageSync(ClientIdKey)
}

export function getMerchantId() {
  return uni.getStorageSync(MerchantIdKey)
}

export function setMerchantId(merchantId: any) {
  return uni.setStorageSync(MerchantIdKey, merchantId)
}

export function removeMerchantId() {
  return uni.removeStorageSync(MerchantIdKey)
}
