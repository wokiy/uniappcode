<template>
	<view class="box-wrapper">
		<card>
			<!-- <template v-slot:title>
				<text class="font-md font-weight">
					{{cardMessage.title}}
				</text>
			</template>
			<template v-slot:bottom>
				<view class="img-box">
					<image style="height: 299upx;" :src="cardMessage.bodyContent" mode="heightFix"></image>
				</view>
			</template> -->
			<block v-slot:title>
				<view v-if="showHeader" class="p-2 border-bottom main-borer-color">   
					<text class="font-md font-weight" >
						{{cardMessage.title}}
					</text>
				</view>
			</block>
			<block v-slot:bottom>
				<view class="img-box">
					<image style="height: 299upx;" :src="cardMessage.bodyContent" mode="heightFix"></image>
				</view>
			</block>
		</card>
	</view>
</template>

<script>
	import card from "../common/card.vue"
	export default {
		props:{
				cardMessage: Object,
				showHeader:{
					type:Boolean,
					default: true
				}
		},
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
