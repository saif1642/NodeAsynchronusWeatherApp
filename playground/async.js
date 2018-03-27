console.log('app is starting');


var getUser=(id,callback)=>{
    var user = {
        id:id,
        name:'jhon doe'
    };
    setTimeout(()=>{
        callback(user);
    },3000);
};

getUser(31,(userObj)=>{
    console.log(userObj);
});

console.log('app is Ending');
