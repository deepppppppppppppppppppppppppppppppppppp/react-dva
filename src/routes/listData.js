import React, { Component } from 'react'
import { connect } from 'dva'
import listComponent from '../components/list'

const mapStatesProps = state => state.listData

@connect(mapStatesProps)
class listData extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  getFetch() {
    const { dispatch } = this.props

    dispatch({ type: 'listData/fetch' })
  }

  render() {
    const { list } = this.props

    return (
      <div>
        <listComponent.Consumer>
          {({ value }) => (
            <div>
              <h2 onClick={() => this.getFetch()}>{value}</h2>
              <div>
                {list.map(item => (
                  <button key={item.id}>{item.id}</button>
                ))}
              </div>
            </div>
          )}
        </listComponent.Consumer>
      </div>
    )
  }
}

listData.propTypes = {}

export default listData
