import { Controller } from "stimulus";

export default class extends Controller {
    static targets = ['content'];


    connect() {
        console.log('hi')
        this.element.addEventListener('click', (e)=> {
            this.contentTarget.select();
            this.contentTarget.setSelectionRange(0, 99999); /*For mobile devices*/

            document.execCommand("copy");
            Toast.fire(
                {
                    icon: 'success',
                    text: '复制成功'
                }
            )
            this.contentTarget.blur()

        })
    }
}
