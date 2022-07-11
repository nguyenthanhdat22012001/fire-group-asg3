<template lang="">
  <div class="table layout-default__table table__user">
    <table>
      <thead>
        <tr>
          <th width="400px">Store name</th>
          <th>Status</th>
          <th>Products</th>
          <th width="122px"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <div class="table__product">
              <img src="@/assets/images/user-1.png" alt="" class="table__img" />
              <div class="table__product-content">
                <p class="text-doc-1 table__user-title">Baobashop</p>
                <span class="table__product-id">phuongnnguyen@gmail.com</span>
              </div>
            </div>
          </td>
          <td>
            <span
              class="status status--padding status--bgr-green status--text-green"
              >Live</span
            >
          </td>
          <td>560</td>
          <td>
            <div class="table__list-action">
              <button class="btn btn--border-gray btn--icon">
                <img src="@/assets/images/icons/three-doc.svg" alt="" />
              </button>
              <button class="btn btn--border-gray btn--largeX">Detail</button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="table__product">
              <img src="@/assets/images/user-1.png" alt="" class="table__img" />
              <div class="table__product-content">
                <p class="text-doc-1 table__user-title">Coffee Pet shop</p>
                <span class="table__product-id">phuongnnguyen@gmail.com</span>
              </div>
            </div>
          </td>
          <td>
            <span
              class="status status--padding status--bgr-red status--text-red"
              >Disconnected</span
            >
          </td>
          <td>560</td>
          <td>
            <div class="table__list-action">
              <button class="btn btn--border-gray btn--icon">
                <img src="@/assets/images/icons/three-doc.svg" alt="" />
              </button>
              <button class="btn btn--border-gray btn--largeX">Detail</button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="table__product">
              <img src="@/assets/images/user-1.png" alt="" class="table__img" />
              <div class="table__product-content">
                <p class="text-doc-1 table__user-title">X-Deal fashion</p>
                <span class="table__product-id">phuongnnguyen@gmail.com</span>
              </div>
            </div>
          </td>
          <td>
            <span
              class="status status--padding status--bgr-green status--text-green"
              >Live</span
            >
          </td>
          <td>560</td>
          <td>
            <div class="table__list-action">
              <button class="btn btn--border-gray btn--icon">
                <img src="@/assets/images/icons/three-doc.svg" alt="" />
              </button>
              <button class="btn btn--border-gray btn--largeX">Detail</button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div class="table__product">
              <img src="@/assets/images/user-1.png" alt="" class="table__img" />
              <div class="table__product-content">
                <p class="text-doc-1 table__user-title">D.Mix Store</p>
                <span class="table__product-id">phuongnnguyen@gmail.com</span>
              </div>
            </div>
          </td>
          <td>
            <span
              class="status status--padding status--bgr-green status--text-green"
              >Live</span
            >
          </td>
          <td>560</td>
          <td>
            <div class="table__list-action">
              <button class="btn btn--border-gray btn--icon">
                <img src="@/assets/images/icons/three-doc.svg" alt="" />
              </button>
              <button class="btn btn--border-gray btn--largeX">Detail</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  name: "table-user",
};
</script>
<style lang=""></style>
