import { Controller } from "stimulus";

export default class extends Controller {
    connect() {
        console.log('form')
    }

    select_toggle(e){
        const checkBox = e.currentTarget
        const allCheckBox = this.element.querySelectorAll('input[type=checkbox]')
        console.log(allCheckBox)
        if(checkBox.checked){
            allCheckBox.forEach(box => {
                box.checked = true
            })
        }else{
            allCheckBox.forEach(box => {
                box.checked = false
            })
        }
    }

    limit_size(e){
        const input = e.currentTarget
        const limitSize = input.getAttribute('data-limit-size')
        for(const file of input.files){
            if(file.size > limitSize * 1000 ){
                alert(`文件太大! 不要超过 ${limitSize} Kb`)
                input.value = null
            }
        }
    }

}
