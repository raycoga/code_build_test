import { Auth, AUTH_STRATEGIES } from '@8base/auth'

/* Initiate the auth client and export */
export default Auth.createClient(
  {
    strategy: AUTH_STRATEGIES.WEB_AUTH0
  },
  {
    domain: `${process.env.REACT_APP_AUTH0_DOMAIN}`,
    clientId: `${process.env.REACT_APP_AUTH0_CLIENT_ID}`,
    redirectUri: `${window.location.origin}/dashboard`,
    logoutRedirectUri: `${window.location.origin}`
  }
)