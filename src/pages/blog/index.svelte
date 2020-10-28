<script>
    import PostCard from "../_components/PostCard.svelte";

    const posts = [{
        title: "This is a post",
        text: "this is some content"
    },
    {
        title: "this is another post",
        text: "this is some more content"
    }
]

</script>

<div id='container'>
    <h1>Recent Posts</h1>
    {#each posts as p}
        <PostCard text={p.text} title={p.title}/>
        <div id="spacer"></div>
    {/each}
</div>

<style>
    #spacer {
        margin-top: 10px;
    }
    #container {
        margin-top: 35px;
    }
</style>