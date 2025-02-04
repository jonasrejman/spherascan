<script>
	import Scene1 from '../../../src/lib/scene/scene1.svelte';
	import Scene2 from '../../../src/lib/scene/scene2.svelte';
	import { Canvas } from '@threlte/core';
</script>

<section class="pt-20 p-5">
	<div class="canvas-wrapper ring h-[200px]">
		<Canvas>
			<Scene1 />
		</Canvas>
	</div>
</section>

<section class="pt-0 p-5">
	<div class="canvas-wrapper ring h-[200px]">
		<Canvas>
			<Scene2 />
		</Canvas>
	</div>
</section>
