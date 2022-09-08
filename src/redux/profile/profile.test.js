import {addLike, addPost, deletePost} from './profile.actions';
import {profileReducer} from './profileReducer';


let state = {
    posts: [
        {id:1, text: 'Hello World!', likes: 0},
    ]
}

it('goal:to add new post', ()=> {
    let   action = addPost('This is my second post!')

    let  newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(2)
})

it('goal: to delete post', ()=>{
    let action = deletePost(1)

    let newState = profileReducer(state, action)

    expect(newState.posts.length).toBe(0)
})

it('goal: to add like', ()=>{
    let action = addLike(1)

    let newState = profileReducer(state, action)

    expect(newState.posts[0].likes).toBe(1)
})