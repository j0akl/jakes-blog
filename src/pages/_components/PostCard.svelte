<script>
    export let text = `
    <p>This is an article concerning something about philosophy or epistemology or something</p>
    ` // this will be html
    export let title = "Test Article Title"
    export let author = "Jake Lynn"
    export let createdAt = "Today's Date"
    export let id = 1;
</script>

<div id="card-container">
    <a href={"/blog/" + id}>
        <h2>{title}</h2>
    </a>
    <em>by <strong>{author}</strong> on {createdAt}</em>
    <div>{@html text}</div>
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