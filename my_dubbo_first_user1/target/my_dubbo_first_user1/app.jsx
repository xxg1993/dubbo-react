
class StaffFooter extends React.Component{
    
    handlerAddClick(evt){
        evt.preventDefault();
        let item = {};
        let addForm = React.findDOMNode(this.refs.addForm);
        let sex = addForm.querySelector('#staffAddSex');
        let id = addForm.querySelector('#staffAddId');
        
        item.name = addForm.querySelector('#staffAddName').value.trim();
        item.age = addForm.querySelector('#staffAddAge').value.trim();
        item.descrip = addForm.querySelector('#staffAddDescrip').value.trim();
        item.sex = sex.options[sex.selectedIndex].value;
        item.id = id.options[id.selectedIndex].value;

        /*
         *表单验证
         */
        if(item.name=='' || item.age=='' || item.descrip=='') {
            let tips = React.findDOMNode(this.refs.tipsUnDone);
            tips.style.display = 'block';
            setTimeout(function(){
                tips.style.display = 'none';
            }, 1000);
            return;
        }
        //非负整数
        let numReg = /^\d+$/;
        if(!numReg.test(item.age) || parseInt(item.age)>150) {
            let tips = React.findDOMNode(this.refs.tipsUnAge);
            tips.style.display = 'block';
            setTimeout(function(){
                tips.style.display = 'none';
            }, 1000);
            return;
        }
        
        this.props.addStaffItem(item);
        addForm.reset();
        
        //此处应在返回添加成功信息后确认
        let tips = React.findDOMNode(this.refs.tips);
        tips.style.display = 'block';
        setTimeout(function(){
            tips.style.display = 'none';
        }, 1000);
    }
    
    render(){
        return (
          <div>
            <h4 style={{'text-align':'center'}}>人员新增</h4>
            <hr/>
            <form ref='addForm' className="addForm">
                <div>
                  <label for='staffAddName' style={{'display': 'block'}}>姓名</label>
                  <input ref='addName' id='staffAddName' type='text' placeholder='Your Name'/>
                </div>
                <div>
                  <label for='staffAddAge' style={{'display': 'block'}}>年龄</label>
                  <input ref='addAge' id='staffAddAge' type='text' placeholder='Your Age(0-150)'/>
                </div>
                <div>
                  <label for='staffAddSex' style={{'display': 'block'}}>性别</label>
                  <select ref='addSex' id='staffAddSex'>
                    <option value='男'>男</option>
                    <option value='女'>女</option>
                  </select>
                </div>
                <div>
                  <label for='staffAddId' style={{'display': 'block'}}>身份</label>
                  <select ref='addId' id='staffAddId'>
                    <option value='主任'>主任</option>
                    <option value='老师'>老师</option>
                    <option value='学生'>学生</option>
                    <option value='实习'>实习</option>
                  </select>
                </div>
                <div>
                  <label for='staffAddDescrip' style={{'display': 'block'}}>个人描述</label>
                  <textarea ref='addDescrip' id='staffAddDescrip' type='text'></textarea>
                </div>
                <p ref="tips" className='tips' >提交成功</p>
                <p ref='tipsUnDone' className='tips'>请录入完整的人员信息</p>
                <p ref='tipsUnAge' className='tips'>请录入正确的年龄</p>
                <div>
                  <button onClick={this.handlerAddClick.bind(this)}>提交</button>
                </div>
            </form>
          </div>
        )
    }
}

class StaffDetail extends React.Component{

