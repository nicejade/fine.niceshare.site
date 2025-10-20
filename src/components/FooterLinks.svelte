<script lang="ts">
  function reportGaEvent(action: string, category: string, label?: string) {
    const g = (window as any).gtag || (() => {});
    g('event', action, {
      event_category: category,
      event_label: label || action,
    });
  }

  const currentYear: number = new Date().getFullYear();

  function assembleExternalLink(url: string): string {
    return `${url}?ref=fine.niceshare.site`;
  }

  const friendSites = [
    { name: '逍遥自在轩', href: 'https://www.niceshare.site/', key: 'wechat-jeffjade-com' },
    { name: '清风明月轩', href: 'https://www.lovejade.cn/', key: 'wechat-jeffjade-com' },
    { name: '晚晴幽草轩', href: 'https://www.jeffjade.com/', key: 'www-jeffjade-com' },
    { name: '静轩之别苑', href: 'https://quickapp.lovejade.cn/', key: 'quickapp-lovejade' },
    { name: '玉桃文飨轩', href: 'https://share.lovejade.cn/', key: 'share.lovejade.cn' },
    { name: '悠然宜想亭', href: 'https://forum.lovejade.cn/', key: 'forum-lovejade' },
  ];
</script>

<footer class="z-0 my-4 text-center text-gray-400">
  <div class="w-full mt-2 mb-2 text-base flex flex-row flex-wrap justify-center items-center">
    {#each friendSites as site}
      <a
        class="px-3 text-grey cursor-pointer hover:text-brand transition-colors"
        target="_blank"
        rel="external noopener"
        href={assembleExternalLink(site.href)}
        on:click={() => reportGaEvent(site.key, 'footer', site.name)}
        >{site.name}</a
      >
    {/each}
  </div>

  <div class="w-full text-base flex flex-row flex-wrap justify-center items-center">
    <span class="mx-3 text-gray-400 pr-2">Copyright © {currentYear}</span>
    <a
      class="text-gray-400 cursor-pointer hover:text-brand transition-colors"
      target="_blank"
      rel="external noopener"
      href={assembleExternalLink('https://www.jeffjade.com')}
      on:click={() => reportGaEvent('jeffjade', 'footer', '晚晴幽草轩')}
      >
      晚晴幽草轩
    </a>出品
  </div>
</footer>
