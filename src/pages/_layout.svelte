

<main>
            <Header  handleLogout={handleLogout}/>
    <slot />
</main>

<script>
    import Header from './_components/Header.svelte'
    import {  mutation  } from "svelte-apollo";
    import {LOGOUT} from "./_graphql/mutations/LOGOUT" 
    import {user} from './stores'

    const logout = mutation(LOGOUT)
    const handleLogout = async () => {
        let worked;
        try {
            worked = await logout()
        } catch (error) {
            console.log(error)
        }
        if (worked) {
            user.set(0)
        }
    }
</script>

<style>
    main {
        text-align: center;
    }
</style>