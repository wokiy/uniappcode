<template>
	<view class="content">
		<swiper  circular :indicator-dots="true" :autoplay="false" :interval="3000" :duration="1000" 
		style="height: 350upx; width:100%">
			<block v-for="(item,index) in resData" :key="index">
				<swiper-item>
				<view class="swiper-item" @tap="open">
					<image :src="item.src" style="height: 350upx; width: 100%;"></image>
				</view>
			</swiper-item>
			</block>
		</swiper>
	</view>
</template>

<script>
	export default{
		props:{
			resData:Array 
		},
		data() {
			return {
			}
		},
		methods:{
			open() {
				uni.showToast({
					title:"open"
				})
			}
		}
	}
</script>

<style>
</style>
