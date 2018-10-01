import React from 'react'
import NameInput from './Components/NameInput'
import PwdInput from './Components/PwdInput'
import BtnInput from './Components/BtnInput'
import CgInput from './Components/CgInput'


class Input extends React.Component{
    constructor(props) {
        super (props);
        this.state= {
            show:"",
            nameVl: "",
            pwdVl: ""
        }
    }

    btnPro(index) {
        this.setState({
            show: index,
        })
    }

    inputVl(vl) {
        this.setState({
            nameVl:vl
        })
    }

    pwdVl(vl) {
        this.setState({
            pwdVl: vl
        })
    }

    render() {
        // 判断接收由btn组件传过来的值来决定加载那个组件
        return(
                <div>
                    {/*密码和用户名都正确加载登陆成功组件*/}
                    {this.state.show==1?<div>
                    <CgInput/>
                 </div>: <div>
                        {/*将登录状态show分别通过nameIndex和pwdIndex属性传给两个子组件*/}
                        <NameInput
                            vlinput={(vl)=>this.inputVl(vl)}
                            nameIndex={ this.state.show }
                        />
                        <PwdInput
                            vlPwd={ (vl)=>this.pwdVl(vl) }
                            pwdIndex={ this.state.show }
                        />
                        <BtnInput vlName={ this.state.nameVl }
                                  pwdVal={ this.state.pwdVl }
                                  proBtn={(index)=>this.btnPro(index)}/>
                    </div>}
            </div>
        )
    }
}


export default Input;