    handlerEdit(){
        let item = {};
        let editTabel = React.findDOMNode(this.refs.editTabel);
        let sex = editTabel.querySelector('#staffEditSex');
        let id = editTabel.querySelector('#staffEditId');

        item.id_key = editTabel.querySelector('#staffEditId_key').value.trim();
        item.name = editTabel.querySelector('#staffEditName').value.trim();
        item.age = editTabel.querySelector('#staffEditAge').value.trim();
        item.descrip = editTabel.querySelector('#staffEditDescrip').value.trim();
        item.sex = sex.options[sex.selectedIndex].value;
        item.id = id.options[id.selectedIndex].value;
        item.key = this.props.staffDetail.key;
        
        console.log("item.id_key:" + item.id_key)
        
        /*
         *表单验证
         */
        if(item.name=='' || item.age=='' || item.descrip=='') {
            let tips = React.findDOMNode(this.refs.DtipsUnDone);
            tips.style.display = 'block';
            setTimeout(function(){
                tips.style.display = 'none';
            }, 1000);
            return;
        }
        //非负整数
        let numReg = /^\d+$/;
        if(!numReg.test(item.age) || parseInt(item.age)>150) {
            let tips = React.findDOMNode(this.refs.DtipsUnAge);
            tips.style.display = 'block';
            setTimeout(function(){
                tips.style.display = 'none';
            }, 1000);
            return;
        }
        
        this.props.editDetail(item);
        
        //此处应在返回修改成功信息后确认
        let tips = React.findDOMNode(this.refs.Dtips);
        tips.style.display = 'block';
        setTimeout(function(){
            tips.style.display = 'none';
        }, 1000);
    }
    
    handlerClose(){
      this.props.closeDetail();
    }
    
    componentDidUpdate(){
        if(this.props.staffDetail == null){}
        else {
            let selSex = React.findDOMNode(this.refs.selSex);
            for(let i=0; i<selSex.options.length; i++){
                if(selSex.options[i].value == this.props.staffDetail.info.sex){
                  selSex.options[i].selected = 'selected';
                  break;
                }
            }
            let selId = React.findDOMNode(this.refs.selId);
            for(let i=0; i<selId.options.length; i++) {
                if(selId.options[i].value == this.props.staffDetail.info.id){
                  selId.options[i].selected = 'selected';
                  break;
                }
            }

        }
    }

    render(){
      let staffDetail = this.props.staffDetail;  
      if(!staffDetail)
        return null;
      
      return (
          <div className="overLay">
            <h4 style={{'text-align':'center'}}>点击'完成'保存修改,点击'关闭'放弃未保存修改并退出.</h4>
            <hr/>
            <table ref="editTabel">
              <tbody>
                <tr>
                  <th>id</th>
                  <td><input id='staffEditId_key' type="hidden" defaultValue={staffDetail.info.id_key}></input></td>
                </tr>
                <tr>
                  <th>姓名</th>
                  <td><input id='staffEditName' type="text" defaultValue={staffDetail.info.name}></input></td>
                </tr>
                <tr>
                  <th>年龄</th>
                  <td><input id='staffEditAge' type="text" defaultValue={staffDetail.info.age}></input></td>
                </tr>
                <tr>
                  <th>性别</th>
                  <td>
                    <select ref='selSex' id='staffEditSex'>
                      <option value="男">男</option>
                      <option value="女">女</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th>身份</th>
                  <td>
                    <select ref="selId" id='staffEditId'>
                      <option value="主任">主任</option>
                      <option value="老师">老师</option>
                      <option value="学生">学生</option>
                      <option value="实习">实习</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th>个人描述</th>
                  <td><textarea id='staffEditDescrip' type="text" defaultValue={staffDetail.info.descrip}></textarea></td>
                </tr>
              </tbody>
            </table>
            <p ref='Dtips' className='tips'>修改成功</p>
            <p ref='DtipsUnDone' className='tips'>请录入完整的人员信息</p>
            <p ref='DtipsUnAge' className='tips'>请录入正确的年龄</p>
            <button onClick={this.handlerEdit.bind(this)}>完成</button>
            <button onClick={this.handlerClose.bind(this)}>关闭</button>
          </div>
      );
    }
}

class StaffItemPanel extends React.Component{
    
    render(){
        let items = [];
        
        if(this.props.items.length == 0) {
            items.push(<tr><th colSpan="5" className="tempEmpty">暂无用户</th></tr>);
        }else {
            this.props.items.forEach(item => {
                items.push(<StaffItem key={item.key} item={item} removeStaffItem={this.props.removeStaffItem} detailStaffItem={this.props.detailStaffItem}/>);
            });
        }
        
        return (
          <table className='itemPanel'>
            <thead>
                <th className='itemTd'>姓名</th>
                <th className='itemTd'>年龄</th>
                <th className='itemTd'>身份</th>
                <th className='itemTd'>性别</th>
                <th className='itemTd'>操作</th>
            </thead>
            <tbody>{items}</tbody>
          </table>
        );
    }
}

