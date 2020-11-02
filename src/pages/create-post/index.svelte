<script>
    import {CREATE_POST} from '../_graphql/mutations/CREATE_POST'
    import {mutation} from 'svelte-apollo'
    import {goto} from '@sveltech/routify'

    let title = "";
    let text = "";

    let titleError = "";
    let textError = "";

    const createPost = mutation(CREATE_POST)
    
    const handlePost = async () => {
        let postResponse
        try {
            postResponse = await createPost({ variables: { input: { text, title } } })
        } catch (err) {
            console.log(err)
        }
        if (postResponse.data.createPost.errors) {
            const errors = postResponse.data.createPost.errors[0]
            if (errors.field === "title") {
                titleError = errors.message
            }
            if (errors.field === "text") {
                textError = errors.message
            }
        }
        if (postResponse.data.createPost.post) {
            $goto("/blog/" + postResponse.data.createPost.post.id)
        }
    }

</script>

<div>
    <form on:submit|preventDefault={handlePost}>
        <h1>Create Post</h1>
        <input name="title" bind:value={title} placeholder="title"/>
        {#if titleError}
            <p>{titleError}</p>
        {/if}
        <textarea name="text" bind:value={text} placeholder="enter some html or plain text...
img tags must be given width 100% to display correctly"/>
        {#if textError}
            <p>{textError}</p>
        {/if}
        <button type="submit">create post</button>
    </form>
</div>

<style>
    input {
        display: block;
        margin-right: auto;
        margin-left: auto;
        width: 40vw;
        height: 40px;
        margin-top: 20px;
        text-align: left;
    }
    textarea {
        display: block;
        margin-right: auto;
        margin-left: auto;
        width: 40vw;
        height: 200px;
        margin-top: 20px;
        text-align: left; 
    }
    button {
        margin-top: 20px;
        width: 15vw;
    }
    p {
        color: red;
        font-size: 12px;
    }
</style>