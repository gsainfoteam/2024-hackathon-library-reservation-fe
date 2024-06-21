import { Navigate } from 'react-router-dom'

const LoginPage = () => {
  let isAuthorized = localStorage.getItem("accessToken");

  return (
    <div>
      {isAuthorized ? '' : <Navigate to='/user/join' replace={true} />}
      <h2>Main</h2>
    </div>
  )
}

export default LoginPage
