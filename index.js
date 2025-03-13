const express=require('express')
 const app=express()
require('dotenv').config()
const mongoose=require('mongoose')
const { threadId } = require('node:worker_threads')
// const URI='mongodb+srv://oyindamola2383:IK1W0y3347fhM4oG@cluster0.zpfi4ln.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const URI=process.env.uri 
mongoose.connect(URI) || undefined 
.then(()=>{
console.log('connected successfully');

})
.catch((err)=>{
  console.log(err);
  
})
//const port=3000
const port=process.env.PORT ||5400
let users=[
    {id:1,name:'oyin'},
    {id:2,name:"Olawale"}
]

let nigerianmeal=[
{
  id:1,
  name:'Eba',
  description:'Eba is a Nigerian starchy staple food eaten all over the country and beyond. It is made from fried grated cassava (manioc) flour and commonly called garri.Garri is a major fufu recipe in Nigeria. It is one of the most popular Nigerian swallows. It is referred to as Garri or Eba (Yoruba name) after preparation when it is in a rounded dough form. Garri/Eba is served with all Nigerian soups. Traditionally this dish is eaten communally using the hand. A small amount is rolled in the hand and then dipped into the soup before being eaten. There are little variations between how various tribes and regions ofNigerian (and other West African countries) make this starchy food.',
  image_url:'https://bing.com/th?id=OSK.1d08c02d71629ef0d8937335c1b99ca0',
  preparation_video:'https://www.youtube.com/watch?v=UKKS_31RflM'
},
{
  id:2,
  name:'Jollof Rice',
  description:'Jollof rice is the most popular food in Africa and, the required ingredients are abundant in most countries of the world. Nigerian Jollof Rice is also one of the most beloved and iconic dishes in West Africa. Known for its vibrant red color, rich flavors, and versatility, Jollof rice is often the star of festive occasions, family gatherings, and everyday meals. Whether you’re new to cooking or a seasoned chef, this recipe is sure to help you create the perfect pot of Nigerian Jollof Rice that will impress your friends and family.',

  image_url:'https://bing.com/th?id=OSK.a47f0fcf51929060660d9fee66ed6ec1',
  preparation_video:'https://www.youtube.com/watch?v=EfZEArZcfAY'
},
{
  id:3,
  name:'Beef Stew',
  description:'Beef stew is a savory dish that combines beef with a variety of other ingredients, such as potatoes, vegetables, herbs, spices, and broth',
  image_url:'https://bing.com/th?id=OSK.c444ddd9b0a2d0ada652daf0e33cf5cd',
  preparation_video:'https://www.youtube.com/watch?v=TnvdhRmQhOk'
},
{
  id:4,
  name:'White Rice',
  description:'White rice is a staple food in Nigerian cuisine, often served as an accompaniment to flavorful stews and sauces.',
  image_url:'https://images.squarespace-cdn.com/content/v1/5ea3b22556f3d073f3d9cae4/1596800023719-VK8EJFM1E1B4VUZ5PQIQ/IMG_6839.jpeg',
  preparation_video:'https://www.youtube.com/watch?v=ydeNFPrVyag&t=127s'
},
{
  id:5,
  name:'Fufu',
  description:'Fufu is a starchy, bread-like food commonly eaten in West Africa and the Caribbean. It is typically served with a variety of mouthwatering African soups and stews. And it is a great way to be introduced to African cuisine. Essentially, it is a way to transport stews and soups from the bowl into your mouth. Like bread and tomato soup! Intrigued?',
  image_url:'https://cheflolaskitchen.com/wp-content/uploads/2021/02/DSC0353-Fufu-01292021-west-african-fufu.jpg',
  preparation_video:'https://www.youtube.com/watch?v=5TnTydjhoQw&t=54s'
},
{
  id:6,
  name:'Pounded Yam',
  description:'Pounded yam (Yoruba: Iyán, Hausa: sakwara, Igbo: Utara-ji) is a Nigerian swallow or Okele food.It is commonly prepared by pounding boiled yam with mortar and pestle. Pounded yam is similar to mashed potatoes but heavier in consistency. It is a smooth delicacy eaten with the hands.Pounded Yam commonly known as Ìyàn among Yoruba People, Akpu among the South Eastern Nigeria is consumed in Ondo State, Ijesha, Kogi State, Okun, Edo, Benue and Ekiti in Nigeria, among others. It can be served with egusi soup, jute leaves soup (ewedu), stewed spinach (efo riro) or okra soup, Ofe Akwu (palmnut soup), Ofe Nsala (white soup).',
  image_url:'https://bing.com/th?id=OSK.1d08c02d71629ef0d8937335c1b99ca0',
  preparation_video:'https://www.youtube.com/watch?v=ODR_ITXtW9s'
},
{
  id:7,
  name:'Moin Moin',
  description:'Moin moin is a delicious, savory dish from Nigeria. It is made from peeled black-eyed peas, honey beans, or brown beans. These beans are blended with peppers and onions and then steamed. Other additions like fish, crayfish, boiled egg, and beef liver are added for more texture and nutrition.',
  image_url:'https://th.bing.com/th/id/R.d04db69f6f823b6c27e53fa8e9d19a9a?rik=%2bJV01Uxco8%2bn%2bQ&pid=ImgRaw&r=0',
  preparation_video:'https://www.youtube.com/watch?v=UIHM-gqb0zc'
},
{
  id:8,
  name:'Efo Riro',
  description:'The African Stewed Spinach also popularly known as Efo riro is a one-pot stew with layers of flavor. It requires quite a number of ingredients but little work from the cook putting it all together (as long as you already have all your ingredients prepped).',
  image_url:'https://th.bing.com/th/id/R.0e0014aaa42b04ce37429a41211fdc98?rik=G6ZQeWuSlD1UIA&pid=ImgRaw&r=0',
  preparation_video:'https://www.youtube.com/watch?v=dpmwgjxRCy8'
},
{
  id:9,
  name:'Garri',
  description:'Garri is a staple food in many West African countries, particularly Nigeria. It is a versatile and beloved ingredient made from cassava, a root vegetable.',
  image_url:'https://th.bing.com/th/id/OIP.3Vl-_jx5hqlbCHUz4twQTAHaJ4?w=750&h=1000&rs=1&pid=ImgDetMain',
  preparation_video:'https://www.youtube.com/watch?v=a-COSrHv6xg'
},
{
  id:10,
  name:'Boli',
  description:'Boli (also known as Bole) is a popular Nigerian street food. It consists of roasted plantain (or sometimes potatoes and yam) served with a hot spicy sauce made from palm oil, pepper, and utazi leaves. Some people enjoy it with groundnuts.',
  image_url:'https://homeandedibles.com/wp-content/uploads/2022/10/boli-or-bole.jpg',
  preparation_video:'https://www.youtube.com/watch?v=UwyGfH-DHNE&t=33s'
},
{
  id:11,
  name:'Tuwon Shinkafa',
  description:'Tuwon Shinkafa is a type of Nigerian and Nigerien rice swallow from Niger and the northern part of Nigeria. It is a thick pudding prepared from a local rice that is soft and sticky, and is usually served with different types of soups like Miyar Kuka, Miyar Kubewa, and Miyar Taushe. Two variants made from maize and sorghum flour are called Tuwon Masara and Tuwon Dawa, respectively.',
  image_url:'https://en.wikipedia.org/wiki/Tuwon_shinkafa#/media/File:Tuwo_Shinkafa_with_garden_egg_Soup.jpg',
  preparation_video:'https://www.youtube.com/watch?v=teuHObjZqds'
},
{
  id:12,
  name:'Suya',
  description:'Suya, also known as Tsire, is a traditional Hausa (Nigerian) smoke-grilled spiced meat on skewer. Suya is generally made with thin-sliced spiced beef, lamb, goat, ram, or chicken arranged on wooden skewers. Organ meats such as kidney, liver and tripe as well as other types of meats and seafood (shrimp) are also sometimes used.Suya is most popular as evening street food or snack, restaurant appetizer, and as accompaniment with drinks at night spots.',
  image_url:'https://en.wikipedia.org/wiki/Suya#/media/File:SuyavarietiesTX.JPG',
  preparation_video:'https://www.youtube.com/watch?v=c27vMVHEJJ4&t=2s'
},
{
  id:13,
  name:'Asaro (Yam Porridge)',
  description:'Asaro which is also known as Yam pottage or Yam porridge is a very delicious Yam recipe though it is eaten by most tribes in Nigeria however, it is more common in the Yoruba-speaking parts of Nigeria. It is also easy to make. If you love yam, it is a must-try recipe!',
  image_url:'https://th.bing.com/th/id/OIP.YVLxYUBvSmLjH_HPRhGjhQHaHa?rs=1&pid=ImgDetMain',
  preparation_video:'https://www.youtube.com/watch?v=vrv-4KP3Oc0'
},
{
  id:14,
  name:'Nigerian Salad',
  description:'he classic Nigerian Salad recipe is a  very lively salad. It is colorful, nutrient-dense, very filling and it is very tasty. I need to add that it is versatile enough to serve in smaller portions as an appetizer, or as one hearty bowlful main dish and it is very easy to make. It literally an anything-goes type of food.',
  image_url:'https://i.ytimg.com/vi/K6sgvvGso8M/maxresdefault.jpg',
  preparation_video:'https://www.youtube.com/watch?v=UeUuyF3wejE'
},
{
  id:15,
  name:'Amala',
  description:'Amala is a traditional Nigerian meal eaten by the Yoruba ethnic group in the country’s western states. It’s manufactured using unripe plantain flour, yam flour, and/or cassava flour.As a popular Nigerian dish, it’s difficult to go to any of the local bukkas in Lagos or Ibadan without seeing this dish on the menu. The beautiful thing about this Yoruba special is that it is quick and easy to make, but if you aren’t careful, you could end up with lumps that make it unappealing to eat.',
  image_url:'https://usercontent.one/wp/yorubalessons.com/wp-content/uploads/2023/06/easy-amala-recipe-2048x2048.jpg?media=1672265734',
  preparation_video:'https://www.youtube.com/watch?v=syXL2Z1DyDs&t=63s'
},
{
  id:16,
  name:'Dodo (Fried Plaintains)',
  description:'Fried plantain is a dish cooked wherever plantains grow. It is called dodo in Yoruba in South West Nigeria, otherwise known as simply fried plantain in other parts of Nigeria.',
  image_url:'https://bing.com/th?id=OSK.6c1f21bcbf92fa8414a5aa79860ef684',
  preparation_video:'https://www.youtube.com/watch?v=HMrpgoN3RJA'
},
{
  id:17,
  name:'Nigerian Afang Soup',
  description:'The Nigerian Afang Soup, like the Edikang Ikong soup, is native to the Efiks, people of Akwa Ibom and Cross River states of Nigeria but enjoyed by all Nigerians. It is also very nutritious as the soup consists mainly of vegetables. Afang Soup is prepared with a generous quantity of Water leaves and the wild herbal Okazi leaves.',
  image_url:'https://cdn.tasteatlas.com/images/dishes/662c50d9d8ec4760bb12d705f64897d6.jpg',
  preparation_video:'https://www.youtube.com/watch?v=u3FzRezSgBs&t=213s'
},
{
  id:18,
  name:'Agege Bread',
  description:'Nigerian Agege bread is a popular type of Nigerian bread that is loved by many. This African bread can be eaten with Akara, moin moin, stew, on its own even or warm spread butter on top...oh la la..lol.',
  image_url:'https://tripleafriq.com/wp-content/uploads/2024/03/Agege-Bread.jpg',
  preparation_video:'https://www.youtube.com/watch?v=5iQSSekbxKg'
}


]

 app.get('/',(req,res)=>{
  res.sendFile(__dirname+'/public/index.html')
//  res.send('Hello world')
//  res.sendFile('/public/index.html')
//  res.send(__dirname)
  //  res.send(users)
 })
 app.get('/api',(req,res)=>{
res.send(users)
 })
 app.get('/nigerianmeal_api',(req,res)=>{
  res.send(nigerianmeal)
 })
// //set up server
  app.listen(port,()=>{
     console.log(`Server started at port ${port}`);
    
})


// const express = require("express");
// const app = express();

// app.get("/", (req, res) => {
//     const userIp = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
//     res.send({ ip: userIp });
// });

// app.listen(5000, () => console.log("Server running on port 5000"));
