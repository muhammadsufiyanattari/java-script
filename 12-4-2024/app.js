// chapter no 21 to 35

// chapter  no 21 to 25

// var firstName=prompt('Enter your First name');
// var lastName=prompt('Enter your Last name');
// var fullName=firstName+' '+lastName
// document.write(`Hello ${fullName} How are you`)
// Q2
// var userInput=prompt('Enter your favorite Mobile Phone and his model');
// document.write(
//     'My favorite Mobile Phone is : '+ userInput +"<br>" + "Lenght is :"+userInput.length
// )
// Q3
// var arr = "pakistan";
// for (var i = 0; i <= arr.length - 1; i++) {
//   if (arr[i] === "n") {
//     document.write(
//         "Index letter 'n' is :" +i
  
//     )
//   }

// }

// 2nd practice

// var arr = "pakistan";
// document.write(
//             "Index of 'n' is :"+ arr.IndexOf('n')
      
//         )


// Q4
// var str='hello world'
// document.write(
//             "last Index of  'l' is :"+ str.lastIndexOf('l')
      
//         )

// Q5
// var arr='pakistan'
// for(var i=0; i<=arr.length-1 ; i++){
//     if (arr[i]==='i') {
//         document.write( 'String pakistan character at is '+i+':'+arr[i] )
//     }
// }



// document.write( 'String pakistan character at is  3 :'+arr.charAt(3) )

// Q6
// var firstName=prompt('Enter your first Name')
// var lastName=prompt('Enter your last Name')
// var fullName=firstName.concat(" ",lastName)
// document.write('Hello ' ,fullName,'<br> How are you')

// Q7
// var myCity=['islamabad','lahore','hydrabad']
// var userInput=prompt('Enter your city name')

//    if (userInput==='islam') {
//       document.write(userInput.replace('islam',myCity[0]) )  ;
//     }
// else if (userInput.toLowerCase()==='lhr') {
//     document.write( userInput.replace('lhr',myCity[1]))  ;
// } else if(userInput.toLowerCase()==='hyder') {
//     document.write(userInput.replace('hyder',myCity[2]))  ;
// }
// else{
//     document.write(
//         'please Enter currect city'
//     )
// }





// Q8
// var message = 'Ali and Sami are best friends. They play cricket andfootball together.';
// var convert=message.replaceAll('and','&')
// document.write(
//     '<strong>Before replace </strong>: '+message+"<br>"+'<strong>After replace</strong> : '+convert)



// Q9
//        var str='472';
//        var convert=Number(str);
// document.write(
//     'Value string : '+str +"<br>"+"Convert into Number : "+convert
// )


// Q10
//  var userInput=prompt()
//  var myConvert=userInput.toLocaleUpperCase()
//  document.write(
//     "Prompt value : "+userInput+"<br>"+
//     "Prompt convert into uppercase : "+myConvert
//  )

// Q11

//   var userInput=prompt();
//    var firstLetter=userInput[0].toUpperCase()
//    var mySlice=userInput.slice(1,userInput.length)
// var smalLetter=mySlice.toLowerCase()
  
// document.write(userInput=firstLetter+smalLetter)

// Q12
// var num=35.36;
// var str=num.toString()
// var removeDote=str.replace(".",'')
// document.write(
//    "intiger value : ",num,"<br>",
//    "converet to string :",removeDote

// )



// Q13
// skip



// Q14


// var flag=true;
// var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
//  var userInp=prompt('Well come to ABC bakry  What do you want to order sir/mam')
//  var myConvert =  userInp.toLowerCase()
//  for(var i=0; i<=A.length; i++){
// if (myConvert==A[i]) {
//    document.write(A[i],':   Is available at index   ',  A.indexOf(myConvert) , '   in Bakri')
//    flag=true
  
// }
// break
//  }


//  flag=false


// if(flag==false){ 

//   document.write(userInp,':   Sorry not available in Bakri')

// }



// sir se pochnahe
// Q15
// skip



// Q16

// var university = 'University of Karachi';
// for(var i=0; i<=university.length-1; i++){
// document.write(university[i],"<br>")
// }


// Q17

// var userinp=prompt('Ente your words');
// var ge=userinp.charAt(userinp.length-1)
// document.write( 'User input value : ',userinp,'<br>',
//     'Pick last word : ',ge)


// Q18
// skip

// chapter no 25 30



// Q1
// var num=3.45214
// var myRound=Math.round(num)
// var myFloor=Math.floor(num)
// var myCeil=Math.ceil(num)
// document.write( 'Number : ',num,"<br>"
//     ,'Round of value : ',myRound,"<br>"
//     ,'Floor of value : ',myFloor,"<br>"
//     ,'Ceil of value : ',myCeil,"<br>"

// )
// Q2
// var num=-2.673
// var myRound=Math.round(num)
// var myFloor=Math.floor(num)
// var myCeil=Math.ceil(num)
// document.write( 'Number : ',num,"<br>"
//     ,'Round of value : ',myRound,"<br>"
//     ,'Floor of value : ',myFloor,"<br>"
//     ,'Ceil of value : ',myCeil,"<br>"

// )



// Q3
// skip


// sir se pochna he


// Q4

// var first=Math.floor(Math.random()*6)+1
// var last=Math.floor(Math.random()*4)+1

// document.write(
//     "Rndom dic value : ",first,'<br>', "Rndom dic value : ",last)

// Q5

// var firstPlayer='head player is win'
// var secandPlayer='tail player is win'
// var myRandomValue=Math.floor(Math.random()*2)
// if (myRandomValue===1) {
//    document.write(firstPlayer,myRandomValue) 
// }
// else{
//     document.write(secandPlayer,myRandomValue)
// }

// Q6
// var myRandomValue=Math.floor(Math.random()*100)+1
// document.write('Random number between 1 to 100 : ',myRandomValue)

// Q7

// SKIP


// Q8

// var userInp=prompt('Enter a Number between 1 to 10')
// var myRandomValue=Math.floor(Math.random()*11)


//     if( userInp>=1 &&userInp<=10){
    
// if (userInp==myRandomValue) {
//     document.write('**Congratulation**')
// }
// else {
//     document.write('Sorry correct number is : ',myRandomValue)
// }

//         }
//         else{
//             document.write('Try again')
//         }
  


// chapter no 31 34
// Q1
// var myDate=new Date();
// document.write(myDate)

// Q2
// var myDate=new Date().getMonth();
// var month=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
// document.write('Current Month : ',month[myDate])

// Q3
// var myDate=new Date().getDay();
// var myDay=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
// document.write('Current Day : ',myDay[myDate])



//Q4
// var myDate=new Date().getDay()
// var myDay=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']
// var CurrentDay =myDay[myDate];
// if (CurrentDay=='Sun'||CurrentDay=='Sat') {
//     document.write(CurrentDay, ' : Its Fun Day')
// }
// else{
//     document.write(CurrentDay, ' : Its Working Day')
// }