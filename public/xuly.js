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
    this.setState({tongHocVien: parseInt(this.state.tongHocVien)+1});
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
ReactDOM.render(
  <div>
  <Dongvat ten="Con meo" tongHocVien="10">Day la con meo may ak </Dongvat>
  <Dongvat ten="Con cho" tongHocVien="20">Day la con cho may ak </Dongvat>
  </div>,
  document.getElementById('root')
);
