const queryPLanDetail = `query TheQuery($id: String) {
  data: c_get_clientPlan(id: $id) {
    id
    number
    createdTime
    status
    startTime
    endTime
    deposit
    price
    battery {
      voltage
      number
    }
    batteryCategory {
      name
      voltage
      ampere
    }
    client {
      name
      phoneNumber
    }
  }
}`

const queryUsingPLanList = `query TheQuery($status: PlanStatus) {
  data: c_list_clientPlan(status: $status) {
    items {
      id
      number
      createdTime
      status
      startTime
      endTime
      deposit
      price
      battery {
        voltage
        number
      }
      batteryCategory {
        name
        voltage
        ampere
      }
      client {
        name
        phoneNumber
      }
    }
  }
}`

const queryUsingPLans = `query TheQuery($status: PlanStatus,$merchantId: String) {
  data: c_all_clientPlan(merchantId: $merchantId,status: $status) {
      id
      number
      createdTime
      status
      startTime
      endTime
      deposit
      price
      battery {
        voltage
        number
      }
      batteryCategory {
        name
        voltage
        ampere
      }
      client {
        name
        phoneNumber
      }
  }
}`

const queryUsingPLan = `query TheQuery($status: PlanStatus,$merchantId: String) {
  data: c_get_clientPlan(merchantId: $merchantId,status: $status) {
      id
      number
      createdTime
      status
      startTime
      endTime
      deposit
      price
      battery {
        voltage
        number
      }
      batteryCategory {
        name
        voltage
        ampere
      }
      client {
        name
        phoneNumber
      }
  }
}`

const getElectricBox = `query TheQuery($number: String) {
  electricBox: c_get_electricBox(number: $number) {
    id
    isOnline
    number
    warehouseRow
    warehouseColumn
    name
    merchant {
      id
      name
      address
      image
      latitude
      longitude
      operateStartTime
      operateEndTime
    }
    warehouses {
      isOnline
      isOpened
      number
      row
      column
      status
      battery {
        number
        percentage
        status
      }
    }
  }
}`

const getElectricBoxPackages = `query TheQuery($electricBoxNumber: String!) {
  data: c_all_batteryPackage(electricBoxNumber: $electricBoxNumber) {
    batteryCategory {
      id
      name
      voltage
      ampere
    }
    batteryPackages {
      id
      deposit
      isAvailable
      price
      time
    }
  }
}`

const getPayOrder = `query TheQuery($id: Long!) {
  data: c_get_order(id: $id) {
    id
    client{
      id
      name
      phoneNumber
    }
    merchant {
      id
      name
    }
    batteryCategory {
      id
      voltage
      ampere
      name
    }
    batteryPackage {
      id
      deposit
      price
    }
  }
}`

const getPlanReplaceList = `query TheQuery($clientPlanId: String) {
  data: c_all_clientPlan(clientPlanId: $clientPlanId) {
    id
    createdTime
    batteryNumber
    isTaking
    warehouseNumber
    electricBox {
      number
    }
    client {
      name
      phoneNumber
      nickName
    }
    merchant {
      name
    }
  }
}`

const getElectricBoxPlace = `{
  data: c_all_electricBox{
    id
    isOnline
    longitude
    latitude
  }
}`

const selectInUseDepositOrRent = `query TheQuery($merchantId: String!,$kind: BatteryOrderKind,$status: BatteryOrderStatus){
  data: c_all_order(merchantId: $merchantId,kind: $kind,status: $status){
    id
  }
}`

const selectOrders = `query TheQuery($skip: Int,$take: Int,$kind: BatteryOrderKind){
  data: c_list_order(skip: $skip,take: $take,status: PAID,kind: $kind) {
    items{
      id
      number
      kind
      cate: batteryCategory {
        name
        voltage
        ampere
      }
      orderAmount
      paidAmount
      paidTime
      merchant {
        name
      }
    }
    totalCount
  }
}`

export {
  queryPLanDetail,
  queryUsingPLanList,
  selectOrders,
  queryUsingPLan,
  queryUsingPLans,
  getElectricBox,
  getElectricBoxPlace,
  getElectricBoxPackages,
  getPlanReplaceList,
  getPayOrder,
  selectInUseDepositOrRent,
}
