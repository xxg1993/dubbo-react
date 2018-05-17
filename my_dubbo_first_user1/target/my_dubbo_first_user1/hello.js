class StaffFooter extends React.Component {

    handlerAddClick(evt) {
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
        if (item.name == '' || item.age == '' || item.descrip == '') {
            let tips = React.findDOMNode(this.refs.tipsUnDone);
            tips.style.display = 'block';
            setTimeout(function () {
                tips.style.display = 'none';
            }, 1000);
            return;
        }
        //非负整数
        let numReg = /^\d+$/;
        if (!numReg.test(item.age) || parseInt(item.age) > 150) {
            let tips = React.findDOMNode(this.refs.tipsUnAge);
            tips.style.display = 'block';
            setTimeout(function () {
                tips.style.display = 'none';
            }, 1000);
            return;
        }

        this.props.addStaffItem(item);
        addForm.reset();

        //此处应在返回添加成功信息后确认
        let tips = React.findDOMNode(this.refs.tips);
        tips.style.display = 'block';
        setTimeout(function () {
            tips.style.display = 'none';
        }, 1000);
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h4',
                { style: { 'text-align': 'center' } },
                '\u4EBA\u5458\u65B0\u589E'
            ),
            React.createElement('hr', null),
            React.createElement(
                'form',
                { ref: 'addForm', className: 'addForm' },
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'label',
                        { 'for': 'staffAddName', style: { 'display': 'block' } },
                        '\u59D3\u540D'
                    ),
                    React.createElement('input', { ref: 'addName', id: 'staffAddName', type: 'text', placeholder: 'Your Name' })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'label',
                        { 'for': 'staffAddAge', style: { 'display': 'block' } },
                        '\u5E74\u9F84'
                    ),
                    React.createElement('input', { ref: 'addAge', id: 'staffAddAge', type: 'text', placeholder: 'Your Age(0-150)' })
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'label',
                        { 'for': 'staffAddSex', style: { 'display': 'block' } },
                        '\u6027\u522B'
                    ),
                    React.createElement(
                        'select',
                        { ref: 'addSex', id: 'staffAddSex' },
                        React.createElement(
                            'option',
                            { value: '\u7537' },
                            '\u7537'
                        ),
                        React.createElement(
                            'option',
                            { value: '\u5973' },
                            '\u5973'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'label',
                        { 'for': 'staffAddId', style: { 'display': 'block' } },
                        '\u8EAB\u4EFD'
                    ),
                    React.createElement(
                        'select',
                        { ref: 'addId', id: 'staffAddId' },
                        React.createElement(
                            'option',
                            { value: '\u4E3B\u4EFB' },
                            '\u4E3B\u4EFB'
                        ),
                        React.createElement(
                            'option',
                            { value: '\u8001\u5E08' },
                            '\u8001\u5E08'
                        ),
                        React.createElement(
                            'option',
                            { value: '\u5B66\u751F' },
                            '\u5B66\u751F'
                        ),
                        React.createElement(
                            'option',
                            { value: '\u5B9E\u4E60' },
                            '\u5B9E\u4E60'
                        )
                    )
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'label',
                        { 'for': 'staffAddDescrip', style: { 'display': 'block' } },
                        '\u4E2A\u4EBA\u63CF\u8FF0'
                    ),
                    React.createElement('textarea', { ref: 'addDescrip', id: 'staffAddDescrip', type: 'text' })
                ),
                React.createElement(
                    'p',
                    { ref: 'tips', className: 'tips' },
                    '\u63D0\u4EA4\u6210\u529F'
                ),
                React.createElement(
                    'p',
                    { ref: 'tipsUnDone', className: 'tips' },
                    '\u8BF7\u5F55\u5165\u5B8C\u6574\u7684\u4EBA\u5458\u4FE1\u606F'
                ),
                React.createElement(
                    'p',
                    { ref: 'tipsUnAge', className: 'tips' },
                    '\u8BF7\u5F55\u5165\u6B63\u786E\u7684\u5E74\u9F84'
                ),
                React.createElement(
                    'div',
                    null,
                    React.createElement(
                        'button',
                        { onClick: this.handlerAddClick.bind(this) },
                        '\u63D0\u4EA4'
                    )
                )
            )
        );
    }
}

class StaffDetail extends React.Component {

