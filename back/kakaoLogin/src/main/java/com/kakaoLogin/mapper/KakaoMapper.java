package com.kakaoLogin.mapper;

import org.apache.ibatis.annotations.Mapper;

import com.kakaoLogin.entity.KakaoUserInfo;

@Mapper
public interface KakaoMapper {

	public void CreateUser(KakaoUserInfo kakaoUserInfo);

	
}
