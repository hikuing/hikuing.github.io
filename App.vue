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
		background-color: #355c7d;
		// background-image: url('/static/bg2.jpg');
		// background-size: 100% 100%;

		background-image: url('/static/bg.png');
		background-size: auto;

		background-repeat: repeat;
		background-attachment: fixed;
	}
</style>
