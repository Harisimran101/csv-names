const container = document.querySelector('.container')

const data = Papa.parse('names-data.csv',{
    download: true,
    header: false,
    complete: function(info){
        createdata(info)
    }
});

function createdata(array){
    const mydata = array.data
     console.log(mydata)

   mydata.forEach(function(el,i){
    const item = document.createElement('div');
    item.classList.add('item')
    const name = document.createElement('p');
    name.innerText = mydata[i][0]
    const namevalue = document.createElement('p')
    namevalue.innerText = mydata[i][1]

    item.appendChild(name)
    item.appendChild(namevalue)
    container.appendChild(item)

   })
   

}