import React, { Component } from "react";
import data from "../data.json";
import NewsRelated from "./NewsRelated";
class NewsDetails extends Component {
  render() {
    var count=1;
    return (
      <div>
        <header className="masthead news">
          <div className="container">
            <div className="row">
              <div className="col-lg my-auto">
                <div className="header-content mx-auto">
                  <h1 className="mb-5 text-center">News Detail</h1>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div>
          {data.map((value, key) => {
            if (value.id === parseInt(this.props.match.params.id) ) {
              return (
                <div className="jumbotron jumbotron-fluid" key={key}>
                  <div className="container">
                    <img className="jumbotron-img" src={value.image} alt="" />
                    <p className="lead text-center">{value.title}</p>
                    <hr className="my-2" />
                    <p>{value.content}</p>
                  </div>
                </div>
              );
            }
            else{return true}
          })}
          <div className="container">
            <p className="text text-center">Related News</p>
            <div className="row">
              <div className="col-12">
                <div className="card-deck">
                  {data.map((value, key) => {
                    if(value.id !== parseInt(this.props.match.params.id))
                    if (count <= 4) {
                      count++;
                      return <NewsRelated key={key} newsId={value.id} image={value.image} title={value.title} quote={value.quote}></NewsRelated>;
                    }
                    return true;
                  }
                  
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsDetails;
