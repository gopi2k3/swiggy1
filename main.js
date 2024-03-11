$('.brand').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	autoplay:true,
    autoplayTimeout:3000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:2
        }
    }
})
$('.brand2').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
	autoplay:true,
    autoplayTimeout:3500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:6
        }
    }
})





let allbtn=document.querySelector('.all')


 let container=document.createElement('div')

 container.classList.add('container')

allbtn.append(container)

let row=document.createElement('div')

row.classList.add('row')

container.appendChild(row)

let datas=[
{
	id:1,
	name:"Chilli Idly Fry",
	cusine:"A South Indian dish made with idlis (steamed rice cakes) coated in a spicy chilli sauce.",
	imgurl:"img/chili fry",
	rating:3,
	
	amount:99,
	units:"for three",
	foodtype:"non veg",
	dtime:25,
	
	
},
{
	id:2,
	name:"Chapathi [2pieces]",
	cusine:"North Indian,Chinese",
	imgurl:"img/chapathi2",
	rating:3.4,
	preparation:"25 min",
	amount:65,
	units:"for three",
	foodtype:"veg",
	dtime:35,
},
{
	id:3,
	name:"Podi Idly Fry",
	cusine:"A South Indian dish made with idlis (steamed rice cakes) coated in spicy podi (powder) made with lentils and spices and then pan-fried.",
	imgurl:"img/podi fry",
	rating:2.5,
	preparation:"25 min",
	amount:99,
	units:"for three",
	foodtype:"non veg",
	dtime:40,
},
{
	id:4,
	
	name:"Veg Fried	Rice",
	cusine:"North Indian,Chinese",
	imgurl:"img/fried",
	rating:3.5,
	preparation:"25 min",
	amount:99,
	units:"for three",
	foodtype:"veg",
	dtime:25
},
{
	id:5,
		name:"Gobi Pepper Fry",
	cusine:"North Indian,Chinese",
	imgurl:"img/gobi2",
	rating:"3.5",
	preparation:"25 min",
	amount:89,
	units:"for three",
	foodtype:"non veg",
	dtime:35
},
{
	id:6,
		name:"Baby Corn Pepper Fry",
	cusine:"North Indian,Chinese",
	imgurl:"img/baby",
	rating:2.5,
	preparation:"25 min",
	amount:85,
	units:"for three",
	foodtype:"non veg",
	dtime:35,
},
{
	id:7,
	name:"Butterscotch Chandrakala",
	cusine:"North Indian,",
	imgurl:"img/sweet3",
	rating:3.4,
	preparation:"25 min",
	amount:180,
	units:"for three",
	foodtype:"veg",
	dtime:40,
},
{
	id:8,
		name:"Orange Soanpapdi",
	cusine:"North Indian,Chinese",
	imgurl:"img/sonpa",
	rating:2.4,
	preparation:"25 min",
	amount:180,
	foodtype:"veg",
	units:"for three",
	dtime:40,
},
{
	id:9,
		name:"Puri",
	cusine:"North Indian,Chinese",
	imgurl:"img/19.webp",
	rating:4.4,
	preparation:"25 min",
	amount:350,
	units:"for three",
	foodtype:"veg",
	dtime:40,
},
{
	id:10,
		name:"Non Veg Meal [Roll + Dessert]",
	cusine:"North Indian,Chinese",
	imgurl:"img/meals1",
	rating:2.5,
	preparation:"25 min",
	amount:320,
	units:"for three",
	foodtype:"non veg",
	dtime:33,
},
{
	id:11,
		name:"Non Veg Meal [Roll + Dessert] + Pepsi",
	cusine:"North Indian,Chinese",
	imgurl:"img/meals2",
	rating:4.4,
	preparation:"25 min",
	amount:390,
	units:"for three",
	foodtype:"non veg",
	dtime:25,
},
{
	id:12,
		name:"Suvarotti Varuval",
	cusine:"North Indian,Chinese",
	imgurl:"img/suvar",
	rating:4.4,
	preparation:"25 min",
	amount:300,
	units:"for three",
	foodtype:"non veg",
	dtime:33,
},
{
	id:13,
		name:"Ghee Masala Roast Dosa",
	cusine:"North Indian,Chinese",
	imgurl:"img/ghee3",
	rating:2,
	preparation:"25 min",
	amount:90,
	units:"for three",
	foodtype:"veg",
	dtime:40,
},
{
	id:14,
		name:"Chilli Cheese Toast",
	cusine:"North Indian,Chinese",
	imgurl:"img/chili2",
	rating:2.5,
	preparation:"25 min",
	amount:179,
	units:"for three",
	foodtype:"veg",
	dtime:33,
},
{
	id:15,
		name:"Tandoori Chiken Tikka Sandwich",
	cusine:"North Indian,Chinese",
	imgurl:"img/tandoori2",
	rating:4.4,
	preparation:"25 min",
	amount:279,
	units:"for three",
	foodtype:"non veg",
	dtime:25,
},
{
	id:16,
		name:"Podi Roast Dosa",
	cusine:"North Indian,Chinese",
	imgurl:"img/ghee2",
	rating:4.4,
	preparation:"25 min",
	amount:89,
	units:"for three",
	foodtype:"veg",
	dtime:40,
},
{
	id:17,
		name:"Carrot Uttappam",
	cusine:"North Indian,Chinese",
	imgurl:"img/carrot1",
	rating:2.5,
	preparation:"25 min",
	amount:89,
	units:"for three",
	foodtype:"veg",
	dtime:33,
},
{
	id:18,
		name:"Poori",
	cusine:"North Indian,Chinese",
	imgurl:"img/poori2",
	rating:4.4,
	preparation:"25 min",
	amount:69,
	units:"for one",
	foodtype:"veg",
	dtime:35,
},
{
	id:19,
		name:"Parotta",
	cusine:"North Indian,Chinese",
	imgurl:"img/parotta",
	rating:2,
	preparation:"25 min",
	amount:25,
	units:"for two",
	foodtype:"non veg",
	dtime:35,
},
{
	id:20,
		name:"Special Smoky Chicken Shawarma",
	cusine:"North Indian,Chinese",
	imgurl:"img/shawarma",
	rating:2.5,
	preparation:"25 min",
	amount:230,
	units:"for two",
	foodtype:"veg",
	dtime:25,
},



];
ans(datas)
function ans(a){
   a.forEach(element => {
      
      let col=document.createElement('div')
   col.classList.add('col')
   row.append(col)

  

  let card=document.createElement('div')

  card.classList.add('card')
  col.append(card)


  let imgDiv=document.createElement('div')
  imgDiv.classList.add('img-div')
  card.append(imgDiv)

  let img=document.createElement('img')
  img.classList.add('item-img')
  img.src=element.imgurl
  imgDiv.append(img)

  let cardContent=document.createElement('div')
  cardContent.classList.add('card-content')
  card.append(cardContent)

  let h2=document.createElement('h2')
  h2.classList.add('item-name')
  h2.innerHTML=element.name

cardContent.append(h2)

let rating=document.createElement('span')

rating.classList.add('rating')

rating.innerText=element.rating

card.append(rating)

let btn=document.createElement('button')
btn.classList.add('btns')
btn.innerText=`Add To card`
cardContent.append(btn)
  
let amount=document.createElement('p')
amount.classList.add('item-amount')
amount.textContent=`Price : ${element.amount} `
cardContent.append(amount)


let foodtype=document.createElement('p')
foodtype.classList.add('foodType')
foodtype.innerHTML=`${element.foodtype}`
cardContent.append(foodtype)

let dTime=document.createElement('p')
dTime.classList.add('dTime')

dTime.innerHTML=`Food Delivery Time :${element.dtime} Min`

cardContent.append(dTime)

// rating Color Change function =============


ratingfun()

function ratingfun(){
	
	if(element.rating>=4.0){
		rating.classList.add("icon-div-green")
	}
	else if(element.rating>=3.0){
		rating.classList.add("icon-div-orange")
	}
	else if(element.rating<3&&element.rating>=1){
		rating.classList.add("icon-div-red")
	}
}

// food Type color Change function=============
foodColor()

function foodColor(){

	if(element.foodtype=='veg'){
		foodtype.classList.add('foodRed')
	}
	else if(element.foodtype=='non veg'){
		foodtype.classList.add('foodGreen')
	}
}
   });
 click()

}

