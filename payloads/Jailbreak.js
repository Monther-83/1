export function GoldHEN() {
    fetch('./payloads/GoldHEN/GoldHEN.bin').then(res => {
        res.arrayBuffer().then(arr => {
            window.pld = new Uint32Array(arr);
            setTimeout(() => {
            sessionStorage.setItem('jbsuccess', 1);
            document.getElementById('jailbreak').style.display = 'flex';
            document.getElementById('loader').style.display = 'none';
            window.location.reload();
            }, 3000); // 3 seconds delay
        })
    });   
}

export function HEN() {
    fetch('./payloads/HEN/HEN.bin').then(res => {
        res.arrayBuffer().then(arr => {
            window.pld = new Uint32Array(arr);
            setTimeout(() => {
            sessionStorage.setItem('jbsuccess', 1);
            document.getElementById('jailbreak').style.display = 'flex';
            document.getElementById('loader').style.display = 'none';
            window.location.reload();
            }, 3000); // 3 seconds delay
        })
    });   
}