    handlerEdit() {
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

        console.log("item.id_key:" + item.id_key);

        /*
         *表单验证
         */
        if (item.name == '' || item.age == '' || item.descrip == '') {
            let tips = React.findDOMNode(this.refs.DtipsUnDone);
            tips.style.display = 'block';
            setTimeout(function () {
                tips.style.display = 'none';
            }, 1000);
            return;
        }
        //非负整数
        let numReg = /^\d+$/;
        if (!numReg.test(item.age) || parseInt(item.age) > 150) {
            let tips = React.findDOMNode(this.refs.DtipsUnAge);
            tips.style.display = 'block';
            setTimeout(function () {
                tips.style.display = 'none';
            }, 1000);
            return;
        }

        this.props.editDetail(item);

        //此处应在返回修改成功信息后确认
        let tips = React.findDOMNode(this.refs.Dtips);
        tips.style.display = 'block';
        setTimeout(function () {
            tips.style.display = 'none';
        }, 1000);
    }

    handlerClose() {
        this.props.closeDetail();
    }

    componentDidUpdate() {
        if (this.props.staffDetail == null) {} else {
            let selSex = React.findDOMNode(this.refs.selSex);
            for (let i = 0; i < selSex.options.length; i++) {
                if (selSex.options[i].value == this.props.staffDetail.info.sex) {
                    selSex.options[i].selected = 'selected';
                    break;
                }
            }
            let selId = React.findDOMNode(this.refs.selId);
            for (let i = 0; i < selId.options.length; i++) {
                if (selId.options[i].value == this.props.staffDetail.info.id) {
                    selId.options[i].selected = 'selected';
                    break;
                }
            }
        }
    }

    render() {
        let staffDetail = this.props.staffDetail;
        if (!staffDetail) return null;

        return React.createElement(
            'div',
            { className: 'overLay' },
            React.createElement(
                'h4',
                { style: { 'text-align': 'center' } },
                '\u70B9\u51FB\'\u5B8C\u6210\'\u4FDD\u5B58\u4FEE\u6539,\u70B9\u51FB\'\u5173\u95ED\'\u653E\u5F03\u672A\u4FDD\u5B58\u4FEE\u6539\u5E76\u9000\u51FA.'
            ),
            React.createElement('hr', null),
            React.createElement(
                'table',
                { ref: 'editTabel' },
                React.createElement(
                    'tbody',
                    null,
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'th',
                            null,
                            'id'
                        ),
                        React.createElement(
                            'td',
                            null,
                            React.createElement('input', { id: 'staffEditId_key', type: 'hidden', defaultValue: staffDetail.info.id_key })
                        )
                    ),
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'th',
                            null,
                            '\u59D3\u540D'
                        ),
                        React.createElement(
                            'td',
                            null,
                            React.createElement('input', { id: 'staffEditName', type: 'text', defaultValue: staffDetail.info.name })
                        )
                    ),
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'th',
                            null,
                            '\u5E74\u9F84'
                        ),
                        React.createElement(
                            'td',
                            null,
                            React.createElement('input', { id: 'staffEditAge', type: 'text', defaultValue: staffDetail.info.age })
                        )
                    ),
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'th',
                            null,
                            '\u6027\u522B'
                        ),
                        React.createElement(
                            'td',
                            null,
                            React.createElement(
                                'select',
                                { ref: 'selSex', id: 'staffEditSex' },
                                React.createElement(
                                    'option',
                                    { value: '\u7537' },
                                    '\u7537'
                                ),
                                React.createElement(
                                    'option',
                                    { value: '\u5973' },
                                    '\u5973'
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'th',
                            null,
                            '\u8EAB\u4EFD'
                        ),
                        React.createElement(
                            'td',
                            null,
                            React.createElement(
                                'select',
                                { ref: 'selId', id: 'staffEditId' },
                                React.createElement(
                                    'option',
                                    { value: '\u4E3B\u4EFB' },
                                    '\u4E3B\u4EFB'
                                ),
                                React.createElement(
                                    'option',
                                    { value: '\u8001\u5E08' },
                                    '\u8001\u5E08'
                                ),
                                React.createElement(
                                    'option',
                                    { value: '\u5B66\u751F' },
                                    '\u5B66\u751F'
                                ),
                                React.createElement(
                                    'option',
                                    { value: '\u5B9E\u4E60' },
                                    '\u5B9E\u4E60'
                                )
                            )
                        )
                    ),
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'th',
                            null,
                            '\u4E2A\u4EBA\u63CF\u8FF0'
                        ),
                        React.createElement(
                            'td',
                            null,
                            React.createElement('textarea', { id: 'staffEditDescrip', type: 'text', defaultValue: staffDetail.info.descrip })
                        )
                    )
                )
            ),
            React.createElement(
                'p',
                { ref: 'Dtips', className: 'tips' },
                '\u4FEE\u6539\u6210\u529F'
            ),
            React.createElement(
                'p',
                { ref: 'DtipsUnDone', className: 'tips' },
                '\u8BF7\u5F55\u5165\u5B8C\u6574\u7684\u4EBA\u5458\u4FE1\u606F'
            ),
            React.createElement(
                'p',
                { ref: 'DtipsUnAge', className: 'tips' },
                '\u8BF7\u5F55\u5165\u6B63\u786E\u7684\u5E74\u9F84'
            ),
            React.createElement(
                'button',
                { onClick: this.handlerEdit.bind(this) },
                '\u5B8C\u6210'
            ),
            React.createElement(
                'button',
                { onClick: this.handlerClose.bind(this) },
                '\u5173\u95ED'
            )
        );
    }
}

