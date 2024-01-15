const butInstall = document.getElementById('buttonInstall');
butInstall.classList.add("hidden")

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    //button no longer hidden
    butInstall.classList.toggle('hidden', false);
  });
  

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        return;
      }
    promptEvent.prompt();
    //reset deferred prompt
      window.deferredPrompt = null;
    butInstall.classList.toggle('hidden', true);
    });
  


// TODO: Add an handler for the `appinstalled` event
window.addEventListener("appinstalled", (event) => {
    // clear prompt
    window.deferredPrompt = null;
  });