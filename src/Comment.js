//your code here
import React, { Component } from 'react'

class Comment extends React.component {
  render() {
    return (
      <div className="comment">
        {this.props.commentText}
      </div>
    )
  }
}