class StaffItemPanel extends React.Component {

    render() {
        let items = [];

        if (this.props.items.length == 0) {
            items.push(React.createElement(
                'tr',
                null,
                React.createElement(
                    'th',
                    { colSpan: '5', className: 'tempEmpty' },
                    '\u6682\u65E0\u7528\u6237'
                )
            ));
        } else {
            this.props.items.forEach(item => {
                items.push(React.createElement(StaffItem, { key: item.key, item: item, removeStaffItem: this.props.removeStaffItem, detailStaffItem: this.props.detailStaffItem }));
            });
        }

        return React.createElement(
            'table',
            { className: 'itemPanel' },
            React.createElement(
                'thead',
                null,
                React.createElement(
                    'th',
                    { className: 'itemTd' },
                    '\u59D3\u540D'
                ),
                React.createElement(
                    'th',
                    { className: 'itemTd' },
                    '\u5E74\u9F84'
                ),
                React.createElement(
                    'th',
                    { className: 'itemTd' },
                    '\u8EAB\u4EFD'
                ),
                React.createElement(
                    'th',
                    { className: 'itemTd' },
                    '\u6027\u522B'
                ),
                React.createElement(
                    'th',
                    { className: 'itemTd' },
                    '\u64CD\u4F5C'
                )
            ),
            React.createElement(
                'tbody',
                null,
                items
            )
        );
    }
}

class StaffItem extends React.Component {

    //delete
    handlerDelete(evt) {
        //   this.props.removeStaffItem(this.props.item.key);
        console.log("this.props.item.key:" + this.props.item.key);
        //   this.props.removeStaffItem(this.props.item.info.id_key, this.props.item.key);
        this.props.removeStaffItem(this.props.item.key);

        var data1 = [{ "id_key": this.props.item.info.id_key }];
        //   data1.push(item);
        console.log("this.props.item.info.id_key:" + this.props.item.info.id_key);

        $.ajax({
            url: "/my_dubbo_first_user1/UserAction?method=delete",
            dataType: "json",
            type: "POST",
            data: {
                ds: JSON.stringify(data1)
            }
        });
    }

    //detail
    handlerDetail(evt) {
        this.props.detailStaffItem(this.props.item.key);
    }

    render() {
        return React.createElement(
            'tr',
            {
                style: { 'cursor': 'pointer' }
            },
            React.createElement(
                'td',
                { className: 'itemTd' },
                this.props.item.info.name
            ),
            React.createElement(
                'td',
                { className: 'itemTd' },
                this.props.item.info.age
            ),
            React.createElement(
                'td',
                { className: 'itemTd' },
                this.props.item.info.id
            ),
            React.createElement(
                'td',
                { className: 'itemTd' },
                this.props.item.info.sex
            ),
            React.createElement(
                'td',
                { className: 'itemTd' },
                React.createElement(
                    'a',
                    { className: 'itemBtn', onClick: this.handlerDelete.bind(this) },
                    '\u5220\u9664'
                ),
                React.createElement(
                    'a',
                    { className: 'itemBtn', onClick: this.handlerDetail.bind(this) },
                    '\u8BE6\u60C5'
                )
            )
        );
    }
}

class StaffHeader extends React.Component {

