package com.kakaoLogin.entity;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor

public class KakaoUserInfo {

	String email;
    String id;
    String nickname;
    
    @Builder
    public KakaoUserInfo(String email, String id, String nickname) {
    	this.email = email;
        this.id = id;
        this.nickname = nickname;
    }
}

