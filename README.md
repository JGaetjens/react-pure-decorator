[![Build Status](http://img.shields.io/travis/RoviSys/react-pure-decorator.svg?style=flat)](https://travis-ci.org/RoviSys/react-pure-decorator)
[![Code Climate](https://codeclimate.com/github/RoviSys/react-pure-decorator/badges/gpa.svg)](https://codeclimate.com/github/RoviSys/react-pure-decorator)
[![Test Coverage](https://codeclimate.com/github/RoviSys/react-pure-decorator/badges/coverage.svg)](https://codeclimate.com/github/RoviSys/react-pure-decorator)
[![Dependency Status](https://david-dm.org/RoviSys/react-pure-decorator.svg)](https://david-dm.org/RoviSys/react-pure-decorator)
[![devDependency Status](https://david-dm.org/RoviSys/react-pure-decorator/dev-status.svg)](https://david-dm.org/RoviSys/react-pure-decorator#info=devDependencies)

# react-pure-decorator

  Marks the react component as pure for optimized rendering
 
# Installation

  Run `npm install --save react-pure-decorator` and then use the default export of the module
 
# Purpose

  Pure prevents unneccesary rendering of a page
 
# Example
 

  Using the Pure decorator, you can attach a stylesheet to a component like this:

    import Pure from 'react-Pure-decorator';

    @Pure(require('css/my-component.css'))
    class MyComponent extends Component {
     render() {
       return (
        <h1>Example<h1>
       );
      }
     }
