<script>

    import {mutation} from "svelte-apollo"
    import {user} from '/Users/jakelynn/Documents/Projects/blog/src/stores.js'
    import {REGISTER} from "../_graphql/mutations/REGISTER"
   import { goto } from "@sveltech/routify";


    let username = "";
    let email = "";
    let password = "";
    let usernameError = "";
    let emailError = "";
    let passwordError = "";

    const register = mutation(REGISTER)

    const handleRegister = async () => {
        let userResponse
        try {
            userResponse = await register({variables: {input: {username, email, password}}})
        } catch (error) {
            console.log(error)
        }
        console.log(userResponse)
        if (userResponse.data.register.errors) {
            const errors = userResponse.data.register.errors[0]
            if (errors.field === "username") {
                usernameError = errors.message
            }
            if (errors.field === "email") {
                emailError = errors.message
            }
            if (errors.field === "password") {
                passwordError = errors.message
            } else {
                console.log(errors)
            }
        }
        if (userResponse.data.register.user) {
            user.set(userResponse.data.register.user)
            $goto("/")
        }
    }


</script>

<div>
    <h1>Sign Up</h1>
    <form on:submit|preventDefault={handleRegister}>
        <input name="username" bind:value={username} placeholder="username"/>
        {#if usernameError}
            <p>{usernameError}</p>
        {/if}
        <input name="email" bind:value={email} placeholder="email"/>
        {#if emailError}
            <p>{emailError}</p>
        {/if}
        <input name="password" bind:value={password} placeholder="password" type="password"/>
        {#if passwordError}
            <p>{passwordError}</p>
        {/if}
        <button type="submit">submit</button>
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