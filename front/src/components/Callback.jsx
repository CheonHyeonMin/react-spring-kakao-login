import React, { useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

const Callback = () => {

  const [searchParams, setSearchParams] = useSearchParams()

  const code = searchParams.get('code')

  useEffect(() => {
    console.log('code :', code);

    axios.get(`http://localhost:8080/api/v1/home/kakaoLogin?code=${code}`)
    .then((res) => {
      console.log(res);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [code])

  return (
    <div>Callback</div>
  )
}

export default Callback