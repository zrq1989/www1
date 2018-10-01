import React from 'react'


class PwdInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vlpwd1: ""
        }
    }

    pwdInput() {
        var pwdvl = this.refs.pwdInput.value;
        this.setState({
            vlpwd1: pwdvl
        }, function () {
            this.propTofa()
        })
    }

    propTofa() {
        // 利用回调函数向父组件传值，将input的输入的值传回父组件再传到btn兄弟组件中
        this.props.vlPwd(this.state.vlpwd1)
    }

    render() {
        return (
            <div>
                <p>
                    <label>密码</label>

                    {this.props.pwdIndex == "" ? <input id="pwd"
                                                        type="password"
                                                        name="pwd"
                                                        ref="pwdInput"
                                                        onChange={() => this.pwdInput()}
                    /> : <span>
                          <input id="pwd"
                                 type="password"
                                 name="pwd"
                                 ref="pwdInput"
                                 onChange={() => this.pwdInput()}
                          /><span>用户名或密码错误</span>
                      </span>}
                </p>
            </div>
        );
    }
}

export default PwdInput;