import React, { Component } from 'react';
import firebase from './firebase'
import 'bootstrap/dist/css/bootstrap.css';
import {  Button, 
          ButtonGroup,
          Container, 
          Row, 
          Col,
          Collapse, 
          CardBody, 
          Card,
          Fade } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggle1 = this.toggle1.bind(this);
    this.toggle2 = this.toggle2.bind(this);
    this.toggle3 = this.toggle3.bind(this);
    this.toggle4 = this.toggle4.bind(this);
    this.toggle5 = this.toggle5.bind(this);
    this.toggle6 = this.toggle6.bind(this);
    this.toggle7 = this.toggle7.bind(this);
    this.toggle8 = this.toggle8.bind(this);
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
    this.state = {
       reviews:[],
       key:'',
       reviewer:'',
       review_name:'',
       reviewgame_name:'',
       home: true,
       review: false,
       reviewList: true,
       collapse: false,
       collapse1: false,
       collapse2: false,
       collapse3: false,
       collapse4: false,
       collapse5: false,
       collapse6: false,
       collapse7: false,
       fadeIn: false
    }
  }
  toggle() {
    this.setState(state => ({ collapse: !state.collapse }));
  }
  toggle1() {
    this.setState(state => ({ collapse1: !state.collapse1 }));
  }
  toggle2() {
    this.setState(state => ({ collapse2: !state.collapse2 }));
  }
  toggle3() {
    this.setState(state => ({ collapse3: !state.collapse3 }));
  }
  toggle4() {
    this.setState(state => ({ collapse4: !state.collapse4 }));
  }
  toggle5() {
    this.setState(state => ({ collapse5: !state.collapse5 }));
  }
  toggle6() {
    this.setState(state => ({ collapse6: !state.collapse6 }));
  }
  toggle7() {
    this.setState(state => ({ collapse7: !state.collapse7 }));
  }
  toggle8() {
    this.setState({
      fadeIn: !this.state.fadeIn
    })
  }

  componentDidMount(){
    const reviewsRef = firebase.database().ref('reviews');
    reviewsRef.on('value',(snapshot) => {
        let reviews = snapshot.val();
        let newState = [];
        for(let review in reviews){
          newState.push({
              key:review,
              reviewer:reviews[review].reviewer,
              review_name:reviews[review].review_name,
              reviewgame_name:reviews[review].reviewgame_name
          })
        }
        this.setState({
          reviews:newState
        })
    })
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault();
    if(this.state.reviewer==''){
      alert("โปรดใส่ชื่อของคุณ");
    }
    else if(this.state.review_name==''){
      alert("โปรดใส่ชื่อเกมที่ต้องการรีวิว");
    }
    else if(this.state.reviewgame_name==''){
      alert("โปรดใส่คำรีวิวของคุณ");
    }
    else{
    if(this.state.key != ''){
      return this.updatereview();
    }
    const reviewsRef = firebase.database().ref('reviews')
    const review = {
      reviewer : this.state.reviewer,
      review_name : this.state.review_name,
      reviewgame_name : this.state.reviewgame_name
    }
    reviewsRef.push(review)
    this.setState({
       key:'',
       reviewer:'',
       review_name:'',
       reviewgame_name:''
      })
    }
  }

  removereview(reviewId){
    const reviewsRef = firebase.database().ref('/reviews');
    reviewsRef.child(reviewId).remove();
  }

  selectHome(){
    this.setState({
      home: true,
      review: false,
      reviewList: true
    })
  }
  selectReview(){
    this.setState({
      home: false,
      review: true,
      reviewList: true
    })
  }
  render() {
    var pageHome={
      display: this.state.home ? "block" : "none"
    }
    var pageReview={
      display: this.state.review ? "block" : "none"
    }
    var pageReviewList={
      display: this.state.reviewList ? "block" : "none"
    }
    return (
      <div>
        <div className='text-center'>
          <ButtonGroup>
            <Button onClick={this.selectHome.bind(this)}>Home</Button>
            <Button onClick={this.selectReview.bind(this)}>Review</Button>
          </ButtonGroup>
        </div>
        <div className="container" style={{marginTop:25}}>
          <div style = {pageHome}> 
                <h2>Recommend game of the year <span className = "text-danger">" 2019 "</span></h2>
                <br></br>
                <Container>
                  <Row>
                    <Col width="25%"><img src="https://www.gamingdose.com/wp-content/uploads/2018/09/anthem-home-trailer-cover-xl.jpg.adapt_.crop16x9.1920w.jpg" class="img-thumbnail"></img></Col>
                    <Col width="25%"><img src="https://www.gamingdose.com/wp-content/uploads/2018/09/Kingdom-Hearts-III-Screen-2.jpg" class="img-thumbnail"></img></Col>
                    <Col width="25%"><img src="https://www.gamingdose.com/wp-content/uploads/2018/09/devil_may_cry_5_dante_screen_3.jpg" class="img-thumbnail"></img></Col>
                    <Col width="25%"><img src="https://www.gamingdose.com/wp-content/uploads/2018/06/Sekiro-Shadows-Die-Twice.jpg" class="img-thumbnail"></img></Col>
                  </Row>
                </Container>
                <Container>
                  <Row>
                    <Col ><center><Button color="warning" onClick={this.toggle} style={{ marginBottom: '1rem' }}>Name</Button>
                    <Collapse isOpen={this.state.collapse}>
                      <Card>
                        <CardBody>
                        Anthem
                        </CardBody>
                      </Card>
                    </Collapse></center></Col>
                    <Col ><center><Button color="warning" onClick={this.toggle1} style={{ marginBottom: '1rem' }}>Name</Button>
                    <Collapse isOpen={this.state.collapse1}>
                      <Card>
                        <CardBody>
                        Kingdom Hearts III
                        </CardBody>
                      </Card>
                    </Collapse></center></Col>
                    <Col ><center><Button color="warning" onClick={this.toggle2} style={{ marginBottom: '1rem' }}>Name</Button>
                    <Collapse isOpen={this.state.collapse2}>
                      <Card>
                        <CardBody>
                        Devil May Cry 5
                        </CardBody>
                      </Card>
                    </Collapse></center></Col>
                    <Col ><center><Button color="warning" onClick={this.toggle3} style={{ marginBottom: '1rem' }}>Name</Button>
                    <Collapse isOpen={this.state.collapse3}>
                      <Card>
                        <CardBody>
                        Sekiro: Shadows Die Twice
                        </CardBody>
                      </Card>
                    </Collapse></center></Col>
                  </Row>
                </Container>
                <br></br>
                <h2>Recommend game of the year <span className = "text-danger">" 2018 "</span></h2>
                <br></br>
                <Container>
                  <Row>
                    <Col width="25%"><img src="https://notebookspec.com/web/wp-content/uploads/2017/10/monster_hunter_world_thumb_screen.0-768x432.jpg" class="img-thumbnail"></img></Col>
                    <Col width="25%"><img src="https://notebookspec.com/web/wp-content/uploads/2017/10/far-cry-5-screen-01-ps4-us-15may17-768x432.jpg" class="img-thumbnail"></img></Col>
                    <Col width="25%"><img src="https://notebookspec.com/web/wp-content/uploads/2017/10/maxresdefault-1-6.jpg" class="img-thumbnail"></img></Col>
                    <Col width="25%"><img src="https://notebookspec.com/web/wp-content/uploads/2017/10/maxresdefault-4-1.jpg" class="img-thumbnail"></img></Col>
                  </Row>
                </Container>
                <Container>
                  <Row>
                    <Col ><center><Button color="warning" onClick={this.toggle4} style={{ marginBottom: '1rem' }}>Name</Button>
                    <Collapse isOpen={this.state.collapse4}>
                      <Card>
                        <CardBody>
                        Monster Hunter: World
                        </CardBody>
                      </Card>
                    </Collapse></center></Col>
                    <Col ><center><Button color="warning" onClick={this.toggle5} style={{ marginBottom: '1rem' }}>Name</Button>
                    <Collapse isOpen={this.state.collapse5}>
                      <Card>
                        <CardBody>
                        Far Cry 5
                        </CardBody>
                      </Card>
                    </Collapse></center></Col>
                    <Col ><center><Button color="warning" onClick={this.toggle6} style={{ marginBottom: '1rem' }}>Name</Button>
                    <Collapse isOpen={this.state.collapse6}>
                      <Card>
                        <CardBody>
                        A Way Out
                        </CardBody>
                      </Card>
                    </Collapse></center></Col>
                    <Col ><center><Button color="warning" onClick={this.toggle7} style={{ marginBottom: '1rem' }}>Name</Button>
                    <Collapse isOpen={this.state.collapse7}>
                      <Card>
                        <CardBody>
                        Sea of Thieves
                        </CardBody>
                      </Card>
                    </Collapse></center></Col>
                  </Row>
                </Container>
          </div>

          <div style = {pageReview}>
          <center><p style = {{color: "white", background: "#ca170f", margin: "auto", width: "100%", padding: "10px"}} >Review Today</p></center>

          <div class="container">
            <div class="row">
              <div class="col-6" style={{background: "black"}}><center><img src="https://www.gamingdose.com/wp-content/uploads/2018/11/20_11_2018_Features_%E0%B9%80%E0%B8%81%E0%B8%A1%E0%B8%99%E0%B9%88%E0%B8%B2%E0%B9%80%E0%B8%A5%E0%B9%88%E0%B8%99-Forweb.jpg" width="400px"></img></center></div>
              <div class="col-6" style={{background: "black"}}><center><img src="https://hb.imgix.net/2a470e47529df9a836ec290787b91894aad0c7ce.png?auto=compress,format&fit=crop&h=353&w=616&s=66d9dc3ba4fdad4e1f7f66df89bc7312" width="400px"></img></center></div>
              <div class="w-100"></div>
              <div class="col-6" style={{color: "white", background: "black"}}><center>Resident Evil 2</center></div>
              <div class="col-6" style={{color: "white", background: "black"}}><center>Metro Exodus</center></div>
            </div>
          </div>
          <br></br>

          <form style={pageReviewList} onSubmit={this.handleSubmit} onKeyPress={event => {
            if (event.which === 13) {
              event.preventDefault();
              }
            }}>
                          
            <div className="row" >
            
                  <div className="col-8">
                    <div className="form-row">
                      <div className="col-6">
                          <input type="text" name="reviewer" className="form-control" placeholder="ชื่อของคุณ" onChange={this.handleChange} value={this.state.reviewer}/>
                      </div>
                      <div className="col-6">
                          <input type="text" name="review_name" className="form-control" placeholder="ชื่อเกมที่รีวิว" onChange={this.handleChange} value={this.state.review_name}/>
                      </div>
                      <br></br><br></br>
                      <div className="col-12">
                          <textarea type="text" name="reviewgame_name" className="form-control" placeholder="โปรดแสดงคำรีวิวของคุณ" onChange={this.handleChange} value={this.state.reviewgame_name}/>
                      </div>
                      <br></br><br></br><br></br>
                      <div className="col">
                        <Button type="submit" outline color="warning">ส่ง</Button>&nbsp;&nbsp;
                      </div>
                    </div>
                </div>
            </div>
          </form>
          
          <br></br>
            <Button color="danger" size="lg" block onClick={this.toggle8}>แสดงคำรีวิว</Button>
                    <Fade in={this.state.fadeIn}>
                    <br></br>
                    <table className="table table-hover">
                        <tr className="thead-light">
                          <th width="20%">Name</th>
                          <th width="20%">Game_name</th>
                          <th width="55%">Review</th>
                          <th width="5%">Delete</th>
                        </tr>
                        {
                            this.state.reviews.map((review) => {
                              return (
                                  <tr>
                                    <td>{review.reviewer}</td>
                                    <td>{review.review_name}</td>
                                    <td>{review.reviewgame_name}</td>
                                    <td><button className="btn btn-danger btn-md" onClick={() => this.removereview(review.key)}>Delete</button></td>
                                  </tr>
                              )
                            })
                        }
                    </table>
                    </Fade>
          </div>
          
        </div>
      </div>
    );
  }
}

export default App;