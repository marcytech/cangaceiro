class Negociacao {

    constructor(_data, _quantidade, _valor) {
      
      Object.assign(this,{_quantidade:quantidade, _valor});
      this._data = new Date(), 
      Object.freeze(this);
    }
     get Volume() {
  
      return this._quantidade * this._valor;
    }
    
    get data() {
      return new Date(this._data.getTime());
    }
  
    get Quantidade() {
      return this._quantidade;
    }
  
    get Valor() {
      return this._valor;
    }
  }