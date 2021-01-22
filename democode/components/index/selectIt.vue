<template>
	<view class="box-wrapper">
		<card>
			<template>
				<template>
					<view>每日精选</view>
				</template>
			</template>
			<template v-slot:bottom>
				<view class="img-box">
					<image style="height: 299upx;" src="../../static/images/demo/demo4.jpg" 
					mode="heightFix"></image>
				</view>
			</template>
		</card>
	</view>
</template>

<script>
	import card from "../common/card.vue"
	export default {
		
		data() {
			return {
				
			}
		},
		components:{
			card
		}
	}
</script>

<style lang="scss">
	.box-wrapper {
		width: 100%;
		
	}
</style>
