<script>
	import { Icon } from '@steeze-ui/svelte-icon';
	import {
		ServerStack,
		UserGroup,
		HandRaised,
		GlobeAsiaAustralia,
		EllipsisHorizontalCircle,
		LightBulb,
		Beaker,
		RocketLaunch,
		BuildingOffice2,
		Bolt,
		CodeBracket,
		CubeTransparent
	} from '@steeze-ui/heroicons';
	import { CubeTexturePass } from 'three/examples/jsm/Addons.js';
</script>

<div class="max-w-4xl mx-auto px-5 mt-40">
	<div class="text-center">
		<h2 class="font-light text-7xl">SPHERASCAN</h2>
		<p class="max-w-md mx-auto mt-2">photogrammetric 3D hand scanner for medical professionals</p>
	</div>

	<div class="grid md:grid-cols-2 gap-10 mt-30">
		<div class="flex gap-4 items-start">
			<div class="text-sky-600 bg-sky-500/10 p-2 rounded-full w-10 h-10">
				<Icon src={Bolt} theme="outline" size="24px" class="m-auto" />
			</div>
			<div>
				<h3 class="font-semibold text-xl">Diagnostic</h3>
				<p class="mt-1">
					Accessible 3D hand models provide enhanced decision-making support in surgery,
					dermatology, rehabilitation, and orthopedics.
				</p>
			</div>
		</div>

		<div class="flex gap-4 items-start">
			<div class="text-sky-600 bg-sky-500/10 p-2 rounded-full w-10 h-10">
				<Icon src={BuildingOffice2} theme="outline" size="24px" class="m-auto" />
			</div>
			<div>
				<h3 class="font-semibold text-xl">Clinic</h3>
				<p class="mt-1">
					The scanner offers ease of use and fast scan times of under 1 second, integrating easily
					into your daily clinical routine.
				</p>
			</div>
		</div>

		<div class="flex gap-4 items-start">
			<div class="text-sky-600 bg-sky-500/10 p-2 rounded-full w-10 h-10">
				<Icon src={CodeBracket} theme="outline" size="24px" class="m-auto" />
			</div>
			<div>
				<h3 class="font-semibold text-xl">Software Applications</h3>
				<p class="mt-1">
					A growing variety of applications includes healing progress documentation, finger angle
					measurement, and volumetric analysis.
				</p>
			</div>
		</div>

		<div class="flex gap-4 items-start">
			<div class="text-sky-600 bg-sky-500/10 p-2 rounded-full w-10 h-10">
				<Icon src={CubeTransparent} theme="outline" size="24px" class="m-auto" />
			</div>
			<div>
				<h3 class="font-semibold text-xl">AI Integration</h3>
				<p class="mt-1">
					The generated data is non-proprietary, allowing its use in future analysis within your
					artificial intelligence diagnostic pipelines.
				</p>
			</div>
		</div>

		<div class="flex gap-4 items-start">
			<div class="text-sky-600 bg-sky-500/10 p-2 rounded-full w-10 h-10">
				<Icon src={Beaker} theme="outline" size="24px" class="m-auto" />
			</div>
			<div>
				<h3 class="font-semibold text-xl">Development Status</h3>
				<p class="mt-1">
					Following the first prototype with over 1000 scans, we are now developing the second
					prototype ahead of the first full-scale trials.
				</p>
			</div>
		</div>

		<div class="flex gap-4 items-start">
			<div class="text-sky-600 bg-sky-500/10 p-2 rounded-full w-10 h-10">
				<Icon src={RocketLaunch} theme="outline" size="24px" class="m-auto" />
			</div>
			<div>
				<h3 class="font-semibold text-xl">Investors</h3>
				<p class="mt-1">
					We are seeking strategic collaborations with clinics, institutions, and investors to
					launch our scanner.
				</p>
			</div>
		</div>
	</div>
</div>
