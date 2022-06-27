// login function
let users = [
    {
        username: "Sid",
        email: "sid@email.com",
        password: "12345",
        subscriptionStatus: "VIP",
        discordId: "Big Sid",
        lessonsCompleted: [0, 1],
    },
    {
        username: "josh",
        email: "josh@email.com",
        password: "54321",
        subscriptionStatus: "pro",
        discordId: "jolly josh",
        lessonsCompleted: [0, 1, 2, 3], 
    }
]

function login(email, password) {
    for (let i = 0; i < users.length; ++i) {
        if (users[i].email === email) {
            if (users[i].password === password) {
                console.log('log the user in')
            }
            else {
                console.log('password is incorrect')
            }
            return;
        }
    }
    console.log('could not find an email that matched an account')
}

login('sid@email.com', '12345')

// register function

function register(user) {
    users.push(user);
}

register({
    username: "zen",
    email: "zen@email.com",
    password: "zen123",
    subscriptionStatus: "VIP",
    discordId: "Zen#0001",
    lessonsCompleted: [0, 1]
});

console.log(users);