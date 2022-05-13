const body = document.querySelector("body");
const hamburger_menu = document.querySelector(".hamburger_menu");
const main_menu = document.querySelector(".main_menu");

hamburger_menu.addEventListener("click", function () {
    if (this.classList.contains("show")) {
        this.classList.remove("show");
        main_menu.classList.remove("show");
        body.classList.remove("fixed");
    } else {
        this.classList.add("show");
        main_menu.classList.add("show");
        body.classList.add("fixed");
    }
});

// 固定頭部
function fixedHeader() {
    const header = document.querySelector(".header");
    const main = document.querySelector(".main");
    const header_area1 = document.querySelector(".header_area1");
    const header_area2 = document.querySelector(".header_area2");
    const header_area1_height = header_area1.offsetHeight;
    const header_area2_height = header_area2.offsetHeight;
    let rate = screen.width >= 991 ? 2.1 : 1;

    window.addEventListener("scroll", function () {
        if (this.scrollY >= header_area1_height) {
            header_area1.classList.add("hide");
            header.classList.add("fixed");
            document.documentElement.style.setProperty(
                "--main_padding_top",
                header_area2_height * rate + "px"
            );
        } else {
            header_area1.classList.remove("hide");
            header.classList.remove("fixed");
            document.documentElement.style.setProperty("--main_padding_top", 0);
        }
    });
}

fixedHeader();