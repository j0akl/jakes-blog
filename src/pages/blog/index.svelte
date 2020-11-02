<script>
    import PostCard from "../_components/PostCard.svelte";
    import {goto} from "@sveltech/routify"
    import { POSTS } from '../_graphql/queries/POSTS'
    import { query } from "svelte-apollo"
    import { user } from '/Users/jakelynn/Documents/Projects/blog/src/stores.js'
    import { dataset_dev } from "svelte/internal";

    const posts = query(POSTS)

</script>

<div id='container'>
    <h1>Recent Posts</h1>
    {#if user !== 0}
        <button on:click={() => $goto("/create-post")}>New Post</button>
    {/if}
    {#if $posts.loading}
        <p>loading posts...</p>
    {:else if $posts.data.posts}
        {#each $posts.data.posts as p}
            <PostCard post={p} />
            <div id="spacer"></div>
        {/each}
    {/if}
</div>

<style>
    button {
        margin-bottom: 20px;
        color: black;
        background-color: lime;
    }
    #spacer {
        margin-top: 10px;
    }
    #container {
        margin-top: 35px;
    }
</style>