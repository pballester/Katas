var Nodo, Cola;

Nodo = (function() {

	function Nodo(valor) {
		if (typeof valor !== "number") {
			throw new Error("Los nodos tienen que tener un valor numerico");
		}
		this.valor = valor;
	}

	Nodo.prototype.igual = function(nodo) {
		if (typeof nodo === "undefined") {
			throw new Error("Se requiere un argumento");
		}
  		return nodo.valor === this.valor;
	};

	return Nodo;

})();

Cola = (function() {

	function Cola() {
		this.nodos = [];
	}

	Cola.prototype.encolar = function(valor) {
  		this.nodos.push(new Nodo(valor));
	};

	Cola.prototype.colar = function(antesDe, el) {
  		for (var i = 0; i < this.nodos.length; i++) {
  			if (this.nodos[i].igual(new Nodo(antesDe))) {
  				this.nodos.splice(i,0,new Nodo(el));
  				break;
  			}
  		}
	};

	Cola.prototype.imprimir = function() {
  		console.log(this.nodos);
	};

	return Cola;

})();

/*************************/

var cola = new Cola();

cola.encolar(1);
cola.encolar(2);
cola.encolar(3);
cola.encolar(4);
cola.encolar(5);

cola.colar(4,7);

cola.imprimir();