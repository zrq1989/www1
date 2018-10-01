import React from 'react'


class NameInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: ""
        }
    }

    nameChange() {
        // 通过ref绑定，获得name输入框的value值，通过执行回调函数解决setState的异步问题
        var nameinputvl = this.refs.nameInput.value;
        this.setState({
            inputValue: nameinputvl
        }, function () {
            this.propToFa()
        })
    }

    propToFa() {
        // 利用回调函数向父组件传值，将input的输入的值传回父组件再传到btn兄弟组件中
        this.props.vlinput(this.state.inputValue)
    }

    render() {
        return (
            <div>
                <div>
                    <p>
                        <label>用户名</label>
                        {/*通过判断父组件传过来的属性值来决定加载哪个组件*/}
                        {this.props.nameIndex == "" ? <input id="user"
                                                             type="text"
                                                             name="user"
                                                             ref="nameInput"
                                                             onChange={() => this.nameChange()}
                        /> : <span><input id="user"
                                          type="text"
                                          name="user"
                                          ref="nameInput"
                                          onChange={() => this.nameChange()}
                        /> <span>用户名或密码错误</span></span>}
                    </p>
                </div>
            </div>
        );
    }
}

export default NameInput;