var normalAttr = [
	'width',
	'height',
	'left',
	'top',
	'bottom',
	'right',
	'marginLeft',
	'marginTop',
	'marginBottom',
	'marginRight'
  ];
  
  var css3Attr = [
	'rotate',
	'rotateX',
	'rotateY',
	'skewX',
	'skewY',
	'translateX',
	'translateY',
	'translateZ',
	'scale',
	'scaleX',
	'scaleY'
  ];
  var Tween = {
	  linear: function (t, b, c, d){  //匀速
		  return c*t/d + b;
	  },
	  easeIn: function(t, b, c, d){  //加速曲线
		  return c*(t/=d)*t + b;
	  },
	  easeOut: function(t, b, c, d){  //减速曲线
		  return -c *(t/=d)*(t-2) + b;
	  },
	  easeBoth: function(t, b, c, d){  //加速减速曲线
		  if ((t/=d/2) < 1) {
			  return c/2*t*t + b;
		  }
		  return -c/2 * ((--t)*(t-2) - 1) + b;
	  },
	  easeInStrong: function(t, b, c, d){  //加加速曲线
		  return c*(t/=d)*t*t*t + b;
	  },
	  easeOutStrong: function(t, b, c, d){  //减减速曲线
		  return -c * ((t=t/d-1)*t*t*t - 1) + b;
	  },
	  easeBothStrong: function(t, b, c, d){  //加加速减减速曲线
		  if ((t/=d/2) < 1) {
			  return c/2*t*t*t*t + b;
		  }
		  return -c/2 * ((t-=2)*t*t*t - 2) + b;
	  },
	  elasticIn: function(t, b, c, d, a, p){  //正弦衰减曲线（弹动渐入）
		  if (t === 0) { 
			  return b; 
		  }
		  if ( (t /= d) == 1 ) {
			  return b+c; 
		  }
		  if (!p) {
			  p=d*0.3; 
		  }
		  if (!a || a < Math.abs(c)) {
			  a = c; 
			  var s = p/4;
		  } else {
			  var s = p/(2*Math.PI) * Math.asin (c/a);
		  }
		  return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	  },
	  elasticOut: function(t, b, c, d, a, p){    //*正弦增强曲线（弹动渐出）
		  if (t === 0) {
			  return b;
		  }
		  if ( (t /= d) == 1 ) {
			  return b+c;
		  }
		  if (!p) {
			  p=d*0.3;
		  }
		  if (!a || a < Math.abs(c)) {
			  a = c;
			  var s = p / 4;
		  } else {
			  var s = p/(2*Math.PI) * Math.asin (c/a);
		  }
		  return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	  },    
	  elasticBoth: function(t, b, c, d, a, p){
		  if (t === 0) {
			  return b;
		  }
		  if ( (t /= d/2) == 2 ) {
			  return b+c;
		  }
		  if (!p) {
			  p = d*(0.3*1.5);
		  }
		  if ( !a || a < Math.abs(c) ) {
			  a = c; 
			  var s = p/4;
		  }
		  else {
			  var s = p/(2*Math.PI) * Math.asin (c/a);
		  }
		  if (t < 1) {
			  return - 0.5*(a*Math.pow(2,10*(t-=1)) * 
					  Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		  }
		  return a*Math.pow(2,-10*(t-=1)) * 
				  Math.sin( (t*d-s)*(2*Math.PI)/p )*0.5 + c + b;
	  },
	  backIn: function(t, b, c, d, s){     //回退加速（回退渐入）
		  if (typeof s == 'undefined') {
			 s = 1.70158;
		  }
		  return c*(t/=d)*t*((s+1)*t - s) + b;
	  },
	  backOut: function(t, b, c, d, s){
		  if (typeof s == 'undefined') {
			  s = 1.70158;  //回缩的距离
		  }
		  return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	  }, 
	  backBoth: function(t, b, c, d, s){
		  if (typeof s == 'undefined') {
			  s = 1.70158; 
		  }
		  if ((t /= d/2 ) < 1) {
			  return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		  }
		  return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	  },
	  bounceIn: function(t, b, c, d){    //弹球减振（弹球渐出）
		  return c - Tween['bounceOut'](d-t, 0, c, d) + b;
	  },       
	  bounceOut: function(t, b, c, d){//*
		  if ((t/=d) < (1/2.75)) {
			  return c*(7.5625*t*t) + b;
		  } else if (t < (2/2.75)) {
			  return c*(7.5625*(t-=(1.5/2.75))*t + 0.75) + b;
		  } else if (t < (2.5/2.75)) {
			  return c*(7.5625*(t-=(2.25/2.75))*t + 0.9375) + b;
		  }
		  return c*(7.5625*(t-=(2.625/2.75))*t + 0.984375) + b;
	  },      
	  bounceBoth: function(t, b, c, d){
		  if (t < d/2) {
			  return Tween['bounceIn'](t*2, 0, c, d) * 0.5 + b;
		  }
		  return Tween['bounceOut'](t*2-d, 0, c, d) * 0.5 + c*0.5 + b;
	  }
  }
  function css(ele, attr, val){
	if(typeof attr === 'string' && typeof val === 'undefined'){
	  if(css3Attr.indexOf(attr) !== -1){
		return transform(ele, attr);
	  }
	  var ret = getComputedStyle(ele)[attr];
	  return normalAttr.indexOf(attr) !== -1 ? parseFloat(ret) : ret * 1 === ret * 1 ? ret*1 : ret;  
	}
	
	function setAttr(attr, val){
	  if(css3Attr.indexOf(attr) !== -1){
		return transform(ele, attr, val);
	  }
	  if(normalAttr.indexOf(attr) !== -1){
		ele.style[attr] = val ? val + 'px' : val;
	  }else{
		ele.style[attr] = val;
	  }
	}
	
	// 批量设置
	if(typeof attr === 'object'){
	  for(var key in attr){
		setAttr(key, attr[key]);
	  }
	  return;
	}
	
	setAttr(attr, val);
  }
  
  function transform(el, attr, val){
	el._transform = el._transform || {};
  
	if(typeof val === 'undefined'){
	  return el._transform[attr];
	}
	
	el._transform[attr] = val;
	
	var str = '';
	
	for(var key in el._transform){
	  var value = el._transform[key];
	  switch (key) {
		case 'translateX':
		case 'translateY':
			  case 'translateZ':
		  str += `${key}(${value}px) `;
		  break;
		case 'rotate':
		case 'rotateX':
		case 'rotateY':
		case 'skewX':
		case 'skewY':
		  str += `${key}(${value}deg) `;
		  break;
		default:
		  str += `${key}(${value}) `;
	  }
	}
	
	el.style.transform = str.trim();
  }
  
 function mTween(props){
	var el = props.el;
	  if(el.mTween) return;  
	var duration = props.duration || 400,
		fx = props.fx || 'easeOut',
		cb = props.cb,
			  attr = props.attr || {},
			  s = props.s;
	var beginData = {}, changeData = {};
	  var maxDis = 0;
	for(var key in attr){
	  beginData[key] = css(el, key);
		  changeData[key] = attr[key] - beginData[key];
		  maxDis = Math.max(Math.abs(changeData[key]),maxDis);
	  }
	  if(typeof duration == "object"){
		  durationPorps = duration;
		  duration = durationPorps.multiple!==undefined?maxDis*durationPorps.multiple:maxDis*1.2;
		  if(durationPorps.min !== undefined){
			  duration = duration < durationPorps.min?durationPorps.min:duration;
		  }
		  if(durationPorps.max !== undefined){
			  duration = duration > durationPorps.max?durationPorps.max:duration;
		  }
  
	  }
	
	var startTime = Date.now();
	
	(function startMove(){
	  el.mTween = window.requestAnimationFrame(startMove);
	  var time = Date.now() - startTime;
	  if(time > duration){
		time = duration;
		window.cancelAnimationFrame(el.mTween);
		el.mTween = null;
	  }
	  
	  for(var key in attr){
		var currentPos = Tween[fx](time, beginData[key], changeData[key], duration,s);
		css(el, key, currentPos);
	  }
	  
	  if(time === duration && typeof cb === 'function'){
		cb.call(el);
	  }
	})();
  }
  
  mTween.stop = function (el){
	window.cancelAnimationFrame(el.mTween);
	el.mTween = null;
 };

// 鼠标滚轮
 function mouseWheel(el, upFn,downFn) {
	el.addEventListener('mousewheel', (e) => {
		// e.wheelDelta  滚轮向上 - > 120  滚轮向下 - >  -120
		if (e.wheelDelta > 0) {
			upFn && upFn.call(el)
		} else {
			downFn && downFn.call(el)
		}
	});

	el.addEventListener('DOMMouseScroll', (e) => {
		// e.detail 滚轮向上  ->  -3 滚轮向下  ->  3
		if (e.detail > 0) {
			downFn && downFn.call(el)
		}else{
			upFn && downFn.call(el)
		}
	})
}  

// 鼠标进入方向
function mousrEnterDirection(wrap){  
	var wrap = document.getElementById(wrap);  
	var hoverDir = function(e){  
		var w = wrap.offsetWidth,  
			h = wrap.offsetHeight,  
			x = ( e.clientX - wrap.offsetLeft - ( w / 2 ) ) * ( w > h ? ( h / w ) : 1 ),  
			y = (e.clientY - wrap.offsetTop - (h / 2)) * (h > w ? (w / h) : 1),  
			// 上(0) 右(1) 下(2) 左(3)  
			direction = Math.round( ( ( ( Math.atan2( y, x ) * ( 180 / Math.PI ) ) + 180 ) / 90) + 3 ) % 4,  
			dirName = new Array('上方','右侧','下方','左侧');  
		if( e.type == 'mouseover' || e.type == 'mouseenter' ){  
			wrap.innerHTML = dirName[direction] + '进入';  
		}else{  
			wrap.innerHTML = dirName[direction] + '离开';  
		}  
	}  
	if( window.addEventListener ){  
		wrap.addEventListener( 'mouseover',hoverDir,false );  
		wrap.addEventListener( 'mouseout',hoverDir,false );  
	}else if( window.attachEvent ){  
		wrap.attachEvent( 'onmouseenter',hoverDir );  
		wrap.attachEvent( 'onmouseleave',hoverDir );  
	}  
}  
  
  