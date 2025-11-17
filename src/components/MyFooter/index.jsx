import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </div>
    )
  }
}
