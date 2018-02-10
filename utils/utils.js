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