<template>
	<view class="container">
		<uni-section
			:title="item.title"
			type="line"
			class="section-box"
			v-for="(item, index) in urlList"
			:key="index">
			<uni-collapse ref="collapse" class="collapse-box" accordion>
				<uni-collapse-item
					:title="item2.title"
					class="collapse-item"
					v-for="(item2, index2) in item.children"
					:key="index2">
					<view class="content">
						<view
							class="content-item"
							v-for="(item3, index3) in item2.urls"
							:key="index3"
							@click="handleClick(item3)">
							{{ item3.title }}
						</view>
					</view>
				</uni-collapse-item>
			</uni-collapse>
		</uni-section>
	</view>
</template>

<script>
	import config from '@/config/config'
	export default {
		data() {
			return {
				value: ['0'],
				urlList: config.urlList
			}
		},
		methods: {
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
		padding: 30rpx 20rpx;
		padding-bottom: 100rpx;
		// height: 100%;
		// width: 100%;
		// background-color: #88ada6;
		// background-image: url('/static/bg.png');
		// background-repeat: repeat;
		// background-size: auto;
		// background-attachment: fixed;
		.section-box {
			// border-radius: 20rpx;
			// overflow: hidden;
			// background-color: rgba($color: #fff, $alpha: 0.09);

			// margin-bottom: 20rpx;

			// ::v-deep .uni-collapse {
			// 	background-color: rgba($color: #fff, $alpha: 0.1);

			// 	color: #323232;
			// }

			// ::v-deep .uni-section-header__decoration {
			// 	background-color: #323232;
			// }

			// ::v-deep .uni-icons {
			// 	color: #323232 !important;
			// }

			// ::v-deep .uni-section__content-title {
			// 	color: #323232 !important;
			// }

			// ::v-deep .uni-collapse-item__title-box {
			// 	background-color: transparent;
			// 	color: #323232;
			// }
			// ::v-deep .uni-collapse-item__wrap {
			// 	background-color: transparent;
			// 	color: #323232;
			// }

			// ::v-deep .uni-collapse-item__title {
			// 	border: none;
			// 	color: #323232;
			// }

			// ::v-deep .uni-collapse-item__wrap-content {
			// 	border: none;
			// 	color: #323232;
			// }

			.content {
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: space-between;
				padding: 0 20rpx;

				.content-item {
					background-color: #e8e8e8;
					font-size: 30rpx;
					width: 47%;
					padding: 36rpx 0;
					text-align: center;
					margin-bottom: 20rpx;
					border-radius: 10rpx;
					cursor: pointer;
				}
			}
		}
	}
</style>
