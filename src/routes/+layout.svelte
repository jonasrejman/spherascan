<script>
	let { children } = $props();
	import '../app.css';
	import { Icon } from '@steeze-ui/svelte-icon';
	import { Bolt, Bars3, ServerStack, QuestionMarkCircle, UserGroup } from '@steeze-ui/heroicons';
</script>

<div
	class="fixed top-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600"
>
	<div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
		<a
			type="button"
			class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
			href="/"
		>
			<Icon src={Bars3} theme="solid" size="24px" />
			<span
				class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
				>main</span
			>
		</a>
		<a
			type="button"
			class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
			href="/about"
		>
			<Icon src={QuestionMarkCircle} theme="solid" size="24px" />
			<span
				class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
				>about</span
			>
		</a>
		<a
			type="button"
			class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
			href="/specs"
		>
			<Icon src={ServerStack} theme="solid" size="24px" />
			<span
				class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
				>specs</span
			>
		</a>
		<a
			type="button"
			class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
			href="/partnership"
		>
			<Icon src={UserGroup} theme="solid" size="24px" />
			<span
				class="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
				>partners</span
			>
		</a>
	</div>
</div>

{@render children()}
