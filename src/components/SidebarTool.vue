<template>
  <div class="header">
    <div class="side-nav">
      <div class="user">
        <img src="../assets/images/user(1).png" class="user-img" alt="" />
        <div>
          <h2>Kien Nguyen</h2>
          <p>dacnguyen732003@gmail.com</p>
        </div>
        <img src="../assets/images/star.png" class="star-img" alt="" />
      </div>
      <ul>
        <li>
          <img src="../assets/images/dashboard.png" alt="" />
          <p>Dashboard</p>
        </li>
        <li>
          <img src="../assets/images/reports.png" alt="" />
          <p>Report</p>
        </li>
        <li>
          <img src="../assets/images/rewards.png" alt="" />
          <p>Rewards</p>
        </li>
        <li>
          <img src="../assets/images/messages.png" alt="" />
          <p>Messages</p>
        </li>
        <li>
          <img src="../assets/images/projects.png" alt="" />
          <p>Project</p>
        </li>
        <li>
          <img src="../assets/images/setting.png" alt="" />
          <p>Settings</p>
        </li>
      </ul>
      <ul>
        <li><img src="../assets/images/logout.png" alt="" />Logout</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    login() {
      this.$emit("login");
    },
  },
};
</script>

<style lang="css" scoped>
.header {
  width: 100%;
  height: 155vh;
}
.side-nav {
  width: 110px;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 30px 15px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  transition: width 0.5s;
}
.user {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 60px;
  font-size: 12px;
  padding: 30px 10px;
  border-radius: 8px;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  box-sizing: border-box;
}
.user div {
  display: none;
}
.user h2 {
  font-size: 15px;
  font-weight: 600;
  white-space: nowrap;
}
.user-img {
  width: 40px;
  border-radius: 50%;
  margin: auto;
}
.star-img {
  width: 20px;
  display: none;
}
ul {
  list-style: none;
  padding: 0 15px;
}
ul li {
  margin: 30px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
ul li img {
  width: 30px;
  margin-right: 0px;
}
ul li p {
  white-space: nowrap;
  display: none;
}
.side-nav:hover {
  width: 250px;
}
.side-nav:hover .user div {
  display: block;
}
.side-nav:hover .user {
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
}
.side-nav:hover .star-img {
  display: block;
}
.side-nav:hover .user-img {
  margin: 0;
}
.side-nav:hover ul li p {
  display: block;
}
.side-nav:hover ul li img {
  margin-right: 10px;
}
.side-nav:hover ul li {
  justify-content: flex-start;
}
</style>
