import React from 'react'
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const Loading = () => (
  <div className="loading">
    <Segment>
      <Dimmer active>
        <Loader>Loading</Loader>
      </Dimmer>
    </Segment>
  </div>
)

export default Loading;