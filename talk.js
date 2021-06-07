window.addEventListener('DOMContentLoaded',()=>{
     //- イベントリスナー登録
    document.getElementById('talkapi__request').addEventListener('click',handler_request_reply);
});

const images = [
    'img/c.png',
    'img/f.png',
    'img/j.png',
    'img/m.png',
    'img/p.png',
];
const random = Math.floor(Math.random() * images.length);

/* 返答をリクエスト */
function handler_request_reply(ev){
     /* コメント取得 */
    const comment = document.getElementById('talkapi__input').value;
    /* レクエストデータ */
    let formdata = new FormData();
    formdata.append('apikey','DZZjmsyucUxV7ps80QXLaWTpHUgehRAa');
    formdata.append('query',comment);

     /* リクエスト */
    fetch('https://api.a3rt.recruit-tech.co.jp/talk/v1/smalltalk',{
        method: 'post',
        body: formdata,
    }).then(response => {
        response.json().then(data => {
            const reply = data.results[0].reply;
            const parent = document.getElementById('chatarea');
           
            
            let replydiv = document.createElement('div');
            let replytalk = document.createElement('p');
            let replyimg = document.createElement('img');
            let name = document.getElementById('name');
            
            parent.appendChild(replydiv).classList.add('replycontent');
            replydiv.appendChild(replyimg).classList.add('replyimg')
            replydiv.appendChild(replytalk).classList.add('replymassage');
            replyimg.setAttribute('src',images[random]);
            
                        if(replyimg.src === 'https://marikotanikawa.github.io/adozmb.github.io/img/c.png'){
                            console.log('a');
                            name.textContent='チャッキー';
                        } else if(replyimg.src === 'https://marikotanikawa.github.io/adozmb.github.io/img/f.png') {
                            console.log('a');
                            name.textContent='フレディ';
                        } else if(replyimg.src === 'https://marikotanikawa.github.io/adozmb.github.io/img/j.png') {
                            console.log('a');
                            name.textContent='ジェイソン';
                        } else if(replyimg.src === 'https://marikotanikawa.github.io/adozmb.github.io/img/m.png') {
                            console.log('a');
                            name.textContent='ブギーマン';
                        } else if(replyimg.src === 'https://marikotanikawa.github.io/adozmb.github.io/img/p.png') {
                            console.log('a');
                            name.textContent='ピンヘッド';
                        } 
        
            replytalk.innerHTML = reply; 



            // if(images.src === 'img/c.png'){
            //     name.textContent='チャッキー';
            // } else if(images === 'img/f.png') {
            //     name.textContent='フレディ';
            // } else if(images === 'img/j.png') {
            //     name.textContent='ジェイソン';
            // } else if(images === 'img/m.png') {
            //     name.textContent='ブギーマン';
            // } else if(images=== 'img/p.png') {
            //     name.textContent='ピンヘッド';
            // } 

        });


    });
}

document.getElementById('talkapi__request').addEventListener('click',()=>{
    const parent = document.getElementById('chatarea');
    let mydiv = document.createElement('div');
    let mytalk = document.createElement('p');

    parent.appendChild(mydiv).classList.add('mycontent');

    const mytalkarea = document.getElementById('talkapi__input');
    mytalk.textContent = mytalkarea.value;
    mydiv.appendChild(mytalk).classList.add('mymassage');

})
