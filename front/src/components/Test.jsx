// import React, { useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import axios from "axios";

// const Test = () => {
//   useEffect(() => {
//     axios
//       .get(`http://localhost:8081/api/v1/home/getKakaoUserInfo`)
//       .then((res) => {
//         console.log(res);
//       });
//   }, []);

//   return <div></div>;
// };

// export default Test;

import React, { useState, useEffect } from "react";

import axios from "axios";

function Test() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    // 백엔드 API를 호출하여 KakaoUserInfo 객체를 가져옵니다.
    axios
      .get("http://localhost:8081/api/v1/home/getKakaoUserInfo", {
        params: {
          accessToken:
            "lCMUHJXjxNN3ol7Kz3Fw4yUrRXTSFiCUoceaouITCj11mwAAAYpUt-Js", // 실제 액세스 토큰 값으로 대체해야 합니다.
        },
      })
      .then((res) => {
        setUserInfo(res.data); // 백엔드에서 받은 데이터를 상태에 설정합니다.
      })
      .catch((error) => {
        console.error("Error fetching KakaoUserInfo:", error);
      });
  }, []);

  return (
    <div className="App">
      {userInfo ? (
        <div>
          <h2>Kakao User Info</h2>
          <p>ID: {userInfo.id}</p>
          <p>Nickname: {userInfo.nickname}</p>
          <p>Email: {userInfo.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Test;
