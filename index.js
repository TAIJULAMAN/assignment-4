/////////////// Problem:1  radianToDegree///////////////////////////

// ফাংশন নেম দিতে হবে radianToDegree । 
// এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)।
//  তারপর সেটাকে ডিগ্রীতে (degree)কনভার্ট করে কত ডিগ্রী(degree) হয় সেই সংখ্যা
// রিটার্ন করবে।
//  রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।

function radianToDegree(radian){
    let degree = radian * 57.2958;
return degree;
}
const result1 = radianToDegree(10);
const result2 = radianToDegree(25);
const result3 = radianToDegree(199);
// console.log(parseFloat(result1.toFixed(2)));
// console.log(parseFloat(result2.toFixed(2)));
// console.log(parseFloat(result3.toFixed(2)));

/////////////// Problem:2  isJavaScriptFile ///////////////////////////

// ফাংশন নেম দিতে হবে isJavaScriptFile । 
// এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String)
//  যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। 
//  যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে 
// আর যদি না হয় তাহলে false রিটার্ন করতে হবে । 

function isJavaScriptFile(fileName){
    let fileExtension =fileName.endsWith('.js');
    if (fileExtension) {
              return true;
            } 
            else {
              return false;
            }

}
 const result11 = isJavaScriptFile("app.js");
 const result12 = isJavaScriptFile("js.png");
 const result13 = isJavaScriptFile("image.js.png");
 const result14 = isJavaScriptFile("image.jpg.js");
//  console.log(result11);
//  console.log(result12);
//  console.log(result13);
//  console.log(result14);


/////////////// Problem:3  oilPrice///////////////////////////

// ফাংশন নেম দিতে হবে oilPrice।
//  এই ফাংশন তিনটা প্যারামিটার নিবে। 
// প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
// প্রতি লিটার পেট্রোল এর দাম – 130 টাকা 
// প্রতি লিটার অকটেনের এর দাম – 135 টাকা 

// এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে হলো সেই সংখ্যা রিটার্ন করতে হবে?

function oilPrice(diselQuantity,pettrolQuantity,octenQuantity){
    const diselPrice = 114;
    const pettrolPrice = 130;
    const octenPrice =135;
    const diselPriceWithQuantity =diselQuantity * diselPrice ;
    const pettrolPriceWithQuantity =pettrolQuantity * pettrolPrice ;
    const octenPriceWithQuantity =octenQuantity * octenPrice ;

    const totalPrice =diselPriceWithQuantity + pettrolPriceWithQuantity + octenPriceWithQuantity ;

    return totalPrice;
}
const price21 =oilPrice(1,1,1);
const price22 =oilPrice(30,20,10);
const price23 =oilPrice(1,0,2);
const price24 =oilPrice(0,2,3);

// console.log(price21);
// console.log(price22);
// console.log(price23);
// console.log(price24);


/////////////// Problem:4  publicBusFare ///////////////////////////

// একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে।ধরো আমাদের বাস ও মাইক্রো আছে ।প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন
//  পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। 
// এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে(publicBusFare)যেটি প্যরামিটার হিসেবে একটা সংখ্যা (কতজন যাবে )  নিবে ।
// মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে?

// উদাহরণ১ঃযদি ১১৭ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ২ টি ও মাইক্রোবাস লাগবে ১ টি । বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।      
                //   (50*2+11 , 6)

// উদাহরণ২ঃযদি ২৩৫ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ৪ টি ও মাইক্রোবাস লাগবে ৩ টি এবং বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।
                 //   (50*4+3*11 , 2)

function publicBusFare(passengers){

const ownBusSit = 50;
const microBusSit = 11;
const ticketPrice = 250;

const ownBusCapacity = Math.floor(passengers/ownBusSit);
const microBusCapacity =Math.floor((passengers-(ownBusCapacity*50))/microBusSit);


let publicBusFareCapacity = passengers - ((50 * ownBusCapacity) + (11 * microBusCapacity));
let publicBusFareCost = publicBusFareCapacity * ticketPrice;

return publicBusFareCost;

}    

const cost1 = publicBusFare(50);
const cost2 = publicBusFare(55);
const cost3 = publicBusFare(112);
const cost4 = publicBusFare(235);
const cost5 = publicBusFare(365);

// console.log(cost1);
// console.log(cost2);
// console.log(cost3);
// console.log(cost4);
// console.log(cost5);

/////////////// Problem:5 isBestFriend ///////////////////////////

// তোমাকে একটি ফাংশন লিখতে হবে isBestFriend 
// যেটি প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে । 
// তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা ।
//  যদি বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।

const bestFriend = [
  {name:'abul',friend :'babul'},
  {name:'babul',friend :'abul'},
  {name:'abul',friend :'kabul'},
  {name:'kabul',friend :'sabul'},
  {name:'doe',friend :'alex'},
  {name:'john',friend :'doe'}
];
function isBestFriend(friend1,friend2){
  // (friend1).bestFriend.includes(friend2) &&
          // (friend2).bestFriend.includes(friend1)
  if(friend1.name === friend2.friend && friend2.name === friend1.friend)
  {
    return true;
  }
else{
  return false;
}
}
let result = isBestFriend(friend1,friend2);
console.log(result);





  