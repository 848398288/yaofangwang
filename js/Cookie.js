let Cookie = (function() {
    function getItem(key) {
        let cookieSting = document.cookie; // "color=red; id=red2324"
        let cookies = cookieSting.split("; "); //["color=red","id=red2324"]
        for (let i = 0; i < cookies.length; i++) {
            let currentItem = cookies[i]; //"color=red"
            let temp = currentItem.split("="); //["color","red"];
            if (key === temp[0]) {
                return temp[1];
            }
        }
    }

    function setItem(key, value, day) {
        if (typeof day === "number" && day > 0) {
            let date = new Date();
            date.setDate(date.getDate() + day);
            document.cookie = `${key}=${value}; expires=` + date;
        } else {
            document.cookie = `${key}=${value}`;
        }
    }

    function removeItem(key) {
        let date = new Date();
        date.setDate(date.getDate() - 1);
        document.cookie = `${key}=""; expires=` + date;
    }

    function clear() {
        /* 策略：先获取所有的cookie的key,遍历它们逐个删除 ["color","id"]*/
        let keys = getKeys();
        keys.forEach(key => removeItem(key));
    }

    function getKeys(key) {
        let keys = [];
        let cookieSting = document.cookie; // "color=red; id=red2324"
        let cookies = cookieSting.split("; "); //["color=red","id=red2324"]
        for (let i = 0; i < cookies.length; i++) {
            let currentItem = cookies[i]; //"color=red"
            let temp = currentItem.split("="); //["color","red"];
            keys.push(temp[0]);
        }
        return keys;
    }

    return { setItem, getItem, removeItem, getKeys, clear };
})()