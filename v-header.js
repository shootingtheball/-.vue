<template>
	<div class="header">
		<div class="content-wrapper">
		    <div class="background">
				<img src="./zhangliang.jpg" alt="背景图片" width="100%" height="100%">
		    </div>
			<div class="avatar" ><img src="./zhangliang.jpg" alt=""></div>
			<div class="content">
				<div class="title"  v-if="seller.supports">{{seller.name}} </div>
				<div class="description">{{seller.description}}</div>
				<div class="supports">商家配送约{{seller.deliverTime}}</div>
			</div>
		</div>
		 <div class="bulletin-wrapper" v-if="seller.supports" @click="computedDetial"><span >
			<img :src="computedSrc" ></span>{{seller.description}}
		</div>
		 <div v-show="vDetial" class="detial">
			 <div class="detial-wraper">
				 <div class="detial-content">
					 <p>{{seller.name}}</p>
					 <div class="star-wraper">
						 <vStar :size="50" :score="4"></vStar>	 
					 </div>
					 <div class="title">
						 <div class="title-left"></div>
						 <div class="title-text">优惠信息</div>
						 <div class="title-right"></div>
					 </div>
					 <ul>
						 <li v-for="item in seller.supports"><img :src="" alt="">{{item.description}}</li>
					 </ul>
				 </div>
			 </div>
			 <div class="detial-footer" >
				 <span  @click="computedDetial"><img width="10%" src="./close.png" alt=""></span>
			 </div>
		 </div>
	</div>

</template>

<script>
	 var vDecrease = require("./decrease.png");
	 var vInitial = require("./initial.png");
	 var vDiscount = require("./discount.png");
	 
	 import vStar from "../v-star/v-star";

	export default{
		name:"vHeader",
		props:{
			seller:{
				type:Object
			},
		},
		data() {
			return {
				vDetial:false,
				score:5
			}
		},
		created() {
			this.classMap=["decrease","discount","initial"]
		},
		components:{
			vStar
		},
		computed:{
			computedSrc() {
				if (this.seller.supports[0].type===0) {
					return vDecrease;
				}else if(this.seller.supports[0].type===1){
					return vInitial;
				}
			}
		},
		methods:{
			computedDetial() {
				this.vDetial = !this.vDetial;
			}
		}
	}

</script>


<style scoped> 
.header{
	width:100%;
	position: relative;
	height: 400px;
}
.content-wrapper{
	height: 300px;
	position: relative;
	background: rgba(7, 17, 27, 0.2)
}
.avatar{
	display: inline-block;
	vertical-align: middle;
	margin-left: 50px;
	margin-top: 90px;
}
.avatar img{
	width: 230px;
}
.content{
	display: inline-block;
	width: 650px;
	vertical-align: middle;
	font-size: 0;
	white-space: nowrap;
	text-overflow: ellipsis;
	overflow: hidden;
	color:#fff;
}
.title{
	font-size: 45px;
	height: 60px
}
.title span{

}
.description{
	font-size: 25px;
}
.supports{
	font-size: 20px;
	margin-top: 30px;
}
.background{
	position: absolute;
	top:0;
	left: 0;
	height: 100%;
	width: 100%;
	z-index:-1 ;
	filter: blur(10px);
}
.bulletin-wrapper{
	position: absolute;
	width: 100%;
	bottom: 0;
	line-height:65px; 
	height: 65px;
	font-size: 20px;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
}
.bulletin-wrapper img{
	height: 55%;
	vertical-align: middle;
}
.detial{
	position: fixed;
	width: 100%;
	height: 100%;
	background-color: rgba(7,17,27,0.7);
	top:0px;
	overflow: auto;
}
.detial-wraper{
	min-height: 100%;	
}
.detial-content{
	padding-bottom: 110px;
	font-size: 86px;
	color:#fff;
	text-align: center;
	height: 100%;
}
.detial-content p{
	margin-top: 17%;
}
.detial-footer{
	margin-top: -110px;
	height: 110px;
	line-height: 110px;
	text-align: center;
}
.star-wraper{
	border: 1px solid #fff;
}
.title{
	height: 40;
	border: 1px solid yellow;
	height: 100px;
	line-height: 100px;
	display: flex;
	justify-content: space-between;
}
.title-left,.title-right{
	border: 2px solid red;
	flex-flow: 1;
	width: 20%;
}
.title-text{
	background-color: #fffd;
}
</style>