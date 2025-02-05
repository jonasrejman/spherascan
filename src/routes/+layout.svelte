<script>
	let { children } = $props();
	import '../app.css';
	import { Icon } from '@steeze-ui/svelte-icon';
	import {
		ServerStack,
		UserGroup,
		HandRaised,
		GlobeAsiaAustralia,
		EllipsisHorizontalCircle,
		LightBulb
	} from '@steeze-ui/heroicons';
</script>

<div class="fixed top-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
	<div class="grid h-full max-w-lg grid-cols-6 mx-auto font-medium mt-2">
		<a
			type="button"
			class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-100 rounded-lg"
			href="/"
		>
			<Icon src={EllipsisHorizontalCircle} theme="outline" size="24px" />
			<span class="text-sm text-gray-500 dark:text-gray-400">spherascan</span>
		</a>
		<a
			type="button"
			class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-100 rounded-lg"
			href="/application"
		>
			<Icon src={LightBulb} theme="outline" size="24px" />
			<span class="text-sm text-gray-500 dark:text-gray-400">application</span>
		</a>
		<a
			type="button"
			class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-100 rounded-lg"
			href="/examples"
		>
			<Icon src={HandRaised} theme="outline" size="24px" />
			<span class="text-sm text-gray-500 dark:text-gray-400">examples</span>
		</a>

		<a
			type="button"
			class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-100 rounded-lg"
			href="/specs"
		>
			<Icon src={ServerStack} theme="outline" size="24px" />
			<span class="text-sm text-gray-500 dark:text-gray-400">specs</span>
		</a>
		<a
			type="button"
			class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-100 rounded-lg"
			href="/partners"
		>
			<Icon src={GlobeAsiaAustralia} theme="outline" size="24px" />
			<span class="text-sm text-gray-500 dark:text-gray-400">partners</span>
		</a>
		<a
			type="button"
			class="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-100 rounded-lg"
			href="/team"
		>
			<Icon src={UserGroup} theme="outline" size="24px" />
			<span class="text-sm text-gray-500 dark:text-gray-400">team</span>
		</a>
	</div>
</div>

{@render children()}
