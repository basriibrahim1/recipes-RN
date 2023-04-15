import {useToast } from 'native-base'

const ToastLogin = () => {
    const toast = useToast()
  
    
      return toast.show({
            title: 'Username atau password salah',
            placement: 'top'
        })
   

}

export default ToastLogin