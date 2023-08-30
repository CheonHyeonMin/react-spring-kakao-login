import React from 'react'

const Login = () => {

    const clientId = process.env.REACT_APP_CLIENT_ID
    const redirectUri = process.env.REACT_APP_REDIRECT_URI
    const URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}`

  return (
    <div>
        <a href={URL}><button>카카오 로그인</button></a>
    </div>
  )
}

export default Login