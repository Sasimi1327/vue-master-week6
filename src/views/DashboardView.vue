<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import Swal from 'sweetalert2';
import axios from 'axios';

const { VITE_URL } = import.meta.env;

export default {
  methods: {
    // 登入驗證
    getTokenFromCookies() {
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)HexSchoolVueToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1',
      );
      axios.defaults.headers.common.Authorization = token;
    },
    check() { // 2. 驗證登入
      axios.post(`${VITE_URL}/api/user/check`)
        .then((res) => {
          // 驗證成功
          console.log('驗證： ', res.data.success);
        })
        .catch((err) => {
          // 驗證失敗
          Swal.fire({
            icon: 'error',
            title: `錯誤 ${err.response?.status}`,
            text: err.response?.data.message,
            confirmButtonText: 'Got It!',
          }).then(() => {
            this.$router.push('/login');
          });
        });
    },
  },
  mounted() {
    this.getTokenFromCookies();
    this.check();
  },
};
</script>

<template>
  <h2>後台</h2>
  <nav>
    <RouterLink to="/admin/products">後台產品列表</RouterLink> |
    <RouterLink to="/admin/orders">後台訂單列表</RouterLink> |
    <RouterLink to="/products">前台產品列表</RouterLink>
  </nav>
  <RouterView />
</template>
