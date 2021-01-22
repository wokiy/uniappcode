<template>
	<!-- 基础卡片组件封装 -->
	<view class="card">
		<!-- 顶部标题和右边插槽 -->
		<slot name="title"></slot> 
	
		<!-- 底部内容区域 设置插槽让业务组件去填写插槽中的业务内容-->
		<view>
			<slot name="bottom"></slot>
		</view>
	</view>
</template>

<script>
</script>

<style>
</style>
