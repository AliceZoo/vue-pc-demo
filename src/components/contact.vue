<template>
	<div id="contact">
		<div class="c_left fl">
			<h3>联系我们</h3>
			<div class="box">
				<div class="phone">
					<h4>深圳市朗尼科智能股份有限公司<p>(ShenZhen LONIX Intellitech Co., Ltd)</p></h4>
					<p>电话：（+86）0755-12365784</p>
					<p>传真：（+86）0755-12365784</p>
					<p>邮箱：12345678912@qq.omaaa</p>
					<p>邮编：518008</p>
				</div>
			</div>
			<h3>留言</h3>
			<div class="box">
				<div class="message">
					<h4>欢迎您给我们留言</h4>
					<div class="form">
						<form>
		          <p>
		            <label>内容：</label>
		            <textarea name="contact" autocomplete="off"></textarea>
		            <span>*</span>
		          </p>
							<p>
		            <label>联系方式：</label>
		            <input type="text" name="phone" autocomplete="off" />
		            <span>*</span>
		          </p>
							<p>
		            <label>&nbsp;</label>
								<input type="button" value="提交留言">
							</p>
						</form>
					</div>
				</div>
			</div>
		</div>
		<div class="c_right fr">
			<div id="l-map"></div>
		</div>
	</div>
</template>

<script>
import BMap from 'BMap'
export default {
	mounted() {
		var map = new BMap.Map("l-map");
		map.centerAndZoom(new BMap.Point(116.403438,39.924455), 12);
		map.addOverlay(new BMap.Marker(new BMap.Point(116.403438,39.924455)));

		map.enableScrollWheelZoom(true);
		
		map.addControl(new BMap.ScaleControl({anchor: BMAP_ANCHOR_TOP_LEFT}));        
		map.addControl(new BMap.NavigationControl());     
		map.addControl(new BMap.NavigationControl({anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL}));    
		
	}
}
</script>