<template>
  <div class="list-wrapper">
    <ul>
      <li>
        <label>
          <input type="checkbox">
          <span>喝酒</span>
        </label>
        <button class="btn">删除</button>
      </li>
      <li>
        <label>
          <input type="checkbox">
          <span>喝酒</span>
        </label>
        <button class="btn">删除</button>
      </li>
      <li>
        <label>
          <input type="checkbox">
          <span>喝酒</span>
        </label>
        <button class="btn">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  /* List */
  .list-wrapper{

    border: 1px solid rgb(209, 202, 202);
    border-bottom: none;
    margin: 20px 0;
    border-radius: 5px;

  }

  /* item */
  .list-wrapper li{
    height: 35px;
    border-bottom: 1px solid rgb(209, 202, 202);
    line-height: 35px;
    padding: 0 7px;
  }
  .list-wrapper li:last-of-type{
    border-radius: 5px;
  }
  .list-wrapper li input{
    margin-right: 5px;
  }
  .list-wrapper li button{
    float: right;
    margin-top: 3px;
    display: none;
  }
</style>