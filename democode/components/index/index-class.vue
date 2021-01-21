<template>
	<view class="row j-center m-2">
		<block v-for="(item,index) in indexclassData" :key="index">
			<view class="span-4 d-flex flex-column a-center j-center p-1" @tap="open">
				<image :src="item.src" mode="widthFix" style="width: 60upx;height: 60upx;"></image>
				<text>{{item.name}}</text>
			</view>
		</block>
	</view>
</template>

<script>
	export default {
		props:{
			indexclassData:Array
		},
		data() {
			return {
				
			}
		},
		methods: {
			open() {
				uni.showToast({
					title: "弟弟",
					mask:true
				})
			}
		}
	}
</script>

<style>
</style>
