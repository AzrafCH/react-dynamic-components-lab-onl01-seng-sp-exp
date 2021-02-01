//your code here
import React, { Component } from 'react'

class Comment extends React.component {
  render() {
    return (
      <div>
        {this.props.commentText}
      </div>
    )
  }
}
