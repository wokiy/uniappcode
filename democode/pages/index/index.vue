<template>
	<view class="content">
		<!-- 主页轮播组件 -->
		<swiper-image :resData="swiperImages"></swiper-image>
		<!-- 首页分类组件 -->
		<index-class :indexclassData="indexclass"></index-class>
		<!-- 分割线组件 -->
		<divider></divider>
		<!-- 三张图片广告组件 -->
		<three-logo :threeAdvs="threeAdv"></three-logo>
		<!-- card每日精选组件 -->
		<selecr-it :cardMessage="cardmessage" :showHeader="cardmessage.showHeader"></selecr-it>
	</view>
</template>

<script>
import swiperImage  from "../../components/index/swiper-image.vue";
import indexClass from "../../components/index/index-class.vue";
import divider from "../../components/common/divider.vue";
import threeLogo from "../../components/index/three-logo.vue"
import selecrIt from "../../components/index/selectIt.vue"
export default {
	data() {
		return { 
			cardmessage:{
				title:"每日精选",
				bodyContent:"../../static/images/demo/demo4.jpg",
				showHeader:true
			},
			threeAdv: {
				bigImage:{
					src:"../../static/images/demo/demo1.jpg"
				},
				leftTopImage:{
					src:"../../static/images/demo/demo2.jpg"
				},
				leftBottonImage:{
					src:"../../static/images/demo/demo2.jpg"
				}
			},
			title: 'Hello',
			show: false,
			swiperImages:[
				{src:"../../static/images/demo/ddome4.jpg"},
				{src:"../../static/images/demo/ddome4.jpg"},
				{src:"../../static/images/demo/ddome4.jpg"},
				{src:"../../static/images/demo/ddome4.jpg"}
				],
			indexclass:[
				{
					src: "../../static/indexnav/1.png",
					name: "新品分类"
				},
				{
					src: "../../static/indexnav/2.gif",
					name: "小米众筹"
				},
				{
					src: "../../static/indexnav/3.gif",
					name: "以旧换新"
				},
				{
					src: "../../static/indexnav/4.gif",
					name: "1分拼团"
				},
				{
					src: "../../static/indexnav/5.gif",
					name: "超低特卖"
				},
				{
					src: "../../static/indexnav/6.gif",
					name: "小米秒杀"
				},
				{
					src: "../../static/indexnav/7.gif",
					name: "真心特卖"
				},
				{
					src: "../../static/indexnav/8.gif",
					name: "电视热卖"
				},
				{
					src: "../../static/indexnav/9.gif",
					name: "家电热卖"
				},
				{
					src: "../../static/indexnav/10.gif",
					name: "米粉卡"
				},
			]
			
			}
			
	},
	components:{
		swiperImage,
		indexClass,
		divider,
		threeLogo,
		selecrIt
	},
	onLoad() {},
	methods: {
		change() {
			this.show = !this.show;
		}
	}
};
</script>

<style lang="scss">
.content {
	
}
</style>
