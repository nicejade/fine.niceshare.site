import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import svelte from '@astrojs/svelte'
import starlightLinksValidator from 'starlight-links-validator'
import image from '@astrojs/image'
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
				// 预加载关键资源
				{
					tag: 'link',
					attrs: {
						rel: 'preload',
						href: 'https://fine.niceshare.site/favicon.svg',
						as: 'image',
					},
				},
				// DNS 预解析
				{
					tag: 'link',
					attrs: {
						rel: 'dns-prefetch',
						href: 'https://www.googletagmanager.com',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'dns-prefetch',
						href: 'https://pagead2.googlesyndication.com',
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
				// Google Analytics 和 Ads 脚本优化
				{
					tag: 'script',
					attrs: {
						src: 'https://www.googletagmanager.com/gtag/js?id=G-7NRFYFR8BE',
						async: true,
					},
				},
				{
					tag: 'script',
					attrs: {
						src: 'https://www.googletagmanager.com/gtag/js?id=AW-17656588690',
						async: true,
					},
				},
				{
					tag: 'script',
					content: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', 'G-7NRFYFR8BE');
						gtag('config', 'AW-17656588690');
					`,
				},
				{
					tag: 'script',
					attrs: {
						src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8586652723015758',
						async: true,
						crossorigin: 'anonymous',
					},
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
					label: '爱音乐',
					autogenerate: { directory: 'music' },
				},
				{
					label: '新文章',
					autogenerate: { directory: 'articles' },
				},
			],
		}),
		image({
			serviceEntryPoint: '@astrojs/image/sharp',
			serviceConfig: {
				formats: ['webp', 'avif', 'png'], // 支持现代格式
			},
		}),
		compress({
			HTML: true,
			CSS: true,
			JavaScript: true,
			Image: true,
			SVG: true,
			Logger: 1,
		}),
	],
	vite: {
		plugins: [tailwindcss()],
		build: {
			target: 'es2022',
			cssTarget: 'chrome80',
			minify: 'terser',
			terserOptions: {
				compress: {
					drop_console: true,
					drop_debugger: true,
				},
			},
			rollupOptions: {
				output: {
					manualChunks: {
						vendor: ['svelte'],
					},
				},
			},
		},
		ssr: {
			noExternal: ['starlight-theme-nova'],
		},
	},
})