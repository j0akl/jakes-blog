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
        <div class="title-wrapper">
            <h1>{$post.data.post.title}</h1>
            <p class="metainfo">
                <em>by <strong>{$post.data.post.user.username}</strong> on {$post.data.post.createdAt}</em>
            </p>
        </div>
        <div class="body-wrapper">{@html $post.data.post.text}</div>
    </div>
{/if}

<style>
    .post-wrapper {
        margin-left: auto;
        margin-right: auto;
        width: 40vw;
        text-align: left;
    }
    .body-wrapper {
        font-size: 18px;
        margin-left: 10px;
        margin-right: 10px;
        margin-top: 15px;
        overflow: hidden;
    }
    .title-wrapper {
        padding: 10px;
        border-bottom: 1px solid gray;
    }
</style>
