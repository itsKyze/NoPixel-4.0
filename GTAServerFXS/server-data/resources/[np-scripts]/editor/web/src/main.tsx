// Polyfill React 19 transitional element to match React 18 element symbol
if (typeof Symbol !== 'undefined' && Symbol.for) {
  const _origSymbolFor = Symbol.for;
  Symbol.for = function (key: string) {
    if (key === 'react.transitional.element') {
      return _origSymbolFor.call(Symbol, 'react.element');
    }
    return _origSymbolFor.call(Symbol, key);
  };
}

import './style.css';
import './App';
