import React from 'react';
import { NavLink } from 'react-router-dom'
import Collapse from 'react-collapse';
import Collapsetest from './collapsetest.js'


class Test extends React.Component {


  render() {
      return (

        <div>
          <Collapsetest/>
          <Collapsetest/>
        </div>
      );
    }

}

export default Test;
