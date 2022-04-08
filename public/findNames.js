const findNames = function(usernames) {
    var usernameList = []
    var currUsername = ""

    for (let i = 0; i < usernames.length; i++) {
        if (usernames[i] != ',') {
            currUsername += usernames[i]
        } else {
            usernameList.push(currUsername)
            currUsername = ""
        }
    }
    return usernameList
}