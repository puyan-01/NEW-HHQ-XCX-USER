import gql from 'graphql-tag'
import { print } from 'graphql'
import Request from './useGraphqlRequest.js'

const graphqlRequest = (selectQl: any, variables: any) => {
  // const url = "http://192.168.31.77:9001/graphql"
  const url = 'https://hhq-api-stage.fealance.com/graphql-api/graphql'
  // const url = "https://hhq-box-api.yugps.com/graphql"

  const obj = {
    query: print(
      gql`
        ${selectQl}
      `
    ),
    variables: variables,
  }

  // return Request({ url: url, params: obj })
  return Request.post(url, obj)
}

export default graphqlRequest
