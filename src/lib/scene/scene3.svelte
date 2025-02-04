<script>
	import { T } from '@threlte/core';
	import * as THREE from 'three';
	import { OrbitControls, Environment } from '@threlte/extras';
	// models

	import Scene3 from '../3Dmodels/scan3.svelte';
</script>

<T.PerspectiveCamera makeDefault position={[1, 1, 1]} fov={50} near={0.1} far={2000}>
	<OrbitControls
		autoRotate
		autoRotateSpeed={0.5}
		allowPan={false}
		enableDamping
		maxDistance={500}
		minDistance={0.5}
	/>
</T.PerspectiveCamera>

<!-- <Sky /> -->

<T.GridHelper args={[10, 10]} />

<!-- Models -->
<T.Group position={[0, 0, 0]} scale={1}>
	<Scene3 fallback={null} error={null} children={null} />
</T.Group>

<!-- Global Illumination maps -->
<Environment url="hdr/metro_noord_1k.hdr" isBackground={false} />
