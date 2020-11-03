<script>
    import {goto} from "@sveltech/routify"


    import {mutation } from 'svelte-apollo'
    import {LOGIN} from '../_graphql/mutations/LOGIN';
    import {user} from '../stores'

    let usernameOrEmail = "";
    let password = "";
    let usernameOrEmailError = null;
    let passwordError = null;

    const login = mutation(LOGIN);


    const handleLogin = async () => {
        let userResponse
        try {
            userResponse = await login({variables: {input: {usernameOrEmail, password}}})
        } catch (error) {
            console.log(error)
        }
        if (userResponse.data.login.errors) {
            const errors = userResponse.data.login.errors[0]
            if (errors.field === "usernameOrEmail") {
                usernameOrEmailError = errors.message
            }
            if (errors.field === "password") {
                passwordError = errors.message
            }
        }
        if (userResponse.data.login.user) {
            user.set(userResponse.data.login.user)
            $goto("/")
        }
    }
    

</script>

<div>
    <h1>Log In</h1>
    <form on:submit|preventDefault={handleLogin}>
        <input name="usernameOrEmail" bind:value={usernameOrEmail} placeholder="username or email"/>
        {#if usernameOrEmailError}
            <p>{usernameOrEmailError}</p>
        {/if}
        <input name="password" bind:value={password} placeholder="password"/>
        {#if passwordError}
            <p>{passwordError}</p>
        {/if}
        <button type="submit">log in</button>
    </form>
</div>

<style>
    input {
        display: block;
        margin-right: auto;
        margin-left: auto;
        width: 20vw;
        height: 40px;
        margin-top: 20px;
        text-align: center;
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