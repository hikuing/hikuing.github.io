<script>
	export default {
		onLaunch: function () {},
		onShow: function () {},
		onHide: function () {}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';
	// 设置整个项目的背景色
	page {
		height: 100%;
		width: 100%;
		background-color: #f8f8f8;
		background-image: url('/static/bg2.jpg');
		background-repeat: repeat;
		background-size: 100% 100%;
		background-attachment: fixed;

		// background-image: url('/static/bg.png');
		// background-repeat: repeat;
		// background-size: auto;
		// background-attachment: fixed;
	}
</style>
