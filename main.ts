function register() {
  navigator.serviceWorker.register('/sw.ts', { scope: '/sw', type: 'module' }).then(
    function (_registration) {
      console.log('Register Service Worker: Success')
    },
    function (_error) {
      console.log('Register Service Worker: Error')
    }
  )
}
function start() {
  navigator.serviceWorker.getRegistrations().then(function (registrations) {
    for (let registration of registrations) {
      console.log('Unregister Service Worker')
      registration.unregister()
    }
    register()
  })
}
start()
