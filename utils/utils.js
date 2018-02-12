module.exports.square = (a)=> {
    return a*a;
};


module.exports.setName = (user)=> {
    var fullName = user.fullName.split(' ');
    // console.log(fullName);
    user.firstName = fullName[0];
    user.lastName = fullName[1];
    return user;
}

module.exports.asyncAdd = (a, b, callback)=> {
    
    setTimeout(()=> {
        callback(a+b);
    }, 1000);
    // console.log('outside time out');
};