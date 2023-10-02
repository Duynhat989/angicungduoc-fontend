<script setup>
import {
    languagePack,
    setLanguage,
    LangList,
    localtionsLang,
} from "../../../../languages/index";
import { ref, onMounted, watch } from "vue";
import { useRouter } from 'vue-router';
const router = useRouter();
const carouselKey = ref(0);
</script>
<template>
    <section class="buy">
        <div class="title">
            <h5>Chọn chi tiết sản phẩm</h5>
        </div>
        <div class="body">
            <div class="type-product">
                <select class="form-select" name="" id="">
                    <option selected value="">12 | Gmail live 24h - 72h (Count: 10 | 300)</option>
                    <option value="">12 | Gmail cổ 2012-2016 (Count: 10 | 16.000)</option>
                </select>
            </div>
            <div class="row">
                <div class="info col-md-8 col-12">
                    <div class="mb-3 mt-3">
                        <label for="count" class="form-label">Số lượng:</label>
                        <input type="number" class="form-control" id="count" value="1" name="count">
                    </div>
                    <div class="mb-3 mt-3">
                        <label for="notify" class="form-label">Ghi chú:</label>
                        <input type="text" class="form-control" id="notify" placeholder="Ghi chú đơn hàng" name="notify">
                    </div>
                </div>
                <div class="info col-md-4 col-12">
                    <div class="mb-3 mt-3 flex">
                        <h4>Tổng tiền tạm tính: <span class="price">10.000</span> đ</h4>
                    </div>
                    <div class="mb-3 mt-3">
                        <label for="count" class="form-label">Mã khuyễn mãi(nếu có)</label>
                        <input type="text" class="form-control" id="code" placeholder="CODE" name="code">
                    </div>
                    <div class="mb-3 mt-3">
                        <button type="button" class="btn btn-primary">Thanh toán đơn hàng</button>
                        <button type="button" class="btn btn-warning">Lịch sử đơn hàng</button>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="mb-3 mt-3">
                    <label for="count" class="form-label">Lưu ý khi mua hàng:</label>
                    <ul>
                        <li>
                            Không thể hoàn khi đã tiến hành thanh toán
                        </li>
                        <li>
                            Mọi giao dịch đều sẽ được ghi nhận tại mục lịch sử, hãy đến đó để kiếm tra
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
<style scoped>
.price{
    color: red;
    font-weight: 500;
}
ul{
    padding-left: 20px;
}
.btn-warning{
    margin-left: 5px;
    color: aliceblue;
}
</style>