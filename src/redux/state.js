let  state = {
    profilePage:{
        posts: [
            {id:1, text: 'This is my first post!', likes:2},
            {id:2, text: 'Hello to everyone!', likes:8},
            {id:3, text: 'I am really want to become a React Developer!',likes:4}
        ]
    },
    dialogsPage:{
        messages: [
            {id:1, text: 'Hello! How are you?'},
            {id:2, text: 'I am OK!'},
            {id:3, text: 'I am glad to hear it!'},
            {id:4, text: 'Nice weather, guys!'},
        ],
        dialogs: [
            {id:1 , name: 'Kate'},
            {id:2, name: 'Roman'},
            {id:3, name: 'Alex'},
            {id:4, name: 'Masha'},
        ]
    },
}

export let addPost = (text)=> {
    let newPost =  {
        id: state.profilePage.posts.length + 1,
        text : text,
        likes: 0,
    }
    state.profilePage.posts.push(newPost)
}

window.state = state

export default state
