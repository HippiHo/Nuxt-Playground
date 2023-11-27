// Usefull if you want to inject all the logic of a certain library like Firebase,
// - Google Analytics
// - change Vue directive


export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
        saySomething: (msg: string) => console.log(`Say ${msg}.`),
    }
  }
});
