const getUsers =() => {
    return fetch('http://jsonplaceholder.typicode.com/users')
        .then(value => value.json())

};

export {getUsers};


