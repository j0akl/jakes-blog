<script>
    export let post;
</script>

<div id="card-container">
        <a href={"/blog/" + post.id}>
            <h2>{post.title}</h2>
        </a>
        <p>
            <em>by <strong>{post.user.username}</strong> on {post.createdAt}</em>
        </p>
</div>

<style>
    #card-container {
        text-align: left;
        width: 45vw;
        margin-left: auto;
        margin-right: auto;
        box-shadow: 2px 2px 5px grey;
    }
    h2 {
        padding-left: 15px;
        color: black;
    }
    a {
        color: black;
    }
    em {
        padding: 15px;
    }
    div {
        padding: 15px;
    }
</style>