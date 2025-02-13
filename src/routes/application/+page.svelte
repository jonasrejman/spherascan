<script>
	import { Icon } from '@steeze-ui/svelte-icon';
	import {
		Beaker,
		RocketLaunch,
		BuildingOffice2,
		Bolt,
		CodeBracket,
		CubeTransparent,
		VideoCamera,
		Cube,
		HandThumbUp
	} from '@steeze-ui/heroicons';
</script>

<div class="max-w-4xl mx-auto px-5 mt-40">
	<div class="text-center">
		<h2 class="font-light text-7xl">APPLICATION</h2>
		<p class="max-w-md mx-auto mt-2">fast and accurate diagnostic</p>
	</div>

	<div class="grid md:grid-cols-2 gap-10 mt-30">
		<div class="flex gap-4 items-start">
			<div class="text-pink-600 bg-pink-500/10 p-2 rounded-full w-10 h-10">
				<Icon src={CubeTransparent} theme="outline" size="24px" class="m-auto" />
			</div>
			<div>
				<h3 class="font-semibold text-xl">3D Model Generation</h3>
				<p class="mt-1">
					A reliable, repeatable 3D scan of the human hand for progress monitoring and medical
					documentation.
				</p>
			</div>
		</div>

		<div class="flex gap-4 items-start">
			<div class="text-yellow-600 bg-yellow-500/10 p-2 rounded-full w-10 h-10">
				<Icon src={HandThumbUp} theme="outline" size="24px" class="m-auto" />
			</div>
			<div>
				<h3 class="font-semibold text-xl">Finger Angle Measurement</h3>
				<p class="mt-1">
					Full automatic measurement of angles between all fingersegments in seconds.
				</p>
			</div>
		</div>

		<div class="flex gap-4 items-start">
			<div class="text-green-600 bg-green-500/10 p-2 rounded-full w-10 h-10">
				<Icon src={VideoCamera} theme="outline" size="24px" class="m-auto" />
			</div>
			<div>
				<h3 class="font-semibold text-xl">64x Multi-Angle Video Capture</h3>
				<p class="mt-1">
					Multi-angle motion capture for analysis and prediction of neurological defects.
				</p>
			</div>
		</div>

		<div class="flex gap-4 items-start">
			<div class="text-sky-600 bg-sky-500/10 p-2 rounded-full w-10 h-10">
				<Icon src={Cube} theme="outline" size="24px" class="m-auto" />
			</div>
			<div>
				<h3 class="font-semibold text-xl">Volumetric Measurement</h3>
				<p class="mt-1">
					Changes in volume can be measured to monitor swelling and wound management.
				</p>
			</div>
		</div>
	</div>
</div>
