const btn = document.getElementById('button1')!;
btn.onclick = async function() {
    await fetch('/xlsx', {
        mode: 'cors',
        method: 'GET'
    })
    .then(res => res.json())
    .then(json => console.log(json))
}