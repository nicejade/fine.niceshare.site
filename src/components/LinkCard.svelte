<script>
  import { onMount } from 'svelte'

	export let link;
  export let title;
  export let desc;
  let isDarkMode = false

  onMount(() => {
    isDarkMode = localStorage.getItem('starlight-theme') === 'dark' || document.documentElement.getAttribute('data-theme') === 'dark'

    const observer = new MutationObserver(mutationsList => {
      for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          isDarkMode = mutation.target.getAttribute('data-theme') === 'dark';
        }
      }
    });

    observer.observe(document.documentElement, { attributes: true });

    // 清理函数，当组件销毁时停止观察
    return () => {
      observer.disconnect();
    };
	})
</script>

<div class="rounded-lg p-5 transition-shadow duration-150 ease-in-out relative
  { isDarkMode ? "shadow-custom-dark hover:shadow-custom-dark-xl" : "shadow-custom-white hover:shadow-custom-white-xl" }">
  <a href="{link + '?ref=niceshare.site'}" target="_blank" rel="noopener"
    class="text-xl font-medium !no-underline hover:cursor-pointer">
    <h3 class="text-base text-black hover:text-brand">{title}</h3>
		<div class="text-sm font-medium text-grey no-underline ">
    	{desc}
  	</div>
  </a>
</div>