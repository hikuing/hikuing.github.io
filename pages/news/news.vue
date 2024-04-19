<template>
	<view class="container">
		<!-- <uni-card
			:title="item.title"
			v-for="(item, index) in newsList"
			:key="index"
			@click="openNews(item)">
			<text class="uni-body">
				{{ item.desc }}
			</text>
		</uni-card> -->

		<!-- <uni-list>
			<uni-list-item
				:title="item.title"
				:note="item.desc"
				clickable
				v-for="(item, index) in newsList"
				:key="index"
				@click="openNews(item)"></uni-list-item>
		</uni-list> -->

		<uni-segmented-control
			:current="current"
			:values="items"
			@clickItem="onClickItem"
			styleType="text"
			activeColor="#3490de"></uni-segmented-control>
		<view class="content">
			<view v-show="current === 0">
				<uni-list>
					<uni-list-item
						:title="item.title"
						:note="item.desc"
						clickable
						v-for="(item, index) in newsList"
						:key="index"
						:rightText="item.hot"
						@click="openNews(item)"></uni-list-item>
				</uni-list>
			</view>
			<view v-show="current === 1">
				<uni-list>
					<uni-list-item
						:title="item.title"
						:note="item.desc"
						clickable
						v-for="(item, index) in newsList"
						:key="index"
						:rightText="item.hot"
						@click="openNews(item)"></uni-list-item>
				</uni-list>
			</view>
			<view v-show="current === 2">
				<uni-list>
					<uni-list-item
						:title="item.title"
						:note="item.desc"
						clickable
						v-for="(item, index) in newsList"
						:key="index"
						:rightText="item.hot"
						@click="openNews(item)"></uni-list-item>
				</uni-list>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				newsList: [],
				items: ['百度热搜', '微博热搜', '知乎热搜'],
				current: 0,
				type: 'baidu'
			}
		},
		onLoad() {
			this.getHotNews(this.type)
		},
		/* 下拉刷新 */
		onPullDownRefresh() {
			this.getHotNews(this.type)
		},
		methods: {
			onClickItem(e) {
				if (this.current != e.currentIndex) {
					this.newsList = []
					this.current = e.currentIndex
					if (e.currentIndex == 0) this.type = 'baidu'
					if (e.currentIndex == 1) this.type = 'weibo'
					if (e.currentIndex == 2) this.type = 'zhihu'
					this.getHotNews(this.type)
				}
			},
			/* 聚合热搜热榜 */
			getHotNews(type) {
				uni.showLoading({
					title: '加载中...'
				})
				uni.request({
					url: `https://api.linhun.vip/api/jhrsrb?type=${type}&apiKey=32ec5a1643f17b239949282100f52ff5`,
					success: (res) => {
						const { data } = res
						if (data.code == 200) {
							this.newsList = data.data
						}
						uni.hideLoading()
						uni.stopPullDownRefresh()
					}
				})
			},
			/* 打开新闻链接 */
			openNews(item) {
				window.open(item.url, '_blank')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		height: 100%;
		background-color: #f8f8f8;
	}
</style>
