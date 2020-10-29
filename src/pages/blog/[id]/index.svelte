<script>
    export let id;
    import { POST } from '/Users/jakelynn/Documents/Projects/blog/src/pages/_graphql/queries/POST.js'
    import { query } from 'svelte-apollo'
    import { onMount } from 'svelte';



    let post = query(POST, {variables: { id: parseInt(id) }})

</script>


{#if $post.loading}
    <p>loading...</p>
{:else if $post}
    <div class="post-wrapper">
        <h1>{$post.data.post.title}</h1>
        <p>{$post.data.post.text}</p>
    </div>
{/if}

<style>
    .post-wrapper {
        margin-top: 30px;
        margin-left: auto;
        margin-right: auto;
        width: 40vw;
        text-align: left;
    }
    h1 {
        padding: 10px;
        border-bottom: 1px solid gray;
    }
    p {
        padding-left: 10px;
        padding-right: 10px;
    }
</style>
