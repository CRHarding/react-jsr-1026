import React, { Component } from 'react';
import Post from './components/post';
import Users from './components/users';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "CRHarding",
      posts: [
        {
          id: 12345,
          likes: 0,
          text: "My first post!"
        },
        {
          id: 67890,
          likes: 5,
          text: "My second post!"
        },
        {
          id: 13579,
          likes: 10,
          text: "My third post!"
        }
      ]
    }
  }

  vote = (id, amt) => {
    const newPosts = this.state.posts.map(post => {
      if (post.id === id) {
        post.likes += amt
      }

      return post;
    })

    this.setState({
      posts: newPosts
    })
  }

  render() {
    return (
      <div className="app">
        <h1>Hello {this.state.name}!</h1>
        {this.state.posts.map(post => (
          <Post
            key={post.id}
            id={post.id}
            text={post.text}
            likes={post.likes}
            vote={this.vote}
          />
        ))}
        <Users />
      </div>
    );
  }
}

export default App;
