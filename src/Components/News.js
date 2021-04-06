import React, { Component } from "react";
import NewsItem from "./NewsItem";
import data from "../data.json"

class News extends Component {
  
  render() {
    
    return (
      <div>
        <header className="masthead news">
          <div className="container">
            <div className="row">
              <div className="col-lg my-auto">
                <div className="header-content mx-auto">
                  <h1 className="mb-5 text-center">News</h1>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container">
          <div className="row mb-3">
            {
              data.map((value,key)=> {
                return(
                  <NewsItem key={key} newsId={value.id} image={value.image} title={value.title} quote={value.quote} ></NewsItem>
                )    
              })   
            }
                        
                      
          </div>
        </div>
      </div>
    );
  }
  }


export default News;
