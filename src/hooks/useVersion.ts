import { onBeforeUnmount, onMounted, ref } from 'vue';

const useCheckUpdate = () => {
  const timer = ref();
  const newVersion = import.meta.env.VITE_APP_VERSION; //获取新版本的hash值
  let uploadNotificationShow = false; //防止弹出多个框

  const getHash = () => {
    if (!uploadNotificationShow && newVersion) {
      const oldVersion = localStorage.getItem('vs');
      if (!oldVersion) {
        // 如果本地没有，则存储版本信息
        window.localStorage.setItem('vs', newVersion);
      } else if (newVersion !== oldVersion) {
        uploadNotificationShow = true;
        // 本地已有版本信息，但是和新版不同：版本更新，弹出提示
        if (window.confirm('检测到系统当前版本已更新，请刷新浏览器后使用。')) {
          uploadNotificationShow = false;
          // 更新localStorage版本号信息
          window.localStorage.setItem('vs', newVersion);
          // 刷新页面
          window.location.reload();
        } else {
          uploadNotificationShow = false;
        }
      }
    }
  };

  onMounted(() => {
    getHash();
    timer.value = setInterval(getHash, 60 * 60 * 1000);
    /* 切换浏览器tab时 */
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        getHash();
      }
    });

    /* 当鼠标点击过当前页面，此时切换到其他应用会触发页面的blur；
        再次切回到浏览器则会触发focus事件 */
    document.addEventListener('focus', getHash, true);
  });

  onBeforeUnmount(() => {
    clearInterval(timer.value);
  });
};

export default useCheckUpdate;
