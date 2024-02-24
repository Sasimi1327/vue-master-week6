<template>
  <h2>前台</h2>
  <nav>
    <RouterLink to="/home">首頁</RouterLink> |
    <RouterLink to="/about">關於我</RouterLink> |
    <RouterLink to="/products">產品列表</RouterLink> |
    <RouterLink to="/checkout">結帳頁</RouterLink> |
    <RouterLink to="/orders">交易確認頁</RouterLink> |
    <RouterLink to="/login">登入</RouterLink> |
    <RouterLink to="/admin/products">後台產品列表</RouterLink>
  </nav>
  <RouterView />
</template>
