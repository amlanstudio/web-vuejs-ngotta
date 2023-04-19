const getFruitDataName = async function(){
    const response=await fetch("https://api.predic8.de/shop/products/?limit=300");
    if(response.status==200){
       // console.log(await response.json());
        return response.json();
    }else{
        new Error(response.statusText)
    }
    console.log(response.status);
}

const getFruitAllDatas = async function(url){
    const response=await fetch("https://api.predic8.de"+url);
    if(response.status==200){
       // console.log(await response.json());
        return response.json();
    }else{
        new Error(response.statusText)
    }
    console.log(response.status);
}

const getFruitCategory = async function(cat_url){
    const response=await fetch(cat_url);
    if(response.status==200){
       // console.log(await response.json());
        return response.json();
    }else{
        new Error(response.statusText)
    }
    console.log(response.status);
}

export {getFruitDataName,getFruitAllDatas, getFruitCategory};


// faire un tab en donne calc