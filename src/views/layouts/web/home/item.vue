<template>
    <div class="item-home col-3">
        <div class="item-home__content">
            <div class="content-top flex">
                <div class="icon">
                    <img width="50" height="50" src="https://cdn-icons-png.flaticon.com/512/1478/1478873.png" alt="">
                </div>
                <div class="title">
                    <h6>Phần lưu trữ</h6>
                </div>
            </div>
            <div class="content-center">
                Nêu thông tin chi tiết cho sản phẩn, cũng như xu hướng nổi bật sản phẩm
            </div>
            <hr>
            <div class="content-bottom flex">
                <button class="btn">
                    Buy
                </button>
                <div class="orther">
                    <i class='bx bx-dots-horizontal-rounded' ></i>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped >
.item-home {
    padding: 5px;
}

.item-home__content {
    border: 1px solid rgba(128, 128, 128, 0.075);
    border-radius: 10px;
    background-color: #b8b5b52f;
    cursor: pointer;
    padding: 20px;
    font-size: 0.9em;
    box-shadow: inset 2.01px -2.01px 20px rgba(214, 214, 214, 0.17), inset -3.01333px 3.01333px 3.01333px rgba(255, 255, 255, 0.39);
}

.item-home__content:hover {
    background-color: #c7c6c679;
}

.title {
    justify-content: center;
    align-items: center;
    display: flex;
    margin-left: 10px;
}
.content-bottom{
    width: 100%;
}
.content-bottom .orther{
    font-size: 1.5em;
    margin-left: auto;
}
.content-bottom .btn{
    background-color: rgb(75, 87, 255);
    border-radius: 10px;
    padding: 2px 30px;
    color: white;
    margin-right: 10px;
}
.content-bottom .btn:hover{
    opacity: 0.7;
    cursor: pointer;
}
</style>