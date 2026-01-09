import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import svelte from '@astrojs/svelte'
import starlightLinksValidator from 'starlight-links-validator'
import starlightThemeNova from 'starlight-theme-nova'
import tailwindcss from '@tailwindcss/vite'
import compress from 'astro-compress'

// https://astro.build/config
export default defineConfig({
	server: {
		port: 6969,
		host: true,
	},
	site: 'https://fine.niceshare.site/',
	output: 'static',
	compressHTML: true,
	build: {
		assets: '_astro',
		inlineStylesheets: 'auto',
	},
	prefetch: {
		prefetchAll: true, // 启用智能预取
		defaultStrategy: 'viewport', // 当链接进入视口时预取
	},
	image: {
		// 使用 Astro 5 内置图片优化
		service: {
			entrypoint: 'astro/assets/services/sharp',
		},
		domains: ['fine.niceshare.site'],
		remotePatterns: [{ protocol: 'https' }],
	},
	integrations: [
		svelte(),
		starlight({
			plugins: [starlightLinksValidator(), starlightThemeNova()],
			title: '缘知随心庭',
			social: [
				{ icon: 'rss', label: 'RSS', href: 'https://fine.niceshare.site/feed.xml' },
				{ icon: 'telegram', label: 'Telegram', href: 'https://t.me/nicejade' },
				{ icon: 'youtube', label: 'YouTube', href: 'https://www.youtube.com/@MarshalXuan' },
				{ icon: 'facebook', label: 'Facebook', href: 'https://www.facebook.com/nice.jade.yang' },
				{ icon: 'x.com', label: 'X', href: 'https://x.com/MarshalXuan' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/nicejade/fine.niceshare.site' },
			],
			components: {
        // Override the default `MarkdownContent` component.
				MarkdownContent: './src/components/MarkdownContent.astro',
				LastUpdated: './src/components/LastUpdated.astro',
				// 添加自定义 Footer 组件
				Footer: './src/components/CustomFooter.astro',
      },
			logo: {
				src: './src/assets/images/logo.svg',
			},
			lastUpdated: true,
			defaultLocale: 'root',
			locales: {
				root: {
					label: '简体中文',
					lang: 'zh-CN',
				},
			},
			customCss: [
				'./src/assets/styles/tailwind.css',
				// 你的自定义 CSS 文件的相对路径
				'./src/assets/styles/custom.css',
			],
			head: [
				// 预连接关键域名（比 dns-prefetch 更快）
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://www.googletagmanager.com',
						crossorigin: 'anonymous',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://pagead2.googlesyndication.com',
						crossorigin: 'anonymous',
					},
				},
				// DNS 预解析作为降级方案
				{
					tag: 'link',
					attrs: {
						rel: 'dns-prefetch',
						href: 'https://www.google-analytics.com',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'dns-prefetch',
						href: 'https://www.googleadservices.com',
					},
				},
				// 图标配置
				{
					tag: 'link',
					attrs: {
						rel: 'apple-touch-icon',
						sizes: '180x180',
						href: '/apple-touch-icon.png',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/png',
						sizes: '32x32',
						href: '/favicon-32x32.png',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						type: 'image/png',
						sizes: '16x16',
						href: '/favicon-16x16.png',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'manifest',
						href: '/site.webmanifest',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'alternate',
						type: 'application/rss+xml',
						title: '缘知随心庭 RSS',
						href: '/feed.xml',
					},
				},
				// 主题颜色和视口配置
				{
					tag: 'meta',
					attrs: {
						name: 'theme-color',
						content: '#ffffff',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'viewport',
						content: 'width=device-width, initial-scale=1, viewport-fit=cover',
					},
				},
				// SEO 元标签
				{
					tag: 'meta',
					attrs: {
						name: 'description',
						content: '缘知随心庭，探索技术、哲学与生活智慧的深度博客。聚焦 BlueOS 系统开发、Tailwind CSS 工程实践、高效开源工具与被动收入构建。同时，记录对哲学智慧、思维模型与认知升级的持续探索。以有涯随无涯，缘知而行，沉心以笔。在信息洪流中，尝试锚定理性与好奇，追寻技术与人文交汇的真谛。所有思考沉淀于此，愿与您共鸣。',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'keywords',
						content: '技术博客, 音乐推荐, 思维探索, 自部署, 自动化, 作品集, 音乐鉴赏分享, BlueOS 开发, Tailwind CSS, 编程开发, 哲学智慧, 开源工具, 睡后收入构建',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'author',
						content: 'MarshalXuan',
					},
				},
				// Open Graph 标签
				{
					tag: 'meta',
					attrs: {
						property: 'og:type',
						content: 'website',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:site_name',
						content: '缘知随心庭',
					},
				},
				{
					tag: 'meta',
					attrs: {
						property: 'og:locale',
						content: 'zh_CN',
					},
				},
				// Twitter Card 标签
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:card',
						content: 'summary_large_image',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'twitter:creator',
						content: '@MarshalXuan',
					},
				},
				{
					tag: 'script',
					attrs: { type: 'application/ld+json' },
					content: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'WebSite',
						name: '缘知随心庭',
						url: 'https://fine.niceshare.site/',
						potentialAction: {
							'@type': 'SearchAction',
							target: 'https://fine.niceshare.site/?q={search_term_string}',
							'query-input': 'required name=search_term_string'
						}
					}),
				},
				// 延迟加载 Google Analytics 和 Ads（首屏后加载）
				{
					tag: 'script',
					content: `
						// 延迟加载分析脚本，提升首屏性能
						window.addEventListener('load', function() {
							setTimeout(function() {
								// Google Analytics
								const gaScript1 = document.createElement('script');
								gaScript1.src = 'https://www.googletagmanager.com/gtag/js?id=G-7NRFYFR8BE';
								gaScript1.async = true;
								document.head.appendChild(gaScript1);
								
								const gaScript2 = document.createElement('script');
								gaScript2.src = 'https://www.googletagmanager.com/gtag/js?id=AW-17656588690';
								gaScript2.async = true;
								document.head.appendChild(gaScript2);
								
								// 初始化 gtag
								window.dataLayer = window.dataLayer || [];
								function gtag(){dataLayer.push(arguments);}
								gtag('js', new Date());
								gtag('config', 'G-7NRFYFR8BE', { send_page_view: false });
								gtag('config', 'AW-17656588690');
								
								// 延迟发送首页浏览
								setTimeout(() => {
									gtag('event', 'page_view', { send_to: 'G-7NRFYFR8BE' });
								}, 100);
								
								// Google Ads
								const adsScript = document.createElement('script');
								adsScript.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8586652723015758';
								adsScript.async = true;
								adsScript.crossOrigin = 'anonymous';
								document.head.appendChild(adsScript);
							}, 1000); // 首屏后 1 秒加载
						});
					`,
				},
			],
			sidebar: [
				{
					label: '自探索',
					autogenerate: { directory: 'explore' },
				},
				{
					label: '自部署',
					autogenerate: { directory: 'self-hosted' },
				},
				{
					label: '自动化',
					autogenerate: { directory: 'automation' },
				},
				{
					label: '作品集',
					autogenerate: { directory: 'projects' },
				},
				{
					label: '好思维',
					autogenerate: { directory: 'thinking' },
				},
				{
					label: '读好书',
					autogenerate: { directory: 'books' },
				},
				{
					label: '爱音乐',
					autogenerate: { directory: 'music' },
				},
				{
					label: '新文章',
					autogenerate: { directory: 'articles' },
				},
			],
		}),
		compress({
			HTML: {
				removeComments: true,
				collapseWhitespace: true,
				removeRedundantAttributes: true,
				removeScriptTypeAttributes: true,
				removeStyleLinkTypeAttributes: true,
				minifyCSS: true,
				minifyJS: true,
			},
			CSS: {
				level: 1, // 使用安全的 CSS 优化级别
			},
			JavaScript: {
				compress: {
					drop_console: true,
					drop_debugger: true,
					pure_funcs: ['console.log', 'console.info'],
					passes: 2,
				},
				mangle: true,
			},
			Image: {
				webp: {
					quality: 85,
				},
				avif: {
					quality: 80,
				},
				jpg: {
					quality: 85,
				},
				png: {
					quality: 85,
				},
			},
			SVG: {
				multipass: false, // 禁用多次优化避免破坏 SVG
				plugins: [
					'removeDoctype',
					'removeComments',
					'removeMetadata',
				],
			},
			Logger: 1,
		}),
	],
	vite: {
		plugins: [tailwindcss()],
		build: {
			cssCodeSplit: true,
			minify: 'esbuild',
			rollupOptions: {
				output: {
					manualChunks: {
						'vendor': ['svelte'],
					},
				},
			},
		},
		optimizeDeps: {
			// 预构建优化
			include: ['svelte', 'medium-zoom'],
			exclude: ['@astrojs/starlight'],
		},
		ssr: {
			noExternal: ['starlight-theme-nova'],
		},
		// 开发服务器优化
		server: {
			hmr: {
				overlay: false, // 禁用错误覆盖层以提高性能
			},
		},
	},
})