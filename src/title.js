'user strict'

import React from 'react'

const Title = React.createClass({

  getDefaultProps: function () {
    return {
      name: 'default name',
      sobrenome: 'sobrenome desconhecido'
    }
  },

  render: function () {
    return (
      <h1>
        {this.props.name + ' ' + this.props.sobrenome},
        {this.props.quant},
        {this.props.obj.p01}
      </h1>
    )
  }
})

export default Title
