import Swal from 'sweetalert2'
window.Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
})
window.ConfirmBox = Swal.mixin({
    title: '请确认操作!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    cancelButtonText: '取消',
    showLoaderOnConfirm: true,
    confirmButtonText: '确定'
})
window.ModalBox = Swal.mixin({
    showConfirmButton: false,
    showCloseButton: true,
    showClass: {
        popup: 'modal-popup'
    }
})
window.SuccessNotice = Swal.mixin({
    icon: 'success',
    title: '成功',
    showConfirmButton: false,
    showCloseButton: true,
})
window.ErrorNotice = Swal.mixin({
    icon: 'error',
    title: '抱歉',
    showConfirmButton: false,
    showCloseButton: true,
    customClass: {
        container: 'container-class',
        popup: 'popup-class',
        header: 'header-class',
        title: 'text-lg',
        closeButton: 'close-button-class',
        icon: 'icon-class',
        image: 'image-class',
        content: 'content-class',
        input: 'input-class',
        actions: 'actions-class',
        confirmButton: 'confirm-button-class',
        cancelButton: 'cancel-button-class',
        footer: 'footer-class'
    }
})
window.DialogBox = Swal.mixin({
    input: 'text',
    showCancelButton: true,
    showLoaderOnConfirm: true,
    cancelButtonText: '取消',
    confirmButtonText: '确定'
})
