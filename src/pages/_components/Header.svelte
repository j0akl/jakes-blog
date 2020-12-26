<script>
    import {user} from "../stores"
    export let handleLogout;
    import { query } from 'svelte-apollo'
    import { ME_QUERY } from '../_graphql/queries/ME'
    import { onMount } from "svelte";

    const userPromise = query(ME_QUERY)
    // gets the current user if there is an established session
    onMount(async () => {
        const currentUser = await userPromise.result()
        if (currentUser.data.me) {
            user.set(currentUser.data.me)
        }
    })

</script>

<header>
    <a href="/" id="title">Jake Lynn</a>
    <a href="/blog">blog</a>
    <a href="/projects">projects</a>
    <a href="/about">about</a>
    <div id="username-or-login">
        {#if $user === 0}
            <a href="/login">login</a>
            <a href="/register">sign up</a>
        {:else}
            <a href={"/user/" + $user.id}>{$user.username}</a>
            <button on:click={handleLogout}>logout</button>
        {/if}
    </div>
</header>

<style>
    header {
        box-shadow: 2px 2px 5px grey;
        height: 8vh;
        min-height: 8vh;
        display: flex;
        vertical-align: center;
        width: 100%;
        display: flex;
    }
    button {
        margin-left: 10px;
    }
    #username-or-login {
        position: relative;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: auto;
        margin-right: 50px;
        vertical-align: center;
    }
    a {
        font-size: 18px;
        color: black;
        text-decoration: none;
        margin-top: auto;
        margin-bottom: auto;
        margin-left: 35px;
    }
    header #title {
        font-size: 24px;
        margin-left: 50px;
    }
</style>
