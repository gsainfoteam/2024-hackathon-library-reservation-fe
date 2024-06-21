// import { useNavigate } from "react-router-dom";

const LoginPage = () => {

  const SCOPES = [
    { field: "redirect_uri", value: "http://localhost:5173/user/join" },
    { field: "client_id", value: "library_reservation" },
    { field: "scope", value: "openid profile email student_id offline_access" },
    { field: "response_type", value: "code" },
    { field: "prompt", value: "consent" },
  ]

  return (
    <form action={'https://idp.gistory.me/authorize?client_id=library_reservation&redirect_uri=http://localhost:5173/user/join&scope=openid%20profile%20email%20student_id%20offline_access&response_type=code&prompt=consent'}>
      {SCOPES.map((scope) => {
        return (
          <input
              key={scope.field}
              name={scope.field}
              value={scope.value}
              type={"hidden"}
          />
        );
      })}
      <button type="submit">Login</button>
    </form>
  )
}

export default LoginPage
