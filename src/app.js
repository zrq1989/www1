import React, {Component} from 'react'
import Input from './Input/Input'

// import Pp from './Input/Components/pp'


class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Input/>
                {/*<Pp/>*/}
            </div>
        )
    }
}

export default App;