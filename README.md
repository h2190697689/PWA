# PWA
> 渐进式增强WEB应用

## 出现
1. 网页资源下载带来网络延迟
2. Web应用依赖于浏览器作为入口
3. 没有好的离线使用方案
4. 没有好的消息通知方案 

## 非单一技术
1. Web App Manifest
2. Service Worker
3. Cache API 缓存
4. Push&Notification 推送与通知
5. Background Sync 后台同步
6. 响应式设计

## 解决问题
1. 显著提高应用加载速度
2. web应用可以在离线环境下使用
3. web应用能够像原生应用一样被添加到主屏
4. web应用能在未被激活时发起推送通知
5. web应用与操作系统集成能力进一步提高


## 技术
1. Web App Manifest (json文件)
```
{
	"short_name": "Manifest Sample",
	"name: "Web Application Manifest Sample",
	"icons": [{
		"src": "launcher-icon-2x.png",
		"sizes": "96x96",
		"type": "image/png"
	}],
	"scope": "/sample/",
	"start_url": "/sample/index.html",
	"display": "standalone",
	"orientation": "landscape",
	"theme_color": "#000",
	"background_color": "#fff"	
}
```

2. Service Worker
- 可编程 Web Worker
- 像一个位于浏览器与网络之间的客户端代理，可以拦截、处理、响应流经的HTTP请求
- 配合Cache Storage API,可以自由管理HTTP请求文件粒度的缓存
 