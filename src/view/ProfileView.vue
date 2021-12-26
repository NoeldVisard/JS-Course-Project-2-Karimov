<template>
    <div>
        <div class="login-box">
            <h2>Profile</h2>
            <form onsubmit="return false">
                <div class="user-box">
                    <input type="text" name="" required v-model="name">
                    <label>Username</label>
                </div>
                <div class="user-box">
                    <input type="email" name="" required="" v-model="email">
                    <label>Email</label>
                </div>
                <div class="user-box">
                    <input type="text" name="" required="" v-model="address">
                    <label>Address</label>
                </div>
                <a href="#" @click="changeProfile">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <input class="ghost-button" type="submit" value="SAVE">
                </a>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProfileView",
    data() {
        return {
            name: '',
            email: '',
            address: '',
        }
    },
    methods: {
        changeProfile() {
            const newProfile = { name: this.name, email: this.email, address: this.address }
            localStorage.setItem('profile', JSON.stringify(newProfile))
        },
    },
    mounted() {
        const profile = JSON.parse(localStorage.getItem('profile'))
        // const isEmptyProfile = !(profile.name && profile.email && profile.address)
        if (profile){
            this.name = profile.name
            this.email = profile.email
            this.address = profile.address
        }
    }
}
</script>

<style scoped>
body {
    background-image: url("https://cdn.discordapp.com/attachments/921852012017123348/922181616158244874/kedy_nogi_obuv_135220_2560x1440.png");
    z-index: 3;
}
.ghost-button {
    display: inline-block;
    width: 200px;
    padding: 8px;
    color: #100f0f;
    border: 1px solid #fff;
    text-align: center;
    outline: none;
    text-decoration: none;
}

.ghost-button:hover,
.ghost-button:active {
    /*background-color: #02dbf8;*/
    background-color: #60b5fa;
    color: #000;
}

html {
    height: 100%;
}

body {
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    background: linear-gradient(#141e30, #243b55);
}

.login-box {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 400px;
    padding: 40px;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, .5);
    box-sizing: border-box;
    box-shadow: 0 15px 25px rgba(0, 0, 0, .6);
    border-radius: 10px;
}

.login-box h2 {
    margin: 0 0 30px;
    padding: 0;
    color: #fff;
    text-align: center;
}

.login-box .user-box {
    position: relative;
}

.login-box .user-box input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: #fff;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid #fff;
    outline: none;
    background: transparent;
}

.login-box .user-box label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: #60b5fa;
    pointer-events: none;
    transition: .5s;
}

.login-box .user-box input:focus ~ label,
.login-box .user-box input:valid ~ label {
    top: -20px;
    left: 0;
    color: #60b5fa;
    font-size: 12px;
}

.login-box form a {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #60b5fa;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: .5s;
    margin-top: 40px;
    letter-spacing: 4px
}

.login-box a:hover {
    background: #60b5fa;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #60b5fa,
    0 0 25px #60b5fa,
    0 0 50px #60b5fa,
    0 0 100px #60b5fa;
}

.login-box a span {
    position: absolute;
    display: block;
}

.login-box a span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: btn-anim1 1s linear infinite;
}

@keyframes btn-anim1 {
    0% {
        left: -100%;
    }
    50%, 100% {
        left: 100%;
    }
}

.login-box a span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: btn-anim2 1s linear infinite;
    animation-delay: .25s
}

@keyframes btn-anim2 {
    0% {
        top: -100%;
    }
    50%, 100% {
        top: 100%;
    }
}

.login-box a span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: btn-anim3 1s linear infinite;
    animation-delay: .5s
}

@keyframes btn-anim3 {
    0% {
        right: -100%;
    }
    50%, 100% {
        right: 100%;
    }
}

.login-box a span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: btn-anim4 1s linear infinite;
    animation-delay: .75s
}

@keyframes btn-anim4 {
    0% {
        bottom: -100%;
    }
    50%, 100% {
        bottom: 100%;
    }
}


</style>