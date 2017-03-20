//this is global function
function getName(name){
  alert(name);
}
var Dongvat = React.createClass({

  layThongTin: function(){
    alert("Vi Van Thuc kinh chao quy khach");
  },
  getInitialState(){
    return {tongHocVien: this.props.tongHocVien};
  },
  addStudents: function(){
    this.state.tongHocVien = parseInt(this.state.tongHocVien) +1;
    this.setState(this.state);
  },
  render: function(){
    return(
      <div>
      <div>Tong so hoc vien: {this.state.tongHocVien} </div>
      <h1>{this.props.ten} con dang an ca</h1>
      <h3>{this.props.children} </h3>
      <Khoahoc />
      <button onClick={()=>{getName(this.props.ten)}}>thongtin1</button>
      <button onClick={this.layThongTin}> Thong tin</button>
      <button onClick={this.addStudents}>Dang ki hoc </button>
      </div>
    );
  }
});

var Khoahoc = React.createClass({
  render: function(){
    return(
      <div>
      <h2>Vi Van Thuc rat quy meo </h2>
      </div>
    );
  }
});

//Lam viec voi Reference
var InputTag = React.createClass({
  show: function(){
    var text = this.refs.txt.value;
    //alert(text);
    var hoaqua = this.refs.hoaqua.value;
    alert(hoaqua);
  },
  render: function(){
    return(
      <div>
      <select ref="hoaqua">
        <option value="tao">Qua tao  </option>
        <option>Qua Chanh </option>
        <option>Qua Cam </option>
        <option>Qua chuoi </option>
      </select>
      <input type="text" ref="txt"/>
      <button onClick={this.show}>Hien thi </button>
      </div>
    );
  }
});
ReactDOM.render(
  <div>
  <InputTag />
  <Dongvat ten="Con meo" tongHocVien="10">Day la con meo may ak </Dongvat>
  <Dongvat ten="Con cho" tongHocVien="20">Day la con cho may ak </Dongvat>
  </div>,
  document.getElementById('root')
);
