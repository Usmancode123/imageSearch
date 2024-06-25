const accesskey = 'kwRsS2Ralc_vo50z_43UzFCu4YOZYxcPz2dFo4CnBB4'
const searchForm = document.querySelector('.form')
const input = document.querySelector('#search-box')
const btn = document.querySelector('.button')
const searchResult = document.querySelector('.serch-rersult')
const showMore = document.querySelector('.show-more')

console.log(showMore);



// https://api.unsplash.com/search/photos?page=1&query=office



let keyword = ''
let page = 1
async function serchImages() {
    keyword=input.value;
    console.log(keyword);
    const url =`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`


    const response = await fetch(url)
    const data = await response.json()
    console.log(data);


    if(page === 1){
        searchResult.innerHTML=''
    }
    
    const results = data.results

    results.map((result) =>{
        const image = document.createElement('img')
        image.src = result.urls.small
        const imageLink = document.createElement('a')
        imageLink.href = result.links.html
        imageLink.target = '_blank'

        imageLink.appendChild(image)
        searchResult.appendChild(imageLink)
    })
    showMore.style.display='block'
}
 searchForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    page =1 
    serchImages()
 })

showMore.addEventListener('click',()=>{
    page++
    serchImages()

})


