import { RANDOM_IDENTIFY_CODE } from './utilTypes'
//自定义的工具函数
export const commonUtils = {
    [RANDOM_IDENTIFY_CODE](randomFlag, min, max){
        let str = "",
        range = min,
        arr = [
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',
            'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
            'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
        ]

        if (randomFlag) {
        range = Math.round(Math.random() * (max - min)) + min;// 任意长度
        }
        for (let i = 0; i < range; i++) {
            let pos = Math.round(Math.random() * (arr.length - 1))
            str += arr[pos]
        }
        return str
    }
}
//使用animate.css时，通用的动画增加和删除的工具函数
export const animateCSS = function(element, animationName, callback) {
    const node = document.querySelector(element)
    node.classList.add('animated', animationName)

    function handleAnimationEnd() {
        node.classList.remove('animated', animationName)
        node.removeEventListener('animationend', handleAnimationEnd)

        if (typeof callback === 'function') callback()
    }

    node.addEventListener('animationend', handleAnimationEnd)
}
