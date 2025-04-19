---
sidebar: false
---

<div v-if="loggedIn">
  <h1>登录成功</h1>
  <p>用户名：{{ userName }}</p>
  <p>上传成绩 Token：<br />{{ uploadToken }}</p>
  <p>已为你自动设置“允许匿名查询”，现在你可以复制用户名和 Token 去绑定了。</p>
  <p class="row"><span /><button @click="onLogout" class="button">退出登录</button></p>
</div>
<div v-else>
  <h1>登录到 PRP</h1>
  <form @submit.prevent="onLogin" id="login">
    <p class="row"><span>用户名：</span><input v-model.trim="username" type="text" class="input"></input></p>
    <p class="row"><span>密码：</span><input v-model.trim="password" type="password" class="input"></input></p>
    <p class="row"><span /><button type="submit" class="button">登录</button></p>
  </form>
</div>

<script setup>
  import { ref, onMounted } from 'vue';

  const username = ref('');
  const password = ref('');
  const loggedIn = ref(false);
  const userName = ref('');
  const uploadToken = ref('');

  const baseURL = 'https://api.prp.icel.site/api/v1';
  const headers = token => ({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'https://api.prp.icel.site',
    'Access-Control-Allow-Credentials': 'true',
    'Authorization': `Bearer ${token || ''}`,
  });

  function getItem(key) {
    return localStorage.getItem(`@prp:${key}`);
  }

  function setItem(key, value) {
    return localStorage.setItem(`@prp:${key}`, value);
  }

  function removeItem(key) {
    return localStorage.removeItem(`@prp:${key}`);
  }

  async function fetchInfo() {
    const token = getItem('access_token');
    if (!token) return;
    const { detail, ...data } = await fetch(`${baseURL}/user/me`, {
      headers: headers(token),
    }).then(res => res.json());
    if (detail === 'Not authenticated') return;
    else if (detail) return;
    await fetch(`${baseURL}/user/me`, {
      method: 'PATCH',
      body: JSON.stringify({ anonymous_probe: true }),
      headers: headers(token),
    });
    userName.value = data.username;
    uploadToken.value = data.upload_token;
    loggedIn.value = true;
  }

  async function onLogin(event) {
    if (!username.value) return alert('请输入用户名。');
    if (!password.value) return alert('请输入密码。');
    const { detail, ...data } = await fetch(`${baseURL}/user/login`, {
      method: 'POST',
      headers: {
        ...headers(),
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: `username=${username.value}&password=${password.value}`,
    }).then(res => res.json());
    if (detail) return alert('请输入正确的用户名和密码。');
    setItem('access_token', data.access_token);
    return fetchInfo();
  }

  function onLogout() {
    removeItem('access_token');
    loggedIn.value = false;
  }

  onMounted(fetchInfo);
</script>

<style>
  .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .input {
    width: 50%;
    padding: 0.5rem 0.875rem;
    font-size: 0.9rem;
    font-family: inherit;
    line-height: 1.25;
    color: var(--vp-c-text);
    background: transparent;
    border: 1px solid var(--vp-c-border);
    border-radius: 8px;
    transition: border-color 0.25s ease;
    outline: none;
  }

  .input:hover {
    border-color: var(--vp-c-accent-hover);
  }

  .input:focus {
    border-color: var(--vp-c-accent);
  }

  .button {
    padding: 0.5rem 0.875rem;
    font-size: 0.9rem;
    font-family: inherit;
    line-height: 1.25;
    color: var(--vp-c-text);
    background: transparent;
    border: 1px solid var(--vp-c-border);
    border-radius: 8px;
    transition: border-color 0.25s ease;
  }

  .button:hover {
    border-color: var(--vp-c-accent-hover);
  }
</style>