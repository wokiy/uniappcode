<template>
	<view class="content">
		<view>
			<image v-if="show"
			 class="logo animated bounce fast" src="/static/logo.png"></image>
			<button type="default" @tap="change">change</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				show: false
			}
		},
		onLoad() {

		},
		methods: {
			change() {
				this.show = !this.show;
			}
		}
	}
</script>

<style lang="scss">
	.content {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.logo {
			height: 200rpx;
			width: 200rpx;
			margin-top: 200rpx;
			margin-left: auto;
			margin-right: auto;
			margin-bottom: 50rpx;
		}
		.demo {
			height: 2upx;
		}
		.text-area {
		display: flex;
		justify-content: center;
		.title {
			font-size: 36rpx;
			color: #8f8f94;
			}
		}
	}

	

	
</style>
