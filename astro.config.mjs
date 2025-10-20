import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'
import svelte from '@astrojs/svelte'
import starlightLinksValidator from 'starlight-links-validator'
import image from '@astrojs/image'
import starlightThemeNova from 'starlight-theme-nova'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
	server: {
		port: 6969,
		host: true,
	},
	site: 'https://fine.niceshare.site/',
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
				{
					tag: 'link',
					attrs: {
						rel: 'apple-touch-icon',
						sizes: '180x180',
						href: '/apple-touch-icon.png',
					},
				},
        { tag: 'link', attrs: { rel: 'alternate', type: 'application/rss+xml', title: '缘知随心庭 RSS', href: '/feed.xml' } },
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						sizes: '32x32',
						href: '/favicon-32x32.png',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'icon',
						sizes: '16x16',
						href: '/favicon-16x16.png',
					},
				},
				{
					tag: 'link',
					attrs: {
						manifest: '/site.webmanifest',
						re: 'manifest',
					},
				},
				{
					tag: 'meta',
					attrs: {
						name: 'theme-color',
						content: '#ffffff',
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
				{
          tag: 'script',
          attrs: {
            src: 'https://www.googletagmanager.com/gtag/js?id=AW-17656588690',
						'id': 'AW-17656588690',
            async: true,
					},
				},
				{
          tag: 'script',
					content: "gtag('event', 'conversion', {'send_to': 'AW-17656588690/B_sqCMnNr68bEJLTqONB'});"
				},
				{
          tag: 'script',
          attrs: {
            src: 'https://www.googletagmanager.com/gtag/js?id=G-7NRFYFR8BE',
						'id': 'G-7NRFYFR8BE',
            defer: true,
					},
				},
				{
          tag: 'script',
					content: "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-7NRFYFR8BE');"
				},
				{
					tag: 'script',
					attrs: {
            src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8586652723015758',
            defer: true,
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
				formats: ['png'], // 只生成 PNG
			},
		}),
	],
	vite: { plugins: [tailwindcss()] },
})