class StaffItem extends React.Component{
    
    //delete
    handlerDelete(evt){
    //   this.props.removeStaffItem(this.props.item.key);
        console.log("this.props.item.key:" + this.props.item.key)
    //   this.props.removeStaffItem(this.props.item.info.id_key, this.props.item.key);
        this.props.removeStaffItem(this.props.item.key);

        var data1 = [{"id_key": this.props.item.info.id_key}];
     //   data1.push(item);
     console.log("this.props.item.info.id_key:" + this.props.item.info.id_key);
        
        $.ajax({
            url: "/my_dubbo_first_user1/UserAction?method=delete",
            dataType: "json",
            type: "POST",
            data:{
                ds: JSON.stringify(data1)
            }
        })
    }
    
    //detail
    handlerDetail(evt){
        this.props.detailStaffItem(this.props.item.key);
    }
    
    render(){
        return (
              <tr
                style={{'cursor': 'pointer'}}
              >
                <td className='itemTd'>{this.props.item.info.name}</td>
                <td className='itemTd'>{this.props.item.info.age}</td>
                <td className='itemTd'>{this.props.item.info.id}</td>
                <td className='itemTd'>{this.props.item.info.sex}</td>
                <td className='itemTd'>
                    <a className="itemBtn" onClick={this.handlerDelete.bind(this)}>删除</a>
                    <a className="itemBtn" onClick={this.handlerDetail.bind(this)}>详情</a>
                </td>
              </tr>
        );
    }
}


class StaffHeader extends React.Component{

    //排序
    handlerOrderChange(){
        let sel = React.findDOMNode(this.refs.selOrder);
        let selValue = sel.options[sel.selectedIndex].value;
        this.props.sortStaff(selValue);
    }
    
    //筛选
    handlerIdChange(){
        let sel = React.findDOMNode(this.refs.selId);
        let selValue = sel.options[sel.selectedIndex].value;
        this.props.filtStaff(selValue);
    }
    
    //search
    handlerSearch(){
        let bar = React.findDOMNode(this.refs.searchBar);
        let value = bar.value;
        this.props.searchStaff(value);
    }

    render(){
        return (
          <div>
              <h3 style={{'text-align':'center'}}>人员管理系统</h3>
              <table className="optHeader">
                <tbody>
                  <tr>
                    <td className="headerTd"><input ref='searchBar' onChange={this.handlerSearch.bind(this)} type='text' placeholder='Search...' /></td>
                    <td className="headerTd">
                        <label for='idSelect'>人员筛选</label>
                        <select id='idSelect' ref="selId" onChange={this.handlerIdChange.bind(this)}>
                            <option value='0'>全部</option>
                            <option value='1'>主任</option>
                            <option value='2'>老师</option>
                            <option value='3'>学生</option>
                            <option value='4'>实习</option>
                        </select>
                    </td>
                    <td>
                        <label for='orderSelect'>排列方式</label>
                        <select id='orderSelect' ref="selOrder" onChange={this.handlerOrderChange.bind(this)}>
                            <option value='0'>身份</option>
                            <option value='1'>年龄升</option>
                            <option value='2'>年龄降</option>
                        </select>
                    </td>
                  </tr>
                </tbody>
              </table>
          </div>
        );
    }
}


class staffItem {
    constructor(item){
        this.info = {};
        this.info.name = item.name;
        this.info.age = item.age || 0;
        this.info.sex = item.sex;
        this.info.id = item.id;
        this.info.descrip = item.descrip || '';
        this.key = ++staffItem.key;
        this.info.id_key = item.id_key;
    }
}
staffItem.key = 3;

