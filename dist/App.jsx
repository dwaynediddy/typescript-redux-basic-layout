"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./App.css");
const react_redux_1 = require("react-redux");
const redux_1 = require("./redux");
const RepositoriesList_1 = __importDefault(require("./components/RepositoriesList"));
function App() {
    return (<react_redux_1.Provider store={redux_1.store}>
      <div>
        <h1>Search for Package</h1>
        <RepositoriesList_1.default />
      </div>
    </react_redux_1.Provider>);
}
exports.default = App;