    //排序
    handlerOrderChange() {
        let sel = React.findDOMNode(this.refs.selOrder);
        let selValue = sel.options[sel.selectedIndex].value;
        this.props.sortStaff(selValue);
    }

    //筛选
    handlerIdChange() {
        let sel = React.findDOMNode(this.refs.selId);
        let selValue = sel.options[sel.selectedIndex].value;
        this.props.filtStaff(selValue);
    }

    //search
    handlerSearch() {
        let bar = React.findDOMNode(this.refs.searchBar);
        let value = bar.value;
        this.props.searchStaff(value);
    }

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(
                'h3',
                { style: { 'text-align': 'center' } },
                '\u4EBA\u5458\u7BA1\u7406\u7CFB\u7EDF'
            ),
            React.createElement(
                'table',
                { className: 'optHeader' },
                React.createElement(
                    'tbody',
                    null,
                    React.createElement(
                        'tr',
                        null,
                        React.createElement(
                            'td',
                            { className: 'headerTd' },
                            React.createElement('input', { ref: 'searchBar', onChange: this.handlerSearch.bind(this), type: 'text', placeholder: 'Search...' })
                        ),
                        React.createElement(
                            'td',
                            { className: 'headerTd' },
                            React.createElement(
                                'label',
                                { 'for': 'idSelect' },
                                '\u4EBA\u5458\u7B5B\u9009'
                            ),
                            React.createElement(
                                'select',
                                { id: 'idSelect', ref: 'selId', onChange: this.handlerIdChange.bind(this) },
                                React.createElement(
                                    'option',
                                    { value: '0' },
                                    '\u5168\u90E8'
                                ),
                                React.createElement(
                                    'option',
                                    { value: '1' },
                                    '\u4E3B\u4EFB'
                                ),
                                React.createElement(
                                    'option',
                                    { value: '2' },
                                    '\u8001\u5E08'
                                ),
                                React.createElement(
                                    'option',
                                    { value: '3' },
                                    '\u5B66\u751F'
                                ),
                                React.createElement(
                                    'option',
                                    { value: '4' },
                                    '\u5B9E\u4E60'
                                )
                            )
                        ),
                        React.createElement(
                            'td',
                            null,
                            React.createElement(
                                'label',
                                { 'for': 'orderSelect' },
                                '\u6392\u5217\u65B9\u5F0F'
                            ),
                            React.createElement(
                                'select',
                                { id: 'orderSelect', ref: 'selOrder', onChange: this.handlerOrderChange.bind(this) },
                                React.createElement(
                                    'option',
                                    { value: '0' },
                                    '\u8EAB\u4EFD'
                                ),
                                React.createElement(
                                    'option',
                                    { value: '1' },
                                    '\u5E74\u9F84\u5347'
                                ),
                                React.createElement(
                                    'option',
                                    { value: '2' },
                                    '\u5E74\u9F84\u964D'
                                )
                            )
                        )
                    )
                )
            )
        );
    }
}

