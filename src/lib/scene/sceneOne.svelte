<script>
	import { T } from '@threlte/core';
	import * as THREE from 'three';
	import { OrbitControls, Environment } from '@threlte/extras';
	// models
	import Hovercar from '../3Dmodels/hovercar.svelte';
	import Test from '../3Dmodels/test.svelte';
	import Test3 from '../3Dmodels/test3.svelte';
</script>

<T.PerspectiveCamera makeDefault position={[1, 1, 1]} fov={800} near={0.1} far={2000}>
	<OrbitControls
		autoRotate
		autoRotateSpeed={0}
		allowPan={false}
		enableDamping
		maxDistance={500}
		minDistance={1}
	/>
</T.PerspectiveCamera>

<!-- <Sky /> -->

<T.GridHelper args={[10, 10]} />

<!-- Models -->
<T.Group position={[0, 0, 0]} scale={1}>
	<Hovercar fallback={null} error={null} children={null} />
</T.Group>
<T.Group position={[0, 0.5, 0]} scale={1}>
	<Test fallback={null} error={null} children={null} />
</T.Group>
<T.Group position={[0, 0.1, 0]} scale={1}>
	<Test3 fallback={null} error={null} children={null} />
</T.Group>

<!-- Global Illumination maps -->
<Environment url="hdr/metro_noord_1k.hdr" isBackground={false} />
