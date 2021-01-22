<template>
	<!-- 左右-右边上下布局 -->
	<view class="row" style="box-sizing: border-box;!impotant">
		<view class="col-6 d-flex a-stretch">
			<image @tap="event(threeAdvs.bigImage)" :src="threeAdvs.bigImage.src"
			 style="height: 530upx;width: 373upx; border-right: 2upx solid #f5f5f5;"
			 ></image>
		</view>
		<view class="col-6 d-flex flex-column j-sb">
			<image @tap="event(threeAdvs.leftTopImage)" :src="threeAdvs.leftTopImage.src"
			 style="height: 263upx; border-bottom: 2upx solid #f5f5f5;"
			 mode="heightFix"></image>
			<image @tap="event(threeAdvs.leftBottonImage)" :src="threeAdvs.leftBottonImage.src" 
			style="height: 263upx;"
			mode="heightFix"
			>
			</image>
		</view>
		
	</view>
</template>

<script>
	export default {
		props:{
			threeAdvs: Object
		},
		
		methods: {
			event(obj) {
				// console.log(obj);
				uni.showToast({
					title:obj.src 
				})
			} 
		}
	}
</script>

<style>
</style>