class Staff {
    constructor(p,flag){
        var datas = [];
        if (flag <= 0){
            this.allStaff = [
            
            ];
        }else{
            for(var js2 in p){
                datas = datas.concat([new staffItem(p[js2])]);
                console.log("staff初始化：" + js2);
            }
        }

        this.allStaff = datas
        
        this.staff = [];
        this.sortType = 0;//0-身份 1-年龄升 2-年龄降
        this.filtType = 0;//0-all 1-主任 2-老师 3-学生 4-实习
        this.word = '';//搜索关键字
        this._sortStaff(this.sortType);  //默认按身份排序
        this._filtStaff(this.filtType);
        console.log("lllllllllllllllllllllll");
        if (flag > 0){console.log(p);}
        
    }
//rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
//rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
//rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
//rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
//rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
//rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
//rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
//rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
//rrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrr
    
    //增
    addStaffItem(item) {
        let newItem = new staffItem(item);
        this.allStaff.push(newItem);
        //排序 筛选 搜索过滤
        this._sortStaff(this.sortType);
        this._filtStaff(this.filtType);
        this._searchStaff(this.word);
        
        var data1 = [];
        data1.push(item);
        
        $.ajax({
            url: "/my_dubbo_first_user1/UserAction?method=add",
            dataType: "json",
            type: "POST",
            data:{
                ds: JSON.stringify(data1)
            }//,
            /*success: function(comments){
                console.log(comments);
                this.setState({comments: comments});
            }.bind(this),
            error: (xhr, status, err) => {
                console.log(err.toString());
                this.setState({comments: comments});
            }*/
        })
        
        return this;
    }
    
    //删
    removeStaffItem(key) {
        let newStaff = this.allStaff.filter(item => {
            return item.key != key;
        });
        this.allStaff = newStaff;
        //筛选 搜多过滤
        this._filtStaff(this.filtType);
        this._searchStaff(this.word);

        return this;
    }
    
    //改
    editStaffItem(item) {
        var id_update = -1;
        this.allStaff.forEach(staffItem => {
            if(staffItem.key == item.key) {
                staffItem.info.name = item.name;
                staffItem.info.sex = item.sex;
                staffItem.info.age = item.age;
                staffItem.info.id = item.id;
                staffItem.info.descrip = item.descrip;
                id_update = item.id_key;    

            }
        });
        this._sortStaff(this.sortType);
        this._filtStaff(this.filtType);
        this._searchStaff(this.word);

        console.log("isok" + id_update);

        var data1 = [item];
        console.log(item);
        $.ajax({
            url: "/my_dubbo_first_user1/UserAction?method=update",
            dataType: "json",
            type: "POST",
            data:{
                ds: JSON.stringify(data1)
            }
        });


        return this;
    }
    
    //筛选
    _filtStaff(filtType){
        this.filtType = filtType;
        switch(parseInt(filtType)){
            case 0: 
                this.staff = this.allStaff;
                break;
            case 1: 
                this.staff = this.allStaff.filter(item => {
                    return item.info.id == '主任';
                });
                break;
            case 2: 
                this.staff = this.allStaff.filter(item => {
                    return item.info.id == '老师';
                });
                break;
            case 3: 
                this.staff = this.allStaff.filter(item => {
                    return item.info.id == '学生';
                });
                break;
            case 4: 
                this.staff = this.allStaff.filter(item => {
                    return item.info.id == '实习';
                });
                break;
            default: break;
        }
    }
    
    //排序
    _sortStaff(sortType) {
        this.sortType = sortType;
        switch(parseInt(sortType)){
            case 0: //身份
                this.allStaff.forEach(item => {
                    switch(item.info.id) {
                      case '主任':
                          item.info.id = 1; break;
                      case '老师':
                          item.info.id = 2; break;  
                      case '学生':
                          item.info.id = 3; break;  
                      case '实习':
                          item.info.id = 4; break;
                      default: break;                         
                    }
                });
                this.allStaff.sort(function(item1, item2){
                    if(item1.info.id < item2.info.id)
                        return -1;
                    else if (item1.info.id > item2.info.id)
                        return 1;
                    else 
                        return 0;
                });
                this.allStaff.forEach(item => {
                    switch(item.info.id) {
                      case 1:
                          item.info.id = '主任'; break;
                      case 2:
                          item.info.id = '老师'; break;   
                      case 3:
                          item.info.id = '学生'; break;   
                      case 4:
                          item.info.id = '实习'; break;
                      default: break;                         
                    }
                });
                break;
            case 1: //年龄升
                this.allStaff.sort(function(item1, item2){
                    if(item1.info.age < item2.info.age)
                        return -1;
                    else if (item1.info.age > item2.info.age)
                        return 1;
                    else 
                        return 0;
                });
                break;
            case 2: //年龄降
                this.allStaff.sort(function(item1, item2){
                    if(item1.info.age < item2.info.age)
                        return 1;
                    else if (item1.info.age > item2.info.age)
                        return -1;
                    else 
                        return 0;
                });
                break;
            default: break;
        }
    }
    
