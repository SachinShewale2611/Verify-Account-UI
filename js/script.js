const codes = document.querySelectorAll('.code');
codes[0].focus();

codes.forEach((code, idx) => {
    code.addEventListener('keydown', (e) => {
        if(e.key >= 0 && e.key <= 9 ) {
            codes[idx].value = '';
            if(idx==5) return;
            setTimeout(() => codes[idx +1].focus(),10)
        } else if(e.key === 'Backspace' && idx!=0) {
            if(idx<5){
                setTimeout(() =>  codes[idx].value = '', codes[idx-1].focus(),10)
            }
            else if(idx==5 && codes[idx].value == ""){
                setTimeout(() =>  codes[idx].value = '', codes[idx-1].focus(),10)
            }
            else{
                setTimeout(() =>  codes[idx].focus(),10)
            }
        }
    })
})
