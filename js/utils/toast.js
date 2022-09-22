import Toastify from 'toastify-js'
import 'toastify-js/src/toastify.css'

export const toast = {
  info(message) {
    Toastify({
      text: message,
      duration: 5000,
      gravity: 'top',
      position: 'right',
      close: true,
      style: {
        background: 'linear-gradient(to right, #4fc3f7, #0288d1)',
      },
    }).showToast()
  },

  success(message) {
    Toastify({
      text: message,
      duration: 5000,
      gravity: 'top',
      position: 'right',
      close: true,
      style: {
        background: 'linear-gradient(to right, #66bb6a, #388e3c)',
      },
    }).showToast()
  },

  error(message) {
    Toastify({
      text: message,
      duration: 5000,
      gravity: 'top',
      position: 'right',
      close: true,
      style: {
        background: 'linear-gradient(to right, #e57373, #d32f2f)',
      },
    }).showToast()
  },
}
