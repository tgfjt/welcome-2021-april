<script lang="ts">
	import Hacking from '$lib/Hacking.svelte';
	import { random } from '$lib/random';
	import { message } from '../stores/store';

	let successMessage: string;

	message.subscribe((value) => {
		successMessage = value;
	});

	const hint = (): void => {
		const messages = [
			`read this: 100 101 99 111 100 101  98 97 115 101 54 52`,
			`see JavaScript file`
		];
		const m = messages[random()];
		alert(m);
		console.log(m);
		// .split(' ').map(Number).map(t => String.fromCharCode(t)).join('')
	};
</script>

<svelte:head>
	<title>very happy to welcome you</title>
	<meta name="description" content="`Alone we can do so little, together we can do so much.` --Helen Keller" />
	<meta property="og:type" content="website"/>
	<meta property="og:url" content="https://welcome-2021-april.pages.dev/"/>
	<meta property="og:title" content="very happy to welcome you" />
	<meta property="og:description" content="`Alone we can do so little, together we can do so much.` --Helen Keller" />
	<meta property="og:image" content="https://welcome-2021-april.pages.dev/ogp.png" />
</svelte:head>

<main>
	<h1>Welcome⚡️</h1>

	{#if successMessage}
		<p class="congrats">{successMessage}</p>
		<p class="text-gray-200">Thank you!</p>
	{:else}
		<Hacking />
	{/if}

	
	<p class="text-gray-200">
		Enjoy <span class="text-blue-400 font-black">Code Reading</span> to make happy life.
	</p>

	{#if !successMessage}
		<button type="button" class="" on:click={hint}> Need a hint? </button>
	{/if}
</main>

<style lang="postcss">
	main {
		@apply container;
		@apply pt-2 pb-4;
		@apply text-center;
		@apply mx-auto;
	}

	h1 {
		@apply text-green-500;
		@apply uppercase;
		@apply text-6xl;
		@apply font-thin;
		@apply leading-tight;
		@apply my-8 mx-auto;
		@apply max-w-xs;
	}

	p {
		@apply max-w-xs;
		@apply my-8 mx-auto;
		@apply leading-snug;
	}

	@screen sm {
		h1 {
			@apply max-w-none;
		}

		p {
			@apply max-w-none;
		}
	}

	button {
		@apply inline-flex;
		@apply items-center;
		@apply px-4;
		@apply py-2;
		@apply text-base;
		@apply leading-6;
		@apply font-medium;
		@apply rounded-md;
		@apply text-white;
		@apply bg-green-800;
	}

	.congrats {
		@apply text-blue-400;
		@apply uppercase;
		@apply text-3xl;
		@apply font-black;
		@apply my-4 mx-auto;
		@apply max-w-xs;
	}
</style>
