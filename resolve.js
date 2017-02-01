// Instead of having to resolve a promise within its constructor, this hack
// allows us to resolve the promise asynchronously. This code was contributed 
// by Joseph Silber.

function defer() {
  var res, rej;
  var promise = new Promise((resolve, reject) => {
    res = resolve;
    rej = reject;
  });
  
  promise.resolve = res;
  promise.reject = rej;
  return promise;
}

this.treeBuilt = defer();

// ... 

this.treeBuilt.resolve();

// ES6 Class

class Deferred {
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      this.reject = reject;
      this.resolve = resolve;
    });
  }
}

const d = new Deferred();
d.promise.then(log, logError);
d.reject('Failed');
