// TODO: Once your application is deployed, copy an API id here so that the frontend could interact with it
const apiId = 'rtzgy7ng30'
export const apiEndpoint = `https://${apiId}.execute-api.us-east-1.amazonaws.com/dev`

export const authConfig = {
  // TODO: Create an Auth0 application and copy values from it into this map. For example:
  domain: 'dev-90kgrs2z.us.auth0.com', // Auth0 domain
  clientId: 'dIYQkrrZNfOJyJpwvfJ3qkxBBD6X5uUB', // Auth0 client id
  callbackUrl: 'http://localhost:3000/callback'
}
