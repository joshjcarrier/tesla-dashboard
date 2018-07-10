import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <ul class="nav justify-content-center border-bottom bg-light p-2 lead" id="myTab" role="tablist">
          <li class="nav-item px-4">
            <a class="nav-link text-secondary" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Apps</a>
          </li>
          <li class="nav-item px-4">
            <a class="nav-link text-dark font-weight-bold active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Settings</a>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">
            <div class="row no-gutters">
              <div class="col-6 text-center align-middle bg-dark" style={{height:400}}>
                1
              </div>
              <div class="col-6 text-center align-middle">
                2
              </div>
            </div>
            <div class="row no-gutters">
              <div class="col-6 text-center align-middle">
                3
              </div>
              <div class="col-6 text-center align-middle">
                4
              </div>
            </div>
          </div>

          <div class="tab-pane p-5 show active" id="home" role="tabpanel" aria-labelledby="home-tab">
            <div class="row no-gutters">
              <div class="col-2 text-right lead">
                <div class="nav flex-column" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                  <a class="nav-link py-3 border-bottom text-dark font-weight-bold active" id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="true">Home</a>
                  <a class="nav-link py-3 text-secondary" id="v-pills-profile-tab" data-toggle="pill" href="#app-foo" role="tab" aria-controls="v-pills-profile" aria-selected="false">Profile</a>
                </div>
              </div>
              <div class="col-10">
                <div class="tab-content border rounded h-100 bg-light px-5 py-4" id="v-pills-tabContent">
                  <div class="tab-pane show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                  <label for="basic-url" class="text-dark text-uppercase h5">Ludacris mode</label>
                    <div class="input-group mb-3">
                      <div class="btn-group" role="group" aria-label="Basic example">
                        <button type="button" class="btn btn-light border text-uppercase px-4">Off</button>
                        <button type="button" class="btn btn-primary borde text-uppercase px-4">On</button>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="app-foo" role="tabpanel" aria-labelledby="v-pills-profile-tab">..2.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
