<template>
	<view class="container">
		<!-- 名人名言引用 -->
		<view class="title-box">
			<view class="fresh-btn" @click="getSentences">
				<uni-icons type="refresh" size="26" color="#3490de"></uni-icons>
			</view>
			<view class="content" @click="copy(sentencesInfo.hitokoto)">
				{{ sentencesInfo.hitokoto }}
			</view>
			<view class="from">
				——
				<text v-if="sentencesInfo.from_who">
					{{ sentencesInfo.from_who + '·' }}
				</text>
				<text>{{ sentencesInfo.from }}</text>
			</view>
		</view>

		<view class="cate-title" v-if="history.length > 0">
			<view>上次打开</view>
			<view class="clear-btn" @click="clearHistory()">
				<uni-icons type="refreshempty" size="14" color="#fff"></uni-icons>
				清空
			</view>
		</view>
		<view class="url-container" v-if="history.length > 0">
			<view
				class="url-item"
				v-for="(item, index) in history"
				:key="index"
				@click="handleClick(item)">
				{{ item.title }}
			</view>
		</view>
		<view class="cate-title">在线观影</view>
		<view class="url-container">
			<view
				class="url-item"
				v-for="(item, index) in urlList[0].children[0].urls"
				:key="index"
				@click="handleClick(item)">
				{{ item.title }}
			</view>
		</view>
	</view>
</template>

<script>
	import config from '@/config/config'

	export default {
		data() {
			return {
				value: ['0'],
				urlList: config.urlList,
				// 一言
				sentencesInfo: {},
				// 打开历史记录
				history: []
			}
		},
		onLoad() {
			this.getHistory()
			this.getSentences()
		},
		methods: {
			/* 复制到粘贴板 */
			copy(text) {
				uni.setClipboardData({
					data: text,
					success: () => {
						uni.showToast({
							title: '复制成功',
							icon: 'success'
						})
					}
				})
			},
			/* 获取一言 */
			getSentences() {
				uni.request({
					url: 'https://v1.hitokoto.cn',
					success: (res) => {
						if (res.statusCode == 200) {
							this.sentencesInfo = res.data
						}
					}
				})
			},
			handleClick(item) {
				if (item.info) {
					uni.showModal({
						title: '提示',
						content: item.info,
						confirmText: '知道了',
						success: ({ confirm }) => {
							if (confirm) {
								console.log('item')
								this.setHistory(item)
								window.open(item.url, '_blank')
							}
						}
					})
					return
				}
				this.setHistory(item)
				window.open(item.url, '_blank')
			},

			/* 获取历史记录 */
			getHistory() {
				let history = uni.getStorageSync('history')
				if (history) {
					history = JSON.parse(history) || []
					if (history.length > 0) {
						this.history = history
					}
				}
			},

			/* 清空历史记录 */
			clearHistory() {
				uni.showModal({
					title: '提示',
					content: '确定要清空历史记录吗？',
					confirmText: '清空',
					success: (res) => {
						if (res.confirm) {
							uni.removeStorageSync('history')
							this.history = []
						}
					}
				})
			},

			/* 记录历史记录 */
			setHistory(item) {
				let history = uni.getStorageSync('history')
				if (history) {
					history = JSON.parse(history)
					// 最多记录4条历史记录
					if (history.length > 4) {
						history.pop()
					}
					const index = history.findIndex((i) => i.url === item.url)
					if (index === -1) {
						history.unshift(item)
						uni.setStorageSync('history', JSON.stringify(history))
						this.history = history
					} else {
						history.splice(index, 1)
						history.unshift(item)
						uni.setStorageSync('history', JSON.stringify(history))
						this.history = history
					}
				} else {
					uni.setStorageSync('history', JSON.stringify([item]))
					this.history = [item]
				}
			}
		}
	}
</script>

<style lang="scss">
	.container {
		padding: 20rpx;
		font-size: 28rpx;
		padding-bottom: 100rpx;
		.title-box {
			padding: 20rpx 40rpx;
			min-height: 180rpx;
			border-radius: 15rpx;
			background-color: #fff;
			display: flex;
			flex-direction: column;
			justify-content: center;
			margin-bottom: 30rpx;
			position: relative;
			.content {
				font-family: 'Helvetica Neue', 'Helvetica', 'PingFang SC',
					'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', 'Arial',
					'sans-serif';
				color: #323232;
				margin-bottom: 20rpx;
			}
			.from {
				color: #323232;
				text-align: right;
			}
			.fresh-btn {
				position: absolute;
				right: 10rpx;
				top: 10rpx;
				width: 50rpx;
				height: 50rpx;
				text-align: center;
			}
		}

		.cate-title {
			color: #fff;
			font-size: 38rpx;
			font-weight: bold;
			margin-bottom: 20rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			.clear-btn {
				font-weight: 400;
				font-size: 28rpx;
			}
		}
		.url-container {
			display: flex;
			flex-wrap: wrap;
			align-items: center;
			justify-content: space-between;
			.url-item {
				font-size: 30rpx;
				width: 47%;
				padding: 36rpx 0;
				text-align: center;
				margin-bottom: 20rpx;
				border-radius: 10rpx;
				background-color: #fff;
				cursor: pointer;
			}
		}
	}
</style>
