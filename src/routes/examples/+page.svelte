<script lang="ts">
	import { Canvas } from '@threlte/core';

	// Models
	import Scene1 from '../../../src/lib/scene/scene1.svelte';
	import Scene2 from '../../../src/lib/scene/scene2.svelte';
	import Scene3 from '../../../src/lib/scene/scene3.svelte';
	import Scene4 from '../../../src/lib/scene/scene4.svelte';
	import Scene5 from '../../../src/lib/scene/scene5.svelte';

	let selectedSceneIndex = 0;
	const scenes = [Scene1, Scene2, Scene3, Scene4, Scene5];

	// Function to handle scene selection
	function selectScene(index: number) {
		selectedSceneIndex = index;
	}

	// loader

	import { Tween } from 'svelte/motion';

	import { fromStore } from 'svelte/store';
	import { useProgress } from '@threlte/extras';
	const { progress } = useProgress();
	const p = fromStore(progress);
	const tweenedProgress = Tween.of(() => p.current, {
		duration: 150
	});
	const progressWidth = $derived(100 * tweenedProgress.current);
	const progressLessThanOne = $derived(tweenedProgress.current < 1);
</script>

{#if progressLessThanOne}
	<div
		transition:fade={{
			duration: 200
		}}
		class="wrapper"
	>
		<p class="loading">Loading</p>
		<div class="bar-wrapper">
			<div class="bar" style="width: {progressWidth}%"></div>
		</div>
	</div>
{/if}

<div class="grid grid-cols-5 gap-2 p-10" style="position: relative; top: 40px;">
	{#each scenes as scene, index}
		<button
			type="button"
			class="bg-gray-200 rounded-md hover:bg-gray-300"
			on:click={() => selectScene(index)}
			on:keydown={(event) => event.key === 'Enter' && selectScene(index)}
			aria-label={`Select scene ${index + 1}`}
		>
			<div class="w-full h-full aspect-square main">
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
		</button>
	{/each}
	<div class="bg-gray-400 rounded-md sm:col-span-5">
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

<style>
	div.main {
		height: 100%;
	}
	.wrapper {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background-color: white;
		display: flex;
		flex-direction: column;
		gap: 0.25rem;
		align-items: center;
		justify-content: center;
		color: black;
	}
	.loading {
		font-size: 0.875rem;
		line-height: 1.25rem;
	}
	.bar-wrapper {
		width: 33.333333%;
		height: 10px;
		border: 1px solid black;
		position: relative;
	}
	.bar {
		height: 100%;
		background-color: black;
	}
</style>
