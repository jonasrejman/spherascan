<script>
	import { onMount } from 'svelte';

	let modelUrl = '/3Dmodels/test3.glb';
	let modelViewerLoaded = false;

	onMount(async () => {
		// @ts-ignore
		if (!window.modelViewer) {
			const script = document.createElement('script');
			script.src = 'https://ajax.googleapis.com/ajax/libs/model-viewer/4.0.0/model-viewer.min.js';
			script.onload = () => {
				modelViewerLoaded = true;
			};
			document.head.appendChild(script);
		} else {
			modelViewerLoaded = true;
		}
	});
</script>

<!-- Use the model viewer component only when the script is loaded -->

<div class="flex items-center justify-center h-screen">
	<div class="">
		{#if modelViewerLoaded}
			<model-viewer
				src={modelUrl}
				alt="A 3D model"
				ar
				ar-modes="webxr scene-viewer quick-look"
				camera-controls
				auto-rotate
			></model-viewer>
		{/if}
		<p class="font-light text-7xl">EXAMPLES 2</p>
		<p class="font-light text-1xl">Fastest scanner of human hands.</p>
	</div>
</div>
