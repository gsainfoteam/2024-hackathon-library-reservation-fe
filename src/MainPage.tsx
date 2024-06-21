import { Navigate } from 'react-router-dom'

const LoginPage = () => {
  let isAuthorized = sessionStorage.getItem("isAuthorized")

  return (
    <div>
      {isAuthorized ? '' : <Navigate to='/login' replace={true} />}
      <h2>Main</h2>
    </div>
  )
}

export default LoginPage
