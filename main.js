let result = 0;
function set(a)
{
    let thingy = document.getElementById(`value-${a}`);
    thingy.style.backgroundColor = 'hsl(213, 24%, 55%)';
    result = a;
}

function refresh()
{
    document.getElementById('preview').classList.add('display');
    document.getElementById('appreciate').classList.add('flex');
    document.getElementById('selected').textContent = result;
    console.log('Hello')
}