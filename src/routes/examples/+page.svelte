<script>
	import { Canvas } from '@threlte/core';

	// Models
	import Scene1 from '../../../src/lib/scene/scene1.svelte';
	import Scene2 from '../../../src/lib/scene/scene2.svelte';
	import Scene3 from '../../../src/lib/scene/scene3.svelte';
	import Scene4 from '../../../src/lib/scene/scene4.svelte';
	import Scene5 from '../../../src/lib/scene/scene5.svelte';

	// Array of scenes
	let scenes = [Scene1, Scene2, Scene3, Scene4, Scene5];

	// State to track the selected scene index
	let selectedSceneIndex = 0;

	// Function to handle scene selection
	function selectScene(index) {
		selectedSceneIndex = index;
	}
</script>

<div class="grid grid-cols-5 gap-3 p-10" style="position: relative; top: 40px;">
	{#each scenes as scene, index}
		<div class="bg-gray-200 rounded-md cursor-pointer" on:click={() => selectScene(index)}>
			<div class="w-full h-full aspect-square">
				<Canvas>
					{#if scene === Scene1}
						<Scene1 />
					{:else if scene === Scene2}
						<Scene2 />
					{:else if scene === Scene3}
						<Scene3 />
					{:else if scene === Scene4}
						<Scene4 />
					{:else if scene === Scene5}
						<Scene5 />
					{/if}
				</Canvas>
			</div>
		</div>
	{/each}
	<div class="bg-gray-300 rounded-md sm:col-span-5">
		<div class="w-full h-full aspect-2/1">
			<Canvas>
				{#if scenes[selectedSceneIndex] === Scene1}
					<Scene1 />
				{:else if scenes[selectedSceneIndex] === Scene2}
					<Scene2 />
				{:else if scenes[selectedSceneIndex] === Scene3}
					<Scene3 />
				{:else if scenes[selectedSceneIndex] === Scene4}
					<Scene4 />
				{:else if scenes[selectedSceneIndex] === Scene5}
					<Scene5 />
				{/if}
			</Canvas>
		</div>
	</div>
</div>
