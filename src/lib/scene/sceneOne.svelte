<script>
	import { T } from '@threlte/core';
	import * as THREE from 'three';
	import { OrbitControls, Environment, Sky } from '@threlte/extras';
	import Hovercar from './../3Dmodel/free_merc_hovercar.svelte';
	import Test from './../3Dmodel/test.svelte';
</script>

<T.PerspectiveCamera makeDefault position={[1, 1, 1]} fov={800} near={0.1} far={2000}>
	<OrbitControls
		autoRotate
		autoRotateSpeed={0.5}
		allowPan={false}
		enableDamping
		maxDistance={500}
		minDistance={1}
	/>
</T.PerspectiveCamera>

<!-- <Sky /> -->

<Hovercar fallback={null} error={null} children={null} />
<T.GridHelper args={[10, 10]} />
<T.Group position={[0, 0, 0]} scale={1}>
	<Test fallback={null} error={null} children={null} />
</T.Group>
<Environment url="hdr/metro_noord_1k.hdr" isBackground={false} />
