<script>
	export let status;
	export let error;
</script>

<main class="conatiner py2 text-center mx-auto text-green-500">
	<h1 class="uppercase text-6xl font-thin leading-tight my-8">{status}</h1>
	<p>{error.message}</p>
</main>
