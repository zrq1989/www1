import React, {Component} from 'react'


class BtnInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            passwd: ""
        }
    }

    addComit() {

        this._isMounted = true
        fetch("./../php/index.json").then(res => res.json()).then(data => {
            return (
                this.setState({
                    username: data.name,
                    passwd: data.pwd
                }, function () {
                    this.propToFa()
                })
            )
        }).catch((erro) => console.log(erro));

    }

    propToFa() {
        console.log(this.props.vlName)
        if (this.state.username == this.props.vlName && this.state.passwd == this.props.pwdVal) {
            this.props.proBtn("1")
        } else {
            this.props.proBtn("0")
        }
    }

    componentWillUnmount() {
        this._isMounted = false
    }

    render() {
        return (
            <div>
                <p>
                    <button onClick={() => this.addComit()}>登陆</button>
                </p>
            </div>
        )
    }

}

export default BtnInput;