class staffItem {
    constructor(item) {
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
    constructor(p, flag) {
        var datas = [];
        if (flag <= 0) {
            this.allStaff = [];
        } else {
            for (var js2 in p) {
                datas = datas.concat([new staffItem(p[js2])]);
                console.log("staff初始化：" + js2);
            }
        }

        this.allStaff = datas;

        this.staff = [];
        this.sortType = 0; //0-身份 1-年龄升 2-年龄降
        this.filtType = 0; //0-all 1-主任 2-老师 3-学生 4-实习
        this.word = ''; //搜索关键字
        this._sortStaff(this.sortType); //默认按身份排序
        this._filtStaff(this.filtType);
        console.log("lllllllllllllllllllllll");
        if (flag > 0) {
            console.log(p);
        }
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
            data: {
                ds: JSON.stringify(data1) //,
                /*success: function(comments){
                    console.log(comments);
                    this.setState({comments: comments});
                }.bind(this),
                error: (xhr, status, err) => {
                    console.log(err.toString());
                    this.setState({comments: comments});
                }*/
            } });

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
            if (staffItem.key == item.key) {
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
            data: {
                ds: JSON.stringify(data1)
            }
        });

        return this;
    }

    //筛选
    _filtStaff(filtType) {
        this.filtType = filtType;
        switch (parseInt(filtType)) {
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
            default:
                break;
        }
    }

    //排序
    _sortStaff(sortType) {
        this.sortType = sortType;
        switch (parseInt(sortType)) {
            case 0:
                //身份
                this.allStaff.forEach(item => {
                    switch (item.info.id) {
                        case '主任':
                            item.info.id = 1;break;
                        case '老师':
                            item.info.id = 2;break;
                        case '学生':
                            item.info.id = 3;break;
                        case '实习':
                            item.info.id = 4;break;
                        default:
                            break;
                    }
                });
                this.allStaff.sort(function (item1, item2) {
                    if (item1.info.id < item2.info.id) return -1;else if (item1.info.id > item2.info.id) return 1;else return 0;
                });
                this.allStaff.forEach(item => {
                    switch (item.info.id) {
                        case 1:
                            item.info.id = '主任';break;
                        case 2:
                            item.info.id = '老师';break;
                        case 3:
                            item.info.id = '学生';break;
                        case 4:
                            item.info.id = '实习';break;
                        default:
                            break;
                    }
                });
                break;
            case 1:
                //年龄升
                this.allStaff.sort(function (item1, item2) {
                    if (item1.info.age < item2.info.age) return -1;else if (item1.info.age > item2.info.age) return 1;else return 0;
                });
                break;
            case 2:
                //年龄降
                this.allStaff.sort(function (item1, item2) {
                    if (item1.info.age < item2.info.age) return 1;else if (item1.info.age > item2.info.age) return -1;else return 0;
                });
                break;
            default:
                break;
        }
    }

    //搜索
    _searchStaff(word) {
        this.word = word;
        //在staff中搜索
        this.staff = this.staff.filter(item => {
            return item.info.name.indexOf(word) != -1 || (item.info.age + '').indexOf(word) != -1 || item.info.id.indexOf(word) != -1 || item.info.sex.indexOf(word) != -1;
        });
    }

    filtStaff(filtType) {
        this._filtStaff(filtType);
        this._searchStaff(this.word);
        return this;
    }
    sortStaff(sortType) {
        this._sortStaff(sortType);
        this._filtStaff(this.filtType);
        this._searchStaff(this.word);
        return this;
    }
    searchStaff(word) {
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
    constructor(p) {
        super();
        this.state = {
            comments: p.comments || [],
            staff: new Staff([], 0),
            staffDetail: null
        };
    }

    loadDataFromServer() {
        $.ajax({
            url: "/my_dubbo_first_user1/UserAction?method=test",
            //    url: "comments.json",
            //url: "/my_dubbo_first_user1/UserAction?method=test",
            dataType: "json",
            success: function (comments) {
                console.log("1；" + comments);
                this.setState({ comments: comments });
                this.setState({ staff: new Staff(comments, 1) });
            }.bind(this),
            error: (xhr, status, err) => {
                console.log(err.toString());
            }
        });
    }

    componentDidMount() {
        console.log('ok');
        this.loadDataFromServer();
    }

    //增
    addStaffItem(item) {
        this.setState({
            staff: this.state.staff.addStaffItem(item)
        });
    }
    //删
    removeStaffItem(key) {
        this.setState({
            staff: this.state.staff.removeStaffItem(key)
        });
    }

    /*
     *详情
     */
    //打开
    detailStaffItem(key) {
        this.setState({
            staffDetail: this.state.staff.staff.filter(item => {
                return item.key == key;
            })[0]
        });
    }
    //关闭
    closeDetail() {
        this.setState({
            staffDetail: null
        });
    }
    //编辑
    editDetail(item) {
        this.setState({
            staff: this.state.staff.editStaffItem(item)
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

    render() {
        return React.createElement(
            'div',
            null,
            React.createElement(StaffHeader, { sortStaff: this.sortStaff.bind(this), filtStaff: this.filtStaff.bind(this), searchStaff: this.searchStaff.bind(this) }),
            React.createElement(StaffItemPanel, { items: this.state.staff.staff, removeStaffItem: this.removeStaffItem.bind(this), detailStaffItem: this.detailStaffItem.bind(this) }),
            React.createElement(StaffFooter, { addStaffItem: this.addStaffItem.bind(this) }),
            React.createElement(StaffDetail, { staffDetail: this.state.staffDetail, closeDetail: this.closeDetail.bind(this), editDetail: this.editDetail.bind(this) })
        );
    }
}

box = React.render(React.createElement(App, null), document.getElementById('content'));