    //搜索
    _searchStaff(word){
        this.word = word;
        //在staff中搜索
        this.staff = this.staff.filter(item => {
            return item.info.name.indexOf(word)!=-1 || 
                   (item.info.age+'').indexOf(word)!=-1 || 
                   item.info.id.indexOf(word)!=-1 ||
                   item.info.sex.indexOf(word)!=-1;
        });
    }
    
    filtStaff(filtType){
        this._filtStaff(filtType);
        this._searchStaff(this.word);
        return this;
    }
    sortStaff(sortType){
        this._sortStaff(sortType);
        this._filtStaff(this.filtType);
        this._searchStaff(this.word);
        return this;
    }
    searchStaff(word){
        this._filtStaff(this.filtType);
        this._searchStaff(word);
        return this;
    }
} 

//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------------------------------
class App extends React.Component {
    constructor(p){
        super();
        this.state = {
            comments : p.comments || [],
            staff : new Staff([],0),
            staffDetail: null
        };
    }

    loadDataFromServer(){
        $.ajax({
          url: "/my_dubbo_first_user1/UserAction?method=test",
        //    url: "comments.json",
        //url: "/my_dubbo_first_user1/UserAction?method=test",
            dataType: "json",
            success: function(comments){
                console.log("1；" + comments);
                this.setState({comments: comments});
                this.setState({staff: new Staff(comments,1)});

                
            }.bind(this),
            error: (xhr, status, err) => {
                console.log(err.toString());
            }
        });
    }

    componentDidMount(){
        console.log('ok');
        this.loadDataFromServer();
    }



    
    //增
    addStaffItem(item){
        this.setState({
            staff: this.state.staff.addStaffItem(item)
        });
    }
    //删
    removeStaffItem(key){
        this.setState({
            staff: this.state.staff.removeStaffItem(key)
        });
    }
    
    /*
     *详情
     */
    //打开
    detailStaffItem(key){
        this.setState({
            staffDetail: this.state.staff.staff.filter(item => {
                return item.key==key;
            })[0]
        });
    }
    //关闭
    closeDetail(){
        this.setState({
            staffDetail: null
        });
    }
    //编辑
    editDetail(item){
        this.setState({
            staff : this.state.staff.editStaffItem(item)
        });
    }
    
    /*
     * 排序
     */
    sortStaff(sortType) {
        this.setState({
            staff: this.state.staff.sortStaff(sortType) 
        });
    }
    
    /*
     * 筛选
     */
    filtStaff(filtType) {
        this.setState({
            staff: this.state.staff.filtStaff(filtType)
        });
    }
    
    /*
     * 搜索
     */
    searchStaff(word) {
        this.setState({
            staff: this.state.staff.searchStaff(word)
        });
    }

    
    render(){
      return (
        <div>
          <StaffHeader sortStaff={this.sortStaff.bind(this)} filtStaff={this.filtStaff.bind(this)} searchStaff={this.searchStaff.bind(this)}/>
          <StaffItemPanel items={this.state.staff.staff} removeStaffItem={this.removeStaffItem.bind(this)} detailStaffItem={this.detailStaffItem.bind(this)}/>
          <StaffFooter addStaffItem={this.addStaffItem.bind(this)}/>
          <StaffDetail staffDetail={this.state.staffDetail} closeDetail={this.closeDetail.bind(this)} editDetail={this.editDetail.bind(this)}/>
        </div>
      );
    }
}

box = React.render(<App />, document.getElementById('content'));