// End For Fro Ans function ============



// create Object and Store Local Storage ================
function click(){
	let btn=document.querySelectorAll('.btns')
	console.log(btn)
	btn.forEach(e=>{
	
		e.addEventListener('click',()=>{
			
			let totalCard=e.parentElement.parentElement
			 let name=totalCard.querySelector('.item-name').innerHTML
			let img=totalCard.querySelector('.item-img').src
			let amount=totalCard.querySelector('.item-amount').innerHTML
		
	
			 let obj={
				name,img,amount
			 }
			 store(obj)
		})
	})
	function store(datas){
	   const storedata=JSON.parse(localStorage.getItem('swiggydata')) || [];
	   if(storedata.find(e=>e.name===datas.name)){
		alert('this item already add')
	 }
	 else{
		storedata.push(datas)
	 }	
			localStorage.setItem('swiggydata',JSON.stringify(storedata))
	
	}

}


// default function ==================

function defultsort(){
	let removeCol=document.querySelectorAll('.col')

	removeCol.forEach((e)=>{
		e.remove()
	})

	ans(datas)
}

// amount low to high function ==================
function lowtohigh(){
	let value=datas.slice().sort((a,b)=>{
		return a.amount-b.amount
	})

	let removeCol=document.querySelectorAll('.col')
	removeCol.forEach((e)=>{
		e.remove()
	})
	ans(value)
	click()
}



// Rating low to high function ===============


function  ratingsort(){
	let value=datas.slice().sort((a,b)=>{
		return b.rating-a.rating
	})

	let removeCol=document.querySelectorAll('.col')

	removeCol.forEach((e)=>{
		e.remove()
	})

	ans(value)
	click()
}

// Price hight  to low Function


function hightolow(){
	let value=datas.sort((a,b)=>{
		return b.amount-a.amount
	})

	let removeCol=document.querySelectorAll('.col')

	removeCol.forEach((e)=>{
		e.remove()
	})
	ans(value)
	click()
}


// PureVeg Function =============


function pureveg(){
	let value=datas.filter((e)=>{
		return e.foodtype=== 'veg'
	})
	console.log(value)

	let removecol=document.querySelectorAll('.col')

	removecol.forEach(e=>e.remove())

	ans(value)
	click()
}



// Delivery Time Sort ============



function dtime(){
	let value=datas.slice().sort((a,b)=>a.dtime-b.dtime)

	let removecol=document.querySelectorAll('.col')

	removecol.forEach(e=>e.remove())

	ans(value)
	click()
}


// Less then 300 Rs =====


function shortamount(){
	let value=datas.filter((e)=>{
		return e.amount<=300
	})

	let removecol=document.querySelectorAll('.col')

	removecol.forEach(e=>e.remove())

	ans(value)
	click()

}

// 300 to 6000 amout ==========



function amount(){
	let value=datas.filter(e=>e.amount>=100&&e.amount<=250)

	let removecol=document.querySelectorAll('.col')

	removecol.forEach(e=>e.remove())

	ans(value)
	click()
}


