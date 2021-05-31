import { Component } from 'react';
import ColorContext from '../../contexts/ColorContext';
import LanguageContext from '../../contexts/LanguageContext';

export default class DummyComp extends Component {
  static contextType = ColorContext;
  render() {
    return (
      <div>
        {this.context}
        <LanguageContext.Consumer>
          {({language, setLanguage})=>{
            return (
              <select defaultValue={language} onChange={(e)=>setLanguage(e.target.value)}>
                <option value="english">English</option>
                <option value="hindi">Hindi</option>
              </select>
            );
          }}
        </LanguageContext.Consumer>
      </div>
    );
  }
}
