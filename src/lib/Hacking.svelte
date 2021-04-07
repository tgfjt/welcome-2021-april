<script lang="ts">
	import { random } from '$lib/random';
	import { message } from '../stores/store';

	let inputValue = '';

	const logs = ['SEE JAVASCRIPT', 'I SAID, SEE JAVASCRIPT', 'READ BEAUTIFUL JAVASCRIPT'];

	const update = (e): void => {
		inputValue = e.target.value;
		console.log(logs[random(3)]);
	};

	const submit = async (): Promise<void> => {
		if (inputValue.trim() == '') {
			return;
		}

		const res = await fetch('https://welcome.deno.dev', {
			method: 'post',
			body: JSON.stringify({ token: inputValue })
		});

		const result = await res.json();

		if (result.err === null && result.message !== null) {
			message.update(() => result.message);
			return;
		}

		alert(result.err || 'Wrong!');
	};

	console.log(
		`%c
██╗    ███████████╗     ██████╗██████╗███╗   ████████████╗
██║    ████╔════██║    ██╔════██╔═══██████╗ ██████╔════██║
██║ █╗ ███████╗ ██║    ██║    ██║   ████╔████╔███████╗ ██║
██║███╗████╔══╝ ██║    ██║    ██║   ████║╚██╔╝████╔══╝ ╚═╝
╚███╔███╔██████████████╚██████╚██████╔██║ ╚═╝ ███████████╗
 ╚══╝╚══╝╚══════╚══════╝╚═════╝╚═════╝╚═╝     ╚═╚══════╚═╝
                                                          `,
		'color:green; background:black; font-family: monospace'
	);

	console.log(
		`%c
┬┌─┬┬  ┬ ┬┬ ┬┌─┐┌┐ ┌─┐   ┬   ┬┌─┬┬
├┴┐││  │ │├─┤├─┤├┴┐├┤   ┌┼─  ├┴┐││
┴ ┴┴┴─┘└─┘┴ ┴┴ ┴└─┘└─┘  └┘   ┴ ┴┴┴`,
		'color:green; background:black; font-family: monospace'
	);
</script>

<div class="mt-16 my-8">
	<input type="text" on:input={update} value={inputValue} placeholder="Hack & Enter code..." />
</div>
<div class="my-8">
	<button on:click={submit}>
		<span>SUBMIT CODE</span>
	</button>
</div>

<style lang="scss">
	input {
		font-family: inherit;
		font-size: inherit;
		@apply py-2 px-6;
		@apply text-green-100;
		@apply border;
		@apply border-green-600;
		@apply bg-gray-100 bg-opacity-80;
		@apply rounded-lg;
		@apply outline-none;
		@apply w-80;
		height: 5rem;
	}

	input:hover {
		@apply border-green-900;
		@apply bg-gray-200 bg-opacity-90;
	}

	input:focus,
	input:active {
		@apply bg-gray-100 bg-opacity-90;
		@apply text-gray-700;
	}

	button {
		font-family: inherit;
		font-size: inherit;
		@apply py-2 px-6;
		@apply text-gray-100;
		@apply bg-green-700;
		@apply rounded-lg;
		@apply shadow-lg;
		@apply outline-none;
		@apply w-80;
		height: 5rem;
	}

	button:hover {
		@apply bg-green-500 bg-opacity-80;
	}
</style>
