<template>
	<!-- 左右-右边上下布局 -->
	<view class="row" style="box-sizing: border-box;!impotant">
		<view class="col-6 d-flex a-stretch">
			<image :src="threeAdvs.bigImage.src"
			 style="height: 530upx;width: 373upx; border-right: 2upx solid #f5f5f5;"
			 ></image>
		</view>
		<view class="col-6 d-flex flex-column j-sb">
			<image :src="threeAdvs.leftTopImage.src"
			 style="height: 263upx; border-bottom: 2upx solid #f5f5f5;"
			 mode="heightFix"></image>
			<image :src="threeAdvs.leftBottonImage.src" 
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
		}
	}
</script>

<style>
</style>
