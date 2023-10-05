<script setup>
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router'
import store from "../../../../stores/index";
import request from "../../../../utils/request";
import { notify } from "@kyvg/vue3-notification";
import { languagePack, setLanguage, LangList,localtionsLang } from "../../../../languages/index"

const isRegister = ref(false)
const router = useRouter()
const register_name = ref('')
const register_email = ref('')
const register_password = ref('')
const register_re_password = ref('')
const register_remember = ref('')

const login_email = ref('')
const login_password = ref('')


function changeIsRegister() {
    isRegister.value = !isRegister.value
    if (isRegister.value) {
        document.title = languagePack["[SIGN_UP]"]
    } else {
        document.title = languagePack["[SIGN_IN]"]
    }
}
const setup = () => {
    var type = router.currentRoute._value.query.type
    if (type != undefined && type == 'register') {
        isRegister.value = true
        document.title = languagePack["[SIGN_UP]"]
    } else {
        document.title = languagePack["[SIGN_IN]"]
    }
};
function handleLogin() {
    var user = {
        email: login_email.value,
        password: login_password.value
    }
    store
        .dispatch("login", user)
        .then((data) => {
            if (data.status) {
                notify({
                    title: "Thành công",
                    text: languagePack["[SIGN_IN_SUCCESS]"] + " 🎉",
                    type: "success",
                });
                router.push("/");
            } else {
                notify({
                    title: "Thất bại",
                    text: languagePack["[SIGN_IN_FALSE]"],
                    type: "error",
                });
                router.push("/login");
            }
        })
        .catch((error) => {
            console.log("errr");
            notify({
                    title: "Thất bại",
                    text: "Đăng nhập thất bại!",
                    type: "error",
                });
        });
}
async function handleRegister() {
    if (register_password.value != register_re_password.value) {
        console.log("user")
        notify({
            title: "Thành công",
            text: "Đăng nhập thành công! 🎉",
            type: "success",
        });
        return
    }
    if (register_name.value.length < 4 || register_email.value < 4 || register_password.value < 4) {
        console.log("user")
        notify({
            title: "Thành công",
            text: "Đăng nhập thành công! 🎉",
            type: "success",
        });
        return
    }
    var user = {
        name: register_name.value,
        email: register_email.value,
        password: register_password.value
    }
    await request
        .post("/user/register", user)
        .then((response) => {
            const data = response.data
            console.log("______")
            if (data.status == true) {
                login_email.value = register_name.value
                login_password.value = register_email.value
                notify({
                    title: "Thành công",
                    text: "Đăng nhập thành công! 🎉",
                    type: "success",
                });
                handleLogin()
            } else {
                notify({
                    title: "Thành công",
                    text: "Đăng nhập thành công! 🎉",
                    type: "success",
                });
            }
            return response.data
        })
        .catch((e) => {
            console.log(e);
            throw new Error(e);

        });

}
onMounted(() => {
    setup()
})
</script>
<template>
    <div class="form-auth col-md-6 col-12">
        <div class="login" v-if="!isRegister">
            <div class="title-site">
                <h2 class="text-with-border ">
                    TP WORKER
                </h2>
                <p>Nơi có thể tìm thấy mọi thứ ở đây ! Tham gia ngay để nhận ưu đãi</p>
            </div>
            <div class="input-group">
                <input class="input" v-model="login_email" type="text" placeholder="Email hoặc tên đăng nhập..."
                    name="username" id="username">
            </div>
            <div class="input-group">
                <input class="input" v-model="login_password" type="password" placeholder="Mật khẩu..." name="password"
                    id="password">
            </div>
            <div class="input-group flex">
                <input type="checkbox" />
                <label class="notify black">Lưu tài khoản</label>
            </div>
            <div class="input-group">
                <div>
                    <button class="button medium mb-10" @click="handleLogin()">Đăng nhập</button>
                </div>
                <div>
                    <button class="button medium" @click="changeIsRegister()">Đăng ký</button>
                </div>
            </div>
        </div>
        <div class="register" v-else>
            <div class="title-site">
                <h2 class="text-with-border ">
                    TP WORKER
                </h2>
                <p>Nơi có thể tìm thấy mọi thứ ở đây ! Tham gia ngay để nhận ưu đãi</p>
                <label>Tạo tài khoản mới</label>
            </div>
            <div class="input-group">
                <input class="input" v-model="register_name" type="text" placeholder="Tên tài khoản..." name="username"
                    id="username">
            </div>
            <div class="input-group">
                <input class="input" v-model="register_email" type="email" placeholder="Email..." name="username"
                    id="username">
            </div>
            <div class="input-group">
                <input class="input" v-model="register_password" type="password" placeholder="Mật khẩu..." name="password"
                    id="password">
            </div>
            <div class="input-group">
                <input class="input" v-model="register_re_password" type="password" placeholder="Xác nhận mật khẩu..."
                    name="password" id="password">
            </div>
            <div class="input-group flex">
                <input type="checkbox" />
                <label class="notify">Nhận email thông báo từ hệ thống</label>
            </div>
            <div class="input-group">
                <div>
                    <button class="btn" @click="handleRegister()">Đăng ký</button>
                </div>
                <div>
                    <button class="btn line" @click="changeIsRegister()">Đăng nhập</button>
                </div>
            </div>
        </div>
    </div>
    <div class="logo col-md-6 col-12">
        <div class="img">
            <img src="https://static.msm.com.vn//product//main_35f1a216eb5d4bb9bd5fceca922f25b9.png" alt="">
        </div>
    </div>
</template>
<style scoped>
p {
    font-size: 0.9em;
}

.form-auth {
    align-items: center;
    justify-items: center;
    display: flex;
}

.login {
    width: 100%;
}

.register {
    width: 100%;
}

.logo {
    padding: 5px;
}

.img {
    width: 100%;
}

.input-group {
    width: 100%;
    padding: 7px;
    padding-left: 0px;
}

.input {
    width: 70%;
    border: 1px solid rgba(128, 128, 128, 0.336);
    border-radius: 10px;
    padding: 5px 5px 5px 10px;
    outline: none;
    color: rgb(75, 87, 255);
    font-size: 0.9em;
}

.btn {
    background-color: rgb(75, 87, 255);
    border-radius: 5px;
    padding: 5px 20px;
    color: aliceblue;
}

.line {
    background: none;
    margin-left: 5px;
    border: 1px solid rgb(75, 87, 255);
    color: rgb(75, 87, 255);
}

.btn:hover {
    opacity: 0.5;
}

.text-with-border {
    text-decoration: none;
    font-family: Georgia, 'Times New Roman', Times, serif;
}

.notify {
    padding-left: 10px;
    cursor: pointer;
}
</style>