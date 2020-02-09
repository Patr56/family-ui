(function (w, d) {
    const CLASS_MAIN = "main";
    const CLASS_MAIN_FULL = "main__full";

    const CLASS_NAV_WRAPPER = "nav_wrapper";
    const CLASS_NAV_WRAPPER_HIDE = "nav_wrapper__hide";

    const CLASS_NAV_TAB = "nav_tab";
    const CLASS_NAV_TAB_HIDE = "nav_tab__hide";


    const elNavTab = d.getElementById("nav_toggle_id");

    const elNav = d.getElementsByClassName(CLASS_NAV_WRAPPER)[0];
    const elMain = d.getElementsByClassName(CLASS_MAIN)[0];
    const elTab = d.getElementsByClassName(CLASS_NAV_TAB)[0];


    function toggleMenu() {
        console.log('toggleMenu')
        if (CLASS_NAV_WRAPPER === elNav.className) {
            elNav.className = `${CLASS_NAV_WRAPPER} ${CLASS_NAV_WRAPPER_HIDE}`;
            elMain.className = `${CLASS_MAIN} ${CLASS_MAIN_FULL}`;
            elTab.className = `${CLASS_NAV_TAB} ${CLASS_NAV_TAB_HIDE}`;
        } else {
            elNav.className = CLASS_NAV_WRAPPER;
            elMain.className = CLASS_MAIN;
            elTab.className = CLASS_NAV_TAB;
        }
    }

    elNavTab.addEventListener("click", toggleMenu)

})(window, document)